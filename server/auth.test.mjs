import {test} from 'node:test';
import assert from 'node:assert/strict';
import {openDatabase,createAuthApp} from './app.mjs';

test('Inscription par e-mail, sessions, isolation, CSRF, conflits et suppression',async()=>{
 const db=openDatabase(':memory:'),sent=[];
 const origin='http://site.test';
 const {server}=createAuthApp({db,publicOrigin:origin,secureCookies:false,sendLoginEmail:async(to,link)=>sent.push({to,link})});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base='http://127.0.0.1:'+server.address().port;
 async function req(path,method='GET',body=null,session=null,csrf=null,reqOrigin=origin){
  const headers={};
  if(method!=='GET')headers.origin=reqOrigin;
  if(body){headers['Content-Type']='application/json';}
  if(session)headers.Cookie=session;
  if(csrf)headers['X-CSRF-Token']=csrf;
  const response=await fetch(base+path,{method,headers,body:body?JSON.stringify(body):undefined});
  return {status:response.status,body:await response.json(),cookie:response.headers.get('set-cookie')?.split(';')[0]};
 }
 try{
  const h=await req('/api/health');assert.equal(h.status,200);assert.equal(h.body.emailsAvailable,true);
  assert.equal((await req('/api/auth/me')).body.authenticated,false);
  assert.equal((await req('/api/progress')).status,401);
  assert.equal((await req('/api/auth/request-link','POST',{email:'user@example.org'},null,null,'http://evil.test')).status,403,'Origine externe refusée');
  assert.equal((await req('/api/auth/request-link','POST',{email:'invalide'})).status,400);
  assert.equal((await req('/api/auth/request-link','POST',{email:'alpha@example.org'})).status,202);
  assert.equal(sent.length,1);
  assert.ok(sent[0].link.startsWith(origin+'/#compte/verification/'));
  const tokenA=sent[0].link.split('/').at(-1);
  const verifiedA=await req('/api/auth/verify','POST',{token:tokenA});
  assert.equal(verifiedA.status,200);assert.equal(verifiedA.body.email,'alpha@example.org');
  assert.ok(verifiedA.cookie?.startsWith('hbtn_session_dev='));
  assert.equal((await req('/api/auth/verify','POST',{token:tokenA})).status,400,'Lien à usage unique');
  const cookieA=verifiedA.cookie,csrfA=verifiedA.body.csrf;
  assert.equal((await req('/api/auth/me','GET',null,cookieA)).body.authenticated,true);
  assert.equal((await req('/api/progress','GET',null,cookieA)).body.revision,0);
  const data={version:1,current:null,history:[],stats:{},seen:{},theme:'dark'};
  assert.equal((await req('/api/progress','PUT',{revision:0,data},cookieA)).status,403,'CSRF doit être présent');
  assert.equal((await req('/api/progress','PUT',{revision:0,data},cookieA,'wrong')).status,403,'CSRF invalide rejeté');
  const up=await req('/api/progress','PUT',{revision:0,data},cookieA,csrfA);
  assert.equal(up.status,200);assert.equal(up.body.revision,1);
  assert.equal((await req('/api/progress','PUT',{revision:0,data},cookieA,csrfA)).status,409,'Conflit de révision détecté');
  assert.equal((await req('/api/progress','GET',null,cookieA)).body.data.version,1);
  assert.equal((await req('/api/progress','GET',null,cookieA)).body.data.theme,'dark');
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,favorites:['9:72']}},cookieA,csrfA)).status,400,'Fonction favoris supprimée du compte');
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,theme:'unknown'}},cookieA,csrfA)).status,400,'Thème invalide rejeté');
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,stats:{notion:{attempts:1,errors:2}}}},cookieA,csrfA)).status,400,'Compteurs incohérents rejetés');
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,seen:{question:'invalide'}}},cookieA,csrfA)).status,400,'Compteurs non numériques rejetés');
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,current:{id:'quiz-1',questionIds:[],answers:{},cursor:0}}},cookieA,csrfA)).status,400,'Session vide rejetée');
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,history:[{id:'quiz-1',total:1,correct:2}]}},cookieA,csrfA)).status,400,'Historique incohérent rejeté');
  const running={id:'guest-123456',questionIds:['V1-N09_072-01'],answers:{},cursor:0};
  assert.equal((await req('/api/progress','PUT',{revision:1,data:{...data,current:running}},cookieA,csrfA)).status,200,'Session normale acceptée');
  assert.equal((await req('/api/progress','PUT',{revision:2,data:{...data,current:{...running,cursor:running.questionIds.length}}},cookieA,csrfA)).status,200,'Curseur de fin de quiz accepté');
  assert.equal((await req('/api/auth/request-link','POST',{email:'beta@example.org'})).status,202);
  const tokenB=sent[1].link.split('/').at(-1);
  const verifiedB=await req('/api/auth/verify','POST',{token:tokenB});
  assert.equal(verifiedB.status,200);
  const cookieB=verifiedB.cookie,csrfB=verifiedB.body.csrf;
  assert.equal((await req('/api/progress','GET',null,cookieB)).body.data,null,'L’utilisateur B ne voit pas le suivi de A');
  assert.notEqual((await req('/api/auth/me','GET',null,cookieA)).body.userId,(await req('/api/auth/me','GET',null,cookieB)).body.userId);
  const personalB={version:1,current:null,history:[{id:'beta',total:1,correct:0}],stats:{},seen:{}};
  assert.equal((await req('/api/progress','PUT',{revision:0,data:personalB},cookieB,csrfB)).status,200);
  assert.equal((await req('/api/progress','GET',null,cookieA)).body.data.history.length,0,'B ne modifie pas A');
  const exportB=await req('/api/account/export','GET',null,cookieB);
  assert.equal(exportB.body.email,'beta@example.org');
  assert.equal(exportB.body.progress.data.history[0].id,'beta');
  assert.equal((await req('/api/account','DELETE',null,cookieB,'not-csrf')).status,403);
  assert.equal((await req('/api/account','DELETE',null,cookieB,csrfB)).status,200);
  assert.equal((await req('/api/progress','GET',null,cookieB)).status,401,'Compte supprimé invalide la session');
  assert.equal((await req('/api/progress','GET',null,cookieA)).status,200,'Suppression de B n’affecte pas A');
  assert.equal((await req('/api/auth/logout','POST',null,cookieA,csrfA)).status,200);
  assert.equal((await req('/api/auth/me','GET',null,cookieA)).body.authenticated,false);
 }finally{
  await new Promise(resolve=>server.close(resolve));db.close();
 }
});

test('Service sans SMTP : accès invité possible et inscription indisponible',async()=>{
 const db=openDatabase(':memory:');
 const {server}=createAuthApp({db,publicOrigin:'http://site.test',secureCookies:false});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{
  const base='http://127.0.0.1:'+server.address().port;
  const health=await (await fetch(base+'/api/health')).json();
  assert.equal(health.emailsAvailable,false);
  const req=await fetch(base+'/api/auth/request-link',{method:'POST',headers:{Origin:'http://site.test','Content-Type':'application/json'},body:JSON.stringify({email:'alpha@example.org'})});
  assert.equal(req.status,503);
  assert.equal((await (await fetch(base+'/api/auth/me')).json()).authenticated,false);
 }finally{await new Promise(resolve=>server.close(resolve));db.close()}
});

test('Limites de tentatives conservées après un redémarrage de l’API',async()=>{
 const db=openDatabase(':memory:'),sent=[];
 let clock=Date.parse('2026-11-21T00:00:00Z');
 const origin='http://site.test';
 async function start(){
  const {server}=createAuthApp({
   db,publicOrigin:origin,secureCookies:false,now:()=>clock,
   sendLoginEmail:async(to,link)=>sent.push({to,link})
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  return server;
 }
 async function request(server,email){
  const response=await fetch('http://127.0.0.1:'+server.address().port+'/api/auth/request-link',{
   method:'POST',
   headers:{Origin:origin,'Content-Type':'application/json'},
   body:JSON.stringify({email})
  });
  assert.equal(response.status,202,'Réponse uniforme même si le quota est atteint');
 }
 let server=await start();
 try{
  for(let i=0;i<8;i++)await request(server,'test'+i+'@example.org');
  assert.equal(sent.length,8);
  await new Promise(resolve=>server.close(resolve));
  server=await start();
  await request(server,'apres-redemarrage@example.org');
  assert.equal(sent.length,8,'Un redémarrage ne doit pas contourner la limite de débit');
  clock+=15*60*1000+1;
  await request(server,'apres-expiration@example.org');
  assert.equal(sent.length,9,'Le quota doit expirer et permettre une nouvelle demande');
 }finally{
  if(server.listening)await new Promise(resolve=>server.close(resolve));
  db.close();
 }
});


test('Administration privée : rôle serveur, audience agrégée, isolation et désactivation',async()=>{
 const db=openDatabase(':memory:'),sent=[];
 const origin='http://site.test';
 const now=()=>Date.parse('2026-11-22T11:00:00Z');
 const {server}=createAuthApp({db,publicOrigin:origin,secureCookies:false,now,
  adminEmail:'owner@example.org',getContributorStats:async()=>({count:7,complete:true}),
  sendLoginEmail:async(to,link)=>sent.push({to,link})});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base='http://127.0.0.1:'+server.address().port;
 async function req(path,method='GET',body,cookie,requestOrigin=origin){
  const headers={};
  if(method!=='GET')headers.Origin=requestOrigin;
  if(body)headers['Content-Type']='application/json';
  if(cookie)headers.Cookie=cookie;
  const r=await fetch(base+path,{method,headers,body:body?JSON.stringify(body):undefined});
  return {status:r.status,body:await r.json(),cookie:r.headers.get('set-cookie')?.split(';')[0]};
 }
 async function login(email){
  assert.equal((await req('/api/auth/request-link','POST',{email})).status,202);
  return req('/api/auth/verify','POST',{token:sent.at(-1).link.split('/').at(-1)});
 }
 try{
  assert.equal((await req('/api/admin/stats')).status,401,'Le visiteur ne peut pas lire les statistiques.');
  assert.equal((await req('/api/analytics/visit','POST',null,null,'http://external.test')).status,403);
  assert.equal((await req('/api/analytics/visit','POST')).status,202);
  assert.equal((await req('/api/analytics/visit','POST')).status,202);
  const regular=await login('regular@example.org');
  assert.equal((await req('/api/auth/me','GET',null,regular.cookie)).body.isAdmin,false);
  assert.equal((await req('/api/admin/stats','GET',null,regular.cookie)).status,403);
  const owner=await login('owner@example.org');
  assert.equal((await req('/api/auth/me','GET',null,owner.cookie)).body.isAdmin,true);
  const stats=await req('/api/admin/stats','GET',null,owner.cookie);
  assert.equal(stats.status,200);
  assert.equal(stats.body.registeredAccounts,2);
  assert.equal(stats.body.accountsWithProgress,0);
  assert.equal(stats.body.storedQuizSessions,0);
  assert.equal(stats.body.visitors30Days,2);
  assert.equal(stats.body.visitorsTotal,2);
  assert.equal(stats.body.daily[0].day,'2026-11-22');
  assert.equal(stats.body.githubContributors.count,7);
  assert.ok(!JSON.stringify(stats.body).includes('regular@example.org'),'Pas de données individuelles dans les statistiques.');
  const accountData={version:1,history:[{id:'quiz-a',correct:3,total:5}],current:null,stats:{},seen:{}};
  const stored=db.prepare('SELECT id FROM users WHERE email=?').get('regular@example.org');
  db.prepare('INSERT INTO progress(user_id,revision,payload,updated_at) VALUES(?,?,?,?)')
   .run(stored.id,1,JSON.stringify(accountData),now());
  const updated=await req('/api/admin/stats','GET',null,owner.cookie);
  assert.equal(updated.body.accountsWithProgress,1);
  assert.equal(updated.body.storedQuizSessions,1);
 }finally{await new Promise(resolve=>server.close(resolve));db.close()}
 const disabled=createAuthApp({db:openDatabase(':memory:'),publicOrigin:origin,secureCookies:false});
 try{
  await new Promise(resolve=>disabled.server.listen(0,'127.0.0.1',resolve));
  const response=await fetch('http://127.0.0.1:'+disabled.server.address().port+'/api/admin/stats');
  assert.equal(response.status,401);
 }finally{await new Promise(resolve=>disabled.server.close(resolve));disabled.db.close()}
});

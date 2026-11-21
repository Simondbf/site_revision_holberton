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

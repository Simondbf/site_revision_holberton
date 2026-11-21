import assert from 'node:assert/strict';
import {createServer,request as httpRequest} from 'node:http';
import {readFileSync} from 'node:fs';
import {chromium} from 'playwright';
import {openDatabase,createAuthApp} from '../server/app.mjs';

// Recette complète sur l'index autonome, une véritable API SQLite et plusieurs
// profils de navigateur. Les e-mails sont capturés localement : aucun SMTP réel.
const html=readFileSync(new URL('../index.html',import.meta.url));
const messages=[];
const db=openDatabase(':memory:');
let apiPort=0;
const website=createServer((req,res)=>{
 const path=new URL(req.url,'http://localhost').pathname;
 if(path.startsWith('/api/')){
  const upstream=httpRequest({hostname:'127.0.0.1',port:apiPort,
   path:req.url,method:req.method,headers:req.headers},response=>{
   res.writeHead(response.statusCode||502,response.headers);
   response.pipe(res);
  });
  upstream.on('error',()=>{if(!res.headersSent)res.writeHead(502);res.end()});
  req.pipe(upstream);
 }else if(path==='/'){
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
  res.end(html);
 }else{
  res.writeHead(404);res.end('Introuvable');
 }
});
let browser,app;
const waitForServer=async page=>page.waitForFunction(async()=>{
 const response=await fetch('/api/progress',{credentials:'same-origin'});
 if(!response.ok)return false;
 const data=await response.json();
 return data?.data&&Number.isInteger(data.revision);
});
const remote=page=>page.evaluate(async()=>{
 const response=await fetch('/api/progress',{credentials:'same-origin',cache:'no-store'});
 return response.json();
});
try{
 await new Promise(resolve=>website.listen(0,'127.0.0.1',resolve));
 const origin='http://127.0.0.1:'+website.address().port;
 app=createAuthApp({db,publicOrigin:origin,secureCookies:false,
  sendLoginEmail:async(to,link)=>{messages.push({to,link})}});
 await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
 apiPort=app.server.address().port;
 browser=await chromium.launch(process.env.CI?{channel:'chrome',headless:true}:{headless:true});
 const errors=[];
 async function newPage(){
  const context=await browser.newContext();
  const page=await context.newPage();
  page.on('pageerror',error=>errors.push(error.message));
  return page;
 }
 async function login(page,email){
  await page.goto(origin+'/#compte');
  await page.locator('#accountLoginForm').waitFor();
  await page.locator('#accountEmail').fill(email);
  const count=messages.length;
  await page.getByRole('button',{name:'Recevoir mon lien de connexion'}).click();
  await page.waitForFunction(()=>document.querySelector('#accountLoginStatus')?.textContent?.includes('lien'));
  assert.equal(messages.length,count+1,'Un et un seul lien doit être envoyé');
  assert.equal(messages.at(-1).to,email);
  await page.goto(messages.at(-1).link);
  await page.waitForFunction(()=>document.documentElement.dataset.holbertonAccount==='connected');
  await waitForServer(page);
 }
 const a=await newPage();
 await login(a,'test-auto@example.org');
 assert.equal((await remote(a)).data.history.length,0);

 // Changement local -> synchronisation sans bouton.
 await a.evaluate(()=>{
  localStorage.setItem('holberton-dark-v2','yes');
  window.dispatchEvent(new Event('holberton:preferences:updated'));
 });
 await a.waitForFunction(async()=>{
  const data=await (await fetch('/api/progress')).json();
  return data.data?.theme==='dark'&&data.revision>=2;
 });
 const b=await newPage();
 await login(b,'test-auto@example.org');
 const remoteB=await remote(b);
 const localThemeB=await b.evaluate(()=>({theme:localStorage.getItem('holberton-dark-v2'),progress:JSON.parse(localStorage.getItem('holberton-quiz-guest-v1'))?.theme}));
 const authA=await a.evaluate(async()=> (await (await fetch('/api/auth/me')).json()));
 const authB=await b.evaluate(async()=> (await (await fetch('/api/auth/me')).json()));
 const users=db.prepare('SELECT id,email FROM users').all();
 const progressRows=db.prepare('SELECT user_id,revision,payload FROM progress').all().map(x=>({user_id:x.user_id,revision:x.revision,theme:JSON.parse(x.payload).theme}));
 console.log('Diagnostic second navigateur :',JSON.stringify({localThemeB,remoteTheme:remoteB.data?.theme,revision:remoteB.revision,authA,authB,users,progressRows}));
 assert.equal(localThemeB.theme,'yes',
  'Le second navigateur doit récupérer la préférence distante dès la connexion.');

 // Modifier une seconde fois pendant un PUT en vol : la seconde écriture
 // doit repartir automatiquement, pas être oubliée par le premier succès.
 let release,started;
 const intercepted=new Promise(resolve=>{started=resolve});
 let held=false;
 await a.route('**/api/progress',async route=>{
  if(route.request().method()==='PUT'&&!held){
   held=true;
   started();
   await new Promise(resolve=>{release=resolve});
  }
  await route.continue();
 });
 await a.evaluate(()=>{
  localStorage.setItem('holberton-dark-v2','no');
  window.dispatchEvent(new Event('holberton:preferences:updated'));
 });
 await intercepted;
 await a.evaluate(()=>{
  localStorage.setItem('holberton-dark-v2','yes');
  window.dispatchEvent(new Event('holberton:preferences:updated'));
 });
 release();
 await a.waitForFunction(async()=>{
  const data=await (await fetch('/api/progress')).json();
  return data.data?.theme==='dark'&&data.revision>=4;
 },null,{timeout:15000});
 await a.unroute('**/api/progress');

 // Le navigateur B, resté hors de la fenêtre, recharge sa dernière révision
 // avant d'émettre à son tour : aucune donnée distante n'est écrasée.
 await b.reload();
 await b.waitForFunction(()=>document.documentElement.dataset.holbertonAccount==='connected');
 // Récupération d'une modification faite sur un autre appareil sans écraser
 // un état local en cours de synchronisation.
 await b.evaluate(()=>{
  localStorage.setItem('holberton-dark-v2','no');
  window.dispatchEvent(new Event('holberton:preferences:updated'));
 });
 await b.waitForFunction(async()=>{
  const data=await (await fetch('/api/progress')).json();
  return data.data?.theme==='light'&&data.revision>=5;
 },null,{timeout:15000});
 await a.evaluate(()=>window.dispatchEvent(new Event('focus')));
 await a.waitForFunction(()=>localStorage.getItem('holberton-dark-v2')==='no');
 assert.equal((await remote(a)).data.theme,'light');

 // La session invitée reste récupérable même si le compte en a déjà une.
 await a.goto(origin+'/#quiz');
 await a.locator('#quizStart').click();
 await a.waitForFunction(async()=>{
  const data=await (await fetch('/api/progress')).json();
  return !!data.data?.current;
 });
 const originalId=(await remote(a)).data.current.id;
 const guest=await newPage();
 await guest.goto(origin+'/#quiz');
 await guest.locator('#quizStart').click();
 const guestId=await guest.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.id);
 assert.notEqual(guestId,originalId);
 await login(guest,'test-auto@example.org');
 await guest.locator('#accountRecoverGuest').waitFor();
 guest.on('dialog',dialog=>dialog.accept());
 await guest.locator('#accountRecoverGuest').click();
 await guest.waitForFunction(id=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.id===id,guestId);
 assert.equal((await remote(guest)).data.current.id,guestId);
 assert.deepEqual(errors,[],'Aucune exception JavaScript navigateur ne doit être produite.');
 console.log('Comptes navigateur : deux appareils, envois concurrents, récupération distante et session invitée : OK.');
}finally{
 if(browser)await browser.close();
 if(app)await new Promise(resolve=>app.server.close(resolve));
 await new Promise(resolve=>website.close(resolve));
 db.close();
}

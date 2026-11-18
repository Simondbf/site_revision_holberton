import {createServer} from 'node:http';
import {createHash,randomBytes,randomUUID,timingSafeEqual} from 'node:crypto';
import {DatabaseSync} from 'node:sqlite';

const LOGIN_TTL=15*60*1000;
const SESSION_TTL=14*24*60*60*1000;
const MAX_PROGRESS_BYTES=256*1024;
const sha256=text=>createHash('sha256').update(text).digest('hex');
const secret=()=>randomBytes(32).toString('base64url');
class ApiError extends Error{
 constructor(status,message){super(message);this.status=status}
}
export function openDatabase(path){
 const db=new DatabaseSync(path);
 db.exec('PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;');
 if(path!==':memory:')db.exec('PRAGMA journal_mode=WAL;');
 db.exec([
 'CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, verified_at INTEGER NOT NULL, created_at INTEGER NOT NULL)',
 'CREATE TABLE IF NOT EXISTS login_links (token_hash TEXT PRIMARY KEY, email TEXT NOT NULL, expires_at INTEGER NOT NULL)',
 'CREATE INDEX IF NOT EXISTS login_links_expiry ON login_links(expires_at)',
 'CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, csrf TEXT NOT NULL, created_at INTEGER NOT NULL, expires_at INTEGER NOT NULL)',
 'CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id)',
 'CREATE TABLE IF NOT EXISTS progress (user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE, revision INTEGER NOT NULL, payload TEXT NOT NULL, updated_at INTEGER NOT NULL)'
 ].join(';')+';');
 return db;
}
function normalizeEmail(value){
 if(typeof value!=='string')return null;
 const email=value.trim().toLowerCase();
 if(email.length>254||email.length<6||!/^[a-z0-9.!#$%&'*+/=?^_{}|~-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)||email.includes('..'))return null;
 return email;
}
function cookieValue(header,key){
 if(!header)return null;
 const entry=header.split(';').map(x=>x.trim()).find(x=>x.startsWith(key+'='));
 return entry?entry.slice(key.length+1):null;
}
function response(res,status,payload,headers={}){
 res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'none'",...headers});
 res.end(JSON.stringify(payload));
}
async function jsonBody(req,limit=MAX_PROGRESS_BYTES+2048){
 const parts=[];let size=0;
 for await(const piece of req){
  size+=piece.byteLength;
  if(size>limit)throw new ApiError(413,'Requête trop volumineuse.');
  parts.push(piece);
 }
 try{const value=JSON.parse(Buffer.concat(parts).toString('utf8'));if(!value||typeof value!=='object'||Array.isArray(value))throw Error();return value}
 catch{throw new ApiError(400,'Corps JSON invalide.')}
}
function sameSecret(a,b){
 if(typeof a!=='string'||typeof b!=='string'||!a||!b)return false;
 const left=Buffer.from(a),right=Buffer.from(b);
 return left.length===right.length&&timingSafeEqual(left,right);
}
function progressPayload(data){
 if(!data||typeof data!=='object'||Array.isArray(data)||data.version!==1||!Array.isArray(data.history)||data.history.length>60||typeof data.stats!=='object'||!data.stats||typeof data.seen!=='object'||!data.seen)throw new ApiError(400,'Format de progression invalide.');
 const text=JSON.stringify(data);
 if(Buffer.byteLength(text)>MAX_PROGRESS_BYTES)throw new ApiError(413,'Progression trop volumineuse.');
 return text;
}
export function createAuthApp({db,publicOrigin,sendLoginEmail=null,secureCookies=true,now=()=>Date.now()}={}){
 if(!db)throw Error('Base SQLite obligatoire.');
 if(!publicOrigin||new URL(publicOrigin).origin!==publicOrigin)throw Error('PUBLIC_ORIGIN doit être une origine exacte.');
 const cookieName=secureCookies?'__Host-hbtn_session':'hbtn_session_dev';
 const limits=new Map();
 function rate(key,max,windowMs=15*60*1000){
  const t=now(),recent=(limits.get(key)||[]).filter(x=>x>t-windowMs);
  const allowed=recent.length<max;
  if(allowed)recent.push(t);
  limits.set(key,recent);return allowed;
 }
 const signedCookie=token=>cookieName+'='+token+'; Path=/; HttpOnly; SameSite=Lax; Max-Age='+Math.floor(SESSION_TTL/1000)+(secureCookies?'; Secure':'');
 const expiredCookie=()=>cookieName+'=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'+(secureCookies?'; Secure':'');
 function sessionFor(req){
  const raw=cookieValue(req.headers.cookie,cookieName);
  if(!raw||!(/^[a-zA-Z0-9_-]{43}$/).test(raw))return null;
  const row=db.prepare('SELECT s.token_hash,s.csrf,s.created_at,s.expires_at,u.id AS user_id,u.email FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=?').get(sha256(raw));
  return row&&row.expires_at>now()?row:null;
 }
 function authorized(req){
  const session=sessionFor(req);
  if(!session)throw new ApiError(401,'Connexion nécessaire.');
  return session;
 }
 function protectedWrite(req){
  const session=authorized(req);
  if(!sameSecret(req.headers['x-csrf-token'],session.csrf))throw new ApiError(403,'Jeton CSRF absent ou incorrect.');
  return session;
 }
 const server=createServer(async(req,res)=>{
  try{
   const path=new URL(req.url,'http://localhost').pathname;
   const method=req.method||'GET';
   if(['POST','PUT','PATCH','DELETE'].includes(method)&&req.headers.origin!==publicOrigin)throw new ApiError(403,'Origine de requête refusée.');
   if(path==='/api/health'&&method==='GET'){
    response(res,200,{status:'ok',emailsAvailable:!!sendLoginEmail});return;
   }
   if(path==='/api/auth/me'&&method==='GET'){
    const s=sessionFor(req);
    response(res,200,s?{authenticated:true,email:s.email,csrf:s.csrf,userId:s.user_id}:{authenticated:false});return;
   }
   if(path==='/api/auth/request-link'&&method==='POST'){
    if(!sendLoginEmail)throw new ApiError(503,'Le service d’envoi transactionnel n’est pas encore activé.');
    const body=await jsonBody(req,12*1024),email=normalizeEmail(body.email);
    if(!email)throw new ApiError(400,'Adresse électronique invalide.');
    const ip=String(req.socket.remoteAddress||'unknown');
    const allowed=rate('ip:'+ip,8)&&rate('email:'+sha256(email),3);
    // Réponse identique quelle que soit l'existence d'un compte.
    if(allowed){
     const token=secret(),hash=sha256(token),expiry=now()+LOGIN_TTL;
     db.prepare('DELETE FROM login_links WHERE email=? OR expires_at<?').run(email,now());
     db.prepare('INSERT INTO login_links(token_hash,email,expires_at) VALUES(?,?,?)').run(hash,email,expiry);
     const link=publicOrigin+'/#compte/verification/'+token;
     try{await sendLoginEmail(email,link)}
     catch{
      db.prepare('DELETE FROM login_links WHERE token_hash=?').run(hash);
      throw new ApiError(503,'L’envoi d’e-mail est temporairement indisponible.');
     }
    }
    response(res,202,{message:'Si la demande peut être traitée, un lien de connexion sera envoyé.'});return;
   }
   if(path==='/api/auth/verify'&&method==='POST'){
    const ip=String(req.socket.remoteAddress||'unknown');
    if(!rate('verify:'+ip,16))throw new ApiError(429,'Trop de tentatives, réessayer plus tard.');
    const body=await jsonBody(req,4096),token=body.token;
    if(typeof token!=='string'||!(/^[a-zA-Z0-9_-]{43}$/).test(token))throw new ApiError(400,'Lien invalide ou expiré.');
    let rawSession=null,userEmail=null,csrf=null;
    db.exec('BEGIN IMMEDIATE');
    try{
     const link=db.prepare('SELECT email,expires_at FROM login_links WHERE token_hash=?').get(sha256(token));
     if(!link||link.expires_at<=now()){db.exec('ROLLBACK');throw new ApiError(400,'Lien invalide ou expiré.')}
     db.prepare('DELETE FROM login_links WHERE token_hash=?').run(sha256(token));
     let user=db.prepare('SELECT id,email FROM users WHERE email=?').get(link.email);
     if(!user){
      const uid=randomUUID();
      db.prepare('INSERT INTO users(id,email,verified_at,created_at) VALUES(?,?,?,?)').run(uid,link.email,now(),now());
      user={id:uid,email:link.email};
     }
     rawSession=secret();csrf=secret();userEmail=user.email;
     db.prepare('INSERT INTO sessions(token_hash,user_id,csrf,created_at,expires_at) VALUES(?,?,?,?,?)').run(sha256(rawSession),user.id,csrf,now(),now()+SESSION_TTL);
     db.exec('COMMIT');
    }catch(e){
     try{db.exec('ROLLBACK')}catch{}
     throw e;
    }
    response(res,200,{authenticated:true,email:userEmail,csrf},{'Set-Cookie':signedCookie(rawSession)});return;
   }
   if(path==='/api/auth/logout'&&method==='POST'){
    const s=protectedWrite(req);
    db.prepare('DELETE FROM sessions WHERE token_hash=?').run(s.token_hash);
    response(res,200,{authenticated:false},{'Set-Cookie':expiredCookie()});return;
   }
   if(path==='/api/progress'&&method==='GET'){
    const s=authorized(req);
    const row=db.prepare('SELECT revision,payload,updated_at FROM progress WHERE user_id=?').get(s.user_id);
    response(res,200,{revision:row?.revision||0,data:row?JSON.parse(row.payload):null,updatedAt:row?.updated_at||null});return;
   }
   if(path==='/api/progress'&&method==='PUT'){
    const s=protectedWrite(req),body=await jsonBody(req);
    if(!Number.isSafeInteger(body.revision)||body.revision<0)throw new ApiError(400,'Révision invalide.');
    const payload=progressPayload(body.data);
    let revision;
    db.exec('BEGIN IMMEDIATE');
    try{
     const existing=db.prepare('SELECT revision FROM progress WHERE user_id=?').get(s.user_id);
     if((existing?.revision||0)!==body.revision){
      db.exec('ROLLBACK');
      throw new ApiError(409,'Conflit de synchronisation : les données du serveur ont changé.');
     }
     revision=body.revision+1;
     if(existing)db.prepare('UPDATE progress SET revision=?,payload=?,updated_at=? WHERE user_id=?').run(revision,payload,now(),s.user_id);
     else db.prepare('INSERT INTO progress(user_id,revision,payload,updated_at) VALUES(?,?,?,?)').run(s.user_id,revision,payload,now());
     db.exec('COMMIT');
    }catch(e){
     try{db.exec('ROLLBACK')}catch{}
     throw e;
    }
    response(res,200,{revision,updatedAt:now()});return;
   }
   if(path==='/api/account/export'&&method==='GET'){
    const s=authorized(req);
    const row=db.prepare('SELECT revision,payload,updated_at FROM progress WHERE user_id=?').get(s.user_id);
    response(res,200,{email:s.email,progress:row?{revision:row.revision,data:JSON.parse(row.payload),updatedAt:row.updated_at}:null});return;
   }
   if(path==='/api/account'&&method==='DELETE'){
    const s=protectedWrite(req);
    if(now()-s.created_at>15*60*1000)throw new ApiError(403,'Reconnecte-toi récemment pour supprimer ton compte.');
    db.prepare('DELETE FROM users WHERE id=?').run(s.user_id);
    response(res,200,{deleted:true},{'Set-Cookie':expiredCookie()});return;
   }
   throw new ApiError(404,'Route API inconnue.');
  }catch(e){
   response(res,e instanceof ApiError?e.status:500,{error:e instanceof ApiError?e.message:'Erreur interne du service.'});
  }
 });
 server.requestTimeout=15000;
 server.headersTimeout=10000;
 return {server,db};
}

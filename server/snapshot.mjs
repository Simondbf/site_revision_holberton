import {DatabaseSync} from 'node:sqlite';
import {existsSync,statSync,mkdirSync,renameSync,unlinkSync,chmodSync} from 'node:fs';
import {randomBytes} from 'node:crypto';

const command=process.argv[2];
function run(){
 if(command==='create'){
  const source='/data/accounts.sqlite';
  if(!existsSync(source))throw Error('La base Holberton est absente : aucune sauvegarde ne peut être créée.');
  mkdirSync('/backup',{recursive:true});
  const name='accounts-'+new Date().toISOString().replaceAll(':','-').replaceAll('.','-')+'-'+randomBytes(4).toString('hex')+'.sqlite';
  const target='/backup/'+name;
  const db=new DatabaseSync(source,{readOnly:true});
  try{
   // VACUUM INTO crée une image cohérente même quand SQLite utilise WAL.
   db.exec("VACUUM INTO '"+target+"'");
  }finally{db.close()}
  const verify=new DatabaseSync(target,{readOnly:true});
  try{
   const row=verify.prepare('PRAGMA integrity_check').get();
   if(Object.values(row)[0]!=='ok')throw Error('Intégrité SQLite invalide après snapshot.');
  }finally{verify.close()}
  if(statSync(target).size===0)throw Error('Snapshot SQLite vide.');
  // L'image SQLite contient des données personnelles ; interdire l'accès aux autres utilisateurs.
  chmodSync(target,0o600);
  // Un seul fichier stable est sauvegardé ; ne pas inclure les anciens snapshots
  // dans chaque sauvegarde (sinon la rétention des données serait faussée).
  renameSync(target,'/backup/accounts.sqlite');
  console.log('Snapshot SQLite validé : accounts.sqlite');
  return;
 }
 if(command==='check'){
  const path=process.argv[3];
  if(!path||!path.startsWith('/backup/')||!path.endsWith('.sqlite')||!existsSync(path))throw Error('Chemin de snapshot invalide.');
  const db=new DatabaseSync(path,{readOnly:true});
  try{
   if(Object.values(db.prepare('PRAGMA integrity_check').get())[0]!=='ok')throw Error('Échec du contrôle SQLite.');
   db.prepare("SELECT COUNT(*) AS n FROM sqlite_master").get();
  }finally{db.close()}
  console.log('Restauration SQLite vérifiée.');
  return;
 }
 throw Error('Commande attendue : create ou check /backup/fichier.sqlite');
}
try{run()}catch(e){console.error(String(e.message));process.exitCode=1}

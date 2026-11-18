import {STORAGE_KEY,readProgress,writeProgress,emptyProgress,progressSummary} from '../quiz/core.mjs';
const root=document.getElementById('account');
const card=root?.querySelector('.helpgrid article:first-child');
if(!root||!card)throw Error('Page Compte absente.');
let me={authenticated:false},remote={revision:0,data:null},available=false,busy=false;
let syncOptIn=false,debounce=null,pendingSync=false;
function disableSync(){syncOptIn=false;try{localStorage.removeItem('holberton-account-sync-v1');localStorage.removeItem('holberton-account-sync-user-v1')}catch{}}
function enableSync(){syncOptIn=true;try{localStorage.setItem('holberton-account-sync-v1','yes');localStorage.setItem('holberton-account-sync-user-v1',me.userId)}catch{}}
function checkSyncOwner(){try{if(!me.userId||localStorage.getItem('holberton-account-sync-user-v1')!==me.userId)disableSync()}catch{disableSync()}}
try{syncOptIn=localStorage.getItem('holberton-account-sync-v1')==='yes'}catch{}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const api=async(path,{method='GET',body,csrf}={})=>{
 const headers={};
 if(body!==undefined)headers['Content-Type']='application/json';
 if(csrf)headers['X-CSRF-Token']=csrf;
 const response=await fetch(path,{method,headers,credentials:'same-origin',body:body===undefined?undefined:JSON.stringify(body),cache:'no-store'});
 const result=await response.json().catch(()=>({error:'Réponse serveur invalide.'}));
 if(!response.ok){const e=new Error(result.error||'Service momentanément indisponible.');e.status=response.status;throw e}
 return result;
};
function notice(message,bad=false){
 const el=document.getElementById('accountStatus');
 if(el){el.textContent=message;el.className=bad?'account-error':'account-info'}
}
function download(name,data){
 const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
 const link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
}
function progressLocal(){return readProgress(localStorage)}
function reloadQuiz(data){
 writeProgress(localStorage,data);window.dispatchEvent(new Event('holberton:quiz:reload'));
}
async function refreshRemote(){remote=await api('/api/progress')}
function displayGuest(){
 card.innerHTML='<h3>Se connecter ou créer un compte</h3><p>Un compte est facultatif. Il permet la synchronisation de la progression entre appareils après validation de l’adresse e-mail.</p>'+
 '<form id="accountLoginForm"><label for="accountEmail">Adresse e-mail</label><input id="accountEmail" type="email" name="email" autocomplete="email" required maxlength="254" placeholder="adresse@exemple.fr">'+
 '<button class="quiz-primary" type="submit">Recevoir un lien de connexion</button></form><p class="quiz-muted">Un même lien sert à vérifier une nouvelle adresse ou à se reconnecter. Aucun mot de passe n’est nécessaire.</p>'+
 '<p id="accountStatus" role="status" aria-live="polite"></p>';
 document.getElementById('accountLoginForm').onsubmit=async event=>{
  event.preventDefault();
  const email=document.getElementById('accountEmail').value;
  notice('Demande en cours…');
  try{const r=await api('/api/auth/request-link',{method:'POST',body:{email}});notice(r.message||'Vérifie tes e-mails.')}
  catch(e){notice(e.message,true)}
 };
}
function displayUnavailable(){
 card.innerHTML='<h3>Comptes en préparation</h3><p>Le backend privé et son relais Brevo ne sont pas encore activés sur le site public. L’accès invité, les favoris et les quiz restent disponibles.</p>'+
 '<p class="quiz-muted">Dès que le service sera sécurisé et déployé, cette page proposera l’inscription et la connexion facultatives.</p>';
}
function displayConnected(){
 const guest=progressSummary(progressLocal());
 const remoteSummary=remote.data?progressSummary(remote.data):null;
 card.innerHTML='<h3>Mon compte</h3><p>Adresse vérifiée : <strong>'+esc(me.email)+'</strong></p>'+
 '<div class="account-metrics"><span>Appareil : '+guest.sessions+' session(s)</span><span>Compte : '+(remoteSummary?.sessions||0)+' session(s) sauvegardée(s)</span></div>'+
 '<p>La progression du compte est stockée séparément des données de l’application financière. Tu choisis explicitement si tu souhaites importer ou remplacer une progression existante.</p>'+
 '<div class="quiz-actions"><button class="quiz-primary" id="accountSendProgress" type="button">Sauvegarder ma progression locale</button>'+
 '<button class="quiz-secondary" id="accountLoadProgress" type="button" '+(!remote.data?'disabled':'')+'>Charger ma progression du compte</button></div>'+
 '<div class="quiz-actions"><button class="quiz-secondary" id="accountExport" type="button">Exporter les données du compte</button>'+
 '<button class="quiz-secondary" id="accountLogout" type="button">Se déconnecter</button>'+
 '<button class="quiz-secondary quiz-danger" id="accountDelete" type="button">Supprimer mon compte</button></div>'+
 '<p id="accountStatus" role="status" aria-live="polite"></p>';
 document.getElementById('accountSendProgress').onclick=saveToAccount;
 document.getElementById('accountLoadProgress').onclick=loadFromAccount;
 document.getElementById('accountExport').onclick=async()=>{
  try{download('holberton-compte-export.json',await api('/api/account/export'))}catch(e){notice(e.message,true)}
 };
 document.getElementById('accountLogout').onclick=async()=>{
  try{await api('/api/auth/logout',{method:'POST',csrf:me.csrf});me={authenticated:false};remote={revision:0,data:null};disableSync();displayGuest()}catch(e){notice(e.message,true)}
 };
 document.getElementById('accountDelete').onclick=async()=>{
  if(!confirm('Supprimer définitivement le compte Holberton Révision et sa progression sur le serveur ? La progression de cet appareil ne sera pas supprimée.'))return;
  if(!confirm('Confirmation définitive : supprimer le compte et ses données de synchronisation ?'))return;
  try{await api('/api/account',{method:'DELETE',csrf:me.csrf});me={authenticated:false};remote={revision:0,data:null};disableSync();displayGuest();notice('Compte supprimé. La progression invitée de cet appareil est conservée.')}catch(e){notice(e.message,true)}
 };
}
async function saveToAccount(){
 if(busy||!me.authenticated)return;
 const local=progressLocal();
 const count=progressSummary(local).sessions;
 if(!count&&!local.current){notice('Aucun résultat invité à synchroniser.');return}
 if(remote.data&&(remote.data.history?.length||remote.data.current)){
  if(!confirm('ATTENTION : ton compte contient déjà une progression. La sauvegarde de cet appareil remplacera cet historique du serveur. Veux-tu continuer ?'))return;
  if(!confirm('Confirmer le remplacement explicite de la progression du compte ?'))return;
 }
 if(!confirm('Sauvegarder les '+count+' session(s) invitées sur ton compte ? En cas de modification concurrente, rien ne sera écrasé.'))return;
 busy=true;
 try{
  // Import d'un historique invité seulement après accord explicite.
  const next=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:remote.revision,data:local}});
  remote={revision:next.revision,data:local,updatedAt:next.updatedAt};
  enableSync()
  displayConnected();notice('Progression synchronisée. Les prochains résultats seront envoyés automatiquement lorsque le serveur sera disponible.');
 }catch(e){
  if(e.status===409){disableSync();await refreshRemote().catch(()=>{})}
  notice(e.status===409?'Une autre session a changé la progression du compte. Exporte les deux historiques avant de décider quoi conserver.':e.message,true);
 }finally{busy=false}
}
async function loadFromAccount(){
 if(!me.authenticated||!remote.data)return;
 if(!confirm('Remplacer la progression quiz de cet appareil par celle du compte ? Exporte d’abord l’historique invité si tu souhaites le conserver.'))return;
 if(!confirm('Confirmer le remplacement local (sans modifier la progression du serveur) ?'))return;
 reloadQuiz(remote.data);syncOptIn=true;try{localStorage.setItem('holberton-account-sync-v1','yes')}catch{}
 displayConnected();notice('Progression du compte chargée sur cet appareil.');
}
async function automaticSync(){
 if(!syncOptIn||!me.authenticated||!available)return;
 if(busy){pendingSync=true;return}
 const local=progressLocal();
 busy=true;
 try{
  const answer=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:remote.revision,data:local}});
  remote={revision:answer.revision,data:local,updatedAt:answer.updatedAt};
 }catch(e){
  if(e.status===409){syncOptIn=false;try{localStorage.removeItem('holberton-account-sync-v1')}catch{};await refreshRemote().catch(()=>{});if(location.hash.startsWith('#compte')){displayConnected();notice('Conflit de synchronisation : aucune donnée distante écrasée. Un choix manuel est nécessaire.',true)}}
 }finally{busy=false;if(pendingSync){pendingSync=false;setTimeout(automaticSync,0)}}
}
window.addEventListener('holberton:quiz:updated',()=>{
 if(debounce)clearTimeout(debounce);
 if(syncOptIn&&me.authenticated)debounce=setTimeout(automaticSync,900);
});
async function initialize(){
 // Le jeton du lien est seulement dans le fragment URL, jamais dans les requêtes HTTP de navigation.
 const match=location.hash.match(/^#compte\/verification\/([A-Za-z0-9_-]{43})$/);
 const token=match?.[1]||null;
 if(token)history.replaceState(history.state,'','#compte');
 try{
  const check=await api('/api/auth/me');available=true;me=check;
  if(token){
   const verified=await api('/api/auth/verify',{method:'POST',body:{token}});
   me=await api('/api/auth/me');checkSyncOwner();await refreshRemote();displayConnected();notice('Adresse vérifiée. Bienvenue dans ton compte Holberton Révision.');return;
  }
  if(me.authenticated){checkSyncOwner();await refreshRemote();displayConnected()}
  else{
   const health=await api('/api/health');
   if(health.emailsAvailable)displayGuest();else displayUnavailable();
  }
 }catch(e){
  if(e.status===404||e.status===503||!available){available=false;displayUnavailable()}
  else{displayGuest();notice(e.message,true)}
 }
}
window.addEventListener('hashchange',()=>{
 if(location.hash.startsWith('#compte/verification/'))initialize();
 if(location.hash==='#compte'&&me.authenticated)displayConnected();
});
initialize();
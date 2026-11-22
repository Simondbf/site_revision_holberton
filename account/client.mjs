import {readProgress,writeProgress,emptyProgress,guestResumeOnly} from '../quiz/core.mjs';

// Client sans secret. Intégré dans le module autonome du site par le script de génération.
(()=>{
 const root=document.getElementById('account');
 const coming=root?.querySelector('#accountComingSoon');
 if(!root||!coming)return;
 let me={authenticated:false},remote={revision:0,data:null};
 let enabled=false,busy=false,dirty=false,conflict=false,debounce=null;
 let changeSerial=0;
 let pendingGuestSession=null;
 let adminStatsCache=null,adminStatsFetchedAt=0,adminRequest=null;
 const KEY='holberton-quiz-guest-v1';
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const theme=()=>localStorage.getItem('holberton-dark-v2')==='yes'?'dark':'light';
 const api=async(path,{method='GET',body,csrf}={})=>{
  const headers={};
  if(body!==undefined)headers['Content-Type']='application/json';
  if(csrf)headers['X-CSRF-Token']=csrf;
  const response=await fetch(path,{method,headers,credentials:'same-origin',cache:'no-store',
   body:body===undefined?undefined:JSON.stringify(body)});
  const data=await response.json().catch(()=>({error:'Réponse du serveur invalide.'}));
  if(!response.ok){const err=new Error(data.error||'Service indisponible.');err.status=response.status;throw err}
  return data;
 };
 const status=(message,bad=false)=>{
  const el=document.getElementById('accountSecurityStatus')||document.getElementById('accountLoginStatus');
  if(el){el.textContent=message;el.className=bad?'account-error':'account-info'}
 };
 const progressLocal=()=>({...readProgress(localStorage),theme:theme()});
 function setConnected(value){
  document.documentElement.dataset.holbertonAccount=value?'connected':'guest';
  document.documentElement.dataset.holbertonAdmin=value&&me.isAdmin===true?'true':'false';
  if(!value){adminStatsCache=null;adminStatsFetchedAt=0;adminRequest=null}
  window.dispatchEvent(new Event('holberton:account:status'));
 }

 // Statistiques agrégées et strictement privées : jamais de liste d’utilisateurs.
 const adminNumber=n=>Number.isSafeInteger(n)&&n>=0?n.toLocaleString('fr-FR'):'—';
 function adminMarkup(data){
  const last30=Array.isArray(data.daily)?data.daily.filter(d=>/^\d{4}-\d{2}-\d{2}$/.test(d.day)&&Number.isSafeInteger(d.visits)&&d.visits>=0).slice(-30):[];
  const byDay=new Map(last30.map(d=>[d.day,d.visits]));
  const days=Array.from({length:14},(_,i)=>{
   const day=new Date(Date.now()-(13-i)*86400000).toISOString().slice(0,10);
   return {day,count:byDay.get(day)||0};
  });
  const max=Math.max(1,...days.map(d=>d.count));
  const chart=days.map((d,i)=>{
   const height=d.count?Math.max(8,Math.round(d.count/max*100)):0;
   return '<div class="admin-day" title="'+esc(d.day)+' : '+d.count+'">'+
    '<span class="admin-day-value">'+(d.count?adminNumber(d.count):'')+'</span>'+
    '<div class="admin-day-track"><i style="height:'+height+'%" class="'+(d.count?'':'is-empty')+'"></i></div>'+
    '<span class="admin-day-label">'+(i%3===0||i===13?esc(d.day.slice(5)):'&nbsp;')+'</span></div>';
  }).join('');
  const gh=data.githubContributors;
  const ghLabel=gh?adminNumber(gh.count)+(gh.complete?'':' +'):'—';
  const metric=(number,label,sub)=>'<div class="admin-metric"><strong>'+number+'</strong><span>'+label+'</span>'+
   '<small>'+sub+'</small></div>';
  const rows=last30.slice().reverse().map(d=>'<tr><th scope="row">'+esc(d.day)+'</th><td>'+adminNumber(d.visits)+'</td></tr>').join('');
  return '<div class="admin-hero" id="accountAdminOverview"><div><span class="account-eyebrow">ESPACE PRIVÉ</span>'+
   '<h3>Vue d’ensemble du site</h3>'+
   '<p>Une vue synthétique de Holberton Révision, sans accès aux données personnelles des autres comptes.</p></div>'+
   '<span class="admin-private-mark">Accès propriétaire</span></div>'+
   '<div class="admin-metrics">'+
   metric(adminNumber(data.registeredAccounts),'Comptes inscrits','Adresses vérifiées')+
   metric(adminNumber(data.accountsWithProgress),'Comptes avec progression','Au moins une sauvegarde')+
   metric(adminNumber(data.storedQuizSessions),'Quiz enregistrés','Sessions encore conservées')+
   metric(adminNumber(data.visitors30Days),'Activités sur 30 jours','Événements de navigateurs estimés')+
   '</div>'+
   '<div class="admin-panels"><section class="account-panel admin-chart-card">'+
   '<div class="account-panel-head"><div><span class="account-eyebrow">AUDIENCE</span><h3>Activité récente</h3></div>'+
   '<span class="account-count">14 jours</span></div>'+
   '<p class="account-hint">Ouvertures déclarées par navigateur et par jour UTC. Ce ne sont pas des visiteurs uniques.</p>'+
   '<div class="admin-bars" role="img" aria-label="Évolution des événements de navigateurs sur les quatorze derniers jours">'+chart+'</div>'+
   '<details class="account-more"><summary>Voir le détail des 30 derniers jours</summary>'+
   '<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Date UTC</th><th>Activités</th></tr></thead>'+
   '<tbody>'+(rows||'<tr><td colspan="2">Aucune donnée enregistrée</td></tr>')+'</tbody></table></div></details>'+
   '</section><section class="account-panel admin-side-card">'+
   '<div class="account-panel-head"><div><span class="account-eyebrow">COMMUNAUTÉ</span><h3>Contributions et suivi</h3></div></div>'+
   '<div class="admin-side-stat"><span>Contributeurs GitHub</span><strong>'+ghLabel+'</strong></div>'+
   '<a href="https://github.com/Simondbf/site_revision_holberton/graphs/contributors" target="_blank" rel="noopener noreferrer" class="admin-link">Consulter les contributions GitHub</a>'+
   '<div class="admin-side-stat"><span>Activités comptées depuis l’activation</span><strong>'+adminNumber(data.visitorsTotal)+'</strong></div>'+
   '<p class="account-hint admin-note">Comptages non rétroactifs et approximatifs. Les profils de navigateur, les personnes et les sessions ne sont pas identifiables à partir de ces agrégats.</p>'+
   '<button type="button" id="accountAdminRefresh" class="quiz-secondary">Actualiser les chiffres</button></section></div>';
 }
 async function showAdmin(){
  const slot=document.getElementById('accountAdminSlot');
  if(!slot||!me.authenticated||me.isAdmin!==true)return;
  const display=data=>{
   const latest=document.getElementById('accountAdminSlot');
   if(!latest||!me.authenticated||!me.isAdmin)return;
   latest.innerHTML=adminMarkup(data);
   const refresh=latest.querySelector('#accountAdminRefresh');
   if(refresh)refresh.onclick=()=>{adminStatsCache=null;adminStatsFetchedAt=0;showAdmin()};
  };
  if(adminStatsCache&&Date.now()-adminStatsFetchedAt<60000){display(adminStatsCache);return}
  slot.innerHTML='<p class="account-admin-loading" role="status">Chargement de l’administration…</p>';
  if(adminRequest)return;
  adminRequest=api('/api/admin/stats');
  try{
   const data=await adminRequest;
   adminStatsCache=data;adminStatsFetchedAt=Date.now();
   display(data);
  }catch(e){
   const latest=document.getElementById('accountAdminSlot');
   if(latest&&me.authenticated&&me.isAdmin)latest.innerHTML=
    '<div class="account-panel admin-error" role="alert">Impossible de charger les statistiques : '+esc(e.message)+'</div>';
  }finally{adminRequest=null}
 }
 async function recordAnonymousActivity(){
  // Une seule déclaration par stockage local et journée UTC ; aucun identifiant transmis.
  try{
   const day=new Date().toISOString().slice(0,10),key='holberton-audience-day-v1';
   if(localStorage.getItem(key)===day)return;
   await api('/api/analytics/visit',{method:'POST'});
   localStorage.setItem(key,day);
  }catch{}
 }

 function install(data){
  const next=data||emptyProgress();
  if(!writeProgress(localStorage,next))throw Error('Stockage local indisponible ; synchronisation arrêtée.');
  if(next.theme==='dark'||next.theme==='light'){
   localStorage.setItem('holberton-dark-v2',next.theme==='dark'?'yes':'no');
   window.dispatchEvent(new Event('holberton:preferences:reload'));
  }
  window.dispatchEvent(new Event('holberton:quiz:reload'));
 }
 function resetLocal(){
  writeProgress(localStorage,guestResumeOnly(emptyProgress()));
  window.dispatchEvent(new Event('holberton:quiz:reload'));
 }
 function showComingSoon(){
  coming.hidden=false;
  coming.innerHTML='<h3>À venir prochainement</h3>';
  const security=document.getElementById('accountSecurity');
  if(security)security.hidden=true;
 }
 function renderLogin(){
  coming.hidden=false;
  coming.innerHTML='<div class="account-login-head"><span class="account-eyebrow">MON ESPACE</span>'+
   '<h3>Reprends tes révisions où tu veux</h3>'+
   '<p>Un lien par e-mail suffit pour créer ton compte ou te reconnecter. Aucun mot de passe à retenir.</p></div>'+
   '<ul class="account-login-benefits"><li>Retrouve tes résultats de quiz</li><li>Suis tes progrès par notion</li>'+
   '<li>Synchronise tes préférences entre appareils</li></ul>'+
   '<form id="accountLoginForm"><label for="accountEmail">Ton adresse e-mail</label>'+
   '<input id="accountEmail" name="email" type="email" required autocomplete="email" maxlength="254" placeholder="adresse@exemple.fr">'+
   '<button class="quiz-primary" type="submit">Recevoir mon lien de connexion</button></form>'+
   '<p id="accountLoginStatus" role="status" aria-live="polite"></p>'+
   '<details class="account-privacy"><summary>Confidentialité et suppression des données</summary>'+
   '<p>Les résultats et préférences sont synchronisés entre appareils. Nous ne vendons pas les données personnelles '+
   'et ne les utilisons pas pour la publicité. Tu peux supprimer ton compte et ses données actives dans Paramètres. '+
   'Les sauvegardes chiffrées sont conservées temporairement selon la politique de conservation.</p></details>';
  document.getElementById('accountLoginForm').onsubmit=async event=>{
   event.preventDefault();
   const email=document.getElementById('accountEmail').value;
   status('Demande en cours…');
   try{
    const result=await api('/api/auth/request-link',{method:'POST',body:{email}});
    status(result.message||'Si la demande a été acceptée, un e-mail va arriver.');
   }catch(e){status(e.message,true)}
  };
  const security=document.getElementById('accountSecurity');if(security)security.hidden=true;
 }
 function panel(){
  const slot=document.getElementById('accountSecuritySlot');
  let security=document.getElementById('accountSecurity');
  if(!slot||!me.authenticated){if(security)security.remove();return}
  if(!security){
   security=document.createElement('section');security.id='accountSecurity';security.className='account-panel account-security';
  }
  if(security.parentElement!==slot)slot.append(security);
  security.hidden=false;
  security.innerHTML='<h3>Gestion du compte</h3><p>Adresse vérifiée : <strong>'+esc(me.email)+'</strong></p>'+
   '<p>Synchronisation automatique des quiz et du thème clair/sombre : <strong>'+(conflict?'conflit à résoudre':dirty?'en attente':'active')+'</strong>.</p>'+
   (pendingGuestSession?'<p>Une session invitée inachevée a été conservée séparément pour éviter de remplacer un quiz déjà présent dans ce compte.</p>'+
    '<button id="accountRecoverGuest" class="quiz-secondary" type="button">Reprendre cette session sur le compte</button>':'')+
   (conflict?'<p class="account-error">Une modification a été effectuée sur un autre appareil. Aucune progression n’a été écrasée.</p>'+
    '<button id="accountUseRemote" class="quiz-secondary" type="button">Conserver la version du compte</button>'+
    '<button id="accountUseLocal" class="quiz-secondary" type="button">Remplacer la version distante par cet appareil</button>':'')+
   '<div class="quiz-actions"><button id="accountLogout" class="quiz-secondary" type="button">Se déconnecter</button>'+
   '<button id="accountDelete" class="quiz-secondary quiz-danger" type="button">Supprimer mon compte</button></div>'+
   '<p id="accountSecurityStatus" role="status" aria-live="polite"></p>';
  document.getElementById('accountLogout').onclick=async()=>{
   if((dirty||conflict)&&!confirm('Une progression n’est pas encore synchronisée. Se déconnecter peut la perdre. Continuer ?'))return;
   try{
    await api('/api/auth/logout',{method:'POST',csrf:me.csrf});
    const recoveryKey='holberton-session-a-recuperer-v1:'+me.userId;
    me={authenticated:false};remote={revision:0,data:null};enabled=false;dirty=false;conflict=false;
    pendingGuestSession=null;changeSerial=0;
    try{localStorage.removeItem(recoveryKey)}catch{}
    resetLocal();setConnected(false);renderLogin();status('Déconnexion effectuée.');
   }catch(e){status(e.message,true)}
  };
  document.getElementById('accountDelete').onclick=async()=>{
   if(!confirm('Supprimer le compte et toute sa progression active ? Les sauvegardes chiffrées peuvent subsister temporairement jusqu’à leur rotation.'))return;
   if(!confirm('Confirmer la suppression définitive du compte ? Cette opération est irréversible sur la base active.'))return;
   try{
    await api('/api/account',{method:'DELETE',csrf:me.csrf});
    const recoveryKey='holberton-session-a-recuperer-v1:'+me.userId;
    me={authenticated:false};remote={revision:0,data:null};enabled=false;dirty=false;conflict=false;
    pendingGuestSession=null;changeSerial=0;
    try{localStorage.removeItem(recoveryKey)}catch{}
    resetLocal();setConnected(false);renderLogin();status('Compte et données actives supprimés.');
   }catch(e){status(e.message,true)}
  };
  const recoverGuest=document.getElementById('accountRecoverGuest');
  if(recoverGuest)recoverGuest.onclick=async()=>{
   if(!pendingGuestSession)return;
   if(!confirm('Remplacer uniquement la session en cours du compte par cette session invitée ? Les résultats déjà terminés seront conservés.'))return;
   try{
    const latest=await api('/api/progress');
    const merged={...(latest.data||emptyProgress()),current:pendingGuestSession};
    const updated=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:latest.revision,data:merged}});
    remote={revision:updated.revision,data:merged};
    pendingGuestSession=null;dirty=false;conflict=false;
    try{localStorage.removeItem('holberton-session-a-recuperer-v1:'+me.userId)}catch{}
    install(merged);panel();
   }catch(e){status(e.status===409?'La session du compte a changé sur un autre appareil. Réessaie.':e.message,true)}
  };
  const useRemote=document.getElementById('accountUseRemote');
  if(useRemote)useRemote.onclick=async()=>{
   try{remote=await api('/api/progress');install(remote.data||emptyProgress());dirty=false;conflict=false;panel()}
   catch(e){status(e.message,true)}
  };
  const useLocal=document.getElementById('accountUseLocal');
  if(useLocal)useLocal.onclick=async()=>{
   if(!confirm('Remplacer explicitement la progression du compte par celle de cet appareil ?'))return;
   try{
    remote=await api('/api/progress');
    const local=progressLocal();
    const answer=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:remote.revision,data:local}});
    remote={revision:answer.revision,data:local};
    dirty=false;conflict=false;panel();
   }catch(e){status(e.message,true)}
  };
 }
 async function sync(){
  if(!enabled||!me.authenticated||busy||conflict)return;
  busy=true;
  const startedAt=changeSerial;
  try{
   const payload=progressLocal();
   const updated=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:remote.revision,data:payload}});
   remote={revision:updated.revision,data:payload};
   // Une nouvelle réponse peut arriver pendant que la requête est en vol.
   // Elle ne fait PAS partie de l'instantané envoyé.
   dirty=changeSerial!==startedAt;
  }catch(e){
   dirty=true;
   if(e.status===409){conflict=true;try{remote=await api('/api/progress')}catch{}}
   if(location.hash.startsWith('#compte')){panel();status(e.status===409?'Conflit entre appareils : sélectionne la version à conserver.':e.message,true)}
  }finally{
   busy=false;
   if(location.hash.startsWith('#compte'))panel();
   if(dirty&&!conflict&&changeSerial!==startedAt){
    if(debounce)clearTimeout(debounce);
    debounce=setTimeout(sync,1000);
   }
  }
 }
 function scheduleSync(){
  if(!enabled||!me.authenticated)return;
  changeSerial++;
  dirty=true;
  if(debounce)clearTimeout(debounce);
  debounce=setTimeout(sync,1000);
 }
 async function pullIfClean(){
  if(!enabled||dirty||busy||conflict)return;
  const startedAt=changeSerial;
  try{
   const next=await api('/api/progress');
   // Ne jamais écraser un changement local apparu pendant ce GET.
   if(!enabled||dirty||busy||conflict||changeSerial!==startedAt)return;
   if(next.revision>remote.revision){remote=next;install(next.data||emptyProgress());panel()}
  }catch{}
 }
 async function connectSession(check,afterVerification=false){
  me=check;remote=await api('/api/progress');
  const local=readProgress(localStorage);
  const recoveryKey='holberton-session-a-recuperer-v1:'+me.userId;
  try{pendingGuestSession=JSON.parse(localStorage.getItem(recoveryKey)||'null')||local.current||null}
  catch{pendingGuestSession=local.current||null}
  if(remote.data){
   const serverData=remote.data;
   if(pendingGuestSession&&!serverData.current){
    const merged={...serverData,current:pendingGuestSession};
    try{
     const saved=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:remote.revision,data:merged}});
     remote={revision:saved.revision,data:merged};pendingGuestSession=null;
    }catch(e){if(e.status!==409)throw e;remote=await api('/api/progress')}
   }else if(pendingGuestSession&&serverData.current&&pendingGuestSession.id!==serverData.current.id){
    // La session invitée n'est jamais effacée silencieusement au premier accès.
    try{localStorage.setItem(recoveryKey,JSON.stringify(pendingGuestSession))}catch{}
   }else pendingGuestSession=null;
  }else{
   const fresh={...emptyProgress(),current:pendingGuestSession,theme:theme()};
   const saved=await api('/api/progress',{method:'PUT',csrf:me.csrf,body:{revision:0,data:fresh}});
   remote={revision:saved.revision,data:fresh};pendingGuestSession=null;
  }
  install(remote.data||emptyProgress());
  enabled=true;dirty=false;conflict=false;
  coming.hidden=true;setConnected(true);
  if(pendingGuestSession)document.getElementById('accountTabSettings')?.click();
  panel();
  if(afterVerification)status('Connexion confirmée. Tes données sont synchronisées automatiquement.');
 }
 async function initialize(){
  const found=location.hash.match(/^#compte\/verification\/([A-Za-z0-9_-]{43})$/);
  const token=found?.[1];
  if(token)history.replaceState(history.state,'','#compte');
  try{
   const health=await api('/api/health');
   if(token)await api('/api/auth/verify',{method:'POST',body:{token}});
   const check=await api('/api/auth/me');
   if(check.authenticated)await connectSession(check,!!token);
   else{setConnected(false);if(health.emailsAvailable)renderLogin();else showComingSoon()}
  }catch(e){
   enabled=false;setConnected(false);
   if(token){renderLogin();status('Vérification impossible : '+e.message,true)}
   else showComingSoon();
  }
 }
 window.addEventListener('holberton:account:rendered',()=>{panel();showAdmin()});
 window.addEventListener('holberton:quiz:updated',scheduleSync);
 window.addEventListener('holberton:preferences:updated',scheduleSync);
 window.addEventListener('focus',()=>{if(dirty&&!conflict)sync();else pullIfClean()});
 document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible'){if(dirty&&!conflict)sync();else pullIfClean()}
 });
 // Un compte ouvert sur deux appareils récupère aussi les changements sans
 // devoir recharger la page ni revenir manuellement sur l'onglet Compte.
 setInterval(()=>{if(document.visibilityState==='visible')pullIfClean()},15000);
 window.addEventListener('hashchange',()=>{
  if(location.hash.startsWith('#compte/verification/'))initialize();
  if(location.hash==='#compte'&&me.authenticated)panel();
 });
 recordAnonymousActivity();
 initialize();
})();

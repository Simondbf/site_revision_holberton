import {readProgress,writeProgress,emptyProgress,checkBank,combineCandidates,selectQuestions,shuffleOptionIds,newSession,applyAnswer,completeSession,finishSession,progressSummary} from './core.mjs';
const root=document.getElementById('quiz'),account=document.getElementById('account');
if(!root||!account)throw Error('Pages Compte et Quiz absentes.');
let bank=[],progress=readProgress(localStorage),loading=true,error='',family='all',paused=false,lastReport=null;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isQuiz=()=>location.hash.split('/')[0]==='#quiz';
function persist(next){
 if(!writeProgress(localStorage,next)){
  window.alert('Impossible d’enregistrer la progression dans ce navigateur. Vérifie l’espace disponible et les autorisations de stockage.');
  return false;
 }
 progress=next;
 window.dispatchEvent(new Event('holberton:quiz:updated'));
 return true;
}
const findQuestion=id=>bank.find(q=>q.id===id);
function page(title,sub,body){
 root.innerHTML='<div class="quiz-app"><header class="quiz-heading"><span class="quiz-kicker">RÉVISION C · VERSION TEST</span><h2>'+escape(title)+'</h2><p>'+escape(sub)+'</p></header><div class="quiz-warning" role="note">Les réponses de cette première banque restent en relecture pédagogique. Les scores servent à t’entraîner et ne constituent pas une certification.</div>'+body+'</div>';
}
function linkCourse(q){
 const course=q.source_urls?.find(s=>s.startsWith('https://revision-hbtn.soleiljaune.be/#cours/'));
 if(!course)return '<span class="quiz-muted">Fiche non disponible</span>';
 const hash=course.slice(course.indexOf('#cours/'));
 const [si,ii]=q.legacy_notion_key.split(':').map(Number);
 try{
  const lessons=JSON.parse(document.getElementById('content-data').textContent).sections;
  if(!lessons?.[si]?.items?.[ii])return '<span class="quiz-muted">Cette fiche n’est pas encore disponible sur le site</span>';
 }catch{return '<span class="quiz-muted">Fiche momentanément indisponible</span>'}
 return '<a href="'+escape(hash)+'" class="quiz-link">Revoir la fiche</a>';
}
function renderMenu(){
 const info=progressSummary(progress),running=progress.current&&progress.current.questionIds?.length;
 page('Réviser librement','55 questions candidates sur argc/argv et stdarg.h. Aucune durée ni quantité imposée : termine ta session quand tu veux. La sélection privilégie progressivement les notions à renforcer.',
 (running?'<div class="quiz-card"><strong>Session enregistrée</strong><p>'+Object.keys(progress.current.answers||{}).length+' réponse(s) déjà enregistrée(s).</p><button id="quizResume" class="quiz-primary">Reprendre</button></div>':'')+
 '<div class="quiz-card quiz-start"><label>Thèmes<select id="quizFamily"><option value="all">Tous les thèmes</option><option value="argc">argc et argv</option><option value="stdarg">stdarg.h et fonctions variadiques</option></select></label>'+
 '<p class="quiz-muted">Pas de nombre de questions prédéfini : tu peux faire une pause ou afficher ton bilan après chaque réponse.</p>'+
 '<button class="quiz-primary" id="quizStart">Démarrer</button></div>'+
 '<div class="quiz-stats"><span>'+info.sessions+' session(s)</span><span>'+info.answered+' question(s) traitée(s)</span><span>'+info.notions+' notion(s) révisée(s)</span></div>'+
 '<p class="quiz-muted">Sans compte et sans API payante. Les données sont locales ; elles peuvent être exportées depuis Compte.</p>');
 document.getElementById('quizFamily').value=family;
 document.getElementById('quizStart').onclick=()=>{
  family=document.getElementById('quizFamily').value;
  if(progress.current&&!confirm('Remplacer la session non terminée ?'))return;
  const available=bank.filter(q=>family==='all'||q.family===family);
  const selection=selectQuestions(bank,{family,amount:available.length,stats:progress.stats,seen:progress.seen});
  if(!persist({...progress,current:newSession(selection,family)}))return;
  paused=false;lastReport=null;renderQuestion();renderAccount();
 };
 const resume=document.getElementById('quizResume');
 if(resume)resume.onclick=()=>{
  if(!persist({...progress,current:{...progress.current,paused:false}}))return;
  paused=false;renderQuestion();
 };
}
function renderQuestion(){
 let session=progress.current;
 if(!session?.questionIds?.length){renderMenu();return}
 const index=session.cursor||0,q=findQuestion(session.questionIds[index]);
 if(!q){renderMenu();return}
 // Compatibilité des anciennes sessions : créer puis conserver un ordre une seule fois.
 const ids=q.options.map(option=>option.id);
 let order=session.optionOrder?.[q.id];
 if(!Array.isArray(order)||order.length!==ids.length||new Set(order).size!==ids.length||!order.every(id=>ids.includes(id))){
  order=shuffleOptionIds(q.options);
  session={...session,optionOrder:{...session.optionOrder,[q.id]:order}};
  if(!persist({...progress,current:session}))return;
 }
 const optionById=new Map(q.options.map(option=>[option.id,option]));
 const given=session.answers[q.id],answered=!!given,mode=q.answer_mode==='single'?'Une seule bonne réponse':'Plusieurs bonnes réponses';
 const options=order.map((id,position)=>{
  const o=optionById.get(id);
  const selected=given?.selected?.includes(o.id)||false,correct=q.correct_option_ids.includes(o.id);
  const cls=answered?(correct?' correct':selected?' incorrect':''):'';
  // Les lettres indiquent la POSITION affichée ; les identifiants d'origine restent utilisés pour la notation.
  return '<label class="quiz-choice'+cls+'"><input name="quiz-answer" type="'+(q.answer_mode==='single'?'radio':'checkbox')+'" value="'+escape(o.id)+'" '+(selected?'checked ':'')+(answered?'disabled':'')+'><b>'+String.fromCharCode(65+position)+'</b><span>'+escape(o.text)+'</span></label>';
 }).join('');
 const feedback=answered?'<div class="quiz-feedback '+(given.correct?'quiz-good':'quiz-bad')+'" role="status"><strong>'+(given.correct?'Réponse exacte.':'Réponse fausse ou incomplète.')+'</strong><p>'+escape(q.explanation)+'</p>'+linkCourse(q)+'</div>':'';
 page('Question '+(index+1),q.notion,
 '<p class="quiz-muted">Réponds à ton rythme : la session n’impose aucun nombre de questions.</p>'+
 '<div class="quiz-card"><p class="quiz-mode">'+mode+'</p><h3>'+escape(q.prompt)+'</h3><fieldset class="quiz-options"><legend class="sr-only">Choix de réponse</legend>'+options+'</fieldset>'+
 '<p id="quizError" class="quiz-error" role="alert" hidden>Choisis au moins une proposition.</p>'+feedback+
 '<div class="quiz-actions">'+(answered?'<button class="quiz-primary" id="quizNext">'+(index+1===session.questionIds.length?'Voir le bilan':'Question suivante')+'</button>':'<button class="quiz-primary" id="quizSubmit">Valider</button>')+
 '<button class="quiz-secondary" id="quizPause">Pause</button>'+(answered&&index+1<session.questionIds.length?'<button class="quiz-secondary" id="quizFinish">Terminer et voir mon bilan</button>':'')+'</div></div>');
 const submit=document.getElementById('quizSubmit');
 if(submit)submit.onclick=()=>{
  const selected=[...root.querySelectorAll('input[name="quiz-answer"]:checked')].map(el=>el.value);
  if(!selected.length){document.getElementById('quizError').hidden=false;return}
  try{
   const current=applyAnswer(progress.current,q,selected);
   if(!persist({...progress,current}))return;
   renderQuestion();renderAccount();
  }catch(e){let el=document.getElementById('quizError');el.textContent=e.message;el.hidden=false}
 };
 const next=document.getElementById('quizNext');
 if(next)next.onclick=()=>{
  if(index+1===session.questionIds.length){
   const completed=completeSession(progress,session,bank);
   if(!persist(completed.progress))return;
   lastReport=completed.summary;renderResults();renderAccount();
  }else{
   if(!persist({...progress,current:{...progress.current,cursor:index+1}}))return;
   renderQuestion();
  }
 };
 const finish=document.getElementById('quizFinish');
 if(finish)finish.onclick=()=>{
  const completed=finishSession(progress,progress.current,bank);
  if(!persist(completed.progress))return;
  lastReport=completed.summary;renderResults();renderAccount();
 };
 document.getElementById('quizPause').onclick=()=>{
  if(!persist({...progress,current:{...progress.current,paused:true}}))return;
  paused=true;renderMenu();renderAccount();
 };
}
function renderResults(){
 const sum=lastReport;if(!sum){renderMenu();return}
 const list=sum.notions.map(n=>'<li><strong>'+escape(n.label)+'</strong><span>'+n.correct+' / '+n.done+'</span></li>').join('');
 const errors=sum.mistakes.length?'<h3>À retravailler</h3>'+sum.mistakes.slice(0,15).map(n=>'<div class="quiz-mistake"><strong>'+escape(n.notion)+'</strong><p>'+escape(n.explanation)+'</p></div>').join(''):'<p>Aucune erreur dans cette session de test.</p>';
 page('Bilan de révision','Une réponse multiple est exacte uniquement si toutes les bonnes propositions et aucune mauvaise ont été sélectionnées.',
 '<div class="quiz-score"><strong>'+sum.correct+' / '+sum.total+'</strong><span>'+sum.percent+' %</span></div><h3>Par notion</h3><ul class="quiz-concepts">'+list+'</ul>'+errors+
 '<p class="quiz-muted">Une réponse erronée isolée ne suffit pas à conclure à une notion non maîtrisée. L’adaptation s’appuie sur plusieurs tentatives.</p><button id="quizAgain" class="quiz-primary">Nouvelle session</button>');
 document.getElementById('quizAgain').onclick=()=>{lastReport=null;renderMenu()};
}
function renderAccount(){
 let holder=document.getElementById('guestProgress');
 if(!holder){holder=document.createElement('section');holder.id='guestProgress';holder.className='quiz-card quiz-account';account.querySelector('.helpgrid')?.insertAdjacentElement('afterend',holder)}
 if(!holder)return;
 const info=progressSummary(progress),last=progress.history?.at(-1);
 holder.innerHTML='<h3>Ma progression — invité</h3><p>Suivi local, sans inscription. L’historique n’est pas encore synchronisé sur le serveur.</p>'+
 '<div class="quiz-stats"><span>'+info.sessions+' session(s)</span><span>'+info.answered+' réponse(s)</span><span>'+info.notions+' notion(s)</span></div>'+
 (last?'<p>Dernière session : '+escape(last.correct)+' / '+escape(last.total)+' réponses exactes.</p>':'<p>Commence un quiz pour enregistrer ta première session.</p>')+
 (info.unfinished?'<p><strong>Une session peut être reprise depuis l’onglet Quiz.</strong></p>':'')+
 '<div class="quiz-actions"><button id="guestExport" class="quiz-secondary">Exporter ma progression</button><button id="guestClear" class="quiz-secondary quiz-danger">Effacer ma progression quiz</button></div>';
 document.getElementById('guestExport').onclick=()=>{
  const url=URL.createObjectURL(new Blob([JSON.stringify(progress,null,2)],{type:'application/json'}));
  const a=document.createElement('a');a.href=url;a.download='holberton-progression-invite.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
 };
 document.getElementById('guestClear').onclick=()=>{
  if(!confirm('Supprimer uniquement les résultats quiz de ce navigateur ? Tes favoris et ton thème restent intacts.'))return;
  if(!persist(emptyProgress()))return;
  lastReport=null;paused=false;renderAccount();if(isQuiz())renderMenu();
 };
}
function render(){
 if(!isQuiz())return;
 if(loading){page('Chargement des quiz','Préparation des questions…','<p role="status">Chargement</p>');return}
 if(error){page('Quiz indisponible',error,'<button id="quizRetry" class="quiz-primary">Réessayer</button>');document.getElementById('quizRetry').onclick=load;return}
 if(lastReport){renderResults();return}
 if(progress.current&&!paused&&!progress.current.paused){renderQuestion();return}
 renderMenu();
}
async function load(){
 loading=true;error='';render();
 try{
  const urls=[new URL('../docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json',import.meta.url),new URL('questions-variadiques.json',import.meta.url)];
  const response=await Promise.all(urls.map(url=>fetch(url,{cache:'no-cache'})));
  if(response.some(r=>!r.ok))throw Error('Les fichiers de questions ne sont pas disponibles.');
  const [pointer,varia]=await Promise.all(response.map(r=>r.json()));
  bank=combineCandidates(pointer,varia);checkBank(bank);
  if(progress.current?.questionIds?.some(id=>!findQuestion(id)))progress.current=null;
 }catch(e){error=e.message||String(e)}
 loading=false;render();renderAccount();
}
window.addEventListener('hashchange',()=>{if(isQuiz())render();if(location.hash.split('/')[0]==='#compte')renderAccount()});
function reloadLocalProgress(){
 progress=readProgress(localStorage);
 paused=!!progress.current?.paused;
 lastReport=null;
 renderAccount();
 render();
}
// Le chargement depuis un compte doit aussi remplacer l'état en mémoire du moteur.
window.addEventListener('holberton:quiz:reload',reloadLocalProgress);
// Un autre onglet peut mettre à jour le même historique invité.
window.addEventListener('storage',event=>{
 if(event.key==='holberton-quiz-guest-v1')reloadLocalProgress();
});
renderAccount();load();
import {readProgress,writeProgress,emptyProgress,checkBank,combineCandidates,selectQuestions,shuffleOptionIds,newSession,applyAnswer,skipAnswer,completeSession,finishSession,progressSummary} from './core.mjs';
const root=document.getElementById('quiz'),account=document.getElementById('account');
if(!root||!account)throw Error('Pages Compte et Quiz absentes.');
// Nettoyer uniquement les paramètres de provenance ajoutés par des liens ChatGPT.
const cleanUrl=new URL(location.href);
let removedTracking=false;
for(const key of ['source','utm_source']){
 if(cleanUrl.searchParams.has(key)&&/^(?:gpt|chatgpt)/i.test(cleanUrl.searchParams.get(key))){
  cleanUrl.searchParams.delete(key);
  removedTracking=true;
 }
}
if(removedTracking)history.replaceState(history.state,'',cleanUrl.pathname+cleanUrl.search+cleanUrl.hash);
// Aide d'affichage distincte du corpus d'origine : clés de correction inchangées.
let pedagogicHelp={};
try{pedagogicHelp=JSON.parse(document.getElementById('quiz-aide-bank')?.textContent||'{}').questions||{};}catch{}
let bank=[],progress=readProgress(localStorage),loading=true,error='',families=null,paused=false,lastReport=null,lastReviewedSession=null;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const formatInline=s=>escape(s).replace(/\x60([^\x60]+)\x60/g,'<code>$1</code>');
const isQuiz=()=>location.hash.split('/')[0]==='#quiz';
const isAccountActive=()=>document.documentElement.dataset.holbertonAccount==='connected';
const useAdaptivePriority=()=>isAccountActive()&&progress.adaptiveEnabled!==false;
const feedbackMode=mode=>mode==='end'?'end':'immediate';
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
function page(title,sub,body,counter){
 const count=counter===undefined?(bank.length?bank.length+' questions':''):counter;
 root.innerHTML='<div class="quiz-app"><header class="quiz-heading"><div class="quiz-heading-top"><span class="quiz-kicker">RÉVISION C · QUIZ</span>'+
  (count?'<span class="quiz-question-count" aria-label="Progression du quiz">'+escape(count)+'</span>':'')+
  '</div><h2>'+escape(title)+'</h2><p>'+escape(sub)+'</p></header>'+body+'</div>';
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
 const timingControl=isAccountActive()?
  '<p class="quiz-muted quiz-timing-note">Le moment d’affichage des corrigés se règle dans l’onglet Compte.</p>':
  '<label for="quizFeedbackMode">Afficher les réponses et explications'+
  '<select id="quizFeedbackMode"><option value="immediate">Après chaque question (par défaut)</option><option value="end">À la fin de la session</option></select></label>';
 page('Réviser librement','55 questions sur argc/argv et stdarg.h. Aucune durée ni quantité imposée : termine ta session quand tu veux. '+(useAdaptivePriority()?'Les notions difficiles sont privilégiées.':'Les questions sont tirées au sort sans priorité adaptative.'),
 (running?'<div class="quiz-card"><strong>Session enregistrée</strong><p>'+Object.keys(progress.current.answers||{}).length+' réponse(s) déjà enregistrée(s).</p><button id="quizResume" class="quiz-primary">Reprendre</button></div>':'')+
 '<div class="quiz-card quiz-start"><fieldset class="quiz-theme-selection"><legend>Thèmes à réviser (un ou plusieurs)</legend>'+[...new Set(bank.map(q=>q.family))].map(id=>'<label><input type="checkbox" name="quizTheme" value="'+escape(id)+'" '+(!families||families.includes(id)?'checked':'')+'> '+escape(({argc:'argc et argv',stdarg:'stdarg.h et fonctions variadiques'})[id]||id)+'</label>').join('')+'</fieldset><p id="quizThemeError" class="quiz-error" role="alert" hidden>Sélectionne au moins un thème.</p>'+timingControl+
 '<p class="quiz-muted">Pas de nombre de questions prédéfini : tu peux faire une pause ou afficher ton bilan après chaque réponse.</p>'+
 '<button class="quiz-primary" id="quizStart">Démarrer</button></div>'+
 '<div class="quiz-stats"><span>'+info.sessions+' session(s)</span><span>'+info.answered+' question(s) traitée(s)</span><span>'+info.notions+' notion(s) révisée(s)</span></div>'+
 '<p class="quiz-muted">Sans compte : tes sessions et résultats sont sauvegardés sur cet appareil, dans ce navigateur. Tu peux les exporter depuis Compte.</p>');
 const themeBoxes=[...root.querySelectorAll('input[name="quizTheme"]')];
 const updateAvailable=()=>{
  const selected=new Set(themeBoxes.filter(input=>input.checked).map(input=>input.value));
  const count=bank.filter(q=>selected.has(q.family)).length;
  const indicator=root.querySelector('.quiz-question-count');
  if(indicator)indicator.textContent=count+' question'+(count>1?'s':'')+' disponible'+(count>1?'s':'');
  document.getElementById('quizThemeError').hidden=selected.size>0;
 };
 themeBoxes.forEach(input=>input.addEventListener('change',updateAvailable));
 updateAvailable();
 const timing=document.getElementById('quizFeedbackMode');
 if(timing){
  timing.value=feedbackMode(progress.feedbackMode);
  timing.onchange=()=>{
   if(!persist({...progress,feedbackMode:feedbackMode(timing.value)}))timing.value=feedbackMode(progress.feedbackMode);
  };
 }
 document.getElementById('quizStart').onclick=()=>{
  const chosen=themeBoxes.filter(input=>input.checked).map(input=>input.value);
  if(!chosen.length){document.getElementById('quizThemeError').hidden=false;return}
  if(progress.current&&!confirm('Remplacer la session non terminée ?'))return;
  const available=bank.filter(q=>chosen.includes(q.family));
  const selection=selectQuestions(bank,{families:chosen,amount:available.length,stats:progress.stats,seen:progress.seen,adaptive:useAdaptivePriority()});
  if(!persist({...progress,current:newSession(selection,chosen,new Date(),Math.random,feedbackMode(progress.feedbackMode),useAdaptivePriority())}))return;
  families=[...chosen];
  paused=false;lastReport=null;lastReviewedSession=null;renderQuestion();renderAccount();
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
 const showAtEnd=feedbackMode(session.feedbackMode)==='end';
 // Une même session conserve l'ordre de ses choix, y compris après pause ou rechargement.
 const ids=q.options.map(option=>option.id);
 let order=session.optionOrder?.[q.id];
 if(!Array.isArray(order)||order.length!==ids.length||new Set(order).size!==ids.length||!order.every(id=>ids.includes(id))){
  order=shuffleOptionIds(q.options);
  session={...session,optionOrder:{...session.optionOrder,[q.id]:order}};
  if(!persist({...progress,current:session}))return;
 }
 const help=pedagogicHelp[q.id]||{};
 const optionById=new Map(q.options.map(option=>[option.id,option]));
 const correctIds=new Set(q.correct_option_ids);
 const given=session.answers[q.id],answered=!!given,mode=q.answer_mode==='single'?'Une seule bonne réponse':'Plusieurs bonnes réponses';
 const options=order.map((id,position)=>{
  const o=optionById.get(id);
  const selected=given?.selected?.includes(o.id)||false,correct=correctIds.has(o.id);
  const cls=answered&&!showAtEnd?(correct?' correct':selected?' incorrect':''):'';
  return '<label class="quiz-choice'+cls+'"><input name="quiz-answer" type="'+(q.answer_mode==='single'?'radio':'checkbox')+'" value="'+escape(o.id)+'" '+(selected?'checked ':'')+(answered?'disabled':'')+'><b>'+String.fromCharCode(65+position)+'</b><span>'+formatInline(o.text)+'</span></label>';
 }).join('');
 const correctOptions=order.filter(id=>correctIds.has(id)).map(id=>{
  const position=order.indexOf(id),o=optionById.get(id);
  return '<li><strong>'+String.fromCharCode(65+position)+'.</strong> '+formatInline(o.text)+'</li>';
 }).join('');
 const explanations=order.map((id,position)=>{
  const isCorrect=correctIds.has(id),label=String.fromCharCode(65+position);
  const reason=help.feedback?.[id]||q.explanation;
  return '<li class="'+(isCorrect?'quiz-reason-good':'quiz-reason-bad')+'"><strong>'+label+' — '+(isCorrect?'Correcte':'Incorrecte')+' :</strong> '+formatInline(reason)+'</li>';
 }).join('');
 const detailed=given&&!given.correct&&!showAtEnd?
  '<div class="quiz-review-detail"><h4>'+(given.skipped?'Voici les bonnes réponses :':'Réponse(s) attendue(s) :')+'</h4><ul class="quiz-correct-answers">'+correctOptions+'</ul><h4>Explication de chaque proposition</h4><ul class="quiz-option-reasons">'+explanations+'</ul></div>':'';
 const feedback=answered?(showAtEnd?
  '<div class="quiz-feedback quiz-pending" role="status"><strong>Réponse enregistrée.</strong><p>Les bonnes réponses et les explications apparaîtront dans ton bilan de fin de session.</p></div>':
  '<div class="quiz-feedback '+(given.correct?'quiz-good':'quiz-bad')+'" role="status"><strong>'+
  (given.skipped?'Question passée : tu as indiqué « Je ne sais pas ».':given.correct?'Réponse exacte.':'Réponse fausse ou incomplète.')+
  '</strong><p>'+formatInline(q.explanation)+'</p>'+detailed+linkCourse(q)+'</div>'):'';
 page('Question '+(index+1),q.notion,
 '<p class="quiz-muted">Prends ton temps : tu peux répondre, indiquer « Je ne sais pas » ou mettre la session en pause.</p>'+
 '<div class="quiz-card"><p class="quiz-mode">'+mode+'</p><h3 class="quiz-question-title">'+formatInline(help.prompt||q.prompt)+'</h3><fieldset class="quiz-options"><legend class="sr-only">Choix de réponse</legend>'+options+'</fieldset>'+
 (answered?'':'<label class="quiz-unknown"><input type="checkbox" id="quizDontKnow"> <span>Je ne sais pas</span></label><p class="quiz-muted quiz-unknown-help">'+(showAtEnd?'Ta réponse sera enregistrée sans dévoiler le corrigé avant la fin.':'Afficher le corrigé avant de passer à la question suivante.')+'</p>')+
 '<p id="quizError" class="quiz-error" role="alert" hidden>Choisis une proposition ou coche « Je ne sais pas ».</p>'+feedback+
 '<div class="quiz-actions">'+(answered?'<button class="quiz-primary" id="quizNext">'+(index+1===session.questionIds.length?'Voir le bilan':'Question suivante')+'</button>':'<button class="quiz-primary" id="quizSubmit">Valider</button>')+
 '<button class="quiz-secondary" id="quizPause">Pause</button>'+(answered&&index+1<session.questionIds.length?'<button class="quiz-secondary" id="quizFinish">Terminer et voir mon bilan</button>':'')+'</div></div>',
 'Question '+(index+1)+' / '+session.questionIds.length);
 const submit=document.getElementById('quizSubmit');
 const unknown=document.getElementById('quizDontKnow');
 if(unknown)unknown.onchange=()=>{
  for(const input of root.querySelectorAll('.quiz-choice input')){
   if(unknown.checked)input.checked=false;
   input.disabled=unknown.checked;
  }
  if(submit)submit.textContent=unknown.checked?(showAtEnd?'Enregistrer sans réponse':'Voir la correction'):'Valider';
  document.getElementById('quizError').hidden=true;
 };
 if(submit)submit.onclick=()=>{
  const skipped=!!unknown?.checked;
  const selected=[...root.querySelectorAll('input[name="quiz-answer"]:checked')].map(el=>el.value);
  if(!skipped&&!selected.length){document.getElementById('quizError').hidden=false;return}
  try{
   const current=skipped?skipAnswer(progress.current,q):applyAnswer(progress.current,q,selected);
   if(!persist({...progress,current}))return;
   renderQuestion();renderAccount();
  }catch(e){let el=document.getElementById('quizError');el.textContent=e.message;el.hidden=false}
 };
 const next=document.getElementById('quizNext');
 if(next)next.onclick=()=>{
  if(index+1===session.questionIds.length){
   const completed=completeSession(progress,session,bank);
   if(!persist(completed.progress))return;
   lastReport=completed.summary;lastReviewedSession=session;renderResults();renderAccount();
  }else{
   if(!persist({...progress,current:{...progress.current,cursor:index+1}}))return;
   renderQuestion();
  }
 };
 const finish=document.getElementById('quizFinish');
 if(finish)finish.onclick=()=>{
  // Conserver les réponses pour le bilan AVANT de vider current dans la progression.
  const reviewedSession=progress.current;
  const completed=finishSession(progress,reviewedSession,bank);
  if(!persist(completed.progress))return;
  lastReport=completed.summary;lastReviewedSession=reviewedSession;renderResults();renderAccount();
 };
 document.getElementById('quizPause').onclick=()=>{
  if(!persist({...progress,current:{...progress.current,paused:true}}))return;
  paused=true;renderMenu();renderAccount();
 };
}
function renderResults(){
 const sum=lastReport;if(!sum){renderMenu();return}
 const list=sum.notions.map(n=>'<li><strong>'+escape(n.label)+'</strong><span>'+n.correct+' / '+n.done+'</span></li>').join('');
 const showEndReview=lastReviewedSession&&feedbackMode(lastReviewedSession.feedbackMode)==='end';
 const errors=!showEndReview?
  (sum.mistakes.length?'<h3>À retravailler</h3>'+sum.mistakes.slice(0,15).map(n=>'<div class="quiz-mistake"><strong>'+escape(n.notion)+'</strong><p>'+formatInline(n.explanation)+'</p></div>').join(''):'<p>Aucune erreur dans cette session.</p>'):'';
 const review=showEndReview?'<h3>Corrigé complet de ta session</h3><p class="quiz-muted">Ouvre chaque question pour retrouver les bonnes réponses et leur justification.</p>'+
  lastReviewedSession.questionIds.map((id,index)=>{
   const q=findQuestion(id),entry=lastReviewedSession.answers?.[id];
   if(!q||!entry)return '';
   const help=pedagogicHelp[id]||{},selected=new Set(entry.selected||[]);
   const correctIds=new Set(q.correct_option_ids);
   const optionIds=lastReviewedSession.optionOrder?.[id]||q.options.map(o=>o.id);
   const byId=new Map(q.options.map(o=>[o.id,o]));
   const status=entry.skipped?'Je ne sais pas':entry.correct?'Réponse exacte':'À revoir';
   const given=entry.skipped?'Je ne sais pas':optionIds.filter(id=>selected.has(id)).map(id=>formatInline(byId.get(id)?.text)).join(' ; ');
   const correct=optionIds.filter(id=>correctIds.has(id)).map(id=>'<li>'+formatInline(byId.get(id)?.text)+'</li>').join('');
   const details=optionIds.map(id=>{
    const reason=help.feedback?.[id]||q.explanation;
    return '<li class="'+(correctIds.has(id)?'quiz-reason-good':'quiz-reason-bad')+'"><strong>'+
     (correctIds.has(id)?'Correcte':'Incorrecte')+' :</strong> '+formatInline(byId.get(id)?.text)+' — '+formatInline(reason)+'</li>';
   }).join('');
   return '<details class="quiz-review-question"><summary>Question '+(index+1)+' — '+escape(q.notion)+' : '+status+'</summary>'+
    '<div class="quiz-review-content"><h4>'+formatInline(help.prompt||q.prompt)+'</h4>'+
    '<p><strong>Ta réponse :</strong> '+(given||'Aucune')+'</p><h4>Bonne(s) réponse(s)</h4><ul class="quiz-correct-answers">'+correct+'</ul>'+
    '<p>'+formatInline(q.explanation)+'</p><h4>Pourquoi chaque proposition est-elle juste ou fausse ?</h4>'+
    '<ul class="quiz-option-reasons">'+details+'</ul>'+linkCourse(q)+'</div></details>';
  }).join(''):'';
 page('Bilan de révision','Une réponse multiple est exacte uniquement si toutes les bonnes propositions et aucune mauvaise ont été sélectionnées.',
 '<div class="quiz-score"><strong>'+sum.correct+' / '+sum.total+'</strong><span>'+sum.percent+' %</span></div><h3>Par notion</h3><ul class="quiz-concepts">'+list+'</ul>'+errors+review+
 '<p class="quiz-muted">Une réponse erronée isolée ne suffit pas à conclure à une notion non maîtrisée. L’adaptation s’appuie sur plusieurs tentatives.</p><button id="quizAgain" class="quiz-primary">Nouvelle session</button>',
 sum.total+' questions traitées');
 document.getElementById('quizAgain').onclick=()=>{lastReport=null;lastReviewedSession=null;renderMenu()};
}
function renderAccount(){
 let holder=document.getElementById('guestProgress');
 if(!holder){holder=document.createElement('section');holder.id='guestProgress';holder.className='quiz-card quiz-account';account.querySelector('.helpgrid')?.insertAdjacentElement('afterend',holder)}
 if(!holder)return;
 const info=progressSummary(progress),last=progress.history?.at(-1);
 holder.innerHTML='<h3>'+(isAccountActive()?'Ma progression — appareil connecté':'Ma progression — invité')+'</h3><p>Tes sessions et résultats sont sauvegardés sur cet appareil, dans ce navigateur.'+(isAccountActive()?' La synchronisation dépend des réglages de ton compte.':' Ils ne sont pas synchronisés entre appareils.')+'</p>'+
 '<div class="quiz-stats"><span>'+info.sessions+' session(s)</span><span>'+info.answered+' réponse(s)</span><span>'+info.notions+' notion(s)</span></div>'+
 (last?'<p>Dernière session : '+escape(last.correct)+' / '+escape(last.total)+' réponses exactes.</p>':'<p>Commence un quiz pour enregistrer ta première session.</p>')+
 (info.unfinished?'<p><strong>Une session peut être reprise depuis l’onglet Quiz.</strong></p>':'')+
 '<div class="quiz-feedback-settings"><label for="accountQuizFeedbackMode">Afficher les réponses et explications</label>'+
 '<select id="accountQuizFeedbackMode"><option value="immediate">Après chaque question</option><option value="end">À la fin de la session</option></select>'+
 '<p class="quiz-muted">Ce réglage s’applique aux prochaines sessions. Il est sauvegardé dans ta progression'+(isAccountActive()?' et peut être synchronisé avec ton compte.': ' sur cet appareil.')+'</p></div>'+
 (isAccountActive()?
  '<div class="quiz-feedback-settings quiz-adaptive-settings"><label class="quiz-adaptive-label" for="accountQuizAdaptiveEnabled"><input type="checkbox" id="accountQuizAdaptiveEnabled"> Priorité aux notions en difficulté</label><p class="quiz-muted">Activée par défaut pour les comptes connectés. Tu peux la désactiver pour obtenir un tirage aléatoire, sans préférence liée à tes erreurs. Le choix s’applique aux prochaines sessions.</p></div>':
  '<p class="quiz-muted">En mode invité, les questions sont tirées au sort sans priorité adaptative.</p>')+
 '<div class="quiz-actions"><button id="guestExport" class="quiz-secondary">Exporter ma progression</button><button id="guestClear" class="quiz-secondary quiz-danger">Effacer ma progression quiz</button></div>';
 const accountTiming=document.getElementById('accountQuizFeedbackMode');
 accountTiming.value=feedbackMode(progress.feedbackMode);
 accountTiming.onchange=()=>{
  if(!persist({...progress,feedbackMode:feedbackMode(accountTiming.value)})){accountTiming.value=feedbackMode(progress.feedbackMode);return}
  renderAccount();
  if(isQuiz()&&!progress.current)renderMenu();
 };
 const adaptiveCheckbox=document.getElementById('accountQuizAdaptiveEnabled');
 if(adaptiveCheckbox){
  adaptiveCheckbox.checked=progress.adaptiveEnabled!==false;
  adaptiveCheckbox.onchange=()=>{
   if(!persist({...progress,adaptiveEnabled:adaptiveCheckbox.checked})){
    adaptiveCheckbox.checked=progress.adaptiveEnabled!==false;return;
   }
   renderAccount();
   if(isQuiz()&&!progress.current)renderMenu();
  };
 }
 document.getElementById('guestExport').onclick=()=>{
  const url=URL.createObjectURL(new Blob([JSON.stringify(progress,null,2)],{type:'application/json'}));
  const a=document.createElement('a');a.href=url;a.download='holberton-progression-invite.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
 };
 document.getElementById('guestClear').onclick=()=>{
  if(!confirm('Supprimer uniquement les résultats quiz de ce navigateur ? Tes favoris et ton thème restent intacts.'))return;
  if(!persist(emptyProgress()))return;
  lastReport=null;lastReviewedSession=null;paused=false;renderAccount();if(isQuiz())renderMenu();
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
  const embeddedPointer=document.getElementById('quiz-argc-bank');
  const embeddedVaria=document.getElementById('quiz-variadic-bank');
  let pointer,varia;
  if(embeddedPointer&&embeddedVaria){
   // Le serveur historique ne déploie que index.html : les deux banques y sont intégrées.
   pointer=JSON.parse(embeddedPointer.textContent);
   varia=JSON.parse(embeddedVaria.textContent);
  }else{
   // Conserve la compatibilité du module source avec un serveur de développement complet.
   const urls=[new URL('../docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json',import.meta.url),new URL('questions-variadiques.json',import.meta.url)];
   const response=await Promise.all(urls.map(url=>fetch(url,{cache:'no-cache'})));
   if(response.some(r=>!r.ok))throw Error('Les fichiers de questions ne sont pas disponibles.');
   [pointer,varia]=await Promise.all(response.map(r=>r.json()));
  }
  bank=combineCandidates(pointer,varia);checkBank(bank);
  if(progress.current?.questionIds?.some(id=>!findQuestion(id)))progress.current=null;
 }catch(e){error=e.message||String(e)}
 loading=false;render();renderAccount();
}
window.addEventListener('hashchange',()=>{if(isQuiz())render();if(location.hash.split('/')[0]==='#compte')renderAccount()});
function reloadLocalProgress(){
 progress=readProgress(localStorage);
 paused=!!progress.current?.paused;
 lastReport=null;lastReviewedSession=null;
 renderAccount();
 render();
}
// Le chargement depuis un compte doit aussi remplacer l'état en mémoire du moteur.
window.addEventListener('holberton:quiz:reload',reloadLocalProgress);
// L’application de comptes (PR #26) signale les changements de connexion sur <html>.
window.addEventListener('holberton:account:status',()=>{
 renderAccount();
 if(isQuiz()&&(!progress.current||paused||progress.current.paused))renderMenu();
});
// Un autre onglet peut mettre à jour le même historique invité.
window.addEventListener('storage',event=>{
 if(event.key==='holberton-quiz-guest-v1')reloadLocalProgress();
});
renderAccount();load();
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readProgress,writeProgress,emptyProgress,guestResumeOnly,combineCandidates,checkBank,selectQuestions,shuffleOptionIds,newSession,applyAnswer,skipAnswer,completeSession,finishSession,matchesAnswer,progressSummary} from '../quiz/core.mjs';
const dir=new URL('../',import.meta.url);
const argc=JSON.parse(readFileSync(new URL('docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json',dir),'utf8'));
const varia=JSON.parse(readFileSync(new URL('quiz/questions-variadiques.json',dir),'utf8'));
const reviewed=JSON.parse(readFileSync(new URL('quiz/questions-revisees.json',dir),'utf8'));
const historical=combineCandidates(argc,varia);
const bank=combineCandidates(argc,varia,reviewed);
const help=JSON.parse(readFileSync(new URL('quiz/aide-pedagogique.json',dir),'utf8'));

assert.equal(historical.length,55,'25 questions argc + 30 questions stdarg attendues');
assert.equal(bank.filter(q=>q.family==='argc').length,25);
assert.equal(bank.filter(q=>q.family==='stdarg').length,30);
assert.equal(new Set(historical.map(q=>q.notion_id)).size,11,'Les onze notions prioritaires doivent être couvertes');
assert.ok(historical.every(q=>q.review_status==='a_verifier'),'Ne jamais marquer comme validée une question encore candidate');
assert.ok(bank.every(q=>q.source_urls[0].startsWith('https://revision-hbtn.soleiljaune.be/#cours/')));
assert.ok(bank.some(q=>q.options.length===5),'Questions à cinq propositions attendues');
assert.ok(bank.some(q=>q.correct_option_ids.length===3),'Variation des bonnes réponses requise');
assert.ok(bank.some(q=>q.correct_option_ids.length===1)&&bank.some(q=>q.correct_option_ids.length===2));
assert.equal(checkBank(bank),true);
assert.equal(Object.keys(help.questions).length,bank.length,'Toutes les questions doivent être reformulées.');
for(const q of bank){
 const explanations=help.questions[q.id];
 assert.ok(explanations?.prompt?.length>=30,'Reformulation absente : '+q.id);
 assert.deepEqual(Object.keys(explanations.feedback||{}).sort(),q.options.map(o=>o.id).sort(),
  'Chaque proposition doit être justifiée : '+q.id);
}
assert.equal(historical.reduce((n,q)=>n+Object.keys(help.questions[q.id].feedback).length,0),226,
 '226 justifications indépendantes des positions sont requises.');

// Relecture éditoriale : aucun corrigé ne doit apparaître dans le dossier aveugle.
assert.equal(historical.reduce((n,q)=>n+q.options.length,0),226,'226 propositions attendues.');
assert.equal(historical.filter(q=>q.answer_mode==='multiple').length,11,'11 questions multiples attendues.');
for(const question of historical){
 const regex=question.answer_mode==='single'?/une seule (?:bonne )?réponse correcte/i:/plusieurs (?:bonnes )?réponses correctes/i;
 assert.ok(regex.test(question.prompt),'Mode explicite absent : '+question.id);
}
const blind=readFileSync(new URL('docs/quiz/relecture-20261119/QUESTIONS_SANS_CORRIGES.md',dir),'utf8');
assert.equal((blind.match(/^### (?:V1-N09_|VAR-08-)/gm)||[]).length,55,'55 questions requises dans le document aveugle.');
for(const q of historical){
 assert.ok(blind.includes('### '+q.id+' — '),'Question absente du dossier aveugle : '+q.id);
 assert.ok(blind.includes(q.prompt),'Énoncé aveugle désynchronisé : '+q.id);
 for(const option of q.options){
  assert.ok(blind.includes('- **'+option.id+'.** '+option.text),'Option aveugle désynchronisée : '+q.id+' '+option.id);
 }
}
assert.ok(!blind.includes('correct_option_ids')&&!blind.includes('Corrigé candidat :'),'Les corrigés ont fui dans le dossier aveugle.');
const findQ=id=>bank.find(q=>q.id===id);
assert.match(findQ('V1-N09_073-01').prompt,/\.\/outil un deux trois/,'Question argc toujours ambiguë.');
assert.deepEqual(findQ('VAR-08-031-03').correct_option_ids,['A','C','D'],
 'En C89, un paramètre fixe est requis : la réponse D est vraie.');
assert.deepEqual(findQ('VAR-08-032-04').correct_option_ids,['A','C','D'],
 'La copie de va_list par affectation ne doit pas être acceptée comme portable.');
assert.deepEqual(findQ('VAR-08-033-05').correct_option_ids,['A'],
 'La lecture des arguments int et double doit respecter les promotions.');
assert.deepEqual(findQ('VAR-08-036-04').correct_option_ids,['A'],
 'La séquence va_copy / va_end en C99 doit être correcte.');
// Preuve exhaustive du mélange de Fisher-Yates (tirages indépendants et uniformes) :
 // n! permutations, chaque réponse identifiable en position p avec probabilité 1/n,
 // et chaque ensemble de k positions correctes avec probabilité 1/C(n,k).
const fact=n=>n<=1?1:n*fact(n-1);
const comb=(n,k)=>fact(n)/(fact(k)*fact(n-k));
function allOrders(n){
 const options='ABCDE'.slice(0,n).split('').map(id=>({id,text:id}));
 const orders=[];
 function visit(i,rolls){
  if(i===0){
   let index=0;
   orders.push(shuffleOptionIds(options,()=>rolls[index++]));
   return;
  }
  for(let j=0;j<=i;j++)visit(i-1,[...rolls,(j+0.5)/(i+1)]);
 }
 visit(n-1,[]);
 assert.equal(orders.length,fact(n));
 assert.equal(new Set(orders.map(x=>x.join(','))).size,fact(n),'Le mélange doit produire chaque permutation une fois.');
 assert.deepEqual(options.map(x=>x.id),'ABCDE'.slice(0,n).split(''),'Les données sources ne doivent pas être modifiées.');
 return orders;
}
for(const n of [3,4,5]){
 const orders=allOrders(n),available='ABCDE'.slice(0,n).split('');
 for(const id of available){
  for(let position=0;position<n;position++){
   assert.equal(orders.filter(order=>order[position]===id).length,fact(n)/n,
    'Chaque proposition doit avoir exactement 1/'+n+' de chance par position.');
  }
 }
 for(let k=1;k<n;k++){
  const correct=new Set(available.slice(0,k)),sets=new Map();
  for(const order of orders){
   const positions=order.flatMap((id,i)=>correct.has(id)?[i]:[]).join(',');
   sets.set(positions,(sets.get(positions)||0)+1);
  }
  assert.equal(sets.size,comb(n,k),'Toutes les répartitions des '+k+' réponses doivent être possibles.');
  assert.ok([...sets.values()].every(count=>count===fact(n)/comb(n,k)),
   'La répartition des ensembles de '+k+' bonnes réponses doit être uniforme.');
  for(let position=0;position<n;position++){
   assert.equal(orders.filter(order=>correct.has(order[position])).length,fact(n)*k/n,
    'Une position doit avoir une probabilité k/n de contenir une bonne réponse.');
  }
 }
}
// Le moteur accepte aussi une question multiple à seulement 3 propositions.
// Le corpus GLM actuellement revu reste volontairement inchangé (4 ou 5 choix).
const example=bank.find(q=>q.options.length===5);
const makeSample=(id,n,correct)=>({
 ...example,id,options:example.options.slice(0,n),answer_mode:correct.length===1?'single':'multiple',
 correct_option_ids:correct,
 prompt:'Question synthétique de test ('+(correct.length===1?'Une seule réponse correcte.':'Plusieurs réponses correctes.')+')'
});
const threeMulti=makeSample('TEST-THREE-MULTI',3,['A','C']);
const threeSingle=makeSample('TEST-THREE-SINGLE',3,['B']);
const fourMulti=makeSample('TEST-FOUR-MULTI',4,['A','B','D']);
const fiveMulti=makeSample('TEST-FIVE-MULTI',5,['A','B','C','D']);
assert.equal(checkBank([threeMulti,threeSingle,fourMulti,fiveMulti]),true,
 'Les formats à 3, 4 et 5 choix, avec 1 à 4 bonnes réponses appropriées, sont acceptés.');
assert.throws(()=>checkBank([{...threeMulti,id:'TWO-OPTIONS',options:threeMulti.options.slice(0,2),correct_option_ids:['A']}]),/Choix incohérents/,
 'Deux propositions doivent rester interdites.');
assert.throws(()=>checkBank([{...threeMulti,id:'ALL-CORRECT',correct_option_ids:['A','B','C']}]),/Réponses multiples invalides/,
 'Au moins une option incorrecte est nécessaire pour un QCM multiple.');
const threeOrder=newSession([threeMulti],'all',new Date('2026-11-20T08:00:00Z'),()=>0.42);
assert.equal(threeOrder.optionOrder[threeMulti.id].length,3,'Le tirage à 3 propositions doit être persisté.');
const threeCorrect=applyAnswer(threeOrder,threeMulti,['C','A']);
assert.equal(threeCorrect.answers[threeMulti.id].correct,true,
 'Deux bonnes réponses parmi trois donnent le point, quel que soit leur ordre.');
const threePartial=applyAnswer(threeOrder,threeMulti,['A']);
assert.equal(threePartial.answers[threeMulti.id].correct,false,
 'Une réponse partielle dans un QCM à trois propositions ne donne pas le point.');
assert.equal(applyAnswer(newSession([fourMulti]),fourMulti,['A','B','D']).answers[fourMulti.id].correct,true);
assert.equal(applyAnswer(newSession([fiveMulti]),fiveMulti,['A','B','C','D']).answers[fiveMulti.id].correct,true);
const sampleQuestion=bank.find(q=>q.options.length===4);
assert.equal(emptyProgress().feedbackMode,'immediate','Invité : correction immédiatement par défaut.');
assert.equal(emptyProgress().adaptiveEnabled,false,'Le tirage aléatoire doit être le défaut pour tous.');
const legacyProgress={...emptyProgress(),adaptiveEnabled:true};
delete legacyProgress.adaptivePreferenceVersion;
const legacyStorage={getItem(){return JSON.stringify(legacyProgress)}};
assert.equal(readProgress(legacyStorage).adaptiveEnabled,false,
 'Un ancien défaut adaptatif ne doit pas activer automatiquement le mode connecté.');
const enabledStorage={getItem(){return JSON.stringify({...emptyProgress(),adaptiveEnabled:true})}};
assert.equal(readProgress(enabledStorage).adaptiveEnabled,true,
 'Le choix explicite d’activer l’adaptation doit être conservé.');
const disabledStorage={getItem(){return JSON.stringify({...emptyProgress(),adaptiveEnabled:false})}};
assert.equal(readProgress(disabledStorage).adaptiveEnabled,false,'Le choix de désactiver l’adaptation doit être préservé.');
const endSession=newSession([sampleQuestion],'all',new Date('2026-11-20T10:00:00Z'),()=>0.5,'end');
assert.equal(endSession.feedbackMode,'end','La session doit figer le mode de correction choisi au démarrage.');
const savedMode={...emptyProgress(),current:endSession,feedbackMode:'end'};
const modeStorage={value:'',setItem(_,value){this.value=value},getItem(){return this.value}};
assert.equal(writeProgress(modeStorage,savedMode),true);
assert.equal(readProgress(modeStorage).feedbackMode,'end','Le réglage de correction doit survivre au rechargement.');
assert.equal(readProgress(modeStorage).current.feedbackMode,'end','Le mode de la session doit survivre au rechargement.');
const answeredEnd=applyAnswer(endSession,sampleQuestion,sampleQuestion.correct_option_ids);
assert.equal(answeredEnd.feedbackMode,'end','La validation ne change pas le mode de correction.');
assert.equal(finishSession(savedMode,answeredEnd,bank).summary.total,1,
 'Les questions avec correction différée doivent rester comptabilisées.');

const skipped=skipAnswer(newSession([sampleQuestion]),sampleQuestion);
assert.equal(skipped.answers[sampleQuestion.id].correct,false,'Je ne sais pas vaut une erreur.');
assert.equal(skipped.answers[sampleQuestion.id].skipped,true,'La réponse inconnue doit être identifiée.');
assert.deepEqual(skipped.answers[sampleQuestion.id].selected,[],'Aucune réponse inventée après Je ne sais pas.');
assert.throws(()=>applyAnswer(skipped,sampleQuestion,sampleQuestion.correct_option_ids),/déjà enregistrée/,
 'La question passée ne doit pas pouvoir être répondue deux fois.');
const skippedFinish=finishSession(emptyProgress(),skipped,bank);
assert.equal(skippedFinish.summary.answered,1,'Une question passée est traitée.');
assert.equal(skippedFinish.summary.correct,0,'Une question passée ne rapporte pas de point.');
assert.equal(skippedFinish.progress.stats[sampleQuestion.notion_id].errors,1,
 'L’adaptation doit considérer le manque de maîtrise.');
const skippedStorage={value:'',setItem(_,v){this.value=v},getItem(){return this.value}};
assert.equal(writeProgress(skippedStorage,{...emptyProgress(),current:skipped}),true);
assert.equal(readProgress(skippedStorage).current.answers[sampleQuestion.id].skipped,true,
 'Le choix Je ne sais pas doit survivre à un rechargement.');

const sessionA=newSession([sampleQuestion],'all',new Date('2026-11-19T15:00:00Z'),()=>0);
const sessionB=newSession([sampleQuestion],'all',new Date('2026-11-19T15:00:00Z'),()=>0.99999);
assert.notDeepEqual(sessionA.optionOrder[sampleQuestion.id],sessionB.optionOrder[sampleQuestion.id],
 'Deux nouvelles sessions doivent pouvoir redistribuer la même question.');
const answeredShuffle=applyAnswer(sessionA,sampleQuestion,[sampleQuestion.correct_option_ids[0]]);
assert.deepEqual(answeredShuffle.optionOrder,sessionA.optionOrder,'La validation ne doit jamais remélanger les propositions.');
assert.equal(answeredShuffle.answers[sampleQuestion.id].correct,sampleQuestion.answer_mode==='single',
 'La notation doit comparer les identifiants, indépendamment de la position.');
const shuffleStorage={data:'',getItem(){return this.data},setItem(_,value){this.data=value}};
assert.equal(writeProgress(shuffleStorage,{...emptyProgress(),current:answeredShuffle}),true);
assert.deepEqual(readProgress(shuffleStorage).current.optionOrder,sessionA.optionOrder,
 'L’ordre des propositions doit persister après rechargement ou synchronisation.');

assert.equal(matchesAnswer(['A','C'],['C','A']),true,'L’ordre des choix ne doit pas modifier le score');
assert.equal(matchesAnswer(['A','C','D'],['A','C']),false,'Cocher une mauvaise réponse ne donne pas le point');
assert.equal(matchesAnswer(['A'],['A','B']),false,'Omettre une réponse ne donne pas le point');
assert.equal(matchesAnswer(['A','B','C','D'],['A','B']),false,'Cocher toutes les réponses ne donne pas le point');
const items=selectQuestions(bank,{family:'all',amount:11,random:()=>0.5,adaptive:true});
assert.equal(items.length,11,'Onze questions sélectionnées');
assert.equal(new Set(items.map(q=>q.notion_id)).size,11,'Diversité des notions en début de session');
const argcOnly=selectQuestions(bank,{family:'argc',amount:100,random:()=>0.5});
assert.equal(argcOnly.length,25);
assert.ok(argcOnly.every(q=>q.family==='argc'));
const stdargOnly=selectQuestions(bank,{families:['stdarg'],amount:100,random:()=>0.5});
assert.equal(stdargOnly.length,30,'Un thème sélectionné doit exclure les autres.');
assert.ok(stdargOnly.every(q=>q.family==='stdarg'));
const both=selectQuestions(bank,{families:['argc','stdarg'],amount:100,random:()=>0.5});
assert.equal(both.length,55,'La sélection simultanée des deux thèmes doit donner toutes les questions.');
assert.equal(selectQuestions(bank,{families:[],amount:100}).length,0,'Une liste vide ne doit rien sélectionner.');
const multiSession=newSession(both,['argc','stdarg'],new Date('2026-11-20T10:45:00Z'),()=>0.42);
assert.deepEqual(multiSession.family,['argc','stdarg'],'Les thèmes doivent être conservés dans la session.');
function seeded(seed){return ()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296)}
const orders=new Set(Array.from({length:12},(_,i)=>selectQuestions(bank,{families:['argc','stdarg'],amount:11,random:seeded(i+1)}).map(q=>q.id).join(',')));
assert.ok(orders.size>=6,'Les premiers tirages de questions doivent changer réellement entre deux sessions.');
const weakId=bank.find(q=>q.family==='argc').notion_id;
const adaptiveStats=Object.fromEntries([...new Set(bank.map(q=>q.notion_id))].map(id=>[id,{attempts:10,errors:id===weakId?10:0}]));
assert.equal(selectQuestions(bank,{families:['argc','stdarg'],amount:1,stats:adaptiveStats,random:seeded(1),adaptive:true})[0].notion_id,weakId,
 'La randomisation ne doit pas supprimer la priorité d’une notion mal maîtrisée.');
const plainA=selectQuestions(bank,{families:['argc','stdarg'],amount:20,random:seeded(42),adaptive:false});
const plainB=selectQuestions(bank,{families:['argc','stdarg'],amount:20,random:seeded(42),adaptive:false,
 stats:adaptiveStats,seen:Object.fromEntries(bank.map(q=>[q.id,99]))});
assert.deepEqual(plainA.map(q=>q.id),plainB.map(q=>q.id),
 'Sans adaptation, les erreurs et le nombre de passages ne doivent pas influer sur le tirage.');
assert.equal(new Set(plainA.map(q=>q.id)).size,plainA.length,
 'Un tirage non adaptatif ne doit pas répéter de question dans la session.');
const plainOrders=new Set(Array.from({length:8},(_,i)=>selectQuestions(bank,{amount:10,random:seeded(i+1),adaptive:false}).map(q=>q.id).join(',')));
assert.ok(plainOrders.size>=6,'Le tirage non adaptatif doit changer d’une session à l’autre.');
const plainSession=newSession(plainA,['argc','stdarg'],new Date('2026-11-20T11:00:00Z'),seeded(1),'immediate',false);
assert.equal(plainSession.adaptiveEnabled,false,'L’absence d’adaptation doit être figée pendant la session.');
const adaptiveSession=newSession(plainA,['argc','stdarg'],new Date('2026-11-20T11:00:00Z'),seeded(1),'immediate',true);
assert.equal(adaptiveSession.adaptiveEnabled,true,'Le mode adaptatif doit être conservé pour la reprise.');
let session=newSession(items,'all',new Date('2026-11-18T12:00:00Z'));
let i=0;
for(const q of items){
 const selected=i++===0?['D'].filter(x=>q.options.some(o=>o.id===x)):[...q.correct_option_ids];
 session=applyAnswer(session,q,selected.length?selected:[q.options[0].id]);
}
assert.equal(Object.keys(session.answers).length,11);
assert.throws(()=>applyAnswer(session,items[0],[items[0].correct_option_ids[0]]),/déjà enregistrée/);
const partialSession={...session,cursor:1};
const early=finishSession(emptyProgress(),partialSession,bank);
assert.equal(early.summary.total,11,'Les réponses déjà données restent comptées même en fin anticipée.');
const cut={...session,answers:Object.fromEntries(Object.entries(session.answers).slice(0,2)),cursor:1};
const earlyCut=finishSession(emptyProgress(),cut,bank);
assert.equal(earlyCut.summary.total,2,'Le bilan libre ne doit pas compter les questions non posées.');
assert.equal(earlyCut.progress.history[0].questionIds.length,2);
assert.throws(()=>finishSession(emptyProgress(),{...session,answers:{}},bank),/au moins une réponse/);
const result=completeSession(emptyProgress(),session,bank);
assert.equal(result.summary.total,11);
assert.equal(result.progress.current,null);
assert.equal(result.progress.history.length,1);
assert.equal(result.progress.history[0].answers[items[0].id].selected.length,1);
assert.equal(progressSummary(result.progress).answered,11);
const memory=new Map();
const storage={getItem:key=>memory.get(key)??null,setItem:(key,val)=>memory.set(key,val)};
assert.equal(writeProgress(storage,result.progress),true);
assert.equal(readProgress(storage).history.length,1,'Historique local persisté');
const visitor=guestResumeOnly(result.progress);
assert.equal(visitor.current,null,'Une session invitée terminée ne reste pas active.');
assert.deepEqual(visitor.history,[],'Un invité ne conserve pas d’historique de résultats.');
assert.deepEqual(visitor.stats,{},'Un invité ne conserve pas de maîtrise par notion.');
assert.deepEqual(visitor.seen,{},'Un invité ne conserve pas le nombre de passages.');
assert.equal(visitor.feedbackMode,'immediate','Les préférences d’un invité ne sont pas conservées.');
const unfinished=guestResumeOnly({...result.progress,current:session,feedbackMode:'end'});
assert.equal(unfinished.current.id,session.id,'Un invité doit pouvoir reprendre un quiz inachevé.');
assert.deepEqual(unfinished.history,[],'Le quiz en cours n’autorise pas un historique invité.');
assert.equal(writeProgress(storage,unfinished),true);
assert.equal(readProgress(storage).current.id,session.id,'La progression temporaire doit survivre au rechargement.');
assert.equal(readProgress(storage).history.length,0,'L’historique doit rester vide après rechargement.');

const html=readFileSync(new URL('index.html',dir),'utf8');
assert.ok(html.includes('id="quiz-inline-module"'),'Le module quiz autonome n’est pas intégré');
assert.ok(html.includes('id="quiz-inline-style"'),'Les styles quiz ne sont pas intégrés');
const embedded=id=>{
 const start='<script id="'+id+'" type="application/json">';
 const i=html.indexOf(start),j=html.indexOf('</script>',i+start.length);
 assert.ok(i>=0&&j>i,'Données quiz intégrées manquantes : '+id);
 return JSON.parse(html.slice(i+start.length,j));
};
assert.deepEqual(embedded('quiz-argc-bank').questions,
 argc.questions.filter(q=>/^V1-N09_07[2-6]-0[1-5]$/.test(q.id)),
 'Le paquet intégré doit contenir exactement les 25 questions argc relues.');
assert.deepEqual(embedded('quiz-reviewed-bank'),reviewed,'Le HTML autonome doit contenir la banque relue.');
const sections=embedded('content-data').sections;
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const families=new Set();
for(const q of reviewed.questions){
 const [si,ii]=q.legacy_notion_key.split(':').map(Number);
 const section=sections[si],item=section?.items[ii];
 assert.ok(item,'Fiche absente : '+q.id);
 assert.equal(q.notion_id,'N'+String(si).padStart(2,'0')+'_'+String(ii).padStart(3,'0'),q.id);
 assert.equal(q.theme,section.title,q.id);
 assert.equal(q.notion,item.term,q.id);
 assert.equal(q.source_urls[0],'https://revision-hbtn.soleiljaune.be/#cours/'+slug(section.title)+'/'+(ii+1)+'-'+slug(item.term),q.id);
 assert.ok(q.candidate_ids?.length,'Le rattachement au brouillon est manquant : '+q.id);
 families.add('chapitre-'+si);
}
assert.equal(families.size,13,'Les treize chapitres des deux banques doivent être représentés.');
for(const family of families){
 const selected=selectQuestions(bank,{family,amount:bank.length});
 assert.ok(selected.length>0&&selected.every(q=>q.family===family),'Tirage du thème '+family);
}
assert.deepEqual(embedded('quiz-aide-bank'),help,'Les explications intégrées doivent correspondre au fichier source.');
assert.ok(html.includes('name="quizTheme"'),'Le quiz publié doit proposer les thèmes multisélection.');
assert.ok(html.includes('id="quizThemeDropdown"')&&html.includes('id="quizThemeSearch"'),
 'La liste déroulante avec recherche doit être intégrée au site autonome.');
assert.ok(html.includes('quizThemeAll')&&html.includes('quizThemeNone'),
 'La sélection globale des thèmes doit être proposée.');
assert.ok(!html.includes('id="quizFamily"'),'L’ancien sélecteur de thème unique doit être supprimé.');
assert.ok(html.includes('id="quizDontKnow"'),'Le formulaire doit offrir Je ne sais pas.');
assert.ok(html.includes('quiz-option-reasons'),'Les corrections détaillées doivent être disponibles.');
assert.ok(html.includes('quiz-question-count'),'Le compteur doit figurer en haut à droite.');
assert.ok(html.includes('quizFeedbackMode')&&html.includes('accountQuizFeedbackMode'),
 'Le mode de correction doit être réglable par un invité ou depuis Compte.');
assert.ok(html.includes('quiz-review-question'),'Les corrigés à la fin doivent présenter chaque question.');
assert.ok(html.includes('accountQuizAdaptiveEnabled'),'Le réglage adaptatif réservé aux comptes doit être intégré au site autonome.');
assert.ok(html.includes('useAdaptivePriority()'),'Le mode invité doit désactiver la priorité des erreurs.');
assert.ok(html.includes('holberton:account:status'),'La connexion doit mettre à jour les réglages visibles.');

assert.deepEqual(embedded('quiz-variadic-bank'),varia,
 'Le paquet intégré doit contenir exactement les 30 questions variadiques relues.');
assert.ok(html.includes('id="accountComingSoon"')&&html.includes('À venir prochainement'),
 'Le compte invité doit afficher seulement son ouverture prochaine.');
assert.ok(!html.includes('id="quizExport"')&&!html.includes('id="quizClear"'),
 'Aucune commande d’export ou d’historique de résultats dans Quiz.');
assert.ok(!html.includes('Dernières sessions</h3>'),
 'La liste des résultats récents ne doit plus apparaître dans Quiz.');
assert.ok(html.includes('account-competencies')&&html.includes('accountTabSettings'),
 'Le tableau personnel et ses paramètres doivent être réservés au compte connecté.');
assert.ok(!html.includes('Tes sessions et résultats sont sauvegardés sur cet appareil, dans ce navigateur.'),
 'Les mentions de stockage superflues doivent être retirées de Quiz et Compte.');
assert.ok(!html.includes('VERSION TEST')&&!html.includes('relecture pédagogique')&&
 !html.includes('La suppression des données locales et la suppression d’un futur compte'),
 'Les anciens avertissements obsolètes ne doivent plus apparaître.');
assert.ok(!html.includes('data-page="favorites"'),'L’onglet principal doit ouvrir Compte et non Favoris');
console.log('Quiz invité : '+bank.length+' questions, score, diversité, sauvegarde et reprise vérifiés.');

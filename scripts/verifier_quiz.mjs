import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readProgress,writeProgress,emptyProgress,combineCandidates,checkBank,selectQuestions,newSession,applyAnswer,completeSession,finishSession,matchesAnswer,progressSummary} from '../quiz/core.mjs';
const dir=new URL('../',import.meta.url);
const argc=JSON.parse(readFileSync(new URL('docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json',dir),'utf8'));
const varia=JSON.parse(readFileSync(new URL('quiz/questions-variadiques.json',dir),'utf8'));
const bank=combineCandidates(argc,varia);
assert.equal(bank.length,55,'25 questions argc + 30 questions stdarg attendues');
assert.equal(bank.filter(q=>q.family==='argc').length,25);
assert.equal(bank.filter(q=>q.family==='stdarg').length,30);
assert.equal(new Set(bank.map(q=>q.notion_id)).size,11,'Les onze notions prioritaires doivent être couvertes');
assert.ok(bank.every(q=>q.review_status==='a_verifier'),'Ne jamais marquer comme validée une question encore candidate');
assert.ok(bank.every(q=>q.source_urls[0].startsWith('https://revision-hbtn.soleiljaune.be/#cours/')));
assert.ok(bank.some(q=>q.options.length===5),'Questions à cinq propositions attendues');
assert.ok(bank.some(q=>q.correct_option_ids.length===3),'Variation des bonnes réponses requise');
assert.ok(bank.some(q=>q.correct_option_ids.length===1)&&bank.some(q=>q.correct_option_ids.length===2));
assert.equal(checkBank(bank),true);
// Relecture éditoriale : aucun corrigé ne doit apparaître dans le dossier aveugle.
assert.equal(bank.reduce((n,q)=>n+q.options.length,0),226,'226 propositions attendues.');
assert.equal(bank.filter(q=>q.answer_mode==='multiple').length,11,'11 questions multiples attendues.');
for(const question of bank){
 const regex=question.answer_mode==='single'?/une seule (?:bonne )?réponse correcte/i:/plusieurs (?:bonnes )?réponses correctes/i;
 assert.ok(regex.test(question.prompt),'Mode explicite absent : '+question.id);
}
const blind=readFileSync(new URL('docs/quiz/relecture-20261119/QUESTIONS_SANS_CORRIGES.md',dir),'utf8');
assert.equal((blind.match(/^### (?:V1-N09_|VAR-08-)/gm)||[]).length,55,'55 questions requises dans le document aveugle.');
for(const q of bank){
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
assert.equal(matchesAnswer(['A','C'],['C','A']),true,'L’ordre des choix ne doit pas modifier le score');
assert.equal(matchesAnswer(['A','C','D'],['A','C']),false,'Cocher une mauvaise réponse ne donne pas le point');
assert.equal(matchesAnswer(['A'],['A','B']),false,'Omettre une réponse ne donne pas le point');
assert.equal(matchesAnswer(['A','B','C','D'],['A','B']),false,'Cocher toutes les réponses ne donne pas le point');
const items=selectQuestions(bank,{family:'all',amount:11,random:()=>0.5});
assert.equal(items.length,11,'Onze questions sélectionnées');
assert.equal(new Set(items.map(q=>q.notion_id)).size,11,'Diversité des notions en début de session');
const argcOnly=selectQuestions(bank,{family:'argc',amount:100,random:()=>0.5});
assert.equal(argcOnly.length,25);
assert.ok(argcOnly.every(q=>q.family==='argc'));
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
const html=readFileSync(new URL('index.html',dir),'utf8');
assert.ok(html.includes('src="./quiz/engine.mjs"'),'Le quiz n’est pas chargé sur la page');
assert.ok(html.includes('href="./quiz/styles.css"'),'CSS quiz non chargé');
assert.ok(!html.includes('data-page="favorites"'),'L’onglet principal doit ouvrir Compte et non Favoris');
console.log('Quiz invité : 55 questions candidates / 11 notions, score exact, diversité, sauvegarde et reprise cohérents.');

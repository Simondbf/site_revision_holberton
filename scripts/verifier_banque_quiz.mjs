import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
const dir=new URL('../docs/quiz/vague1/',import.meta.url);
const files=readdirSync(dir).filter(f=>/^(?:section-\d{2}-.*|questions-application|questions-c-techniques|raisonnement-domaines|questions-scanf-specialisees)\.json$/.test(f)).sort();
assert.deepEqual(files,[
  'questions-application.json','questions-c-techniques.json',
  'section-09-pointeurs-et-tableaux-c.json','section-16-structures-et-typedef-en-c.json'
],'PR #19 doit contenir uniquement les deux thèmes et les deux collections associées');
const expected=new Map([[9,77],[16,21]]);
const ids=new Set(),notions=new Set();
let structured=0,extra=0,multiple=0;
const single=new Map([['A',0],['B',0],['C',0],['D',0]]);
for(const file of files){
 const j=JSON.parse(readFileSync(new URL(file,dir),'utf8'));
 assert.ok(Array.isArray(j.questions)&&j.questions.length,'Banque vide : '+file);
 const md=readFileSync(new URL(file.replace(/\.json$/,'.md'),dir),'utf8');
 for(const q of j.questions){
  assert.ok(q.id&&q.notion_id&&q.legacy_notion_key&&q.prompt?.length>12,'Question incomplète : '+q.id);
  assert.ok(!ids.has(q.id),'ID en doublon : '+q.id);ids.add(q.id);
  assert.ok(['single','multiple'].includes(q.answer_mode),'Mode de réponse invalide : '+q.id);
  assert.equal(q.options?.length,4,'Nombre d’options invalide : '+q.id);
  assert.deepEqual(q.options.map(o=>o.id),['A','B','C','D'],'ID d’options invalide : '+q.id);
  assert.equal(new Set(q.options.map(o=>o.text)).size,4,'Options dupliquées : '+q.id);
  const correct=q.correct_option_ids;
  assert.ok(Array.isArray(correct)&&new Set(correct).size===correct.length,'Corrigé dupliqué : '+q.id);
  assert.ok(q.answer_mode==='single'?correct.length===1:correct.length>=2,'Réponses/mode incohérents : '+q.id);
  assert.ok(correct.every(id=>q.options.some(o=>o.id===id)),'Réponse introuvable : '+q.id);
  assert.ok(q.explanation?.length>15,'Explication manquante : '+q.id);
  assert.equal(q.review_status,'a_verifier','Une revue pédagogique indépendante est obligatoire : '+q.id);
  assert.ok(q.source_urls?.some(s=>s.startsWith('https://revision-hbtn.soleiljaune.be/#cours/')),'Lien vers fiche absent : '+q.id);
  const [si,ii]=q.legacy_notion_key.split(':').map(Number);
  assert.ok(expected.has(si)&&ii>=0&&ii<expected.get(si),'Notion hors périmètre #19 : '+q.id);
  const ni='N'+String(si).padStart(2,'0')+'_'+String(ii).padStart(3,'0');
  assert.equal(q.notion_id,ni,'Notion mal indexée : '+q.id);notions.add(ni);
  if(q.answer_mode==='single')single.set(correct[0],single.get(correct[0])+1);else multiple++;
  const pos=md.indexOf(q.id);assert.ok(pos>=0,'Question Markdown manquante : '+q.id);
  const end=md.indexOf('\n---',pos),block=md.slice(pos,end>pos?end:undefined);
  assert.ok(block.includes(q.prompt),'Énoncé JSON/Markdown divergent : '+q.id);
  assert.ok(block.includes(q.explanation),'Explication JSON/Markdown divergente : '+q.id);
  assert.ok(block.includes(q.answer_mode==='single'?'**Une seule bonne réponse**':'**Plusieurs bonnes réponses**'),'Mode JSON/Markdown divergent : '+q.id);
  for(const opt of q.options){
   const mark='**'+opt.id+' '+(correct.includes(opt.id)?'✅':'❌')+'** '+opt.text;
   assert.ok(block.includes(mark),'Option JSON/Markdown divergente : '+q.id+'/'+opt.id);
  }
  if(file.startsWith('section-'))structured++;else extra++;
 }
}
assert.equal(structured,397,'Questions structurées manquantes');
assert.equal(extra,122,'Questions transversales manquantes');
assert.equal(ids.size,519,'Questions totales manquantes');
assert.equal(notions.size,98,'Notions manquantes');
assert.ok(multiple>0,'Aucune question à réponses multiples');
console.log('PR #19 : 519 questions pour 98 notions, JSON et Markdown cohérents.');
console.log('Toutes les questions restent à vérifier pédagogiquement.');

import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const base=new URL('../docs/quiz/vague2/',import.meta.url);
const expected=new Map([[0,6],[1,4],[2,9],[3,12],[4,14],[5,10],[6,11],[8,31],[10,9],[11,6],[14,9]]);
const files=readdirSync(base).filter(f=>/^(?:section-\d{2}-.*|questions-application|questions-c-techniques|raisonnement-domaines|questions-scanf-specialisees)\.json$/.test(f)).sort();
assert.equal(files.length,15,'11 thèmes + 4 fichiers transversaux attendus');
const ids=new Set(),notions=new Set();
let structured=0,extra=0;
for(const file of files){
 const j=JSON.parse(readFileSync(new URL(file,base),'utf8'));
 assert.ok(Array.isArray(j.questions)&&j.questions.length,file+' est vide');
 const md=readFileSync(new URL(file.replace(/\.json$/,'.md'),base),'utf8');
 for(const q of j.questions){
  assert.ok(q.id&&q.prompt&&q.explanation&&q.notion_id&&q.legacy_notion_key,'Question incomplète : '+q.id);
  assert.ok(!ids.has(q.id),'ID en doublon : '+q.id);ids.add(q.id);
  assert.ok(['single','multiple'].includes(q.answer_mode),'Mode invalide : '+q.id);
  assert.ok([4,5].includes(q.options?.length),'Quatre ou cinq options attendues : '+q.id);
  assert.deepEqual(q.options.map(o=>o.id),['A','B','C','D','E'].slice(0,q.options.length),'Options incorrectes : '+q.id);
  assert.equal(new Set(q.options.map(o=>o.text)).size,4,'Options identiques : '+q.id);
  const ans=q.correct_option_ids;
  assert.ok(Array.isArray(ans)&&new Set(ans).size===ans.length,'Corrigé incohérent : '+q.id);
  assert.ok(q.answer_mode==='single'?ans.length===1:ans.length>=2,'Mode incompatible avec les réponses : '+q.id);
  assert.ok(ans.every(id=>q.options.some(o=>o.id===id)),'Réponse introuvable : '+q.id);
  assert.equal(q.review_status,'a_verifier','Validation non autorisée : '+q.id);
  const [si,ii]=q.legacy_notion_key.split(':').map(Number);
  assert.ok(expected.has(si)&&ii>=0&&ii<expected.get(si),'Notion hors périmètre : '+q.id);
  const ni='N'+String(si).padStart(2,'0')+'_'+String(ii).padStart(3,'0');
  assert.equal(q.notion_id,ni,'ID de notion incohérent : '+q.id);
  notions.add(ni);
  assert.ok(q.source_urls?.some(s=>s.startsWith('https://revision-hbtn.soleiljaune.be/#cours/')),'Lien direct manquant : '+q.id);
  const pos=md.indexOf(q.id);
  assert.ok(pos>=0,'Question absente du Markdown : '+q.id);
  const end=md.indexOf('\n---',pos),block=md.slice(pos,end>pos?end:undefined);
  assert.ok(block.includes(q.prompt),'Énoncé JSON/Markdown incohérent : '+q.id);
  assert.ok(block.includes(q.explanation),'Explication JSON/Markdown incohérente : '+q.id);
  assert.ok(block.includes(q.answer_mode==='single'?'**Une seule bonne réponse**':'**Plusieurs bonnes réponses**'),'Mode JSON/Markdown incohérent : '+q.id);
  for(const o of q.options){
   const mark='**'+o.id+' '+(ans.includes(o.id)?'✅':'❌')+'** '+o.text;
   assert.ok(block.includes(mark),'Option JSON/Markdown incohérente : '+q.id+' / '+o.id);
  }
  if(file.startsWith('section-'))structured++;else extra++;
 }
}
assert.equal(notions.size,121,'Nombre de notions incorrect');
assert.equal(structured,489,'Nombre de questions structurées incorrect');
assert.equal(extra,295,'Nombre de questions transversales incorrect');
assert.equal(ids.size,784,'Total de questions incorrect');
console.log('PR #21 : 784 questions, 121 notions, 11 thèmes ; JSON/Markdown cohérents.');
console.log('Les contrôles automatiques ne valident pas les réponses sur le fond.');

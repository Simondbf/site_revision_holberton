import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const base=new URL('../docs/quiz/vague1/',import.meta.url);
const files=readdirSync(base).filter(f=>/^(?:section-\d{2}-.*|questions-application)\.json$/.test(f)).sort();
assert.equal(files.length,14,'13 thèmes + fichier d\'applications attendus.');
const expected=new Map([[0,6],[1,4],[2,9],[3,12],[4,14],[5,10],[6,11],[8,31],[9,72],[10,9],[11,6],[14,9],[16,21]]);
const ids=new Set(),byNotion=new Map(),perTheme=new Map();
let autoCount=0,applications=0,multiple=0;
for(const file of files){
 const parsed=JSON.parse(readFileSync(new URL(file,base),'utf8'));
 assert.ok(Array.isArray(parsed.questions)&&parsed.questions.length,'Banque vide : '+file);
 const isApp=!file.startsWith('section-');
 for(const q of parsed.questions){
  assert.ok(q.id&&q.notion_id&&q.legacy_notion_key&&q.prompt?.length>12,'Question incomplète : '+file);
  assert.ok(!ids.has(q.id),'ID en doublon : '+q.id);ids.add(q.id);
  assert.ok(['single','multiple'].includes(q.answer_mode),'Type de réponse invalide : '+q.id);
  assert.equal(q.options?.length,4,'Quatre propositions attendues : '+q.id);
  assert.deepEqual(q.options.map(x=>x.id),['A','B','C','D'],'Identifiants d\'options invalides : '+q.id);
  assert.equal(new Set(q.options.map(x=>x.text)).size,4,'Options dupliquées : '+q.id);
  const answers=q.correct_option_ids;
  assert.ok(Array.isArray(answers)&&new Set(answers).size===answers.length,'Corrigé invalidé : '+q.id);
  assert.ok(q.answer_mode==='single'?answers.length===1:answers.length>=2,'Mode et réponses incompatibles : '+q.id);
  assert.ok(answers.every(id=>q.options.some(x=>x.id===id)),'Réponse absente des options : '+q.id);
  assert.ok(q.explanation?.length>15,'Justification absente : '+q.id);
  assert.ok(q.review_status==='a_verifier','La question ne doit pas être marquée comme validée sans revue : '+q.id);
  assert.ok(q.source_urls?.some(s=>s.startsWith('https://revision-hbtn.soleiljaune.be/#cours/')),
    'Lien direct vers fiche manquant : '+q.id);
  const [si,ii]=q.legacy_notion_key.split(':').map(Number);
  assert.ok(expected.has(si)&&ii>=0&&ii<expected.get(si),'Notion hors périmètre : '+q.id);
  const ni='N'+String(si).padStart(2,'0')+'_'+String(ii).padStart(3,'0');
  assert.equal(q.notion_id,ni,'Identifiant de notion incohérent : '+q.id);
  byNotion.set(ni,(byNotion.get(ni)||0)+1);
  perTheme.set(si,(perTheme.get(si)||0)+1);
  if(q.answer_mode==='multiple')multiple++;
  if(isApp)applications++;else autoCount++;
 }
}
assert.equal([...expected.values()].reduce((a,b)=>a+b,0),214);
assert.equal(byNotion.size,214,'Certaines notions de la première vague ne disposent d\'aucune question.');
assert.equal(autoCount,856,'Les questions initiales structurées ont changé sans révision des tests.');
assert.ok(applications>=200,'Les questions d\'application sont insuffisantes.');
assert.ok(multiple>=214,'Les réponses multiples doivent être représentées.');
assert.ok(ids.size>=1200,'Le lot complet doit comprendre au moins 1200 questions.');
for(const [si,n] of expected){
 assert.ok((perTheme.get(si)||0)>=n*4,'Thème incomplet : '+si);
}
console.log('Contrôle du format réussi : '+ids.size+' questions, 214 notions, '+applications+
 ' questions pratiques et '+multiple+' questions à réponses multiples.');
console.log('AVERTISSEMENT : ces contrôles NE VALIDENT PAS la justesse des réponses ; relecture humaine et IA obligatoire.');

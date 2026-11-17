import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const base=new URL('../docs/quiz/vague1/',import.meta.url);
const files=readdirSync(base).filter(f=>/^(?:section-\d{2}-.*|questions-application|raisonnement-domaines|questions-c-techniques|questions-scanf-specialisees)\.json$/.test(f)).sort();
assert.equal(files.length,17,'13 thèmes + fichier d\'applications attendus.');
const expected=new Map([[0,6],[1,4],[2,9],[3,12],[4,14],[5,10],[6,11],[8,31],[9,72],[10,9],[11,6],[14,9],[16,21]]);
const ids=new Set(),byNotion=new Map(),perTheme=new Map();
let autoCount=0,applications=0,multiple=0;
const singlePositions=new Map([['A',0],['B',0],['C',0],['D',0]]);

for(const file of files){
 const parsed=JSON.parse(readFileSync(new URL(file,base),'utf8'));
 assert.ok(Array.isArray(parsed.questions)&&parsed.questions.length,'Banque vide : '+file);
 const isApp=!file.startsWith('section-');
 const markdownName=file==='questions-scanf-specialisees.json'?
  '../nouvelles-questions-scanf.md':file.replace(/\.json$/,'.md');
 const markdown=readFileSync(new URL(markdownName,base),'utf8');
 for(const q of parsed.questions){
  assert.ok(q.id&&q.notion_id&&q.legacy_notion_key&&q.prompt?.length>12,'Question incomplète : '+file);
  assert.ok(!ids.has(q.id),'ID en doublon : '+q.id);ids.add(q.id);
  assert.ok(['single','multiple'].includes(q.answer_mode),'Type de réponse invalide : '+q.id);
  assert.equal(q.options?.length,4,'Quatre propositions attendues : '+q.id);
  assert.deepEqual(q.options.map(x=>x.id),['A','B','C','D'],'Identifiants d\'options invalides : '+q.id);
  assert.equal(new Set(q.options.map(x=>x.text)).size,4,'Options dupliquées : '+q.id);
  for(const opt of q.options){
   assert.ok(!/(?:\bdes cat|scanf\("%)$/.test(opt.text.trim()),
     'Proposition visiblement tronquée : '+q.id+' ('+opt.id+')');
   assert.ok(!opt.text.includes('Dans la question du lab'),
     'Dépendance à un exercice non fourni : '+q.id+' ('+opt.id+')');
  }
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
  // Empêcher qu'une position de réponse soit prévisible à grande échelle.
  if(q.answer_mode==='single'){
   const c=q.correct_option_ids[0];singlePositions.set(c,singlePositions.get(c)+1);
  }else multiple++;
  // Le Markdown de relecture doit être parfaitement synchronisé avec le JSON.
  const pos=markdown.indexOf(q.id);
  assert.ok(pos>=0,'Question absente du Markdown : '+q.id);
  const end=markdown.indexOf('\n---',pos);
  const blockMarkdown=markdown.slice(pos,end>pos?end:undefined);
  for(const opt of q.options){
   const mark='**'+opt.id+' '+(q.correct_option_ids.includes(opt.id)?'✅':'❌')+'** '+opt.text;
   assert.ok(blockMarkdown.includes(mark),'Corrigé Markdown/JSON incohérent pour '+q.id+' option '+opt.id);
  }
  if(isApp)applications++;else autoCount++;
 }
}
assert.equal([...expected.values()].reduce((a,b)=>a+b,0),214);
assert.equal(byNotion.size,214,'Certaines notions de la première vague ne disposent d\'aucune question.');
assert.equal(autoCount,856,'Les questions initiales structurées ont changé sans révision des tests.');
assert.ok(applications>=400,'Les questions d\'application sont insuffisantes.');
assert.ok(multiple>=214,'Les réponses multiples doivent être représentées.');
assert.ok(ids.size>=1200,'Le lot complet doit comprendre au moins 1200 questions.');
const totalSingle=[...singlePositions.values()].reduce((a,b)=>a+b,0);
for(const [letter,count]of singlePositions){
 assert.ok(count/totalSingle>=0.12&&count/totalSingle<=0.40,
   'Biais de réponse trop élevé pour '+letter+' : '+count+'/'+totalSingle);
}
for(const [si,n] of expected){
 assert.ok((perTheme.get(si)||0)>=n*4,'Thème incomplet : '+si);
}
console.log('Contrôle du format réussi : '+ids.size+' questions, 214 notions, '+applications+
 ' questions pratiques et '+multiple+' questions à réponses multiples.');
console.log('AVERTISSEMENT : ces contrôles NE VALIDENT PAS la justesse des réponses ; relecture humaine et IA obligatoire.');

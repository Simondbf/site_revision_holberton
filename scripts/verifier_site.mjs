import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { Script } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function bloc(id) {
  const re = new RegExp('<script id="' + id + '" type="application/json">([\\s\\S]*?)<\\/script>');
  const match = html.match(re);
  assert.ok(match, 'Données manquantes : ' + id);
  return JSON.parse(match[1]);
}

const data = bloc('content-data');
const courses = bloc('course-data');
const extra = bloc('extra-lessons');
const pointeurs = bloc('pointer-data');
const aide = bloc('teaching-notes');

assert.ok(data.sections.length >= 17, 'Des catégories ont disparu');
const slugs = new Set();
let total = 0;
for (const [si, section] of data.sections.entries()) {
  assert.ok(section.title && Array.isArray(section.items) && section.items.length, 'Catégorie vide : ' + si);
  assert.ok(courses[section.title], 'Présentation absente : ' + section.title);
  const slug = section.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  assert.ok(!slugs.has(slug), 'Catégories aux adresses identiques');
  slugs.add(slug);
  const urls = new Set();
  for (const [ii, item] of section.items.entries()) {
    assert.ok(item.term?.trim() && item.definition?.trim(), 'Résumé manquant : ' + si + ':' + ii);
    const termSlug = item.term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const address = (ii + 1) + '-' + termSlug;
    assert.ok(!urls.has(address), 'Adresse de notion en double');
    urls.add(address);
    if (si === 9) assert.ok(pointeurs[ii]?.explanation, 'Détail de pointeur absent : ' + ii);
    else assert.ok(extra[si + ':' + ii]?.explanation, 'Détail de notion absent : ' + si + ':' + ii);
    total++;
  }
}
assert.ok(total >= 242, 'Des fiches semblent avoir disparu');
assert.ok(Object.keys(aide).length > 0, 'Analogies pédagogiques manquantes');

const scripts = [...html.matchAll(/<script(?![^>]*type="application\/json")(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 2, 'Un script principal et un module quiz intégrés sont attendus');
assert.ok(html.includes('<script type="module" id="quiz-inline-module">'),'Module quiz autonome introuvable');
assert.ok(html.includes('id="quiz-inline-style"'),'CSS quiz autonome introuvable');
assert.ok(html.includes('id="quiz-argc-bank"')&&html.includes('id="quiz-variadic-bank"'),'Banques de quiz intégrées manquantes');
assert.ok(!html.includes('src="./quiz/engine.mjs"'),'Le quiz publié ne doit pas nécessiter un module externe');
new Script(scripts[0][1], { filename: 'site.js' }); // Analyse syntaxique du script principal.
assert.ok(scripts[1][1].includes('function renderQuestion()'),'Moteur de quiz absent du module intégré');
assert.ok(html.includes('id="quickSearch"'), 'Recherche globale absente');
assert.ok(!html.includes('id="conceptDialog"'), 'Les anciennes fenêtres superposées doivent être supprimées');
assert.ok(html.includes('data-course-link'), 'Post-it sans accès direct au cours');
assert.ok(html.includes('function syncNotionWithScroll'), 'Suivi de la notion active absent');
assert.ok(html.includes('function restoreCardPosition'), 'Retour à la position des fiches absent');
assert.ok(html.includes("if(k==='9:30')return visualMallocOne()"), 'Schéma malloc simple non adapté à son exemple');
assert.ok(html.includes("if(key==='9:33')return visualLiteralVsArray()"), 'Comparaison littéral/tableau spécifique absente');
assert.ok(html.includes("if(key==='9:34')return visualMallocDecision('array')"), 'Schéma du test NULL non adapté à son exemple');
assert.ok(html.includes('Oui : échec') && html.includes('Non : allocation OK'), 'Les deux branches du test NULL doivent être visibles');
assert.ok(html.includes("const output=one?'*p = 42':'98, -1024, 402'"), 'Les valeurs des schémas doivent correspondre aux exemples C');
for (let i = 38; i <= 44; i++) {
  assert.ok(pointeurs[String(i)]?.example && pointeurs[String(i)]?.note, 'Quiz mémoire incomplet : 9:' + i);
}
assert.ok(html.includes("if(k==='9:39')return visualStringSizeQuiz()"), 'Schéma de strlen/sizeof manquant');
assert.ok(html.includes("if(k==='9:44')return visualUninitializedQuiz()"), 'Schéma de pointeur non initialisé manquant');
assert.ok(extra['8:23']?.explanation && extra['8:23']?.note, 'Fiche exit absente');
assert.ok(html.includes("if(k==='8:23')return visualExitVsReturn()"), 'Schéma return / exit manquant');
assert.equal(data.sections[17]?.title,'Récursivité en C','Le thème récursivité doit être ajouté sans déplacer les chapitres existants.');
assert.equal(data.sections[17].items.length,11,'Onze notions complémentaires sur la récursivité sont attendues.');
for(let i=0;i<11;i++){
 const key='17:'+i,lesson=extra[key];
 assert.ok(lesson?.explanation?.split('\\n\\n').length>=3,
  'Une notion récursive doit posséder trois paragraphes : '+key);
 assert.ok(lesson.example?.includes('int main(void)')&&lesson.sources?.length>=2,
  'Exemple autonome ou sources manquantes : '+key);
 assert.ok(aide[key]?.analogy&&aide[key]?.explained,'Décryptage pédagogique absent : '+key);
}
assert.ok(html.includes('function visualRecursionLesson(ii)')&&html.includes('if(si===17)return visualRecursionLesson(ii)'),
 'Les schémas de pile et de remontée doivent être reliés au nouveau chapitre.');
assert.equal(data.sections[16]?.title, 'Structures et typedef en C',
 'Le thème des structures doit exister sans déplacer les anciens thèmes.');
assert.ok(data.sections[16].items.length >= 21,'Les notions sur struct, typedef et include guards sont attendues.');
assert.ok(extra['16:17']?.explanation?.includes('Betty'), 'Documentation de struct absente');
assert.ok(extra['16:18']?.explanation?.includes('incomplet'), 'Alias de type struct anticipé absent');
assert.ok(extra['8:24']?.explanation?.includes('Ritchie'), 'Histoire du langage C absente');
assert.ok(pointeurs['45']?.explanation?.includes('realloc') && pointeurs['45']?.example?.includes('tmp = realloc'),
 'Fiche realloc sûre absente');
assert.ok(pointeurs['46']?.explanation?.includes('segfault') && pointeurs['46']?.note,
 'Fiche segfault absente');
assert.ok(pointeurs['35']?.explanation?.includes('memory leak'),
 'La fuite mémoire doit être aussi nommée memory leak');
assert.ok(pointeurs['36']?.example?.includes('--leak-check=full'),
 'Exemple de diagnostic Valgrind absent');
assert.ok(extra['16:2']?.explanation?.includes('OBJET') && extra['16:3']?.explanation?.includes('POINTEUR'),
 'Différence . / -> insuffisamment explicitée');
assert.ok(extra['16:19']?.explanation?.includes('même membre'),
 'Comparaison point / flèche absente');
assert.ok(extra['16:20']?.example?.includes('#ifndef POINT_H') && extra['16:20']?.example?.includes('#endif'),
 'Include guards absents');
assert.ok(html.includes('case 19:') && html.includes('case 20:'),
 'Schémas point/flèche et include guards manquants');
assert.ok(html.includes("['Programmation en C',[5,8,9,10,11,14,16,17]]"),
 'Le nouveau thème doit apparaître dans la navigation C.');
for(const [si,ii,term] of [
  [8,26,'fgets()'],[8,27,'strtol()'],[8,28,'Chaîne de format'],[8,29,'EOF'],
  [9,47,'strncpy()'],[9,48,'calloc()'],[9,49,'Buffer overflow'],
  [9,50,'Use-after-free'],[9,51,'Double free'],[9,52,'Débordement du calcul'],
  [9,53,'Valgrind Memcheck'],[9,54,'memcpy()'],[14,6,'Vulnérabilité']
]){
  assert.ok(data.sections[si].items[ii]?.term.includes(term),'Notion de sécurité absente : '+si+':'+ii);
  const p=si===9?pointeurs[String(ii)]:extra[si+':'+ii];
  assert.ok(p?.sources?.length,'Source spécialisée absente : '+si+':'+ii);
}
for(const [si,ii,term] of [
 [8,30,'Integer overflow'],[9,55,'Dépassement de tampon sur la pile'],
 [9,56,'Tampon fixe, statique et dynamique'],[9,57,'Stack overflow'],
 [9,58,'Valgrind : « definitely lost »'],[9,59,'strlen sans terminateur nul'],
 [14,7,'Invariant']
]){
 assert.ok(data.sections[si].items[ii]?.term.includes(term),'Fiche de sécurité absente : '+si+':'+ii);
 const p=si===9?pointeurs[String(ii)]:extra[si+':'+ii];
 assert.ok(p?.explanation?.split('\n\n').length>=3,'Paragraphes insuffisants : '+si+':'+ii);
 assert.ok(p?.example?.trim()&&p?.note?.trim()&&p?.sources?.length,
  'Exemple, conclusion ou référence manquants : '+si+':'+ii);
}
assert.ok(pointeurs['42'].explanation.includes('static char'),'Pile/tas/statique pas suffisamment distingués');
assert.ok(pointeurs['39'].explanation.includes('terminateur'),'strlen sans terminaison non expliqué');
assert.ok(pointeurs['53'].explanation.includes('32 bytes in 1 blocks'),'Rapport Valgrind non explicité');
for(const [si,ii,term] of [
 [9,60,'memcpy()'],[9,61,'Ownership'],[9,62,'Dangling pointer'],
 [9,63,'Raw pointer'],[9,64,'char *'],[9,65,'Diagnostics mémoire'],
 [14,8,'Base bundle']
]){
 assert.ok(data.sections[si]?.items[ii]?.term.includes(term),'Notion manquante : '+si+':'+ii);
 const p=si===9?pointeurs[String(ii)]:extra[si+':'+ii];
 assert.ok(p?.explanation?.split('\n\n').length>=3,'Découpage en paragraphes absent : '+si+':'+ii);
 assert.ok(p?.example?.trim()&&p?.note?.trim()&&p?.sources?.length,
  'Exemple, note ou référence absente : '+si+':'+ii);
}
assert.ok(pointeurs['53'].explanation.includes('INDIRECT_LEAK'),
 'La classification des fuites indirectes doit être expliquée.');
assert.ok(pointeurs['51'].note.includes('ownership ambiguë'),
 'Causes possibles du double free du base bundle absentes.');
assert.ok(pointeurs['54'].explanation.includes("nombre d'OCTETS"),
 'memcpy doit expliquer la taille copiée.');
assert.ok(html.includes('Array.isArray(p.sources)'), 'Sources spécifiques par cours non affichées');
assert.ok(html.includes('function lessonParagraphs(value)') && html.includes('lessonParagraphs(explain)'), 
 'Mise en page des explications en paragraphes absente');
assert.ok(extra['8:25']?.explanation?.split(/\n\n/).length >= 4,
 'Les explications de scanf doivent être structurées en plusieurs paragraphes');
assert.ok(html.includes('if(si===16)return visualStructureLesson(ii)'),
 'Schémas du chapitre struct non connectés.');
assert.ok(!html.includes('pas synchronisés par Google Drive'), 'Ancienne mention Google Drive');

// Documentation humaine concise et consignes séparées pour les agents IA.
const readDoc = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8');
const agents = readDoc('AGENTS.md');
const readme = readDoc('README.md');
const contributing = readDoc('CONTRIBUTING.md');
assert.ok(agents.includes('extra-lessons') && agents.includes('pointer-data') &&
 agents.includes('teaching-notes') && agents.includes('quiz') &&
 agents.includes('holberton-deploy.timer'), 'Le guide IA doit documenter le style, la structure et les évolutions.');
assert.ok(readDoc('CLAUDE.md').includes('AGENTS.md'), 'Claude doit retrouver les instructions communes.');
assert.ok(readDoc('.github/copilot-instructions.md').includes('AGENTS.md'),
 'Copilot doit retrouver les instructions communes.');
assert.ok(readme.includes('CONTRIBUTING.md') && contributing.includes('AGENTS.md'),
 'Les liens de contribution humaine et IA doivent être accessibles.');
assert.ok(!readme.includes('holberton-deploy.service') &&
 !readme.includes('Public ne signifie pas automatiquement libre de droits') &&
 !readme.includes('Évolution prévue à ne pas oublier'),
 'Le README contient des consignes internes destinées aux agents.');
assert.ok(!contributing.includes('N’ajoute jamais de token') &&
 !contributing.includes('déclenche le déploiement'),
 'Les consignes pour humains doivent être concises et à jour.');
assert.ok(html.includes('Tes données de révision') &&
 html.includes('Sans compte :') && html.includes('Avec un compte :') &&
 html.includes('Un site de révision collaboratif'),
 'À propos doit expliquer clairement le stockage local et la synchronisation à venir.');
assert.ok(!html.includes('Sauvegarde actuelle :') && !html.includes('Informations pratiques</h3>') &&
 !html.includes('Réviser à son rythme</h3>'),
 'Les anciens blocs de À propos doivent avoir disparu.');
assert.ok(!html.includes('Les coordonnées légales complètes') &&
 !html.includes('Les conditions de réutilisation du code sont à définir'),
 'Des avertissements inutiles sont réapparus sur la page À propos.');

console.log('Contrôle réussi : ' + data.sections.length + ' thèmes, ' + total + ' notions, JavaScript valide.');

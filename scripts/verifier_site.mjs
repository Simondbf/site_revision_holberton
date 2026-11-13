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
assert.ok(total >= 209, 'Des fiches semblent avoir disparu');
assert.ok(Object.keys(aide).length > 0, 'Analogies pédagogiques manquantes');

const scripts = [...html.matchAll(/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1, 'Le site doit conserver un script principal unique');
new Script(scripts[0][1], { filename: 'site.js' }); // Analyse syntaxique sans exécuter le code.
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
assert.ok(html.includes("['Programmation en C',[5,8,9,10,11,14,16]]"),
 'Le nouveau thème doit apparaître dans la navigation C.');
assert.ok(html.includes('function lessonParagraphs(value)') && html.includes('lessonParagraphs(explain)'), 
 'Mise en page des explications en paragraphes absente');
assert.ok(extra['8:25']?.explanation?.split(/\n\n/).length >= 4,
 'Les explications de scanf doivent être structurées en plusieurs paragraphes');
assert.ok(html.includes('if(si===16)return visualStructureLesson(ii)'),
 'Schémas du chapitre struct non connectés.');
assert.ok(!html.includes('pas synchronisés par Google Drive'), 'Ancienne mention Google Drive');

console.log('Contrôle réussi : ' + data.sections.length + ' thèmes, ' + total + ' notions, JavaScript valide.');

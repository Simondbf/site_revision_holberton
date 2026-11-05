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

assert.ok(data.sections.length >= 16, 'Des catégories ont disparu');
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
assert.ok(total >= 174, 'Des fiches semblent avoir disparu');
assert.ok(Object.keys(aide).length > 0, 'Analogies pédagogiques manquantes');

const scripts = [...html.matchAll(/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1, 'Le site doit conserver un script principal unique');
new Script(scripts[0][1], { filename: 'site.js' }); // Analyse syntaxique sans exécuter le code.
assert.ok(html.includes('id="quickSearch"'), 'Recherche globale absente');
assert.ok(!html.includes('id="conceptDialog"'), 'Les anciennes fenêtres superposées doivent être supprimées');
assert.ok(html.includes('data-course-link'), 'Post-it sans accès direct au cours');
assert.ok(html.includes('function syncNotionWithScroll'), 'Suivi de la notion active absent');
assert.ok(html.includes('function restoreCardPosition'), 'Retour à la position des fiches absent');
assert.ok(!html.includes('pas synchronisés par Google Drive'), 'Ancienne mention Google Drive');

console.log('Contrôle réussi : ' + data.sections.length + ' thèmes, ' + total + ' notions, JavaScript valide.');

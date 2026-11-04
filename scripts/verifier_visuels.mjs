import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { createContext, runInContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1, 'Le script principal doit être unique.');
const source = scripts[0][1];

const start = source.indexOf('function visualBox(');
const stop = source.indexOf('function flowDiagram(', start);
assert.ok(start >= 0 && stop > start, 'Fonctions de dessins SVG introuvables.');

const contexte = createContext({
  esc: value => String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c])
});
runInContext(source.slice(start, stop), contexte, { filename: 'illustrations.js' });
assert.equal(typeof contexte.pedagogicVisual, 'function', 'Sélecteur des illustrations absent.');

const data = JSON.parse(html.match(/<script id="content-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
let vues = 0;
const themes = new Set();
const categories = new Set();
for (const [si, section] of data.sections.entries()) {
  for (const [ii, item] of section.items.entries()) {
    const illustration = contexte.pedagogicVisual(si, ii);
    if (!illustration) continue;
    vues++;
    themes.add(si);
    assert.match(illustration, /<figure class="lesson-visual">/, 'Figure absente pour ' + item.term);
    assert.match(illustration, /<svg [^>]*role="img"[^>]*aria-label=/, 'Image sans description pour ' + item.term);
    assert.match(illustration, /<figcaption>/, 'Légende absente pour ' + item.term);
    assert.match(illustration, /<\/svg>/, 'Fermeture SVG absente pour ' + item.term);
    assert.ok(!illustration.includes('undefined'), 'Texte non défini pour ' + item.term);
    assert.ok(!illustration.includes('<script'), 'Script interdit dans un schéma');
    assert.ok(!illustration.includes('<image '), 'Image externe interdite dans un schéma');
    categories.add(section.title);
  }
}
assert.ok(vues >= 50, 'La couverture pédagogique des illustrations a diminué : ' + vues);
assert.ok(themes.size >= 9, 'Les illustrations ne couvrent pas assez de thèmes');
assert.ok(html.includes('const visual=pedagogicVisual(si,ii);'), 'Les dessins ne sont pas intégrés aux cours');
console.log('Contrôle réussi : ' + vues + ' fiches illustrées dans ' + themes.size + ' thèmes.');

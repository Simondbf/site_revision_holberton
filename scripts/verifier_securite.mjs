import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');

// Test statique de non-régression, et NON audit de sécurité complet.
// Ce site n'a actuellement ni backend ni authentification. Ajouter un
// service distant exige une revue du modèle de menace et de ce test.
const scripts=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
const data=scripts.filter(([,attrs])=>/\btype=["']application\/json["']/i.test(attrs));
const code=scripts.filter(([,attrs])=>!/\btype=["']application\/json["']/i.test(attrs)&&!/\bsrc\s*=/i.test(attrs));
const modules=scripts.filter(([,attrs])=>/\bsrc\s*=/i.test(attrs));

assert.ok(data.length>=5,'Blocs pédagogiques JSON manquants.');
for(const [,attrs,body] of data){
  assert.ok(!/\bsrc\s*=/i.test(attrs),'JSON pédagogique chargé depuis un serveur tiers.');
  JSON.parse(body);
}
assert.equal(code.length,1,'Un seul script applicatif intégré attendu.');
assert.equal(modules.length,1,'Un seul module local de quiz attendu.');
assert.match(modules[0][1],/\btype="module"/, 'Le quiz doit être un module ES.');
assert.match(modules[0][1],/\bsrc="\.\/quiz\/engine\.mjs"/, 'Le module doit être local et sous contrôle du dépôt.');
const app=code[0][2];

assert.ok(!/<script\b[^>]*\bsrc\s*=\s*["']https?:/i.test(html),'Aucune dépendance JavaScript distante autorisée.');
assert.ok(!/<(?:iframe|object|embed)\b/i.test(html),'Contenu tiers embarqué détecté.');
assert.ok(!/<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']https?:/i.test(html),
  'Feuille de style externe détectée.');
assert.ok(!/\b(?:eval\s*\(|new\s+Function\s*\()/i.test(app),
  'Évaluation dynamique de code détectée.');
assert.ok(!/\b(?:fetch\s*\(|XMLHttpRequest\b|WebSocket\b|EventSource\b|sendBeacon\s*\()/i.test(app),
  'Appel réseau introduit : revoir confidentialité, authentification et sécurité avant fusion.');
assert.ok(!/\bdocument\.cookie\b/i.test(app),
  'Usage de cookies introduit : revoir les attributs de session et l’usage serveur.');

const content=data.find(([,attrs])=>/\bid=["']content-data["']/i.test(attrs));
assert.ok(content,'Base des cours absente.');
const courses=JSON.parse(content[2]);
const notions=courses.sections.reduce((total,section)=>total+section.items.length,0);
assert.ok(notions>=242,'Des notions ont disparu : préserver la consultation invitée.');
assert.ok(/id=["']search["']/.test(html) && /id=["']favoriteItems["']/.test(html),
  'Navigation, recherche ou favoris sans compte manquants.');
assert.ok(app.includes('holberton-favorites-v2'),'Favoris locaux des invités absents.');
assert.ok(app.includes('holberton-dark-v2'),'Préférences locales des invités absentes.');

const links=[...html.matchAll(/<a\b[^>]*\btarget=["']_blank["'][^>]*>/gi)];
for(const [tag] of links){
  assert.ok(/\brel=["'][^"']*\bnoopener\b[^"']*["']/i.test(tag),
    'Lien ouvrant un nouvel onglet sans noopener : '+tag.slice(0,120));
}

const quiz=readFileSync(new URL('../quiz/engine.mjs',import.meta.url),'utf8');
assert.ok(quiz.includes("new URL('../docs/quiz/vague1/") && quiz.includes("new URL('questions-variadiques.json'"), 'Seules les banques quiz locales doivent être chargées.');
assert.ok(!/\bdocument\.cookie\b|\beval\s*\(|new\s+Function\s*\(/.test(quiz),'Opérations sensibles interdites dans le moteur quiz.');
console.log('Garde-fous statiques : '+notions+' notions accessibles sans compte, module quiz local et aucune authentification simulée.');

import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');

// Test statique de non-régression, et NON audit de sécurité complet.
// Ce site n'a actuellement ni backend ni authentification. Ajouter un
// service distant exige une revue du modèle de menace et de ce test.
const scripts=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
const data=scripts.filter(([,attrs])=>/\btype=["']application\/json["']/i.test(attrs));
const code=scripts.filter(([,attrs])=>!/\btype=["']application\/json["']/i.test(attrs));

assert.ok(data.length>=5,'Blocs pédagogiques JSON manquants.');
for(const [,attrs,body] of data){
  assert.ok(!/\bsrc\s*=/i.test(attrs),'JSON pédagogique chargé depuis un serveur tiers.');
  JSON.parse(body);
}
assert.equal(code.length,1,'Le site doit conserver un seul script applicatif autonome.');
const app=code[0][2];

assert.ok(!/<script\b[^>]*\bsrc\s*=/i.test(html),'Dépendance JS externe détectée.');
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

console.log('Garde-fous statiques : '+notions+
  ' notions accessibles sans compte, scripts autonomes et aucun appel réseau applicatif.');

import {readFileSync} from 'node:fs';
import {createContext, runInContext} from 'node:vm';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length,1,'Un seul script applicatif attendu.');
const src=scripts[0][1];
const start=src.indexOf('function visualBox(');
const stop=src.indexOf('function lessonContent(si,ii)',start);
assert.ok(start>=0&&stop>start,'Outils de dessin ou fonction de cours introuvables.');

const ctx=createContext({esc:value=>String(value).replace(/[&<>"']/g,ch=>({
 '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
})[ch])});
runInContext(src.slice(start,stop),ctx,{filename:'illustrations.js',timeout:5000});
assert.equal(typeof ctx.diagramFor,'function','Fonction de correspondance notion / illustration manquante.');
const data=JSON.parse(html.split('<script id="content-data" type="application/json">')[1].split('</script>')[0]);
const sha=s=>createHash('sha256').update(s).digest('hex');
const visualKeys=new Map(),seen=new Map(),themes=new Set();
let count=0;
for(const [si,section]of data.sections.entries()){
 for(const [ii,item]of section.items.entries()){
  const visual=ctx.diagramFor(si,ii);
  if(!visual)continue; // Certains cours s'expliquent mieux sans image.
  const key=si+':'+ii;
  assert.match(visual,/<figure\b/,'Balise figure absente dans '+item.term);
  assert.match(visual,/<figcaption>/,'Légende absente pour '+item.term);
  assert.ok(/aria-label=/.test(visual),'Description accessible absente pour '+item.term);
  assert.ok(!visual.includes('undefined'),'Texte non défini pour '+item.term);
  assert.ok(!visual.includes('<image '),'Image externe interdite : '+item.term);
  assert.ok(!visual.includes('<script'),'Script interdit : '+item.term);
  const fingerprint=sha(visual);
  assert.ok(!seen.has(fingerprint),'Même illustration réutilisée pour '+key+' et '+seen.get(fingerprint));
  seen.set(fingerprint,key);
  visualKeys.set(key,visual);
  themes.add(si);
  count++;
 }
}
assert.ok(count>=35,'Seuil minimal indicatif : les illustrations utiles ont-elles disparu ? '+count);

// Contrats de sens : un dessin ne remplace pas la notion par un schéma générique.
const expected={
 '3:0':['4 + 2 + 1','754'],
 '6:3':['Git','staging'],
 '6:6':['pull request','revue'],
 '7:0':['Docker','image'],
 '7:2':['Dockerfile','CMD'],
 '8:7':['GCC','.o'],
 '9:0':['Adresse, pointeur','*p'],
 '9:1':['Adresse mémoire','0x1000'],
 '9:2':["opérateur &",'&n'],
 '9:3':['déclaration','int *p;'],
 '9:4':['Déréférencer','98'],
 '9:5':['Modifier une valeur','402'],
 '9:6':['p, *p et &p','0x2000'],
 '9:11':['Passage par valeur','n = 42'],
 '9:12':['Passer &n','n = 7'],
 '9:13':['tableau','cinq'],
 '9:14':['indice 4','cinquième'],
 '9:15':['tableau','pointeur'],
 '9:17':['sizeof(a)','cinq'],
 '9:18':['&a','pointeur'],
 '9:19':['sizeof(int)','a[1]'],
 '9:20':['a[2]','*(a+2)'],
 '9:21':['Holberton','neuf'],
 '9:22':['\\0','O'],
 '9:25':['10','20'],
 '9:26':['tab[2]','6'],
 '9:27':['grille[1][2]','6'],
 '9:28':['temporaire','tmp'],
 '9:29':['inverser','CBA']
};
for(const[key,needles]of Object.entries(expected)){
 const view=visualKeys.get(key);
 assert.ok(view,'Schéma indispensable absent pour '+key);
 for(const term of needles){
  assert.ok(view.toLowerCase().includes(term.toLowerCase()),'Schéma '+key+' ne contient pas le concept '+term);
 }
}
// Plusieurs images quasiment identiques ont été retirées volontairement.
for(const key of ['3:1','4:13','6:4','6:8','7:1','7:4','7:5','7:6','8:11','8:12','8:13','8:14','9:8','9:9','9:10','9:16','9:23','9:24','14:4']){
 assert.ok(!visualKeys.has(key),'Illustration répétitive ou inutile encore présente : '+key);
}
assert.ok(html.includes('function diagramFor(si,ii)'),'Dessin non connecté aux cours.');
console.log('Validation : '+count+' fiches illustrées dans '+themes.size+' thèmes, sans schémas identiques, associations contrôlées.');

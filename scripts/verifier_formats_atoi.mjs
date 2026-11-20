import assert from 'node:assert/strict';
import {mkdtempSync, readFileSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
function embedded(id){
 const start='<script id="'+id+'" type="application/json">';
 const i=html.indexOf(start),j=html.indexOf('</script>',i+start.length);
 assert.ok(i>=0&&j>i,'Données manquantes : '+id);
 return JSON.parse(html.slice(i+start.length,j));
}
const sections=embedded('content-data').sections;
const lessons=embedded('extra-lessons');
const notes=embedded('teaching-notes');
assert.equal(sections[8].title,'Programmation C');
assert.ok(sections[8].items.length>=43,'Les trois fiches sur les formats et atoi doivent rester présentes.');
const cases=[
 [40,'printf — spécificateurs de format et types','n=-12 total=25 prix=3.50\nlettre=A mot=Bonjour pourcent=%\n'],
 [41,'scanf et sscanf — formats de lecture et adresses','21 4.5 Nancy\n'],
 [42,'atoi() — convertir une chaîne en int','-42\n13\n0\n']
];
const tmp=mkdtempSync(join(tmpdir(),'holberton-formats-'));
try{
 for(const [index,title,expected] of cases){
  const key='8:'+index,fiche=lessons[key],note=notes[key];
  assert.equal(sections[8].items[index]?.term,title,'Index de la fiche déplacé : '+key);
  assert.ok(sections[8].items[index].definition.length>80,'Définition manquante : '+key);
  assert.ok(fiche?.explanation?.length>600&&fiche?.note?.length>90,'Explication insuffisante : '+key);
  assert.ok(fiche?.sources?.length>=2&&fiche.sources.every(pair=>
   Array.isArray(pair)&&pair.length===2&&pair[1].startsWith('https://')),'Sources manquantes : '+key);
  assert.ok(note?.analogy?.length>50&&note?.explained?.length>60,'Notes manquantes : '+key);
  const source=join(tmp,'cours-'+index+'.c'),exe=join(tmp,'cours-'+index);
  writeFileSync(source,fiche.example);
  const build=spawnSync('gcc',['-std=gnu89','-Wall','-Werror','-Wextra','-pedantic',source,'-o',exe],{encoding:'utf8',timeout:15000});
  if(build.error)throw build.error;
  assert.equal(build.status,0,'Compilation GNU89 échouée pour '+key+'\n'+build.stderr);
  const run=spawnSync(exe,[],{encoding:'utf8',timeout:15000,env:{...process.env,LC_ALL:'C'}});
  if(run.error)throw run.error;
  assert.equal(run.status,0,'Exécution échouée : '+key+'\n'+run.stderr);
  assert.equal(run.stdout,expected,'Sortie incorrecte pour '+key);
 }
}finally{
 rmSync(tmp,{recursive:true,force:true});
}
console.log('Trois cours : printf, scanf/sscanf et atoi vérifiés sous GNU89 strict.');

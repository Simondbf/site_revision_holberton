import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
function embedded(id){
 const start='<script id="'+id+'" type="application/json">';
 const i=html.indexOf(start),j=html.indexOf('</script>',i+start.length);
 assert.ok(i>=0&&j>i,'Données JSON absentes : '+id);
 return JSON.parse(html.slice(i+start.length,j));
}
const sections=embedded('content-data').sections;
const lessons=embedded('extra-lessons');
const notes=embedded('teaching-notes');
assert.equal(sections[8].title,'Programmation C');
assert.equal(sections[8].items.length,40,'Les trois cours doivent être ajoutés en fin de chapitre sans déplacer les autres.');
const cases=[
 [37,'switch, case et default — choisir selon une valeur','Deux\n'],
 [38,"break — sortir d'une boucle ou d'un switch",'0\n1\n2\nFin de boucle\n'],
 [39,"continue — passer à l'itération suivante",'1\n3\n5\n']
];
const tmp=mkdtempSync(join(tmpdir(),'holberton-flux-'));
try{
 for(const [index,title,expected] of cases){
  const key='8:'+index,lesson=lessons[key],note=notes[key];
  assert.equal(sections[8].items[index]?.term,title,'Fiche déplacée : '+key);
  assert.ok(sections[8].items[index]?.definition?.length>60,'Définition trop courte : '+key);
  assert.ok(lesson?.explanation?.length>350&&lesson.note.length>60,'Cours incomplet : '+key);
  assert.ok(lesson?.sources?.length>=2&&lesson.sources.every(source=>Array.isArray(source)&&source[1].startsWith('https://')),
   'Sources manquantes : '+key);
  assert.ok(note?.analogy?.length>40&&note?.explained?.length>40,'Notes pédagogiques absentes : '+key);
  const filename=join(tmp,'lesson-'+index+'.c'),exe=join(tmp,'lesson-'+index);
  writeFileSync(filename,lesson.example);
  const build=spawnSync('gcc',['-std=gnu89','-Wall','-Wextra','-Werror','-pedantic',filename,'-o',exe],{encoding:'utf8',timeout:15000});
  if(build.error)throw build.error;
  assert.equal(build.status,0,'Compilation C89 échouée : '+key+'\n'+build.stderr);
  const result=spawnSync(exe,[],{encoding:'utf8',timeout:15000});
  if(result.error)throw result.error;
  assert.equal(result.status,0,'Exécution échouée : '+key+'\n'+result.stderr);
  assert.equal(result.stdout,expected,'Sortie inattendue : '+key);
 }
}finally{
 rmSync(tmp,{recursive:true,force:true});
}
console.log('switch/case/default, break et continue : cours, exemples GNU89 stricts et sorties vérifiés.');

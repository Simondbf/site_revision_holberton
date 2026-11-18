import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
function data(id){
 const tag='<script id="'+id+'" type="application/json">';
 const i=html.indexOf(tag),j=html.indexOf('</script>',i+tag.length);
 assert.ok(i>=0&&j>i,'Bloc manquant : '+id);
 return JSON.parse(html.slice(i+tag.length,j));
}
const sections=data('content-data').sections,extra=data('extra-lessons'),notes=data('teaching-notes');
assert.equal(sections.length,17,'17 thèmes attendus');
assert.equal(sections[8].items.length,37,'Six notions ajoutées à Programmation C');
const cases=[
 [31,'Fonction variadique — déclarer des arguments avec ...','5 8 13\n'],
 [32,'va_list et va_start — initialiser le parcours','15\n'],
 [33,'va_arg — lire les valeurs et comprendre les promotions','Types: A 2.5\n'],
 [34,'va_end — terminer correctement une liste variadique','10\n'],
 [35,'Fonction variadique — compteur ou sentinelle de fin','3\n'],
 [36,'vprintf et va_copy — transmettre ou dupliquer une liste','Essai: 42\n']
];
const temp=mkdtempSync(join(tmpdir(),'hbtn-variadique-'));
try {
 for(const [ii,title,expected] of cases){
  const key='8:'+ii,lesson=extra[key],note=notes[key];
  assert.equal(sections[8].items[ii]?.term,title,'Index ou titre déplacé : '+key);
  assert.ok(sections[8].items[ii]?.definition?.length>60,'Résumé absent : '+key);
  assert.ok(lesson?.explanation?.length>350&&lesson?.note?.length>60,'Cours incomplet : '+key);
  assert.ok(lesson?.sources?.length>=3,'Sources manquantes : '+key);
  assert.ok(note?.analogy?.length>40&&note?.explained?.length>40,'Explication détaillée absente : '+key);
  assert.ok(lesson.example.includes('#include <stdarg.h>'),'En-tête manquant : '+key);
  const filename=join(temp,'notion-'+ii+'.c'),exe=join(temp,'notion-'+ii);
  writeFileSync(filename,lesson.example);
  const compile=spawnSync('gcc',['-std=gnu89','-Wall','-Werror','-Wextra','-pedantic',filename,'-o',exe],{encoding:'utf8',timeout:15000});
  if(compile.error)throw compile.error;
  assert.equal(compile.status,0,'Compilation GNU89 échouée pour '+key+'\n'+compile.stderr);
  const run=spawnSync(exe,[],{encoding:'utf8',timeout:15000});
  if(run.error)throw run.error;
  assert.equal(run.status,0,'Exécution échouée pour '+key+'\n'+run.stderr);
  assert.equal(run.stdout,expected,'Sortie C erronée pour '+key);
 }
 assert.ok(extra['8:36'].explanation.includes('C99'),'va_copy ne doit pas être présentée comme C89 portable');
} finally {rmSync(temp,{recursive:true,force:true});}
console.log('Six cours stdarg.h vérifiés : titres, sources, GNU89 strict et sorties des exemples.');

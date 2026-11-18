import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
function block(id){
 const start='<script id="'+id+'" type="application/json">';
 const s=html.indexOf(start),e=html.indexOf('</script>',s+start.length);
 assert.ok(s>=0&&e>s,'Bloc introuvable : '+id);
 return JSON.parse(html.slice(s+start.length,e));
}
const sections=block('content-data').sections;
const pointers=block('pointer-data');
const notes=block('teaching-notes');
assert.equal(sections[9].title,'Pointeurs et tableaux C');
assert.equal(sections[9].items.length,77,'Cinq notions argc/argv attendues à la fin du chapitre');
const cases=[
 [72,'main(int argc, char *argv[]) — recevoir des arguments',['bonjour','deux mots'],'argc=3\npremier=bonjour\n'],
 [73,'argc — compter les arguments de la ligne de commande',['rouge','bleu'],'2 argument(s) utilisateur\n'],
 [74,'argv — tableau de chaînes et indices',['Ada','deux mots'],'Ada\ndeux mots\n'],
 [75,'argv[i][j] — caractère d\'un argument et double indirection',['code'],'c o\n'],
 [76,'argv[argc] == NULL — borne de fin et parcours sûr',['Ada','C'],'Ada\nC\nfin=NULL\n']
];
const temp=mkdtempSync(join(tmpdir(),'holberton-argc-argv-'));
try{
 for(let [i,title,args,expected] of cases){
  const item=sections[9].items[i],lesson=pointers[String(i)],note=notes['9:'+i];
  assert.equal(item?.term,title,'Titre/index invalide : '+i);
  assert.ok(item.definition?.length>30,'Résumé incomplet : '+i);
  assert.ok(lesson.explanation.split('\n\n').length>=3,'Explication mal structurée : '+i);
  assert.ok(lesson.note&&lesson.sources?.length>=3,'Sources et note absentes : '+i);
  assert.ok(note?.analogy&&note?.explained,'Analogie manquante : '+i);
  assert.ok(lesson.example.includes('int main(int argc,'),'Exemple sans argv : '+i);
  const f=join(temp,'exemple-'+i+'.c'),exe=join(temp,'exemple-'+i);
  writeFileSync(f,lesson.example);
  const compile=spawnSync('gcc',['-std=gnu89','-Wall','-Wextra','-Werror','-pedantic',f,'-o',exe],{encoding:'utf8',timeout:15000});
  if(compile.error)throw compile.error;
  assert.equal(compile.status,0,'Compilation de la fiche '+i+' : '+compile.stderr);
  const run=spawnSync(exe,args,{encoding:'utf8',timeout:15000});
  if(run.error)throw run.error;
  assert.equal(run.status,0,'Exécution de la fiche '+i+' : '+run.stderr);
  assert.equal(run.stdout,expected,'Sortie erronée de la fiche '+i);
 }
}finally{rmSync(temp,{recursive:true,force:true});}
console.log('Cinq fiches argc/argv vérifiées : GNU89 strict, index stables, sorties, sources et analogies.');

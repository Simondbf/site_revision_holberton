import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
function block(id) {
  const marker='<script id="'+id+'" type="application/json">';
  const start=html.indexOf(marker);
  assert.ok(start>=0,'Bloc absent : '+id);
  const end=html.indexOf('</script>',start+marker.length);
  assert.ok(end>start,'Fin du bloc introuvable : '+id);
  return JSON.parse(html.slice(start+marker.length,end));
}
const sections=block('content-data').sections;
const pointers=block('pointer-data');
const teaching=block('teaching-notes');
assert.equal(sections[9].title,'Pointeurs et tableaux C',
  'La section des pointeurs a été déplacée, vérifier les URL.');
const expected=[
  [66,'Pointeur de fonction — déclarer une signature','16\n'],
  [67,'Appeler un pointeur de fonction — f(x) ou (*f)(x)','6\n10\n'],
  [68,'Callback — transmettre une fonction en paramètre','14\n'],
  [69,'Tableau de pointeurs de fonctions — choisir une opération','15\n'],
  [70,"typedef d'un pointeur de fonction — simplifier les signatures",'7\n'],
  [71,'qsort() — comparateur passé par pointeur de fonction','1 4 8 \n']
];
assert.ok(sections[9].items.length>=72,'Des fiches de pointeurs de fonctions ont disparu.');
const temp=mkdtempSync(join(tmpdir(),'holberton-callbacks-'));
try {
  for(const [index,title,output] of expected) {
    const item=sections[9].items[index],p=pointers[String(index)],n=teaching['9:'+index];
    assert.equal(item?.term,title,'Titre ou index de notion incorrect : '+index);
    assert.ok(item.definition?.trim(),'Résumé absent : '+index);
    assert.ok(p?.explanation?.split('\n\n').length>=3,'Paragraphes manquants : '+index);
    assert.ok(p?.note && p?.sources?.length>=2,'Note ou sources manquantes : '+index);
    assert.ok(n?.analogy?.trim()&&n?.explained?.trim(),'Analogie absente : '+index);
    assert.ok(p?.example?.includes('int main(void)'),'Exemple autonome absent : '+index);
    const file=join(temp,'exemple-'+index+'.c');
    const bin=join(temp,'exemple-'+index);
    writeFileSync(file,p.example);
    const build=spawnSync('gcc',['-std=gnu89','-Wall','-Wextra','-Werror','-pedantic',file,'-o',bin],
      {encoding:'utf8',timeout:15000});
    if(build.error)throw build.error;
    assert.equal(build.status,0,'Compilation GNU89 échouée pour '+index+' : '+build.stderr);
    const run=spawnSync(bin,[],{encoding:'utf8',timeout:15000});
    if(run.error)throw run.error;
    assert.equal(run.status,0,'Exécution échouée pour '+index+' : '+run.stderr);
    assert.equal(run.stdout,output,'Résultat incohérent pour la fiche '+index);
  }
}finally{
  rmSync(temp,{recursive:true,force:true});
}
console.log('Six nouvelles fiches de pointeurs de fonctions validées (GNU89 strict, sorties, sources et analogies).');

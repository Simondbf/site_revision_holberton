import assert from 'node:assert/strict';
import {readFileSync, mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const block=id=>JSON.parse(html.split('<script id="'+id+'" type="application/json">')[1].split('</script>')[0]);
const sections=block('content-data').sections;
const extra=block('extra-lessons');
const pointers=block('pointer-data');
const counts=sections.map(s=>s.items.length);
const number=counts.reduce((a,b)=>a+b,0);

assert.equal(number,182,'La liste des 182 notions doit rester complète.');
let notes=0;
for(const [si,section]of sections.entries()){
  for(const [ii,item]of section.items.entries()){
    const p=si===9?pointers[String(ii)]:extra[si+':'+ii];
    assert.ok(p?.explanation?.trim(),'Explication manquante : '+si+':'+ii+' '+item.term);
    assert.ok(p?.example?.trim(),'Exemple manquant : '+si+':'+ii+' '+item.term);
    assert.ok(p?.note?.trim(),'À retenir spécifique manquant : '+si+':'+ii+' '+item.term);
    assert.ok(item.definition?.trim(),'Résumé court manquant : '+si+':'+ii+' '+item.term);
    notes++;
  }
}
assert.equal(notes,182);
assert.ok(!html.includes("const note=(p&&p.note)?p.note:(cr.detail"),'Ne pas réutiliser la note générique du chapitre.');

const travail=mkdtempSync(join(tmpdir(),'holberton-pedagogie-'));
try{
  const run=(cmd,args,opts={})=>{
    const p=spawnSync(cmd,args,{encoding:'utf8',timeout:15000,...opts});
    if(p.error)throw p.error;
    assert.equal(p.status,0,cmd+' '+args.join(' ')+' : '+p.stderr);
    return p.stdout;
  };
  const asProgram=snippet=>'#include <stdio.h>\nint main(void)\n{\n'+snippet+'\nreturn 0;\n}\n';
  const testsC=[
    {name:'Boucle for GNU89',source:asProgram(extra['5:4'].example),output:'0\n1\n2\n'},
    {name:'Boucles imbriquées GNU89',source:asProgram(extra['5:9'].example),output:'0,0\n0,1\n0,2\n1,0\n1,1\n1,2\n'},
    {name:'Parcours de tableau GNU89',source:asProgram(pointers['26'].example),output:'2\n4\n6\n'},
    {name:'Pointeur transmis à une fonction',source:pointers['12'].example+'\n',output:'7\n'},
    {name:'Affichage float et double',source:extra['8:18'].example+'\n',output:'0.10\n'},
    {name:'while(i--)',source:asProgram(extra['11:4'].example),output:'876543210'},
    {name:'while(--i)',source:asProgram(extra['11:5'].example),output:'87654321'},
    {name:'Codes 0 et 1 renvoyés par une fonction',source:extra['8:20'].example+'\n',output:'1 0\n'},
    {name:'Retour d’un caractère',source:extra['8:21'].example+'\n',output:'H\n'},
    {name:'Retour d’un pointeur',source:extra['8:22'].example+'\n',output:'7\n'},
    {name:'malloc — allouer un entier',source:pointers['30'].example+'\n',output:'42\n'},
    {name:'free — libérer un tableau alloué',source:pointers['31'].example+'\n',output:'7 9\n'},
    {name:'Allocation automatique',source:pointers['32'].example+'\n',output:'4\n'},
    {name:'Tableau modifiable et littéral',source:pointers['33'].example+'\n',output:'School / school\n'},
    {name:'Contrôle du retour de malloc',source:pointers['34'].example+'\n',output:'98, -1024, 402\n'},
    {name:'Allocation et libération sans fuite',source:pointers['35'].example+'\n',output:'-524\n'},
    {name:'Tableau char et .rodata',source:pointers['37'].example+'\n',output:'school\n'}
  ];
  for(const [i,test]of testsC.entries()){
    const exe=join(travail,'exemple-'+i);
    run('gcc',['-std=gnu89','-pedantic-errors','-x','c','-o',exe,'-'],{input:test.source});
    assert.equal(run(exe,[]),test.output,'Résultat incorrect : '+test.name);
  }
  assert.equal(run('bash',['-c',extra['3:7'].example]).trim(),'3',
    'Le comptage des lignes avec wc -l devrait afficher 3.');
  assert.match(pointers['36'].example, /valgrind --leak-check=full/, 'Commande Valgrind absente.');
  assert.match(pointers['35'].explanation, /fuite mémoire/, 'Fuite non expliquée.');
  assert.match(pointers['33'].note, /char s\[\]/, 'Différence littéral/tableau absente.');
  assert.match(pointers['30'].explanation, /NULL/, 'Échec de malloc non expliqué.');
  assert.match(pointers['31'].note, /doubles free/, 'Double libération non expliquée.');
  assert.match(extra['8:20'].explanation, /EXIT_FAILURE/, 'Codes de retour de main mal expliqués.');
  assert.match(extra['8:21'].note, /char \*/, 'Différence entre char et pointeur absente.');
  assert.match(extra['8:22'].note, /variable locale/, 'Durée de vie des pointeurs absente.');
  assert.ok(extra['3:0'].note.includes('octal'),'La notation octale 4/2/1 doit être expliquée.');
  assert.ok(pointers['19'].explanation.includes('sizeof(int)'),'Le déplacement d’un pointeur ne doit pas être codé en dur.');
  assert.match(extra['11:4'].note, /-1/,'while(i--) se termine avec i à -1.');
  assert.match(extra['11:5'].note, /0/,'while(--i) se termine avec i à 0.');
  console.log('Audit réussi : '+notes+' fiches, '+testsC.length+' programmes C GNU89 et une commande Bash testés.');
}finally{rmSync(travail,{recursive:true,force:true});}

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

assert.equal(number,209,'La liste des 209 notions doit rester complète.');
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
assert.equal(notes,209);
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
    {name:'Tableau char et .rodata',source:pointers['37'].example+'\n',output:'school\n'},
    {name:'malloc 10 éléments avec sizeof',source:pointers['38'].example+'\n',output:'98 402\n'},
    {name:'strlen et terminateur nul',source:pointers['39'].example+'\n',output:'11 Best School\n'},
    {name:'strcpy vers tableau suffisant',source:pointers['40'].example+'\n',output:'Best School\n'},
    {name:'strdup POSIX et free',source:pointers['41'].example+'\n',output:'Best School\n'},
    {name:'pile et tas',source:pointers['42'].example+'\n',output:'5 7\n'},
    {name:'free sur un bloc malloc valide',source:pointers['43'].example+'\n',output:'Best School\n'},
    {name:'pointeur initialise',source:pointers['44'].example+'\n',output:'98\n'},
    {name:'exit — retour normal',source:extra['8:23'].example+'\n',output:'Le programme continue\n'},
    {name:'struct/typedef 16:0',source:extra['16:0'].example+'\n',output:"2 3\n"},
    {name:'struct/typedef 16:1',source:extra['16:1'].example+'\n',output:"3 7\n"},
    {name:'struct/typedef 16:2',source:extra['16:2'].example+'\n',output:"7 3\n"},
    {name:'struct/typedef 16:3',source:extra['16:3'].example+'\n',output:"9 9\n"},
    {name:'struct/typedef 16:4',source:extra['16:4'].example+'\n',output:"4 5 0\n"},
    {name:'struct/typedef 16:6',source:extra['16:6'].example+'\n',output:"3 4\n"},
    {name:'struct/typedef 16:7',source:extra['16:7'].example+'\n',output:"8 5\n"},
    {name:'struct/typedef 16:8',source:extra['16:8'].example+'\n',output:"2 9\n"},
    {name:'struct/typedef 16:9',source:extra['16:9'].example+'\n',output:"2\n"},
    {name:'struct/typedef 16:10',source:extra['16:10'].example+'\n',output:"9\n"},
    {name:'struct/typedef 16:11',source:extra['16:11'].example+'\n',output:"42\n"},
    {name:'struct/typedef 16:12',source:extra['16:12'].example+'\n',output:"4\n"},
    {name:'struct/typedef 16:13',source:extra['16:13'].example+'\n',output:"1 2\n"},
    {name:'struct/typedef 16:14',source:extra['16:14'].example+'\n',output:"1\n"},
    {name:'struct/typedef 16:15',source:extra['16:15'].example+'\n',output:"6 2\n"},
    {name:'struct/typedef 16:16',source:extra['16:16'].example+'\n',output:"3 1\n"},
    {name:'Betty struct documentation C valid',source:'#include <stdio.h>\n'+extra['16:17'].example+'\nint main(void) { struct point p = {1, 2}; printf("%d %d\\n",p.x,p.y); return 0; }\n',output:'1 2\n'},
    {name:'typedef forward type completed',source:extra['16:18'].example+'\n',output:'1 2\n'}
  ];
  for(const [i,test]of testsC.entries()){
    const exe=join(travail,'exemple-'+i);
    run('gcc',['-std=gnu89','-pedantic-errors','-x','c','-o',exe,'-'],{input:test.source});
    assert.equal(run(exe,[]),test.output,'Résultat incorrect : '+test.name);
  }
  const c99quiz=extra['16:18'].example.replace('point p = {1, 2};','point p = { .y = 2, .x = 1 };');
  assert.notEqual(c99quiz, extra['16:18'].example, 'Cas du quiz désigné absent.');
  const quizexe=join(travail,'typedef-designe-c99');
  run('gcc',['-std=c99','-pedantic-errors','-x','c','-o',quizexe,'-'],{input:c99quiz});
  assert.equal(run(quizexe,[]),'1 2\n','Les deux initialiseurs doivent donner les mêmes membres.');
  const enGnu89=spawnSync('gcc',['-std=gnu89','-pedantic-errors','-x','c','-o',join(travail,'designe-gnu89'),'-'],
    {input:c99quiz,encoding:'utf8',timeout:15000});
  if(enGnu89.error)throw enGnu89.error;
  assert.notEqual(enGnu89.status,0,'Initialiseur désigné C99 accepté à tort en mode GNU89 pédant.');
  assert.match(extra['16:17'].note,/Betty/, 'Documentation Betty manquante.');
  assert.match(extra['16:18'].explanation,/incomplet/, 'Typedef anticipé incomplet mal expliqué.');
  const c99exe=join(travail,'exemple-initialisation-designee');
  run('gcc',['-std=c99','-pedantic-errors','-x','c','-o',c99exe,'-'],
    {input:extra['16:5'].example});
  assert.equal(run(c99exe,[]),'3 7\n',
    'Les initialiseurs désignés sont testés en C99, pas en GNU89 strict.');
  assert.match(extra['16:5'].note, /GNU89/, 'Avertissement GNU89 absent.');
  assert.match(extra['16:14'].explanation, /padding/, 'Alignement des structures mal décrit.');
  assert.match(extra['16:8'].note, /pointeurs/, 'Copie superficielle des membres pointeurs oubliée.');
  assert.match(extra['16:16'].note, /NULL/, 'Structure autoréférentielle manquante.');
  const exempleExit=extra['8:23'].example.replace('verifier(1);','verifier(0);');
  assert.notEqual(exempleExit,extra['8:23'].example,'Branche d’échec exit(98) introuvable.');
  const exeExit=join(travail,'test-exit-98');
  run('gcc',['-std=gnu89','-pedantic-errors','-x','c','-o',exeExit,'-'],{input:exempleExit});
  const resultatExit=spawnSync(exeExit,[],{encoding:'utf8',timeout:15000});
  if(resultatExit.error)throw resultatExit.error;
  assert.equal(resultatExit.status,98,'exit(98) doit terminer avec le statut 98 sous Linux.');
  assert.equal(resultatExit.stdout,'','Aucune instruction après exit(98) ne doit être exécutée.');
  assert.match(extra['8:23'].explanation,/EXIT_FAILURE/,'Exit portable non expliqué.');
  assert.match(extra['8:23'].note,/free\(\)/,'Différence exit et free absente.');
  assert.equal(run('bash',['-c',extra['3:7'].example]).trim(),'3',
    'Le comptage des lignes avec wc -l devrait afficher 3.');
  assert.match(pointers['38'].explanation, /640 octets/, 'malloc(64 * 10) mal expliqué.');
  assert.match(pointers['39'].explanation, /12 en C/, 'strlen versus sizeof mal expliqué.');
  assert.match(pointers['40'].explanation, /contrôle de NULL/, 'Contrôle allocation et strcpy absent.');
  assert.match(pointers['41'].note, /POSIX/, 'Portabilité strdup absente.');
  assert.match(pointers['43'].note, /free\(NULL\)/, 'Cas free(NULL) absent.');
  assert.match(pointers['44'].note, /jamais une garantie/, 'UB non initialisé mal expliquée.');
  assert.match(pointers['36'].example, /valgrind --leak-check=full/, 'Commande Valgrind absente.');
  assert.match(pointers['35'].explanation, /fuite mémoire/, 'Fuite non expliquée.');
  assert.match(pointers['33'].note, /char s\[\]/, 'Différence littéral/tableau absente.');
  assert.match(pointers['30'].explanation, /NULL/, 'Échec de malloc non expliqué.');
  assert.match(pointers['31'].note, /doubles free/, 'Double libération non expliquée.');
  assert.match(sections[8].items[3].definition, /si son type de retour le prévoit/, 'return ne renvoie pas toujours une valeur.');
  assert.match(extra['8:10'].explanation, /-pedantic-errors/, 'GNU89 et C89 strict sont confondus.');
  assert.match(extra['4:2'].note, /BEST=School/, 'La variable non exportée de Holberton est mal distinguée de local.');
  assert.match(extra['8:20'].explanation, /EXIT_FAILURE/, 'Codes de retour de main mal expliqués.');
  assert.match(extra['8:21'].note, /char \*/, 'Différence entre char et pointeur absente.');
  assert.match(extra['8:22'].note, /variable locale/, 'Durée de vie des pointeurs absente.');
  assert.ok(extra['3:0'].note.includes('octal'),'La notation octale 4/2/1 doit être expliquée.');
  assert.ok(pointers['19'].explanation.includes('sizeof(int)'),'Le déplacement d’un pointeur ne doit pas être codé en dur.');
  assert.match(extra['11:4'].note, /-1/,'while(i--) se termine avec i à -1.');
  assert.match(extra['11:5'].note, /0/,'while(--i) se termine avec i à 0.');
  console.log('Audit réussi : '+notes+' fiches, '+testsC.length+' programmes C GNU89 et une commande Bash testés.');
}finally{rmSync(travail,{recursive:true,force:true});}

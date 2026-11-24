import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const source=path=>readFileSync(join(root,path),'utf8');
const htmlPath=join(root,'index.html');
const original=readFileSync(htmlPath,'utf8');
const css=source('quiz/styles.css').trim()+'\n'+source('account/styles.css').trim();
const core=source('quiz/core.mjs');
const engine=source('quiz/engine.mjs');
const account=source('account/client.mjs');
const argc=JSON.parse(source('docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json'));
const variadic=JSON.parse(source('quiz/questions-variadiques.json'));
const reviewed=JSON.parse(source('quiz/questions-revisees.json'));
const help=JSON.parse(source('quiz/aide-pedagogique.json'));
const argcQuestions=argc.questions.filter(q=>/^V1-N09_07[2-6]-0[1-5]$/.test(q.id));
assert.equal(argcQuestions.length,25,'25 questions argc/argv attendues');
assert.equal(variadic.questions.length,30,'30 questions variadiques attendues');
const questions=[...argcQuestions,...variadic.questions,...reviewed.questions];
assert.equal(Object.keys(help.questions).length,questions.length,'Une reformulation par question attendue.');
for(const question of questions){
 const item=help.questions[question.id];
 assert.ok(item?.prompt?.length>=30,'Question reformulée manquante : '+question.id);
 assert.deepEqual(Object.keys(item.feedback).sort(),question.options.map(o=>o.id).sort(),
  'Justification manquante : '+question.id);
 for(const reason of Object.values(item.feedback))assert.ok(reason.length>=12,'Justification trop courte : '+question.id);
}

// Échapper < afin que des données JSON ne puissent jamais clore un élément script HTML.
const safeJSON=data=>JSON.stringify(data).replace(/</g,'\\u003c');
const pureCore=core.replace(/^export /gm,'');
const pureEngine=engine.replace(/^import \{[^\n]+\} from '\.\/core\.mjs';\n/,'');
const pureAccount=account.replace(/^import \{[^\n]+\} from '\.\.\/quiz\/core\.mjs';\n/,'');
assert.notEqual(pureCore,core,'Les exports du moteur doivent être intégrés.');
assert.notEqual(pureEngine,engine,'Le module moteur doit importer le core.');
assert.notEqual(pureAccount,account,'Le client comptes doit importer le core.');
assert.ok(!/<\/script/i.test(pureCore+pureEngine+pureAccount),'Un script HTML ne doit pas être clos depuis le bundle.');
assert.ok(engine.includes("getElementById('quiz-argc-bank')"),'Le quiz doit savoir lire la banque intégrée.');

const cssStart='<!-- DEBUT QUIZ CSS INTEGRE -->';
const cssEnd='<!-- FIN QUIZ CSS INTEGRE -->';
const appStart='<!-- DEBUT QUIZ AUTONOME -->';
const appEnd='<!-- FIN QUIZ AUTONOME -->';
const cssBlock=cssStart+'\n<style id="quiz-inline-style">\n'+css+'\n</style>\n'+cssEnd;
const appBlock=appStart+'\n'+
 '<script id="quiz-argc-bank" type="application/json">'+safeJSON({questions:argcQuestions})+'</script>\n'+
 '<script id="quiz-variadic-bank" type="application/json">'+safeJSON(variadic)+'</script>\n'+
 '<script id="quiz-reviewed-bank" type="application/json">'+safeJSON(reviewed)+'</script>\n'+
 '<script id="quiz-aide-bank" type="application/json">'+safeJSON(help)+'</script>\n'+
 '<script type="module" id="quiz-inline-module">\n'+pureCore+'\n'+pureEngine+'\n'+pureAccount+'\n</script>\n'+appEnd;
function replaceBlock(text,start,end,legacy,replacement){
 const i=text.indexOf(start);
 if(i!==-1){
  assert.equal(text.indexOf(start,i+start.length),-1,'Marqueur dupliqué : '+start);
  const j=text.indexOf(end,i+start.length);
  assert.ok(j!==-1,'Fin du marqueur absente : '+end);
  return text.slice(0,i)+replacement+text.slice(j+end.length);
 }
 assert.ok(text.includes(legacy),'Point d’insertion historique absent : '+legacy);
 return text.replace(legacy,replacement);
}
let output=replaceBlock(original,cssStart,cssEnd,
 '<link rel="stylesheet" href="./quiz/styles.css">',cssBlock);
output=replaceBlock(output,appStart,appEnd,
 '<script type="module" src="./quiz/engine.mjs"></script>',appBlock);
assert.ok(!output.includes('src="./quiz/engine.mjs"')&&!output.includes('href="./quiz/styles.css"'),
 'Le HTML publié ne doit dépendre d’aucune ressource de quiz externe.');
if(process.argv.includes('--check')){
 assert.equal(original,output,'index.html n’est plus synchronisé avec les sources quiz. Lance node scripts/integrer_quiz_html.mjs --write.');
 console.log('Le quiz autonome intégré dans index.html correspond exactement aux sources.');
}else if(process.argv.includes('--write')){
 writeFileSync(htmlPath,output);
 console.log(questions.length+' questions intégrées dans index.html, JS et CSS autonomes.');
}else{
 throw Error('Usage : node scripts/integrer_quiz_html.mjs --write|--check');
}

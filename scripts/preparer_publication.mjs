import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {copyFileSync,existsSync,mkdirSync,readFileSync,rmSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';

// Prépare seulement les fichiers statiques à publier ; aucun déploiement VPS.
const root=fileURLToPath(new URL('../',import.meta.url));
const html=readFileSync(join(root,'index.html'),'utf8');
const quizInline=html.includes('id="quiz-inline-module"');
const quizExternal=html.includes('src="./quiz/engine.mjs"');
const account=html.includes('src="./account/client.mjs"');
const required=['index.html'];
assert.ok(quizInline!==quizExternal,'Il faut exactement un mode de chargement du quiz.');
if(quizInline){
 assert.ok(html.includes('id="quiz-inline-style"')&&
  html.includes('id="quiz-argc-bank"')&&html.includes('id="quiz-variadic-bank"'),
  'Le quiz autonome doit inclure les styles et toutes les questions.');
 assert.ok(!html.includes('href="./quiz/styles.css"'),'Le site autonome ne doit pas charger de CSS externe.');
}else if(quizExternal){
 assert.ok(html.includes('href="./quiz/styles.css"'),'CSS du quiz non référencé.');
 required.push('quiz/core.mjs','quiz/engine.mjs','quiz/styles.css',
  'quiz/questions-variadiques.json',
  'docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json');
}
if(account){
 assert.ok(html.includes('href="./account/styles.css"'),'CSS du compte non référencé.');
 required.push('account/client.mjs','account/styles.css');
}
for(const path of required)assert.ok(existsSync(join(root,path)),'Ressource statique manquante : '+path);
const dest=join(root,'publication');
rmSync(dest,{recursive:true,force:true});
const files=[];
for(const path of required){
 const target=join(dest,path);
 mkdirSync(dirname(target),{recursive:true});
 copyFileSync(join(root,path),target);
 const sha256=createHash('sha256').update(readFileSync(target)).digest('hex');
 files.push({path,sha256});
}
assert.ok(!files.some(x=>x.path.startsWith('server/')),'Le backend privé ne doit pas être publié comme fichier statique.');
const manifest={schema:1,hasQuiz:quizInline||quizExternal,publicationIndexSeul:quizInline&&!account,hasAccountInterface:account,files};
writeFileSync(join(dest,'manifest-publication.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('Paquet de publication statique contrôlé : '+files.length+' fichiers. Quiz intégré à index.html : '+quizInline+', compte : '+account+'.');

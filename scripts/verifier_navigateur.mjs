import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFileSync,mkdirSync} from 'node:fs';
import {chromium} from 'playwright';

const source=readFileSync(new URL('../index.html',import.meta.url));
const contenu=JSON.parse(source.toString('utf8').split('<script id="content-data" type="application/json">')[1].split('</script>')[0]);
const slug=s=>s.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const topicName='Pointeurs et tableaux C';
const si=contenu.sections.findIndex(s=>s.title===topicName);
assert.ok(si>=0,'Thème Pointeurs introuvable.');
const expectedCards=contenu.sections[si].items.length;
const route=(topic,notion)=>{
 const cat=contenu.sections.find(s=>s.title===topic);
 assert.ok(cat,'Thème introuvable : '+topic);
 const ii=cat.items.findIndex(n=>n.term===notion);
 assert.ok(ii>=0,'Notion introuvable : '+notion);
 return '#cours/'+slug(topic)+'/'+(ii+1)+'-'+slug(notion);
};
const target=ii=>route(topicName,contenu.sections[si].items[ii].term);
const server=createServer((_req,res)=>{
 res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
 res.end(source);
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const origin='http://127.0.0.1:'+server.address().port;
mkdirSync('apercus',{recursive:true});
let browser;
const errors=[];
try{
 browser=await chromium.launch(process.env.CI?{channel:'chrome',headless:true}:{headless:true});
 const page=await browser.newPage({viewport:{width:1330,height:900},deviceScaleFactor:1});
 page.on('pageerror',e=>errors.push(e.message));

 // Les post-it gardent leur définition et n'ouvrent plus de fenêtre superposée.
 await page.goto(origin+'/#theme/'+slug(topicName));
 const cards=page.locator('#definitions article.def');
 assert.equal(await cards.count(),expectedCards,'Le thème doit afficher tous ses post-it.');
 assert.match(await cards.first().innerText(),/Variable dont la valeur est une adresse/);
 await page.locator('#definitions .card-hit').nth(5).scrollIntoViewIfNeeded();
 const before=await page.evaluate(()=>window.scrollY);
 await page.locator('#definitions .card-hit').nth(5).click();
 await page.waitForFunction(()=>location.hash.startsWith('#cours/'));
 assert.equal(await page.locator('#conceptDialog').count(),0,'Une fenêtre pop-up existe encore.');
 assert.equal(await page.locator('#courseArticle .lesson-panel').count(),expectedCards,
  'La lecture continue doit contenir toutes les notions du thème.');
 assert.ok(await page.locator('#notion-9-5 .lead').isVisible(),'Le résumé court manque dans le cours détaillé.');
 assert.ok(await page.locator('#notion-9-5 .lesson-visual svg').count()===1,'Le schéma de modification par pointeur est manquant.');
 assert.ok(await page.locator('#notion-9-8 .lesson-visual svg').count()===0,'Une illustration inutile reste affichée pour %p.');

 // Le bouton retourne à la liste et à la position précise précédente.
 await page.locator('#courseBack').click();
 await page.waitForFunction(()=>location.hash==='#theme/pointeurs-et-tableaux-c');
 await page.waitForTimeout(240);
 const restored=await page.evaluate(()=>window.scrollY);
 assert.ok(Math.abs(restored-before)<22,'Retour aux post-it imprécis : avant '+before+' / après '+restored);

 // Le lien direct fonctionne, même en arrivant depuis l'extérieur.
 await page.goto(origin+'/'+target(2));
 await page.waitForFunction(()=>document.querySelector('#notion-9-2')?.classList.contains('lesson-selected'));
 await page.waitForTimeout(240);
 const firstActive=page.locator('#sideCategories .side-notions a.active');
 assert.equal(await firstActive.count(),1,'Plusieurs notions sont actives.');
 assert.equal(await firstActive.getAttribute('data-side-target'),target(2),'Le sommaire ne correspond pas à la notion chargée.');
 const initialHash=await page.evaluate(()=>location.hash);
 const initialHistory=await page.evaluate(()=>history.length);
 await page.screenshot({path:'apercus/sommaire-notion-active.png'});

 // Faire défiler ne modifie ni le hash ni l'historique.
 await page.locator('#notion-9-20').evaluate(node=>{
  window.scrollTo({top:window.scrollY+node.getBoundingClientRect().top-120,behavior:'instant'});
 });
 await page.waitForFunction(expected=>{
  return document.querySelector('#sideCategories .side-notions a.active')?.getAttribute('data-side-target')===expected;
 },target(20),{timeout:12000});
 const activeAfterScroll=page.locator('#sideCategories .side-notions a.active');
 assert.equal(await activeAfterScroll.getAttribute('data-side-target'),target(20),'Le sommaire ne suit pas le défilement.');
 const visible=await activeAfterScroll.evaluate(el=>{
  const item=el.getBoundingClientRect(),side=document.querySelector('#courseSidebar').getBoundingClientRect();
  return {inside:item.top>=side.top+22&&item.bottom<=side.bottom-20,
   sidebarScroll:document.querySelector('#courseSidebar').scrollTop};
 });
 assert.ok(visible.inside,'La notion active est masquée dans la barre latérale.');
 assert.ok(visible.sidebarScroll>0,'La barre latérale ne défile pas indépendamment.');
 assert.equal(await page.evaluate(()=>location.hash),initialHash,'Le scroll a modifié l’URL.');
 assert.equal(await page.evaluate(()=>history.length),initialHistory,'Le scroll a ajouté une entrée à l’historique.');
 await page.screenshot({path:'apercus/sommaire-synchronise.png'});

 // Le retour reste réellement visible après un long défilement dans le chapitre.
 const toolbar=await page.evaluate(()=>{
  const button=document.querySelector('#courseBack').getBoundingClientRect();
  const top=document.querySelector('body > header').getBoundingClientRect().bottom;
  const bar=document.querySelector('#courseToolbar').getBoundingClientRect();
  return {buttonY:button.top,buttonBottom:button.bottom,headerBottom:top,
   toolbarTop:bar.top,viewport:window.innerHeight,toolbarPosition:getComputedStyle(document.querySelector('#courseToolbar')).position};
 });
 assert.equal(toolbar.toolbarPosition,'sticky','La barre Retour aux fiches doit être sticky.');
 assert.ok(toolbar.buttonY>=toolbar.headerBottom-3 && toolbar.buttonBottom<toolbar.viewport-6,
  'Le bouton Retour aux fiches disparaît après défilement : '+JSON.stringify(toolbar));
 await page.screenshot({path:'apercus/retour-persistant.png'});

 // Contrôler non seulement la présence des images, mais leur sens.
 const notions=await page.evaluate(()=>{
  return [...document.querySelectorAll('#courseArticle .lesson-panel')].map((panel,index)=>{
   const visual=panel.querySelector('figure.lesson-visual, figure.lesson-diagram');
   return {index,title:panel.querySelector('.lesson-heading')?.textContent||'',image:visual?.outerHTML||'',
     visualTitle:visual?.querySelector('.lesson-visual-title, .diagram-title')?.textContent||''};
  });
 });
 const firstImages=notions.slice(0,7);
 assert.equal(firstImages.filter(n=>n.image).length,7,'Les sept premières notions ont besoin de dessins précis.');
 assert.equal(new Set(firstImages.map(n=>n.image)).size,7,'Les sept premières notions réutilisent le même schéma.');
 for(const [ii,keyword]of [[0,'pointeur'],[1,'Adresse mémoire'],[2,'opérateur &'],[3,'déclaration'],
     [4,'Déréférencer'],[5,'Modifier une valeur'],[6,'p, *p et &p']]){
  assert.ok(firstImages[ii].visualTitle.toLowerCase().includes(keyword.toLowerCase()),
   'Schéma de la notion '+ii+' incorrect : '+firstImages[ii].visualTitle);
 }
 assert.equal(new Set(notions.filter(n=>n.image).map(n=>n.image)).size,
  notions.filter(n=>n.image).length,
  'Plusieurs autres schémas du chapitre Pointeurs sont identiques.');
 await page.locator('#notion-9-1 .lesson-visual').screenshot({path:'apercus/adresse-memoire.png'});
 await page.locator('#notion-9-2 .lesson-visual').screenshot({path:'apercus/operateur-adresse.png'});
 await page.locator('#notion-9-5 .lesson-visual').screenshot({path:'apercus/modification-par-pointeur.png'});


 // Le clic explicite sur une autre notion, lui, conserve le lien profond.
 await page.locator('#sideCategories a[data-side-target="'+target(22)+'"]').click();
 await page.waitForFunction(expected=>location.hash===expected,target(22));
 await page.waitForFunction(expected=>document.querySelector('#sideCategories .side-notions a.active')?.getAttribute('data-side-target')===expected,target(22));
 assert.ok(await page.locator('#notion-9-22').isVisible(),'Le lien direct doit permettre d’atteindre le cours.');
 await page.goBack();
 await page.waitForFunction(expected=>location.hash===expected,initialHash);

 // Depuis les résultats de recherche, retour à la recherche et non au début.
 await page.goto(origin+'/#fiches');
 await page.locator('#search').fill('modulo');
 assert.ok(await page.locator('#results article.def').count()>0,'Résultats de recherche absents.');
 await page.locator('#results .card-hit').first().click();
 await page.waitForFunction(()=>location.hash.startsWith('#cours/'));
 await page.locator('#courseBack').click();
 await page.waitForFunction(()=>location.hash==='#fiches');
 assert.equal(await page.locator('#search').inputValue(),'modulo','La recherche doit rester remplie.');
 assert.ok(await page.locator('#results article.def').count()>0,'Les résultats doivent être restaurés.');

 // Les favoris conservent eux aussi le comportement post-it.
 await page.goto(origin+'/#theme/pointeurs-et-tableaux-c');
 await page.locator('#definitions [data-fav]').first().click();
 await page.goto(origin+'/#favoris');
 assert.ok(await page.locator('#favoriteItems .card-hit').count()>0,'Favori introuvable.');
 await page.locator('#favoriteItems .card-hit').first().click();
 await page.waitForFunction(()=>location.hash.startsWith('#cours/'));
 await page.locator('#courseBack').click();
 await page.waitForFunction(()=>location.hash==='#favoris');
 assert.ok(await page.locator('#favoriteItems .card-hit').count()>0,'Le retour aux favoris a échoué.');

 // Les anciens liens #apercu restent utilisables mais ne créent aucune pop-up.
 await page.goto(origin+'/#apercu/pointeurs-et-tableaux-c/1-pointeur-pointer');
 await page.waitForFunction(()=>location.hash.startsWith('#cours/'));
 assert.ok(await page.locator('#notion-9-0').isVisible(),'Le vieux lien ne mène plus au cours.');

 // Nouveau chapitre : fiches, schémas et liens directs restent utilisables.
 await page.goto(origin+'/#theme/structures-et-typedef-en-c');
 assert.equal(await page.locator('#definitions article.def').count(),21,
  'Le nouveau thème doit contenir les 21 post-it.');
 await page.locator('#definitions .card-hit').first().click();
 await page.waitForFunction(()=>location.hash.startsWith('#cours/structures-et-typedef-en-c/'));
 await page.waitForFunction(()=>document.querySelectorAll('#courseArticle .lesson-panel').length===21);
 assert.equal(await page.locator('#courseArticle .lesson-panel').count(),21,
  'Le chapitre Structures doit afficher 21 cours.');
 assert.equal(await page.locator('#notion-16-0 figure.lesson-visual').count(),1,
  'Schéma de définition de struct absent.');
 assert.equal(await page.locator('#notion-16-17 figure.lesson-visual').count(),1, 'Schéma Betty absent.');
 assert.equal(await page.locator('#notion-16-18 figure.lesson-visual').count(),1, 'Schéma typedef anticipé absent.');
 assert.equal(await page.locator('#notion-16-3 figure.lesson-visual').count(),1,
  'Schéma de l’opérateur -> absent.');
 assert.equal(await page.locator('#notion-16-19 figure.lesson-visual').count(),1,'Schéma de comparaison point/flèche absent.');
 assert.equal(await page.locator('#notion-16-20 figure.lesson-visual').count(),1,'Schéma des include guards absent.');
 await page.screenshot({path:'apercus/structures-typedef-desktop.png'});
 await page.goto(origin+'/'+route('Structures et typedef en C','Accès par pointeur avec ->'));
 await page.waitForFunction(()=>document.querySelector('#notion-16-3')?.classList.contains('lesson-selected'));
 assert.ok(await page.locator('#notion-16-3').isVisible(),'Lien profond sur les structures défaillant.');

 // Les explications longues, notamment scanf(), restent aérées dans les cours.
 await page.goto(origin+'/'+route('Programmation C','scanf() — lire une saisie au clavier'));
 await page.waitForFunction(()=>document.querySelector('#notion-8-25')?.classList.contains('lesson-selected'));
 const scanfParagraphs=page.locator('#notion-8-25 .lesson-reading p');
 assert.ok(await scanfParagraphs.count()>=4,'Le cours scanf reste un bloc de texte trop compact.');
 assert.ok((await scanfParagraphs.first().innerText()).includes('scanf'),
  'Le texte de scanf a disparu pendant le découpage.');
 await page.screenshot({path:'apercus/scanf-cours-aere.png'});

 // Contrôle de navigation, de lisibilité et de sources sur les nouvelles notions C.
 await page.goto(origin+'/'+route('Programmation C','fgets() — lire une ligne avec une limite'));
 await page.waitForFunction(()=>document.querySelector('#notion-8-26')?.classList.contains('lesson-selected'));
 assert.ok(await page.locator('#notion-8-26 .lesson-reading p').count()>=3,
  'La nouvelle fiche fgets doit rester aérée.');
 assert.ok((await page.locator('#notion-8-26 .lesson-sources a').allTextContents())
  .some(label=>label.includes('fgets')),'Source man fgets absente.');
 await page.goto(origin+'/'+route('Pointeurs et tableaux C','strncpy() — copie limitée et terminaison'));
 await page.waitForFunction(()=>document.querySelector('#notion-9-47')?.classList.contains('lesson-selected'));
 assert.ok(await page.locator('#notion-9-47 .lesson-reading p').count()>=3,
  'La nouvelle fiche strncpy doit rester aérée.');
 await page.screenshot({path:'apercus/strncpy-cours-aere.png'});


 // Quiz : sélection des notions, progression adaptative et session reprise après fermeture.
 await page.goto(origin+'/#quiz');
 await page.waitForFunction(()=>!document.querySelector('#quiz')?.classList.contains('hidden'));
 assert.equal(await page.locator('#quizBody [data-quiz-notion]').count(),5,'Le pilote doit proposer cinq notions.');
 await page.locator('#quizBody [data-quiz-notion]').evaluateAll(nodes=>
   nodes.forEach(node=>{node.checked=node.dataset.quizNotion==='8:25'}));
 await page.locator('[data-quiz-action="start"]').click();
 await page.waitForFunction(()=>document.querySelector('#quizBody .quiz-choice'));
 assert.match(await page.locator('#quizBody h3').innerText(),/Pour enregistrer un entier/,'La première question doit commencer au niveau initial.');
 let localQuiz=await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-session-v1')));
 assert.deepEqual(localQuiz.selected,['8:25'],'Le choix de notion n’est pas enregistré.');
 assert.equal(localQuiz.current,'sc1','La première question attendue est sc1.');
 await page.reload();
 assert.ok(await page.locator('[data-quiz-choice="1"]').isEnabled(),
  'Une question encore sans réponse doit rester disponible après rechargement.');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-session-v1')).current),'sc1',
  'La question en cours doit être enregistrée même avant la première réponse.');
 await page.locator('[data-quiz-choice="1"]').click();
 assert.ok(await page.locator('.quiz-feedback').isVisible(),'Le retour sur la réponse est absent.');
 await page.reload();
 assert.ok(await page.locator('.quiz-feedback').isVisible(),'Le feedback de la question doit survivre à un rechargement.');
 assert.equal(await page.locator('#quizBody [data-quiz-action="next"]').count(),1,
  'La question doit rester terminée après rechargement.');
 await page.locator('[data-quiz-action="pause"]').click();
 assert.match(await page.locator('#quizBody').innerText(),/Quiz en pause/,'La pause est absente.');
 await page.goto(origin+'/#fiches');
 await page.goto(origin+'/#quiz');
 assert.match(await page.locator('#quizBody').innerText(),/Quiz en pause/,'La session pausée doit rester disponible.');
 await page.locator('[data-quiz-action="resume"]').click();
 assert.ok(await page.locator('.quiz-feedback').isVisible(),'La reprise ne doit pas perdre une réponse.');
 await page.locator('[data-quiz-action="next"]').click();
 localQuiz=await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-session-v1')));
 assert.equal(localQuiz.current,'sc3','Une bonne réponse doit augmenter la difficulté interne.');
 await page.locator('[data-quiz-action="pause"]').click();
 await page.reload();
 assert.match(await page.locator('#quizBody').innerText(),/Quiz en pause/,
  'Une question sans réponse doit rester en pause après fermeture.');
 await page.locator('[data-quiz-action="resume"]').click();
 assert.equal(await page.locator('#quizBody [data-quiz-choice]').count(),4,
  'La question en pause doit être restaurée avec ses quatre choix.');
 await page.locator('[data-quiz-choice="0"]').click();
 assert.match(await page.locator('.quiz-feedback').innerText(),/À revoir/,'La mauvaise réponse est mal signalée.');
 await page.locator('[data-quiz-action="next"]').click();
 localQuiz=await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-session-v1')));
 assert.equal(localQuiz.current,'sc2','Une erreur doit réduire la difficulté interne.');
 // La session progresse sans perdre les réponses déjà données.
 while(await page.locator('#quizBody [data-quiz-choice]').count()){
   await page.locator('[data-quiz-choice="0"]').click();
   await page.locator('[data-quiz-action="next"]').click();
 }
 assert.match(await page.locator('#quizBody h3').innerText(),/Session terminée/,'Le quiz ne se termine pas.');
 localQuiz=await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-session-v1')));
 assert.equal(localQuiz.answered.length,5,'Les cinq réponses de la notion sont attendues.');
 assert.equal(localQuiz.status,'completed','La session complète doit être enregistrée.');
 await page.reload();
 assert.match(await page.locator('#quizBody h3').innerText(),/Session terminée/,
  'Les résultats doivent persister après un rechargement.');
 page.once('dialog',dialog=>dialog.accept());
 await page.locator('[data-quiz-action="restart"]').click();
 assert.equal(await page.locator('[data-quiz-notion]').count(),5,'Le redémarrage doit revenir à la sélection.');
 assert.equal(await page.evaluate(()=>localStorage.getItem('holberton-quiz-session-v1')),null,
  'Le redémarrage doit supprimer uniquement la session du quiz.');
 await page.screenshot({path:'apercus/quiz-adaptatif-pilote.png'});

 // Le comportement mobile existant reste préservé, sans refonte de l'interface.
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on('pageerror',e=>errors.push('Mobile : '+e.message));
 await mobile.goto(origin+'/'+target(14));
 const figure=mobile.locator('#notion-9-14 .lesson-visual svg').first();
 await figure.waitFor({state:'visible',timeout:12000});
 assert.ok((await figure.boundingBox())?.width>=600,'La taille du schéma mobile a été réduite.');
 await mobile.screenshot({path:'apercus/postit-et-cours-mobile.png'});

 assert.deepEqual(errors,[],'Erreurs JavaScript navigateur : '+errors.join(' / '));
 console.log('Navigation réussie : post-it, lecture continue, sommaire synchronisé, historique, recherche, favoris et mobile.');
} finally {
 if(browser)await browser.close();
 await new Promise(resolve=>server.close(resolve));
}

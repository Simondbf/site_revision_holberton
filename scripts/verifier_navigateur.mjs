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
const structureItems=contenu.sections.find(s=>s.title==='Structures et typedef en C')?.items;
assert.ok(structureItems?.length>=21,'Le chapitre Structures et typedef a perdu des fiches.');
const route=(topic,notion)=>{
 const cat=contenu.sections.find(s=>s.title===topic);
 assert.ok(cat,'Thème introuvable : '+topic);
 const ii=cat.items.findIndex(n=>n.term===notion);
 assert.ok(ii>=0,'Notion introuvable : '+notion);
 return '#cours/'+slug(topic)+'/'+(ii+1)+'-'+slug(notion);
};
const target=ii=>route(topicName,contenu.sections[si].items[ii].term);
const assets={
 '/quiz/core.mjs':'text/javascript',
 '/quiz/engine.mjs':'text/javascript',
 '/quiz/styles.css':'text/css',
 '/quiz/questions-variadiques.json':'application/json',
 '/docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json':'application/json'
};
const requestedExtra=[];
const server=createServer((req,res)=>{
 const pathname=new URL(req.url,'http://localhost').pathname;
 if(pathname in assets){
  // Simuler exactement le timer VPS historique : seul index.html est publié.
  requestedExtra.push(pathname);
  res.writeHead(404,{'Content-Type':'text/plain'});res.end('Le serveur ne publie que index.html');
  return;
 }
 if(pathname!=='/'){
  res.writeHead(404,{'Content-Type':'text/plain'});res.end('Introuvable');return;
 }
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
 assert.equal(await page.locator('#definitions article.def').count(),structureItems.length,
  'Le nouveau thème doit contenir les 21 post-it.');
 await page.locator('#definitions .card-hit').first().click();
 await page.waitForFunction(()=>location.hash.startsWith('#cours/structures-et-typedef-en-c/'));
 await page.waitForFunction(count=>document.querySelectorAll('#courseArticle .lesson-panel').length===count,structureItems.length);
 assert.equal(await page.locator('#courseArticle .lesson-panel').count(),structureItems.length,
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

 // Nouvelles fiches : navigation profonde, paragraphes lisibles et source officielle.
 await page.goto(origin+'/'+route('Pointeurs et tableaux C','Valgrind : « definitely lost » et les octets perdus'));
 await page.waitForFunction(()=>document.querySelector('#notion-9-58')?.classList.contains('lesson-selected'));
 assert.ok(await page.locator('#notion-9-58 .lesson-reading p').count()>=3,
  'Le cours definitely lost doit être aéré.');
 assert.match(await page.locator('#notion-9-58').innerText(),/32 bytes in 1 blocks/,
  'Le rapport Valgrind n’apparaît pas dans la fiche.');
 assert.ok((await page.locator('#notion-9-58 .lesson-sources a').allTextContents())
  .some(x=>x.includes('Memcheck')),'Lien vers le manuel Valgrind absent.');
 await page.goto(origin+'/'+route('Pointeurs et tableaux C','Dépassement de tampon sur la pile — erreur avant malloc'));
 await page.waitForFunction(()=>document.querySelector('#notion-9-55')?.classList.contains('lesson-selected'));
 assert.match(await page.locator('#notion-9-55').innerText(),/PENDANT la lecture/,
  'L’erreur survenant avant malloc doit être expliquée.');
 await page.screenshot({path:'apercus/lecture-depassement-tampon.png'});
 await page.goto(origin+'/'+route('Qualité et méthode en C','Invariant — condition qui doit rester vraie'));
 await page.waitForFunction(()=>document.querySelector('#notion-14-7')?.classList.contains('lesson-selected'));
 assert.ok(await page.locator('#notion-14-7 .lesson-reading p').count()>=3,
  'La notion d’invariant doit être structurée.');

 // Nouveaux cours : pointeurs bruts, ownership et diagnostics, accessibles en lien direct.
 await page.goto(origin+'/'+route('Pointeurs et tableaux C','memcpy() — copier des octets sans chevauchement'));
 await page.waitForFunction(()=>document.querySelector('#notion-9-60')?.classList.contains('lesson-selected'));
 assert.ok(await page.locator('#notion-9-60 .lesson-reading p').count()>=3,
  'Le cours memcpy doit être aéré.');
 assert.match(await page.locator('#notion-9-60').innerText(),/octets/i,
  'Le cours memcpy n’a pas été chargé.');
 await page.goto(origin+'/'+route('Pointeurs et tableaux C','Ownership — qui est responsable de free() ?'));
 await page.waitForFunction(()=>document.querySelector('#notion-9-61')?.classList.contains('lesson-selected'));
 assert.match(await page.locator('#notion-9-61').innerText(),/free/,
  'Le principe d’ownership doit être expliqué.');
 await page.goto(origin+'/'+route('Pointeurs et tableaux C','Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites'));
 await page.waitForFunction(()=>document.querySelector('#notion-9-65')?.classList.contains('lesson-selected'));
 assert.match(await page.locator('#notion-9-65').innerText(),/INDIRECT_LEAK/,
  'Les catégories du lab doivent figurer dans la fiche.');
 await page.screenshot({path:'apercus/cours-erreurs-memoire.png'});
 await page.goto(origin+'/'+route('Qualité et méthode en C',"Base bundle — analyser le code de départ d'un lab"));
 await page.waitForFunction(()=>document.querySelector('#notion-14-8')?.classList.contains('lesson-selected'));
 assert.match(await page.locator('#notion-14-8').innerText(),/double free/,
  'Le risque de libération en double doit être expliqué.');

 // Les nouvelles fiches sur les formats et atoi sont visibles via leurs liens directs.
 for(const [index,term,needle] of [
  [40,'printf — spécificateurs de format et types','%.2f'],
  [41,'scanf et sscanf — formats de lecture et adresses','%9s'],
  [42,'atoi() — convertir une chaîne en int','strtol']
 ]){
  await page.goto(origin+'/'+route('Programmation C',term));
  await page.waitForFunction(i=>document.querySelector('#notion-8-'+i)?.classList.contains('lesson-selected'),index);
  const fiche=page.locator('#notion-8-'+index);
  assert.ok(await fiche.locator('.lesson-reading p').count()>=3,'Texte trop court pour la fiche '+index);
  assert.ok((await fiche.innerText()).includes(needle),'Notion essentielle absente de la fiche '+index);
  assert.ok(await fiche.locator('.lesson-sources a').count()>=2,'Sources absentes pour la fiche '+index);
 }
 await page.screenshot({path:'apercus/atoi-et-formats-c.png'});

 // À propos : structure simplifiée, liens de contribution et hiérarchie lisible.
 await page.goto(origin+'/#apropos');
 await page.waitForFunction(()=>!document.querySelector('#about')?.classList.contains('hidden'));
 assert.equal(await page.locator('#about .helpgrid article').count(),2,
  'La page À propos doit conserver deux présentations synthétiques.');
 assert.ok(await page.locator('#about .project-details').isVisible(),
  'Les informations pratiques doivent être visibles.');
 assert.ok((await page.locator('#about').innerText()).includes('Un site de révision collaboratif'),
  'La contribution doit rester proposée aux visiteurs.');
 assert.equal(await page.locator('#about .project-help a').count(),2,
  'Les deux liens vers GitHub doivent être visibles.');
 await page.screenshot({path:'apercus/a-propos-simplifie.png'});

 // Préversion du quiz : charger deux lots, valider une réponse, mettre en pause et reprendre.
 await page.goto(origin+'/#quiz');
 await page.locator('#quizStart').waitFor({state:'visible',timeout:15000});
 assert.match(await page.locator('#quiz .quiz-app').innerText(),/55 questions candidates/);
 assert.equal(await page.locator('#quizCount').count(),0,'Le choix imposé de 5/10/20 questions doit être absent.');
 await page.locator('#quizStart').click();
 assert.equal(await page.locator('#quiz .quiz-choice').count()>=4,true);
 const firstQuestionOrder=await page.evaluate(()=>{
  const session=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current;
  return session.optionOrder[session.questionIds[0]];
 });
 const displayedOrder=await page.locator('#quiz .quiz-choice input').evaluateAll(inputs=>inputs.map(input=>input.value));
 assert.deepEqual(displayedOrder,firstQuestionOrder,
  'L’ordre tiré doit être exactement celui affiché, avec les identifiants d’origine.');
 assert.deepEqual(await page.locator('#quiz .quiz-choice b').allTextContents(),
  'ABCDE'.slice(0,displayedOrder.length).split(''),
  'Les lettres affichées doivent suivre les positions, pas les identifiants JSON.');
 await page.locator('#quiz .quiz-choice').first().click();
 await page.locator('#quizSubmit').click();
 assert.deepEqual(await page.locator('#quiz .quiz-choice input').evaluateAll(inputs=>inputs.map(input=>input.value)),
  firstQuestionOrder,'L’ordre ne doit pas changer lors de l’affichage du corrigé.');
 assert.equal(await page.locator('#quiz .quiz-feedback').count(),1,'Le corrigé n’est pas affiché après validation.');
 const quizLesson=page.locator('#quiz .quiz-feedback a.quiz-link');
 assert.ok(await quizLesson.isVisible(),'La correction doit donner un lien vers le cours.');
 const quizLessonHash=await quizLesson.getAttribute('href');
 assert.ok(quizLessonHash.startsWith('#cours/'),'Le lien du corrigé ne mène pas au cours.');
 await quizLesson.click();
 await page.waitForFunction(expected=>location.hash===expected,quizLessonHash);
 assert.ok(await page.locator('#courseArticle .lesson-selected').count()>0,
  'Le corrigé ne sélectionne aucune fiche.');
 await page.goto(origin+'/#quiz');
 assert.ok(await page.locator('#quizPause').isVisible(),
  'Le retour depuis la fiche doit retrouver la session en cours.');
 await page.locator('#quizPause').click();
 assert.ok(await page.locator('#quizResume').isVisible(),'La pause ne sauvegarde pas la session.');
 await page.reload();
 await page.locator('#quizResume').waitFor({state:'visible',timeout:15000});
 await page.locator('#quizResume').click();
 assert.deepEqual(await page.locator('#quiz .quiz-choice input').evaluateAll(inputs=>inputs.map(input=>input.value)),
  firstQuestionOrder,'La pause et le rechargement ne doivent pas remélanger les choix de la même question.');
 assert.ok(await page.locator('#quizNext').isVisible(),'La réponse précédente ne reprend pas correctement.');
 await page.locator('#quizNext').click();
 await page.locator('#quiz .quiz-choice').first().click();
 await page.locator('#quizSubmit').click();
 assert.ok(await page.locator('#quizFinish').isVisible(),'La fin libre du quiz doit être proposée après validation.');
 await page.locator('#quizFinish').click();
 assert.match(await page.locator('#quiz .quiz-score').innerText(),/\/ 2/,'Le bilan doit refléter seulement les deux réponses données.');
 await page.goto(origin+'/#compte');
 await page.locator('#guestProgress').waitFor({state:'visible'});
 assert.match(await page.locator('#guestProgress').innerText(),/1 session/,'La progression invitée n’est pas enregistrée.');
 await page.screenshot({path:'apercus/quiz-compte-progression.png'});

 // La sauvegarde émet un événement exploitable par l'interface de synchronisation.
 await page.goto(origin+'/#quiz');
 await page.locator('#quizAgain').click();
 await page.evaluate(()=>{
  window.__quizUpdates=0;
  window.addEventListener('holberton:quiz:updated',()=>window.__quizUpdates++);
 });
 await page.locator('#quizStart').click();
 assert.equal(await page.evaluate(()=>window.__quizUpdates),1,
  'Le moteur n’annonce pas les sauvegardes à la synchronisation des comptes.');

 // Notation exacte indépendante des nouvelles lettres affichées à l'écran.
 const graded=await page.evaluate(async()=>{
  const session=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current;
  const [argc,stdarg]=await Promise.all([
   fetch('/docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json').then(r=>r.json()),
   fetch('/quiz/questions-variadiques.json').then(r=>r.json())
  ]);
  const id=session.questionIds[session.cursor];
  const q=[...argc.questions,...stdarg.questions].find(item=>item.id===id);
  if(!q)throw Error('Question introuvable pour la vérification de notation.');
  return {id,correct:q.correct_option_ids,order:session.optionOrder[id]};
 });
 assert.deepEqual(await page.locator('#quiz .quiz-choice input').evaluateAll(nodes=>nodes.map(el=>el.value)),
  graded.order,'Les identifiants des choix doivent rester associés aux textes corrects.');
 for(const id of graded.correct)await page.locator('#quiz .quiz-choice input[value="'+id+'"]').check();
 await page.locator('#quizSubmit').click();
 assert.match(await page.locator('#quiz .quiz-feedback').innerText(),/Réponse exacte/,
  'Les bonnes réponses doivent être reconnues quelle que soit leur position affichée.');
 assert.deepEqual(
  await page.evaluate(id=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.answers[id].selected.sort(),graded.id),
  [...graded.correct].sort(),
  'La progression doit enregistrer les identifiants d’origine, pas les positions visibles.');

 // Un chargement distant remplace l'état en mémoire, pas seulement localStorage.
 await page.goto(origin+'/#compte');
 await page.evaluate(()=>{
  const key='holberton-quiz-guest-v1';
  const current=JSON.parse(localStorage.getItem(key));
  current.history=[];current.current=null;current.stats={};current.seen={};
  localStorage.setItem(key,JSON.stringify(current));
  window.dispatchEvent(new Event('holberton:quiz:reload'));
 });
 assert.match(await page.locator('#guestProgress').innerText(),/0 session/,
  'Le compte a restauré une progression mais le quiz garde son ancien historique.');
 await page.goto(origin+'/#quiz');
 assert.equal(await page.locator('#quizResume').count(),0,
  'La session précédente reste active après un chargement distant.');

 // En cas de quota localStorage dépassé, ne pas prétendre avoir enregistré un nouveau quiz.
 await page.evaluate(()=>{
  const previous=Storage.prototype.setItem;
  window.__quizOriginalSetItem=previous;
  Storage.prototype.setItem=function(key,value){
   if(key==='holberton-quiz-guest-v1')throw new DOMException('Quota dépassé','QuotaExceededError');
   return previous.call(this,key,value);
  };
 });
 page.once('dialog',dialog=>dialog.dismiss());
 await page.locator('#quizStart').click();
 assert.ok(await page.locator('#quizStart').isVisible(),
  'Le quiz démarre alors que sa progression ne peut pas être enregistrée.');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current),null,
  'Une session non persistée a remplacé le suivi local.');
 await page.evaluate(()=>{
  Storage.prototype.setItem=window.__quizOriginalSetItem;
  delete window.__quizOriginalSetItem;
 });

 // Le comportement mobile existant reste préservé, sans refonte de l'interface.
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on('pageerror',e=>errors.push('Mobile : '+e.message));
 await mobile.goto(origin+'/'+target(14));
 const figure=mobile.locator('#notion-9-14 .lesson-visual svg').first();
 await figure.waitFor({state:'visible',timeout:12000});
 assert.ok((await figure.boundingBox())?.width>=600,'La taille du schéma mobile a été réduite.');
 await mobile.screenshot({path:'apercus/postit-et-cours-mobile.png'});
 await mobile.goto(origin+'/#quiz');
 await mobile.locator('#quizStart').waitFor({state:'visible',timeout:15000});
 await mobile.locator('#quizStart').click();
 const mobileChoice=await mobile.locator('#quiz .quiz-choice').first().boundingBox();
 assert.ok(mobileChoice && mobileChoice.x>=0 && mobileChoice.x+mobileChoice.width<=390,
  'Les propositions du quiz débordent sur petit écran.');
 await mobile.screenshot({path:'apercus/quiz-mobile.png'});

 assert.deepEqual(requestedExtra,[],
  'Le quiz autonome a demandé des ressources que le VPS historique ne déploie pas.');
 assert.deepEqual(errors,[],'Erreurs JavaScript navigateur : '+errors.join(' / '));
 console.log('Navigation réussie : post-it, lecture continue, sommaire synchronisé, historique, recherche, favoris et mobile.');
} finally {
 if(browser)await browser.close();
 await new Promise(resolve=>server.close(resolve));
}

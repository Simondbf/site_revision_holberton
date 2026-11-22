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
 assert.equal(await page.locator('body.dark').count(),0,
  'Un visiteur sans préférence doit démarrer en mode clair.');
 assert.equal(await page.locator('#courseSidebar').innerText().then(t=>t.includes('CATÉGORIES ET NOTIONS')),false,
  'Le sous-titre redondant du sommaire doit avoir disparu.');
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
 await page.locator('#browse').waitFor({state:'visible'});
 await page.locator('#searchClear').waitFor({state:'visible',timeout:10000});
 assert.equal(await page.locator('#search').inputValue(),'modulo','La recherche doit rester remplie.');
 assert.ok(await page.locator('#results article.def').count()>0,'Les résultats doivent être restaurés.');
 assert.ok(await page.locator('#searchClear').isVisible(),
  'La croix de recherche doit apparaître quand une valeur est saisie.');
 assert.equal(await page.locator('#quickSearch').inputValue(),'modulo',
  'La barre de recherche du haut doit être synchronisée.');
 await page.locator('#searchClear').click();
 assert.equal(await page.locator('#search').inputValue(),'');
 assert.equal(await page.locator('#quickSearch').inputValue(),'');
 assert.equal(await page.locator('#searchClear').isVisible(),false);
 assert.ok(await page.locator('#cards .topic').count()>0,
  'Effacer une recherche doit restaurer la liste des thèmes.');
 await page.locator('#quickSearch').fill('printf');
 assert.ok(await page.locator('#quickSearchClear').isVisible(),
  'La croix de recherche de l’en-tête doit apparaître.');
 await page.locator('#quickSearchClear').click();
 assert.equal(await page.locator('#quickSearch').inputValue(),'');
 assert.equal(await page.locator('#search').inputValue(),'');
 await page.locator('#theme').click();
 assert.equal(await page.locator('body.dark').count(),1,
  'Le thème sombre doit rester activable.');
 await page.locator('#theme').click();
 assert.equal(await page.locator('body.dark').count(),0,
  'Revenir au thème clair doit fonctionner.');

 // Les favoris ne sont plus proposés ; les anciennes URL sont redirigées vers les fiches.
 await page.goto(origin+'/#theme/pointeurs-et-tableaux-c');
 assert.equal(await page.locator('#definitions [data-fav]').count(),0,
  'Les étoiles de favoris ne doivent plus être proposées.');
 await page.goto(origin+'/#favoris');
 await page.waitForFunction(()=>location.hash==='#fiches');
 assert.equal(await page.locator('#favoriteItems').isVisible(),false,
  'La vue de favoris ne doit plus apparaître.');
 
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

 // Le nouveau thème récursivité doit être navigable, avec onze cours détaillés.
 await page.goto(origin+'/#theme/recursivite-en-c');
 await page.waitForFunction(()=>!document.querySelector('#detail')?.classList.contains('hidden'));
 assert.equal(await page.locator('#definitions article.def').count(),11,
  'Le nouveau thème récursivité doit contenir onze fiches.');
 await page.locator('#definitions .card-hit').nth(3).click();
 await page.waitForFunction(()=>document.querySelector('#notion-17-3')?.classList.contains('lesson-selected'));
 assert.equal(await page.locator('#courseArticle .lesson-panel').count(),11,
  'Les onze cours de récursivité doivent être lisibles en continu.');
 assert.equal(await page.locator('#notion-17-3 .lesson-visual svg').count(),1,
  'Le schéma des appels sur la pile est manquant.');
 assert.equal(await page.locator('#notion-17-4 .lesson-visual svg').count(),1,
  'Le schéma de la remontée des valeurs est manquant.');
 assert.ok(await page.locator('#notion-17-0 .lesson-sources a').count()>=4,
  'Les liens pédagogiques transmis sur la récursivité doivent être accessibles.');
 assert.match(await page.locator('#notion-17-6').innerText(),/tableau|pointeur/,
  'Le cas récursif sur un tableau doit être expliqué.');
 await page.screenshot({path:'apercus/recursivite-c.png'});

 // À propos : structure simplifiée, liens de contribution et hiérarchie lisible.
 await page.goto(origin+'/#apropos');
 await page.waitForFunction(()=>!document.querySelector('#about')?.classList.contains('hidden'));
 assert.equal(await page.locator('#about .helpgrid article').count(),0,
  'Les deux cartes supprimées ne doivent pas revenir.');
 assert.equal(await page.locator('#about .project-details').count(),0,
  'Le bloc Informations pratiques a été retiré.');
 assert.ok(await page.locator('#about .about-data').isVisible(),
  'À propos doit expliquer le stockage local et les comptes.');
 assert.ok((await page.locator('#about').innerText()).includes('Un site de révision collaboratif'),
  'La contribution doit rester proposée aux visiteurs.');
 assert.equal(await page.locator('#about .project-help a').count(),2,
  'Les deux liens vers GitHub doivent être visibles.');
 await page.screenshot({path:'apercus/a-propos-simplifie.png'});

 // Préversion du quiz : charger deux lots, valider une réponse, mettre en pause et reprendre.
 await page.goto(origin+'/#quiz');
 await page.locator('#quizStart').waitFor({state:'visible',timeout:15000});
 await page.evaluate(()=>window.scrollTo(0,0));
 const navBox=await page.locator('body > header').boundingBox();
 const quizHeaderBox=await page.locator('#quiz .quiz-heading').boundingBox();
 assert.ok(navBox&&quizHeaderBox&&quizHeaderBox.y>=navBox.y+navBox.height-2,
  'Le titre du quiz ne doit pas chevaucher la barre de navigation.');
 assert.equal(await page.locator('#quiz .quiz-heading').evaluate(node=>getComputedStyle(node).position),'static',
  'L’en-tête du quiz doit rester dans le flux de la page, non sticky.');
 assert.equal(await page.locator('#quiz .quiz-start').evaluate(node=>getComputedStyle(node).gridTemplateColumns),'none',
  'Les réglages de démarrage du quiz ne doivent plus être organisés sur deux colonnes.');
 assert.equal(await page.locator('#courseSidebar').isVisible(),false,
  'Le sommaire doit être masqué dans Quiz.');
 assert.equal(await page.evaluate(()=>document.body.dataset.fullpage),'true');
 assert.match(await page.locator('#quiz .quiz-app').innerText(),/55 questions sur argc\/argv et stdarg\.h/);
 assert.doesNotMatch(await page.locator('#quiz .quiz-app').innerText(),/VERSION TEST|relecture pédagogique|ne constituent pas une certification/,
  'La page publique ne doit plus prétendre que les questions restent en relecture.');
 assert.equal(await page.locator('#quizCount').count(),0,'Le choix imposé de 5/10/20 questions doit être absent.');
 const themes=page.locator('input[name="quizTheme"]');
 assert.equal(await themes.count(),2,'Deux thèmes doivent être proposés séparément.');
 assert.equal(await page.locator('input[name="quizTheme"]:checked').count(),2,'Les deux thèmes sont sélectionnés par défaut.');
 assert.equal(await page.locator('#quizThemeDropdown').getAttribute('open'),null,
  'La liste déroulante doit être repliée par défaut.');
 assert.match(await page.locator('#quizThemeSummary').innerText(),/Tous les thèmes \(2\)/);
 await page.locator('#quizThemeSummary').click();
 await page.locator('#quizThemeSearch').fill('argc');
 assert.equal(await page.locator('.quiz-theme-selection label:visible').count(),1,
  'La recherche doit filtrer les thèmes sans perdre les choix.');
 await page.locator('#quizThemeSearch').fill('inexistant');
 assert.ok(await page.locator('#quizThemeNoMatch').isVisible(),
  'Une recherche sans résultat doit être signalée.');
 await page.locator('#quizThemeSearch').fill('');
 await themes.nth(1).uncheck();
 assert.match(await page.locator('#quizThemeSummary').innerText(),/argc et argv/);
 assert.match(await page.locator('.quiz-question-count').innerText(),/25 questions disponibles/);
 await page.locator('#quizThemeNone').click();
 await page.locator('#quizThemeSummary').click();
 await page.locator('#quizStart').click();
 assert.ok(await page.locator('#quizThemeError').isVisible(),'Aucun quiz ne doit démarrer sans thème.');
 await page.locator('#quizThemeSummary').click();
 await page.locator('#quizThemeAll').click();
 assert.equal(await page.locator('input[name="quizTheme"]:checked').count(),2,
  'Tout sélectionner doit cocher tous les thèmes.');
 assert.match(await page.locator('.quiz-question-count').innerText(),/55 questions disponibles/);
 await page.locator('#quizThemeSummary').click();
 await page.screenshot({path:'apercus/quiz-menu-bureau.png'});
 await page.locator('#quizStart').click();
 await page.evaluate(()=>window.scrollTo(0,0));
 const desktopNavQuestion=await page.locator('body > header').boundingBox();
 const desktopQuestionTitle=await page.locator('#quiz .quiz-heading').boundingBox();
 assert.ok(desktopNavQuestion&&desktopQuestionTitle&&desktopQuestionTitle.y>=desktopNavQuestion.y+desktopNavQuestion.height-2,
  'Le titre de la question empiète sur la navigation sur ordinateur.');
 await page.screenshot({path:'apercus/quiz-question-bureau.png'});
 assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.family),['argc','stdarg'],
  'La sélection de plusieurs thèmes doit être enregistrée.');
 assert.equal(await page.locator('#quiz .quiz-choice').count()>=4,true);
 assert.ok(await page.locator('#quizDontKnow').isVisible(),'Je ne sais pas doit être disponible pour chaque question.');
 const firstHelp=await page.evaluate(()=>{
  const current=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current;
  return JSON.parse(document.getElementById('quiz-aide-bank').textContent).questions[current.questionIds[0]];
 });
 assert.ok(firstHelp?.prompt,'La question doit avoir une formulation accessible.');
 assert.equal((await page.locator('#quiz .quiz-question-title').innerText()).trim(),
  firstHelp.prompt.replaceAll('`',''),'La formulation affichée n’est pas celle de la révision pédagogique.');
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
 await page.locator('#quizDontKnow').check();
 assert.equal(await page.locator('#quiz .quiz-choice input:enabled').count(),0,
  'Je ne sais pas doit empêcher les choix contradictoires.');
 assert.equal(await page.locator('#quizSubmit').innerText(),'Voir la correction');
 await page.locator('#quizSubmit').click();
 assert.match(await page.locator('#quiz .quiz-feedback').innerText(),/Question passée/,
  'Je ne sais pas doit afficher le corrigé.');
 assert.equal(await page.locator('#quiz .quiz-option-reasons li').count()>=4,true,
  'Les explications détaillées de toutes les propositions sont attendues.');
 assert.ok(await page.locator('#quiz .quiz-correct-answers li').count()>0,
  'Les bonnes réponses doivent être montrées après avoir passé une question.');
 assert.equal(await page.evaluate(()=>{
  const current=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current;
  return current.answers[current.questionIds[current.cursor]].skipped;
 }),true,'La progression doit conserver le choix Je ne sais pas.');
 assert.ok(await page.locator('#quizNext').isVisible(),'Il faut pouvoir passer à la question suivante.');
 assert.ok(await page.locator('#quizFinish').isVisible(),'La fin libre du quiz doit être proposée après Je ne sais pas.');
 await page.locator('#quizFinish').click();
 assert.match(await page.locator('#quiz .quiz-score').innerText(),/\/ 2/,'Le bilan doit refléter seulement les deux réponses données.');
 assert.deepEqual(await page.evaluate(()=>{
  const data=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1'));
  return {current:data.current,history:data.history,stats:data.stats,seen:data.seen};
 }),{current:null,history:[],stats:{},seen:{}},
 'Un invité ne doit conserver ni résultat terminé ni historique ni statistiques.');
 await page.goto(origin+'/#compte');
 assert.ok(await page.locator('#accountComingSoon').isVisible(),'Un invité ne doit voir que À venir prochainement.');
 assert.match(await page.locator('#account').innerText(),/À venir prochainement/);
 assert.equal(await page.locator('#guestProgress').count(),0,'Les statistiques invitées ne doivent pas apparaître dans Compte.');
 assert.equal(await page.locator('#courseSidebar').isVisible(),false,'Le sommaire doit disparaître de Compte.');
 await page.screenshot({path:'apercus/quiz-compte-progression.png'});

 // La sauvegarde émet un événement exploitable par l'interface de synchronisation.
 await page.goto(origin+'/#quiz');
 await page.goto(origin+'/#quiz');
 assert.equal(await page.locator('#quiz .quiz-score').count(),0,
  'Le bilan invité doit disparaître après navigation hors du quiz.');
 assert.equal(await page.locator('#quizExport').count(),0,'Aucune exportation de résultats sur Quiz.');
 assert.equal(await page.locator('#quizClear').count(),0,'Aucun effacement d’historique n’est nécessaire pour les invités.');
 assert.equal(await page.locator('#quiz .quiz-recent').count(),0,'Aucun historique des sessions sur Quiz.');
 assert.equal(await page.locator('#quiz .quiz-stats').count(),0,'Aucune statistique invitée sur Quiz.');
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
  const argc=JSON.parse(document.getElementById('quiz-argc-bank').textContent);
  const stdarg=JSON.parse(document.getElementById('quiz-variadic-bank').textContent);
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
 await page.goto(origin+'/#quiz');
 assert.equal(await page.locator('#quiz .quiz-recent').count(),0,
  'Aucun historique ne doit réapparaître après un chargement distant.');
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

 // Les invités ne bénéficient jamais de la priorité adaptative.
 await page.goto(origin+'/#compte');
 assert.equal(await page.locator('#accountQuizAdaptiveEnabled').count(),0,
  'La priorité adaptative ne doit pas être activable sans connexion.');
 // Vérifier le détail d'une vraie réponse incorrecte et le nettoyage du lien ChatGPT.
 await page.goto(origin+'/?source=gpt-quiz#quiz');
 await page.locator('#quizStart').waitFor({state:'visible'});
 assert.equal(new URL(page.url()).searchParams.has('source'),false,
  'Le paramètre source=gpt doit disparaître de l’URL sans perdre le quiz.');
 await page.locator('#quizStart').click();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.adaptiveEnabled),false,
  'Une session invitée doit démarrer sans adaptation, même si le réglage par défaut est actif.');
 const wrong=await page.evaluate(()=>{
  const current=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current;
  const argc=JSON.parse(document.getElementById('quiz-argc-bank').textContent);
  const varia=JSON.parse(document.getElementById('quiz-variadic-bank').textContent);
  const q=[...argc.questions,...varia.questions].find(q=>q.id===current.questionIds[0]);
  return q.options.find(option=>!q.correct_option_ids.includes(option.id)).id;
 });
 await page.locator('#quiz .quiz-choice input[value="'+wrong+'"]').check();
 await page.locator('#quizSubmit').click();
 assert.match(await page.locator('#quiz .quiz-feedback').innerText(),/Réponse fausse ou incomplète/,
  'Une réponse incorrecte doit rester incorrecte.');
 assert.ok(await page.locator('#quiz .quiz-option-reasons li').count()>=4,
  'Le moteur doit expliquer pourquoi chaque proposition est juste ou fausse.');
 assert.ok(await page.locator('#quiz .quiz-correct-answers li').count()>0,
  'Une erreur doit afficher les réponses attendues.');

 // Correction différée : ne pas révéler la réponse avant le bilan, même en cas d'erreur.
 await page.locator('#quizPause').click();
 await page.locator('#quizFeedbackMode').selectOption('end');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).feedbackMode),'immediate',
  'Le choix invité ne doit pas devenir une préférence enregistrée.');
 await page.reload();
 await page.locator('#quizFeedbackMode').waitFor({state:'visible'});
 assert.equal(await page.locator('#quizFeedbackMode').inputValue(),'immediate',
  'Sans compte, le choix du corrigé n’est pas conservé entre deux visites.');
 await page.locator('#quizFeedbackMode').selectOption('end');
 page.once('dialog',dialog=>dialog.accept());
 await page.locator('#quizStart').click();
 const currentTotal=await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.questionIds.length);
 assert.equal(await page.locator('#quiz .quiz-question-count').innerText(),'Question 1 / '+currentTotal,
  'Le compteur doit être visible en haut à droite.');
 const endWrong=await page.evaluate(()=>{
  const p=JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current;
  const a=JSON.parse(document.getElementById('quiz-argc-bank').textContent);
  const v=JSON.parse(document.getElementById('quiz-variadic-bank').textContent);
  const q=[...a.questions,...v.questions].find(q=>q.id===p.questionIds[0]);
  return q.options.find(o=>!q.correct_option_ids.includes(o.id)).id;
 });
 await page.locator('#quiz .quiz-choice input[value="'+endWrong+'"]').check();
 await page.locator('#quizSubmit').click();
 assert.ok(await page.locator('#quiz .quiz-pending').isVisible(),
  'Le mode différé doit afficher seulement un accusé d’enregistrement.');
 assert.equal(await page.locator('#quiz .quiz-correct-answers li').count(),0,
  'La bonne réponse ne doit pas être révélée prématurément.');
 assert.equal(await page.locator('#quiz .quiz-choice.correct').count(),0,
  'Aucune proposition ne doit être marquée correcte en mode différé.');
 await page.locator('#quizNext').click();
 assert.equal(await page.locator('#quiz .quiz-question-count').innerText(),'Question 2 / '+currentTotal,
  'Le compteur doit avancer avec la question.');
 await page.locator('#quizDontKnow').check();
 await page.locator('#quizSubmit').click();
 assert.ok(await page.locator('#quiz .quiz-pending').isVisible(),
  'Je ne sais pas ne doit pas révéler le corrigé en mode différé.');
 assert.equal(await page.locator('#quiz .quiz-option-reasons li').count(),0,
  'Les explications sont réservées à la fin de session.');
 await page.locator('#quizFinish').click();
 assert.match(await page.locator('#quiz .quiz-score').innerText(),/\/ 2/,
  'Le bilan différé doit compter la réponse erronée et la question passée.');
 assert.equal(await page.locator('#quiz .quiz-review-question').count(),2,
  'Le bilan différé doit contenir une correction par question traitée.');
 await page.locator('#quiz .quiz-review-question').first().locator('summary').click();
 assert.ok(await page.locator('#quiz .quiz-review-question').first().locator('.quiz-option-reasons li').count()>=4,
  'Le bilan doit expliquer les choix de la première question.');
 await page.locator('#quiz .quiz-review-question').nth(1).locator('summary').click();
 assert.match(await page.locator('#quiz .quiz-review-question').nth(1).innerText(),/Je ne sais pas/,
  'Le bilan doit également corriger les questions passées.');

 // Contrat de la future connexion : le réglage quitte l'onglet Quiz et reste dans Compte.
 await page.locator('#quizAgain').click();
 await page.evaluate(()=>{
  document.documentElement.dataset.holbertonAccount='connected';
  window.dispatchEvent(new Event('holberton:account:status'));
 });
 assert.equal(await page.locator('#quizFeedbackMode').count(),0,
  'Un compte connecté ne doit plus afficher le sélecteur dans le quiz.');
 await page.evaluate(()=>{location.hash='#compte'});
 assert.ok(await page.locator('#accountTabQuiz').isVisible(),
  'Le compte connecté doit ouvrir sur l’onglet Quiz.');
 assert.equal(await page.locator('#accountTabQuiz').getAttribute('aria-selected'),'true',
  'L’historique de quiz doit être ouvert par défaut.');
 assert.equal(await page.locator('.account-metric').count(),4,
   'Le tableau de bord du compte doit afficher quatre indicateurs compacts.');
 await page.locator('#accountTabSettings').click();
 assert.ok(await page.locator('#accountQuizFeedbackMode').isVisible(),
  'Le choix du moment du corrigé doit être disponible depuis Compte.');
 assert.ok(await page.locator('#accountQuizAdaptiveEnabled').isVisible(),
  'Une personne connectée doit pouvoir régler la priorité dans Compte.');
 assert.equal(await page.locator('#accountQuizAdaptiveEnabled').isChecked(),false,
  'La priorité adaptative doit être désactivée par défaut même pour un compte connecté.');
 await page.locator('#accountQuizAdaptiveEnabled').check();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).adaptiveEnabled),true,
  'Activer la priorité doit enregistrer le choix.');
 await page.locator('#accountQuizAdaptiveEnabled').uncheck();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).adaptiveEnabled),false,
  'Désactiver la priorité doit enregistrer le choix.');
 await page.locator('#accountQuizFeedbackMode').selectOption('immediate');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).feedbackMode),'immediate',
  'Le réglage dans Compte doit être persisté pour les prochaines sessions.');
 await page.evaluate(()=>{location.hash='#quiz'});
 assert.equal(await page.locator('#quizFeedbackMode').count(),0,
  'Le réglage ne doit pas réapparaître sur Quiz en mode connecté.');
 await page.locator('#quizStart').click();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.feedbackMode),'immediate',
  'Le quiz doit utiliser le réglage du compte pour la nouvelle session.');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.adaptiveEnabled),false,
  'Le compte connecté doit démarrer le quiz aléatoire par défaut.');
 await page.locator('#quizPause').click();
 await page.evaluate(()=>{location.hash='#compte'});
 await page.locator('#accountQuizAdaptiveEnabled').check();
 await page.evaluate(()=>{location.hash='#quiz'});
 page.once('dialog',dialog=>dialog.accept());
 await page.locator('#quizStart').click();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('holberton-quiz-guest-v1')).current.adaptiveEnabled),true,
  'Après activation dans Compte, la prochaine session doit être adaptative.');
 await page.locator('#quizPause').click();
 await page.evaluate(()=>{
  document.documentElement.dataset.holbertonAccount='guest';
  window.dispatchEvent(new Event('holberton:account:status'));
 });
 assert.ok(await page.locator('#quizFeedbackMode').isVisible(),
  'Un invité doit retrouver son réglage directement dans le quiz.');
 assert.equal(await page.locator('#accountQuizAdaptiveEnabled').count(),0,
  'Le réglage adaptatif doit disparaître à la déconnexion.');

 // Le comportement mobile existant reste préservé, sans refonte de l'interface.
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on('pageerror',e=>errors.push('Mobile : '+e.message));
 await mobile.goto(origin+'/'+target(14));
 const figure=mobile.locator('#notion-9-14 .lesson-visual svg').first();
 await figure.waitFor({state:'visible',timeout:12000});
 assert.ok((await figure.boundingBox())?.width>=600,'La taille du schéma mobile a été réduite.');
 await mobile.screenshot({path:'apercus/postit-et-cours-mobile.png'});
 await mobile.goto(origin+'/#theme/recursivite-en-c');
 await mobile.waitForFunction(()=>!document.querySelector('#detail')?.classList.contains('hidden'));
 assert.equal(await mobile.locator('#definitions article.def').count(),11,
  'Le thème récursivité doit être navigable sur mobile.');
 assert.ok(await mobile.locator('#definitions article.def').first().isVisible());
  await mobile.goto(origin+'/#quiz');
 await mobile.locator('#quizStart').waitFor({state:'visible',timeout:15000});
 const mobileTop=await mobile.locator('body > header').boundingBox();
 const mobileQuizTop=await mobile.locator('#quiz .quiz-heading').boundingBox();
 assert.ok(mobileTop&&mobileQuizTop&&mobileQuizTop.y>=mobileTop.y+mobileTop.height-2,
  'L’en-tête du quiz empiète sur la navigation mobile.');
 await mobile.locator('#quizStart').click();
 const mobileQuestionTop=await mobile.locator('#quiz .quiz-heading').boundingBox();
 const mobileNav=await mobile.locator('body > header').boundingBox();
 assert.ok(mobileQuestionTop&&mobileNav&&mobileQuestionTop.y>=mobileNav.y+mobileNav.height-2,
  'Le titre de question empiète sur la navigation mobile.');
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

import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFileSync,mkdirSync} from 'node:fs';
import {chromium} from 'playwright';

const source=readFileSync(new URL('../index.html',import.meta.url));
const contenu=JSON.parse(source.toString('utf8').split('<script id="content-data" type="application/json">')[1].split('</script>')[0]);
const slug=s=>s.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const topicName='Pointeurs et tableaux C';
const si=contenu.sections.findIndex(s=>s.title===topicName);
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
 assert.equal(await cards.count(),30,'Le thème doit conserver ses 30 post-it.');
 assert.match(await cards.first().innerText(),/Variable dont la valeur est une adresse/);
 await page.locator('#definitions .card-hit').nth(5).scrollIntoViewIfNeeded();
 const before=await page.evaluate(()=>window.scrollY);
 await page.locator('#definitions .card-hit').nth(5).click();
 await page.waitForFunction(()=>location.hash.startsWith('#cours/'));
 assert.equal(await page.locator('#conceptDialog').count(),0,'Une fenêtre pop-up existe encore.');
 assert.equal(await page.locator('#courseArticle .lesson-panel').count(),30,
  'La lecture continue doit contenir les 30 cours.');
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

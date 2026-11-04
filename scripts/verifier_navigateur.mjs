import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const source = readFileSync(new URL('../index.html', import.meta.url));
const server = createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(source);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = 'http://127.0.0.1:' + server.address().port;
mkdirSync('apercus', { recursive: true });

let navigateur;
const erreurs = [];
try {
  navigateur = await chromium.launch({ headless: true });
  const page = await navigateur.newPage({ viewport: { width: 1330, height: 900 }, deviceScaleFactor: 1 });
  page.on('pageerror', error => erreurs.push(error.message));

  await page.goto(origin + '/#theme/pointeurs-et-tableaux-c');
  await page.locator('#definitions article.def').first().waitFor({ state: 'visible' });
  assert.equal(await page.locator('#definitions article.def').count(), 30, 'Le chapitre pointeurs devrait contenir 30 fiches.');

  await page.locator('#definitions .card-hit').first().click();
  await page.waitForFunction(() => document.getElementById('conceptDialog').open);
  const visuelModal = page.locator('#modalBody .lesson-visual svg').first();
  await visuelModal.waitFor({ state: 'visible' });
  assert.ok((await visuelModal.getAttribute('aria-label'))?.length > 20, 'Description du schéma mémoire manquante.');
  await page.screenshot({ path: 'apercus/pointeurs-fenetre.png' });

  await page.locator('#modalClose').click();
  await page.waitForFunction(() => !document.getElementById('conceptDialog').open);
  assert.ok(page.url().includes('#theme/pointeurs-et-tableaux-c'), 'La fermeture ne revient pas aux fiches.');

  const contenu = JSON.parse(source.toString('utf8').split('<script id="content-data" type="application/json">')[1].split('</script>')[0]);
  const slug = texte => texte.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('fr').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const routeNotion = (chapitre, notion) => {
    const section = contenu.sections.find(x => x.title === chapitre);
    assert.ok(section, 'Chapitre inconnu : ' + chapitre);
    const index = section.items.findIndex(x => x.term === notion);
    assert.ok(index >= 0, 'Notion inconnue : ' + notion);
    return '#cours/' + slug(chapitre) + '/' + (index + 1) + '-' + slug(notion);
  };
  const slugs = [
    ['Pointeurs et tableaux C', 'Caractère nul', 'apercus/chaine-caracteres.png'],
    ['Pointeurs et tableaux C', 'Tableau à deux dimensions', 'apercus/tableau-2d.png'],
    ['Docker', 'Conteneur', 'apercus/docker.png'],
    ['Green IT et énergie', 'Puissance et énergie consommée', 'apercus/energie.png']
  ];
  for (const [chapitre, notion, capture] of slugs) {
    await page.goto(origin + '/' + routeNotion(chapitre, notion));
    const image = page.locator('#courseArticle .lesson-visual svg').first();
    await image.waitFor({ state: 'visible', timeout: 12000 });
    const rect = await image.boundingBox();
    assert.ok(rect && rect.width >= 200 && rect.height >= 100, 'Image non rendue : ' + notion);
    assert.ok((await image.getAttribute('aria-label'))?.length > 20, 'Image sans texte alternatif : ' + notion);
    await page.screenshot({ path: capture });
  }

  // Un nouveau contexte émule une vraie première visite mobile, et non le
  // redimensionnement artificiel d'une session de bureau.
  const mobile = await navigateur.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true
  });
  mobile.on('pageerror', error => erreurs.push('Mobile : ' + error.message));
  await mobile.goto(origin + '/' + routeNotion('Pointeurs et tableaux C', 'Indices de tableau'));
  const imageMobile = mobile.locator('#courseArticle .lesson-visual svg').first();
  await imageMobile.waitFor({ state: 'visible', timeout: 12000 });
  const size = await imageMobile.boundingBox();
  const defilement = await mobile.locator('#courseArticle .visual-viewport').first().evaluate(el => ({
    largeurVisible: el.clientWidth,
    largeurTotale: el.scrollWidth,
    deplacementInitial: el.scrollLeft
  }));
  assert.ok(size && size.width >= 630, 'La taille de lecture du schéma a été réduite sur mobile.');
  assert.ok(defilement.largeurVisible < 390 && defilement.largeurTotale > defilement.largeurVisible + 200,
    'Le dessin doit défiler à l’intérieur de la fiche, sans déborder de la page.');
  assert.ok(await mobile.locator('#courseArticle .visual-scroll-hint').first().isVisible(),
    'L’indication de défilement sur mobile est absente.');
  await mobile.screenshot({ path: 'apercus/tableau-mobile.png' });
  await mobile.locator('#courseArticle .visual-viewport').first().evaluate(el => { el.scrollLeft = 220; });
  await mobile.screenshot({ path: 'apercus/tableau-mobile-defilement.png' });

  assert.deepEqual(erreurs, [], 'Erreurs JavaScript navigateur : ' + erreurs.join(' / '));
  console.log('Test navigateur réussi : fenêtre modale, cinq cours illustrés et vue mobile.');
} finally {
  if (navigateur) await navigateur.close();
  await new Promise(resolve => server.close(resolve));
}

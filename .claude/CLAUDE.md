# Avondgloren

Een Nederlandstalig interactive fiction spel (choice-based, geen parser).
Het eindproduct is één self-contained HTML-bestand (`index.html`) met
inline CSS + JavaScript en geen dependencies buiten een Google Fonts CDN-link.

Dat bestand is **gegenereerd, bewerk het niet direct.** De bron staat in `src/`
en wordt samengevoegd met `node build.js` (geen npm-packages nodig).

```
src/index.html          skelet; {{STYLE}} en {{SCRIPT}} worden ingevuld
src/style.css           het complete <style>-blok
src/js/state.js         state, tag(), unlockNote(), lege STORY
src/story/00-intro.js   scenes, één bestand per dag/personage
src/story/01-opening.js
src/story/02-fen.js     ... t/m 07-finale.js
src/js/signatures.js    SIGNATURES + berekenSignature()
src/js/story-links.js   de STORY[key].next = "..." dagovergangen
src/js/engine.js        rendering, zijbalk, restart; start het spel
build.js                samenvoegen + dode-linkcheck
```

De volgorde waarin de scripts aan elkaar geplakt worden staat in de
`SCRIPTS`-array bovenaan `build.js`. Een nieuwe dag toevoegen betekent: een
bestand in `src/story/` zetten én die array bijwerken. `engine.js` blijft
altijd als laatste staan, want daar start het spel.

## Architectuur

Alle scènes zitten in het `STORY`-object, verdeeld over de bestanden in
`src/story/`. Elk bestand voegt zijn scènes toe met `Object.assign(STORY, {
... })`; samen vormen ze één platte namespace, dus scène-IDs moeten over alle
bestanden heen uniek zijn. Elk item heeft een unieke key (de scène-ID) en
bevat:

- `label` — korte titel boven de scène, zichtbaar voor de speler
- `day` — optioneel, toont een dag-tag boven de titel (bv. "Dag 1 · Fen")
- `text` — array van paragrafen (HTML toegestaan, bv. `&mdash;` vermijden,
  zie hieronder)
- `choices` — array van `{ text, next, leaf }`, of
- `dynamicChoices` — een functie `(state) => [...]` voor scènes waarvan de
  opties afhangen van flags in de state (bv. of de speler al kennis heeft
  van de ingrediënten)
- `onEnter` — optionele functie `(state) => {...}`, voert side effects uit
  zodra de scène geladen wordt (gloed ophogen, journal-entry toevoegen,
  notebook-fragment unlocken, tag zetten)
- `ending: true` — verbergt de keuzes en toont de herstart-knop; wordt bij
  veel eindes verwijderd zodra er een `.next` aan toegevoegd is (zie
  `src/js/story-links.js`, waar losse eindes aan de volgende dag gekoppeld
  worden via `STORY[key].next = "..."`)

`next` in elke choice verwijst naar een andere `STORY`-key, ook over
bestandsgrenzen heen. Dat is de enige manier waarop scènes aan elkaar hangen:
er is geen aparte routing-laag, en de bestandsindeling is puur voor de
leesbaarheid.

### State

- `gloed` — voortgangsmeter (Hearth-glow), 0-100+, bepaalt de tekst in de
  zijbalk
- `spreuken` — array van strings, het "Spreukenboek" in de zijbalk
- `dagboek` — array van strings, oma's dagboekfragmenten in de zijbalk
- `tags` — array van strings (bv. 'geheugen', 'moed', 'instinct',
  'aanwezigheid'), wordt gebruikt om aan het einde de meest gekozen
  "signatuur" te bepalen voor de gepersonaliseerde slotzin
- `flags` — booleans voor eerdere keuzes (bv. `kentIngredienten`,
  `askedX`), bepalen welke dynamicChoices beschikbaar zijn

### Verhaalstructuur

Introductie (`intro_1`, `intro_2`) → openingsochtend (`start` →
`hearth`/`herbs`/`deur_vroeg` → `opening`) → vijf bezoekdagen, elk met
hetzelfde patroon: aankomst → warme drank aanbieden (kruidenthee /
amandelmelk / sojamelk, elk met eigen reactie) → luisteren-of-niet-vragen →
spreuk kiezen (of gewoon aanwezig zijn, altijd een optie zonder spreuk) →
einde met gloed/spreuken/tag update → finale (`finale_intro` →
`finale_eind`) met een slotzin die reflecteert op de meest gekozen tag.

Volgorde: Fen (dag1, lichtst) → Jackie (dag2) → Louise & Levi (dag3,
bemiddeling i.p.v. brouwen) → Mick (dag4) → Barry (dag5, zwaarst) → finale.

## Openstaande taak

Het Nederlands proefgelezen worden op grammaticale fouten en onnatuurlijk
aanvoelende zinnen (calques uit een eerdere Engelse versie kunnen er nog
inzitten). Verander geen scène-IDs of de structuur van choices/next-
koppelingen tenzij daar expliciet om gevraagd wordt.

## Conventies om aan te houden

- Gebruik geen Engelse em-dash (`&mdash;` of `—`) in nieuwe of aangepaste
  tekst. Gebruik in plaats daarvan een dubbele punt (toelichting), komma
  (doorlopende zin), haakjes (echte zijopmerking), of beëindigingstekens
  (onderbroken dialoog) — kies wat het beste bij de zin past.
- Blijf bij informeel Nederlands (je/jij, geen u).
- Keuzeknoppen (`choices`/`dynamicChoices` teksten) staan in de actieve
  gebiedende wijs: "Begin de dag", "Kijk wie het is", "Loop naar de plank",
  niet de infinitiefvorm ("De dag beginnen", "Kijken wie het is"). Directe
  citaten van wat het personage zegt (bv. `"Rustig. Vertel me..."`) blijven
  vanzelfsprekend ongewijzigd, dat is dialoog, geen actiebeschrijving.
- Nieuwe personages of scènes volgen hetzelfde patroon als de bestaande
  vijf bezoekdagen (zie boven), tenzij anders gevraagd.

## Verplichte check na elke wijziging

Draai `node build.js`. Die doet allebei de checks automatisch en weigert te
schrijven als er iets mis is:

1. JavaScript-syntax moet geldig blijven (de story-bestanden worden echt
   uitgevoerd om de scène-keys op te halen).
2. Elke `next`-referentie (in `choices`, `dynamicChoices`, en de
   `STORY[key].next = "..."`-koppelingen in `story-links.js`) moet naar een
   bestaande `STORY`-key wijzen. Geen dode links.

Bij een fout print het script bestand, regelnummer en de niet-bestaande key,
en eindigt met exit code 1. Bij succes meldt het hoeveel scènes er in zitten:
een onverwachte daling van dat aantal betekent dat er per ongeluk een key
overschreven is.

## De avondlantaarn (gedrag, hou dit consistent)

Vaste regel: de lantaarn **dooft nooit helemaal**. Hij is magisch en
smeult altijd door, ook 's nachts. Wat wél schommelt is de *gloed*
(intensiteit/warmte), afhankelijk van zijn humeur:

- Standaard, vooral 's ochtends: dof en laag, alsof hij nog moet
  "wakker worden"
- Na aanmoediging (zachtjes toespreken/blazen, zoals in de `hearth`-scène
  op dag 1): warm en gelijkmatig
- Bij emotioneel betekenisvolle momenten (bv. als een bezoeker vertrekt
  met een goed gevoel): flakkert geamuseerd op, wordt "een tikkeltje
  helderder", of gloeit "warm en helder op"

Gebruik dus nooit taal die suggereert dat hij aan- of uitgezet wordt
("aangaan", "aanzetten", "uit"). Gebruik in plaats daarvan gradaties van
gloed: dof, laag, warm, helder, feller. Hij hoeft ook nooit "aangestoken"
te worden; hoogstens aangemoedigd tot een betere gloed.

De lantaarns die de buren in de finale tussen de takken van Amberwoud
hangen, zijn expliciet *andere* lantaarns, niet de avondlantaarn zelf.

## Responsiveness

Mobiel is de primaire doelgroep &mdash; ga daar bij nieuwe UI-aanpassingen
van uit. Tegelijk moet desktop ook gewoon goed blijven ogen; verslechter
de desktop-weergave niet om iets op mobiel te verbeteren.

De layout is twee kolommen op breder dan 620px (verhaal + zijbalk naast
elkaar) en één kolom op 620px en smaller (zijbalk stapelt onder het
verhaal via `.sidebar{ order: 2; }`). Mobiel-specifieke aanpassingen
(kleinere padding, kleinere kop, iets ruimere knoppen voor duim-tapgrootte)
staan uitsluitend binnen de `@media (max-width: 620px)`-regel bovenaan
`src/style.css`, zodat ze de desktop-stijlen buiten die query niet raken.
Voeg nieuwe mobiel-specifieke stijlen altijd binnen die query toe, nooit
door de basisstijlen zelf te wijzigen, tenzij de wijziging voor beide
schermformaten gewenst is.

## Fysieke setting (let hierop bij nieuwe scènes)

De winkel zit **tussen de wortels van een oude eik** in Amberwoud &mdash;
geen normaal gebouw met een dak. Vermijd daarom woorden als "dak" in de
tekst; geluiden van buiten (regen, vallende eikels) klinken tegen de
**luiken** of komen neer **tussen de wortels** vlak buiten de deur, niet op
een dak.

Vaste elementen:
- **Luiken** (geen ramen met glas expliciet benoemd) die 's ochtends
  geopend worden
- Een **deur met drempel**, waar bladeren zich in de herfst tegen ophopen
- De **toonbank**, met de avondlantaarn aan een ketting erboven, en een
  **bankje** eronder waar bezoekers vanzelf gaan zitten
- **Oma's oude schrijftafel**, waar de dagboekfragmenten worden gevonden
- Een **voorraadplank** met de ingrediëntenpotten

Blijf bij deze indeling tenzij er expliciet om een aanpassing gevraagd
wordt, en check nieuwe scènes op dit soort ruimtelijke logica voor je ze
toevoegt.

## Kleurenpalet

De huidige stijl (in de `:root`-variabelen bovenaan `src/style.css`) is
een schemering-thema: een lichter, warm getinte donkerpaarse achtergrond
(`--bg-deep`, `--bg-deep-2`) met een amberkleurige gloed die van bovenaf
inloopt (de eerste radial-gradient-laag in `body { background: ... }`,
losstaand van de dusk-kleur zelf) en de warme lantaarngloed (`--ember`,
`--ember-deep`) als contrast. Plus een lichtpaarse violet-tint
(`--violet`) als magie-accent in de voortgangsbalk en het spreukenboek.
Het idee: warm lantaarnlicht dat de avondlucht kleurt, cozy in plaats van
somber. De achtergrond is bewust niet te donker gehouden (eerdere versie
met `--bg-deep: #191a2e` voelde te zwaar aan) &mdash; hou bij aanpassingen
in de gaten dat het geheel uplifting blijft, niet drukkend.



## Testen

Draai `node build.js` en open `index.html` direct in een browser. Geen
server nodig: de output is een volledig self-contained statisch bestand.

Tijdens het schrijven is `node build.js --watch` handiger: die herbouwt bij
elke wijziging in `src/`, dus dan volstaat een refresh in de browser.

## Deployen

`node build.js` schrijft één bestand in de root: `index.html`, want dat is
wat een statische host op de bare URL serveert. Het hoort in git; het is het
artefact dat je deployt.

GitHub Pages staat aan op branch `main`, folder `/ (root)`. Deployen is dus:
bouwen, `index.html` committen, pushen. Live op
https://littlemousey.github.io/avondgloren-IF/

Alternatief voor een losse test: sleep `index.html` naar Netlify Drop
(app.netlify.com/drop).

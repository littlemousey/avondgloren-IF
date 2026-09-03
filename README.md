# Avondgloren

Een Nederlandstalig interactive fiction spel: choice-based, geen parser.

Je erft de winkel van je oma, tussen de wortels van een oude eik in Amberwoud.
Vijf herfstdagen lang komen er bezoekers langs met hun problemen.
Je zet thee, luistert, en kiest of je een spreuk brouwt of gewoon aanwezig
bent. Je acties hebben invloed op het einde van het verhaal.

<img width="908" height="906" alt="image" src="https://github.com/user-attachments/assets/2d61d085-d6b3-4df5-911d-31bdef375082" />

## Spelen

Open `index.html` in een browser. Meer is het niet: geen server, geen
installatie. Het bestand is volledig self-contained, op een Google
Fonts-link na.

## Ontwikkelen

`index.html` is **gegenereerd. Bewerk het niet met de hand**, want je
wijzigingen zijn weg bij de eerstvolgende build. De bron staat in `src/`.

```sh
node build.js           # bouwt index.html
node build.js --watch    # herbouwt bij elke wijziging in src/
```

Verder heb je niets nodig: geen npm install, geen dependencies, geen
`node_modules`. Alleen Node zelf. (`npm run build` en `npm run watch` werken
ook, dat zijn dezelfde twee commando's.)

## Structuur

```
src/index.html          skelet; {{STYLE}} en {{SCRIPT}} worden ingevuld
src/style.css           het complete <style>-blok
src/js/state.js         state, tag(), unlockNote(), lege STORY
src/story/00-intro.js   de scenes, een bestand per dag/personage
src/story/01-opening.js
src/story/02-fen.js
src/story/03-jackie.js
src/story/04-louise-levi.js
src/story/05-mick.js
src/story/06-barry.js
src/story/07-finale.js
src/js/signatures.js    de slotzinnen per signatuur
src/js/story-links.js   de dagovergangen
src/js/engine.js        rendering, zijbalk, restart; start het spel
build.js                samenvoegen + dode-linkcheck
```

De laadvolgorde staat in de `SCRIPTS`-array bovenaan `build.js`. Die is
expliciet in plaats van een glob, zodat de volgorde zichtbaar blijft.
`engine.js` staat altijd als laatste, want daar start het spel.

## Hoe het verhaal in elkaar zit

Elke scene is een key in het `STORY`-object. De bestanden in `src/story/`
voegen daar hun eigen scenes aan toe:

```js
Object.assign(STORY, {

  voorbeeld_scene: {
    day: "Dag 1 &middot; Fen",       // optioneel, dag-tag boven de titel
    label: "Terugspoelen",           // korte titel, zichtbaar voor de speler
    text: [
      "Fen sluit zijn ogen, wat hem duidelijk moeite kost.",
      "Het geheugen is er dus nog wel, ergens. Alleen niet toegankelijk."
    ],
    onEnter: (s) => { s.gloed += 4; tag(s, 'geheugen'); },
    choices: [
      { text: "Loop naar de plank", next: "fen_spreuk", leaf: "&rarr;" },
      { text: "Laat het rusten", next: "fen_eind_praten" }
    ]
  }

});
```

Samen vormen alle bestanden een platte namespace, dus **scene-IDs moeten over
alle bestanden heen uniek zijn**. Een `next` mag naar elke scene wijzen, ook
in een ander bestand: de bestandsindeling is puur voor de leesbaarheid, niet
voor scoping.

Naast `choices` bestaat `dynamicChoices: (state) => [...]` voor scenes waar de
opties afhangen van eerdere keuzes, en `ending: true` voor scenes die de
herstart-knop tonen. De volledige beschrijving van alle velden, plus de
schrijfconventies (geen em-dashes, gebiedende wijs in keuzeknoppen, hoe de
avondlantaarn zich hoort te gedragen), staat in `.claude/CLAUDE.md`.

## Een dag toevoegen

1. Zet een bestand in `src/story/`, bijvoorbeeld `08-nieuw.js`, met dezelfde
   `Object.assign(STORY, { ... })`-vorm.
2. Voeg het pad toe aan de `SCRIPTS`-array in `build.js`, voor `engine.js`.
3. Koppel het vorige einde aan de nieuwe dag in `src/js/story-links.js`.
4. Draai `node build.js`.

## Controle

`node build.js` controleert twee dingen en weigert te schrijven als er iets
mis is:

- de story-bestanden moeten geldige JavaScript zijn (ze worden echt
  uitgevoerd om de scene-keys op te halen, niet met een regex geraden)
- elke `next` moet naar een bestaande scene wijzen

Bij een dode link krijg je bestand, regelnummer en de niet-bestaande key, en
exit code 1:

```
✗ 1 dode link(s):
  src/story/02-fen.js:23  next -> "fen_na_drnak" bestaat niet in STORY
```

Bij succes meldt de build hoeveel scenes erin zitten. Een onverwachte daling
van dat aantal betekent dat je per ongeluk een bestaande key overschreven
hebt.

## Deployen

De build schrijft één bestand in de root: `index.html`, want dat is wat een
statische host op de bare URL serveert. Het staat daarom bewust wél in git,
ook al is het gegenereerd: het is het artefact dat je deployt.

Het spel staat op GitHub Pages (branch `main`, folder `/ (root)`):
<https://littlemousey.github.io/avondgloren-IF/>

Deployen is dus gewoon: bouwen, committen, pushen.

```
node build.js
git add index.html
git commit -m "build"
git push
```

Voor een losse test zonder repo: sleep `index.html` naar
[Netlify Drop](https://app.netlify.com/drop).

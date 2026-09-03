#!/usr/bin/env node
// Avondgloren build: plakt src/ samen tot index.html en controleert op dode links.
// Gebruik: node build.js  (of: node build.js --watch)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
// index.html, want dat is wat een statische host (GitHub Pages) op de
// bare URL serveert.
const OUT = path.join(ROOT, 'index.html');

// Volgorde van de script-bestanden. Nieuwe dag toevoegen?
// Zet het bestand in src/story/ en voeg het hier op de juiste plek toe.
const SCRIPTS = [
  'src/js/state.js',
  'src/story/00-intro.js',
  'src/story/01-opening.js',
  'src/story/02-fen.js',
  'src/story/03-jackie.js',
  'src/story/04-louise-levi.js',
  'src/story/05-mick.js',
  'src/story/06-barry.js',
  'src/story/07-finale.js',
  'src/js/signatures.js',
  'src/js/story-links.js',
  'src/js/engine.js',        // start het spel, moet als laatste
];

const STORY_SCRIPTS = SCRIPTS.filter(f => !f.endsWith('engine.js'));

const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/\s+$/, '');

// --- Controle: wijst elke next naar een bestaande scene? -------------------

function collectKeys(source){
  // Evalueer alles behalve de engine (die raakt document aan) om de echte
  // STORY-keys te krijgen, in plaats van ze uit de tekst te moeten raden.
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(source + '\n;globalThis.__keys = Object.keys(STORY);', sandbox,
                  { filename: 'story-bundle.js' });
  return new Set(sandbox.__keys);
}

function checkLinks(keys){
  const fouten = [];
  for (const rel of SCRIPTS){
    const regels = read(rel).split('\n');
    regels.forEach((regel, i) => {
      // vangt zowel  next: "x"  (in choices) als  .next = "x"  (de dagovergangen)
      for (const m of regel.matchAll(/next\s*[:=]\s*["']([^"']+)["']/g)){
        if (!keys.has(m[1])){
          fouten.push(`${rel}:${i + 1}  next -> "${m[1]}" bestaat niet in STORY`);
        }
      }
      for (const m of regel.matchAll(/\brender\(\s*["']([^"']+)["']\s*\)/g)){
        if (!keys.has(m[1])){
          fouten.push(`${rel}:${i + 1}  render("${m[1]}") bestaat niet in STORY`);
        }
      }
    });
  }
  return fouten;
}

// --- Bouwen ----------------------------------------------------------------

function build(){
  const script = SCRIPTS.map(read).join('\n\n');

  let keys;
  try {
    keys = collectKeys(STORY_SCRIPTS.map(read).join('\n\n'));
  } catch (err) {
    console.error('✗ JavaScript-fout in de story-bestanden:\n  ' + err.message);
    return false;
  }

  const fouten = checkLinks(keys);
  if (fouten.length){
    console.error(`✗ ${fouten.length} dode link(s):`);
    fouten.forEach(f => console.error('  ' + f));
    return false;
  }

  const html = read('src/index.html')
    .replace('{{STYLE}}', () => read('src/style.css'))
    .replace('{{SCRIPT}}', () => script) + '\n';

  fs.writeFileSync(OUT, html);
  console.log(`✓ index.html geschreven — ${keys.size} scenes, ${html.length} bytes`);
  return true;
}

// --- Watch -----------------------------------------------------------------

if (process.argv.includes('--watch')){
  build();
  console.log('… let op wijzigingen in src/ (ctrl-c om te stoppen)');
  let bezig = null;
  fs.watch(path.join(ROOT, 'src'), { recursive: true }, () => {
    clearTimeout(bezig);
    bezig = setTimeout(build, 60);
  });
} else if (!build()){
  process.exit(1);
}

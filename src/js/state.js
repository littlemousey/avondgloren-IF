// Avondgloren · State en story-helpers
// Wordt als eerste ingeladen: alles hieronder moet bestaan voor de scenes geladen worden.

const state = { gloed: 20, spreuken: [], dagboek: [], tags: [], flags: {} };

function tag(s, t){ s.tags.push(t); }

function unlockNote(s, key, text){
  if (s.flags['note_'+key]) return;
  s.flags['note_'+key] = true;
  s.dagboek.push(text);
}

// Wordt gevuld door de bestanden in src/story/.
const STORY = {};

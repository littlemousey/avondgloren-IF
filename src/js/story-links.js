// Avondgloren · Dagovergangen
// Draait na het laden van alle scenes, voor de engine start.

// Link de dag-overgangen aan elkaar via de "ending" knoppen die al een next hebben,
// maar de laatste keuze van elke dag heeft geen vervolg-knop nodig: de restart-knop
// verschijnt bij ending nodes. In plaats daarvan koppelen we hier de dagovergangen.
const DAG_VOLGORDE = ["dag2_intro", "dag3_intro", "dag4_intro", "dag5_intro", "finale_intro"];
["fen_eind_inkt","fen_eind_dauw","fen_eind_gok","fen_eind_praten"].forEach(k => STORY[k].next = "dag2_intro");
["jackie_eind_klaver","jackie_eind_vuurvlieg","jackie_eind_gok","jackie_eind_praten"].forEach(k => STORY[k].next = "dag3_intro");
["le_eind_spinrag","le_eind_praten"].forEach(k => STORY[k].next = "dag4_intro");
["mick_eind_trilling","mick_eind_vuurvlieg","mick_eind_gok","mick_eind_praten"].forEach(k => STORY[k].next = "dag5_intro");
["barry_eind_distel","barry_eind_inkt","barry_eind_gok","barry_eind_praten"].forEach(k => STORY[k].next = "finale_intro");

// Ending nodes krijgen alsnog een "verder"-knop in plaats van meteen herstart,
// behalve de allerlaatste (finale_eind).
Object.keys(STORY).forEach(key => {
  const node = STORY[key];
  if (node.ending && node.next){
    node.choices = [{ text: "Ga verder", next: node.next, leaf:"→" }];
    delete node.ending;
  }
});

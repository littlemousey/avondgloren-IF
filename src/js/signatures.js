// Avondgloren · Slotzinnen per signatuur
// De meest gekozen tag bepaalt welke zin in finale_eind terechtkomt.

const SIGNATURES = {
  geheugen: "Je merkt dat je deze herfst vaker naar herinneringen greep dan naar bezweringen, alsof je, net als oma, had geleerd dat het verleden vaak het zachtste antwoord geeft.",
  helderheid: "Je merkt dat je deze herfst vaak koos voor helderheid boven troost: een korte, scherpe waarheid, in plaats van een lange omweg eromheen.",
  geluk: "Je merkt dat je deze herfst het vaakst naar een beetje geluk reikte, niet om iets te beslissen voor een ander, maar om de kansen net iets vriendelijker te maken.",
  moed: "Je merkt dat je deze herfst het vaakst koos voor een duwtje moed, niet om iemands angst weg te toveren, maar om te zeggen: probeer het toch maar, ik sta hier.",
  bescherming: "Je merkt dat je deze herfst het vaakst koos om iets simpelweg buiten te houden: niet elk probleem hoeft opgelost, sommige moeten gewoon niet binnenkomen.",
  harmonie: "Je merkt dat je deze herfst het vaakst koos om mensen weer bij elkaar te brengen, niet door gelijk te geven, maar door ruimte te maken om terug te komen.",
  instinct: "Je merkt dat je deze herfst het vaakst hielp om iemands eigen gevoel weer te laten kloppen, niet door voor hen te beslissen, maar door te bewijzen dat ze zichzelf nog mochten geloven.",
  aanwezigheid: "Je merkt dat je deze herfst, vaker dan wat dan ook, koos om er gewoon te zíjn: geen spreuk, geen ingrediënt, alleen tijd en aandacht. Misschien was dat altijd al de belangrijkste voorraad in de winkel."
};

function berekenSignature(s){
  const telling = {};
  s.tags.forEach(t => { if (t === 'onzeker') return; telling[t] = (telling[t]||0)+1; });
  let beste = null, hoogste = 0;
  Object.keys(telling).forEach(k => { if (telling[k] > hoogste){ hoogste = telling[k]; beste = k; } });
  if (!beste) beste = 'aanwezigheid';
  return SIGNATURES[beste];
}

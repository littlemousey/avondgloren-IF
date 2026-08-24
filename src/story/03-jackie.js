// Avondgloren · Dag 2: Jackie het konijn
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  dag2_intro: {
    day: "Dag 2 &middot; Jackie",
    label: "Een grote eerste keer",
    text: [
      "Voor je opendoet, veeg je eerst het stof van de hoed en zet je hem recht, inmiddels een gewoonte geworden voor je aan de dag begint. Je vraagt je af of oma dit ritueel voor of na haar ochtendthee deed.",
      "Jackie staat al een tijdje voor de deur te wachten, dat kun je zien aan de bandensporen van heen-en-weer geloop in de aarde. Het regent inmiddels gestaag, en haar vacht plakt nat tegen haar oren. Ze is klein, ook voor een konijn, en klemt een mandje tegen zich aan.",
      "\"Mama heeft me gevraagd dit naar tante Roos te brengen. Aan de andere kant van het beekbos. Alleen.\" Ze zegt het woord 'alleen' zoals andere konijnen het woord 'vos' zouden zeggen. \"Ik ben nog nooit alleen zo ver geweest.\""
    ],
    choices: [
      { text: "Zet een kop kruidenthee met kamille", next: "jackie_drank_thee", leaf:"☕" },
      { text: "Warm de amandelmelk met kaneel op", next: "jackie_drank_amandel", leaf:"☕" },
      { text: "Warm de sojamelk met honing en nootmuskaat op", next: "jackie_drank_soja", leaf:"☕" }
    ]
  },

  jackie_drank_thee: {
    label: "Kruidenthee",
    text: [ "Jackie houdt de kop met twee poten vast, ademt de damp diep in, en voor het eerst sinds ze binnenkwam zakken haar schouders een fractie." ],
    choices: [ { text: "Ga verder", next: "jackie_na_drank", leaf:"→" } ]
  },
  jackie_drank_amandel: {
    label: "Amandelmelk met kaneel",
    text: [ "Ze neemt voorzichtig een slokje, en haar ogen worden groot. \"Dit smaakt als een knuffel,\" zegt ze verbaasd, en drinkt dan sneller door." ],
    choices: [ { text: "Ga verder", next: "jackie_na_drank", leaf:"→" } ]
  },
  jackie_drank_soja: {
    label: "Sojamelk met honing en nootmuskaat",
    text: [ "Jackie warmt eerst haar poten aan de kop voor ze drinkt. \"Mama maakt dit ook altijd,\" zegt ze zacht, \"als ik bang ben voor onweer.\"" ],
    choices: [ { text: "Ga verder", next: "jackie_na_drank", leaf:"→" } ]
  },

  jackie_na_drank: {
    label: "Iets rustiger",
    text: [ "De kop leeg, of toch al een stuk leger, zit Jackie iets rustiger op de kruk dan daarnet." ],
    choices: [
      { text: "\"Wat is precies het engste deel van dat pad, denk je?\"", next: "jackie_ask", leaf:"🗨" },
      { text: "Loop meteen naar de plank", next: "jackie_spreuk", leaf:"→" }
    ]
  },

  jackie_ask: {
    label: "Het engste stukje",
    text: [
      "Jackie denkt lang na. \"Niet de vos, eigenlijk. Vossen zie je meestal aankomen. Het is het stuk waar de bomen zo dicht op elkaar staan dat je het licht niet meer ziet. Dan weet ik niet meer of ik nog wel de goede kant op ga.\"",
      "Geen gevaar dus, eerder onzekerheid over de juiste richting. Dat maakt het makkelijker om iets te kiezen dat echt bij haar past."
    ],
    onEnter: (s) => { s.flags.jackieGevraagd = true; },
    choices: [ { text: "Loop naar de plank en kies iets", next: "jackie_spreuk", leaf:"→" } ]
  },

  jackie_spreuk: {
    label: "Bij de plank",
    text: [
      "Je kijkt naar de potten. Jackie volgt elke beweging van je poten alsof je zo een stukje van haar moed voor haar gaat inpakken, wat, eerlijk gezegd, ook precies is wat er gaat gebeuren."
    ],
    dynamicChoices: (s) => {
      const opts = [];
      if (s.flags.kentIngredienten){
        opts.push({ text: "Geperst klaverblad: duw met een beetje geluk de kleine kansen jouw kant op", next: "jackie_eind_klaver", leaf:"❦" });
        opts.push({ text: "Vuurvliegstof: geef een lichtgevend beetje moed voor de donkere stukken", next: "jackie_eind_vuurvlieg", leaf:"❦" });
      } else {
        opts.push({ text: "Pak iets dat er dapper genoeg uitziet, en hoop maar", next: "jackie_eind_gok", leaf:"?" });
      }
      opts.push({ text: "Geen spreuk: teken samen het pad op de vloer na tot ze het uit haar hoofd kent", next: "jackie_eind_praten", leaf:"✦" });
      return opts;
    }
  },

  jackie_eind_klaver: {
    label: "Geperst klaverblad",
    text: [
      "Je naait een gedroogd klaverblaadje in de voering van haar mandje, onopvallend, zoals je oma het ooit bij jou deed voor je eerste boodschap alleen. \"Dit duwt de kleine dingen een beetje jouw kant op,\" leg je uit. \"Het beslist niet voor je. Het helpt gewoon een beetje mee.\"",
      "Jackie drukt het mandje tegen zich aan alsof het al werkt. Misschien doet het dat ook wel, op een manier die niets met klaverblad te maken heeft.",
      "Ze vertrekt met kleine, vastberaden sprongetjes, en bij de bosrand kijkt ze nog één keer om, niet uit angst ditmaal, maar gewoon om te zwaaien."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Klaverblad in de voering: voor een klein duwtje geluk."); tag(s,'geluk'); },
    ending: true
  },

  jackie_eind_vuurvlieg: {
    label: "Vuurvliegstof",
    text: [
      "Je strooit een vingertopje vuurvliegstof in het mandje, waar het een zacht, warm schijnsel opgeeft, net genoeg om bij de donkere stukken bos gezelschap te houden. \"Als het licht wegvalt,\" zeg je, \"til je gewoon het deksel op.\"",
      "Jackie test het meteen, klapt het mandje open en dicht, en giechelt bij het gloedje dat naar buiten piept. Voor het eerst sinds ze binnenkwam, ziet ze eruit als een konijn dat gewoon een leuk klusje gaat doen.",
      "Ze huppelt de deur uit, mandje half open, alsof ze niet kan wachten om het licht te laten zien aan het donkerste stuk bos dat ze kan vinden."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Vuurvliegstof in het mandje: gezelschap voor de donkere stukken."); tag(s,'moed'); },
    ending: true
  },

  jackie_eind_gok: {
    label: "Een gok",
    text: [
      "Je kent de kast nog niet goed genoeg, dus je pakt iets dat er warm en vriendelijk uitziet en stopt het tussen de spulletjes in haar mandje, zonder helemaal zeker te zijn wat het doet.",
      "\"Wat is het?\" vraagt Jackie. \"Een beetje van alles wat goed voelt,\" zeg je eerlijk, en om de een of andere reden is dat precies het juiste antwoord.",
      "Ze knikt, alsof vaagheid met goede bedoelingen ook een soort magie is, en vertrekt met net iets meer rechte rug dan ze binnenkwam."
    ],
    onEnter: (s) => { s.gloed += 10; s.spreuken.push("Een gok van iets warms: vaag, maar goedbedoeld."); tag(s,'onzeker'); },
    ending: true
  },

  jackie_eind_praten: {
    label: "Het pad natekenen",
    text: [
      "Je slaat de plank over. In plaats daarvan teken je met krijt het hele pad op de vloer: hier de brug, hier het dichte stuk, hier de open plek waar tante Roos altijd theewater klaarzet.",
      "Jackie loopt het krijtpad drie keer over, hardop de bochten benoemend, tot ze het zonder te kijken kan lopen. \"Ik ken het al,\" zegt ze verbaasd. \"Ik wist het gewoon niet dat ik het kende.\"",
      "Ze vertrekt zonder spreuk, zonder charme, alleen met een pad dat ineens vertrouwd voelt, wat misschien het beste soort magie is voor vandaag."
    ],
    onEnter: (s) => { s.gloed += 15; s.spreuken.push("Geen spreuk: alleen het pad samen leren kennen."); tag(s,'aanwezigheid'); },
    ending: true
  },

});

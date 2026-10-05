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
      "Je kijkt naar de potten. Jackie volgt elke beweging van je poten alsof je zo een stukje van haar moed voor haar gaat inpakken, wat, eerlijk gezegd, ook precies is wat er gaat gebeuren.",
      "Bij oma leek het altijd alsof de potten vanzelf naar voren schoven zodra er iemand binnenkwam die ze nodig had. Bij jou blijven ze gewoon staan, eigenwijs, sommige nog steeds zonder etiket. Je zucht, zet je hoed recht en steekt toch maar je poot uit."
    ],
    dynamicChoices: (s) => {
      const opts = [];
      if (s.flags.kentIngredienten){
        opts.push({ text: "Geperst klaverblad: duw met een beetje geluk de kleine kansen jouw kant op", next: "jackie_klaver_1", leaf:"❦" });
        opts.push({ text: "Vuurvliegstof: geef een lichtgevend beetje moed voor de donkere stukken", next: "jackie_vuurvlieg_1", leaf:"❦" });
      } else {
        opts.push({ text: "Pak iets dat er dapper genoeg uitziet, en hoop maar", next: "jackie_eind_gok", leaf:"?" });
      }
      opts.push({ text: "Geen spreuk: teken samen het pad op de vloer na tot ze het uit haar hoofd kent", next: "jackie_eind_praten", leaf:"✦" });
      return opts;
    }
  },

  jackie_klaver_1: {
    label: "Het juiste blaadje",
    text: [
      "Het geperste klaver ligt tussen twee vellen vloeipapier in een oud kookboek van oma. Er zitten tientallen klavertjes tussen: de meeste met drie blaadjes, een paar met vier en één met vijf, wat je eerlijk gezegd een beetje verdacht vindt.",
      "Jackie buigt zich over het boek. \"Welke werkt het best?\" Dat is een uitstekende vraag. Je zou willen dat je het antwoord wist."
    ],
    choices: [
      { text: "Kies een klavertje vier: daar draait het toch om bij geluk?", next: "jackie_klaver_oma", leaf:"❦" },
      { text: "Kies dat ene klavertje vijf, dan zit je zeker goed", next: "jackie_klaver_oma", leaf:"❦" },
      { text: "Kies een gewoon klavertje drie", next: "jackie_klaver_2", leaf:"❦" }
    ]
  },

  jackie_klaver_oma: {
    label: "Een stem achter in je hoofd",
    text: [
      "Je poot zweeft al boven het blaadje als er een stem door je hoofd gaat die je zo goed kent dat je bijna omkijkt.",
      oma("Och kind. Een klavertje vier is voor wie geluk zoekt, en een klavertje vijf is voor wie niet kan kiezen. Dat konijntje heeft geen geluk nodig. Een gewoon klavertje drie, dat is voor wie alles al bij zich heeft en dat even vergeten is."),
      "Je pakt het klavertje drie. Tussen je poten voelt het steviger dan je had verwacht."
    ],
    choices: [ { text: "Zoek naald en draad", next: "jackie_klaver_2", leaf:"→" } ]
  },

  jackie_klaver_2: {
    label: "Naald en draad",
    text: [
      "Je zoekt een naald in oma's naaidoos, die ze altijd 'het rommelblik' noemde, en vindt hem pas nadat je drie keer in je eigen poot hebt geprikt. Jackie giechelt en houdt dan snel haar mandje voor je open, alsof ze het goed wil maken."
    ],
    choices: [ { text: "Naai het blaadje in de voering", next: "jackie_eind_klaver", leaf:"❦" } ]
  },

  jackie_vuurvlieg_1: {
    label: "Vuurvliegstof",
    text: [
      "Het vuurvliegstof zit in een pot met een doek eroverheen, vastgebonden met een touwtje. Als je het touwtje losmaakt, glipt er meteen een vonkje langs je snuit naar buiten, en Jackie slaakt een gilletje van verrukking.",
      "Het stof zelf ligt er slaperig en grijs bij. Oma liet het altijd eerst 'wakker worden', herinner je je. Hoe ze dat deed, weet je alleen niet meer. Het ging altijd zo snel."
    ],
    choices: [
      { text: "Zet de pot vlak onder de avondlantaarn, daar wordt het vast sneller wakker", next: "jackie_vuurvlieg_oma", leaf:"❦" },
      { text: "Tik drie keer zachtjes op de rand van de pot", next: "jackie_vuurvlieg_2", leaf:"❦" }
    ]
  },

  jackie_vuurvlieg_oma: {
    label: "Verlegen stof",
    text: [
      "Je zet de pot op de toonbank, recht onder de avondlantaarn. Het stof wordt niet wakker. Het kruipt juist weg in een hoekje van de pot, en de lantaarn gloeit een tikje feller, alsof hij wil laten zien hoe het moet.",
      oma("Naast de lantaarn? Nee, nee, nee. Daar wordt vuurvliegstof niet wakker, kind, daar wordt het verlegen. Wie wil er nou gloeien naast zoiets? Drie tikjes op de rand. Zachtjes, alsof je op een deur klopt.")
    ],
    choices: [ { text: "Zet de pot terug en tik drie keer op de rand", next: "jackie_vuurvlieg_2", leaf:"→" } ]
  },

  jackie_vuurvlieg_2: {
    label: "Wakker",
    text: [
      "Bij de derde tik gaat er een golfje licht door de pot, alsof er daarbinnen iets wakker wordt en zich uitrekt. De stofjes dwarrelen op en zakken weer, en hun licht wordt warm en geel, de kleur van een deur die op een kier staat terwijl er binnen iemand op je wacht.",
      "Jackie drukt haar neus bijna tegen de pot."
    ],
    choices: [ { text: "Strooi een vingertopje in haar mandje", next: "jackie_eind_vuurvlieg", leaf:"❦" } ]
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
      "Jackie test het meteen door het mandje open en dicht te klappen. Ze giechelt bij het gloedje dat naar buiten piept. Voor het eerst sinds ze binnenkwam, ziet ze eruit als een konijn dat gewoon een leuk klusje gaat doen.",
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
      "Achter in je hoofd blijft het even stil. Dan: " + oma("Staat niet in het boek, kind. Maar slecht is het niet."),
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

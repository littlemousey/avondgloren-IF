// Avondgloren · Dag 4: Mick de mol
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  dag4_intro: {
    day: "Dag 4 &middot; Mick",
    label: "Een voorzichtige klop",
    text: [
      "Je veegt het stof van de hoed en zet hem recht, en denkt aan hoe oma altijd zei dat een goede tovenaar zijn hoed nooit hoeft te controleren om te weten of hij goed zit. Jij controleert hem toch, elke ochtend opnieuw. Buiten regent het pijpenstelen, en overal tussen de boomwortels glinsteren al plassen.",
      "De klop op de deur is zo zacht dat je hem bijna mist, half weggedrukt door het geluid van de regen die buiten tegen de luiken slaat. Op de drempel staat Mick, de mol van de akkerrand, doorweekt, met aarde tot aan zijn schouders en ogen die angstvallig elk oogcontact ontwijken.",
      "\"Ik groef een nieuwe gang naar de composthoop,\" begint hij, langzaam, alsof elk woord eerst gecontroleerd moet worden. \"Ik schatte de afstand verkeerd in. Brak dwars door de wortelkelder van de familie Grijs. Water liep naar binnen. Een deel van hun wintervoorraad is bedorven.\" Hij zwijgt. \"Sindsdien... vertrouw ik mijn eigen gangen niet meer.\""
    ],
    choices: [
      { text: "Zet een kop kruidenthee met kamille", next: "mick_drank_thee", leaf:"☕" },
      { text: "Warm de amandelmelk met kaneel op", next: "mick_drank_amandel", leaf:"☕" },
      { text: "Warm de sojamelk met honing en nootmuskaat op", next: "mick_drank_soja", leaf:"☕" }
    ]
  },

  mick_drank_thee: {
    label: "Kruidenthee",
    text: [ "Mick omklemt de kop met beide poten, alsof hij bang is hem ook nog te laten vallen. Langzaam, heel langzaam, ontspant zijn greep." ],
    choices: [ { text: "Ga verder", next: "mick_na_drank", leaf:"→" } ]
  },
  mick_drank_amandel: {
    label: "Amandelmelk met kaneel",
    text: [ "Hij neemt een voorzichtige slok, test de temperatuur eerst met zijn snuit en dan pas met zijn mond. \"Veilig,\" mompelt hij, meer tegen zichzelf dan tegen jou." ],
    choices: [ { text: "Ga verder", next: "mick_na_drank", leaf:"→" } ]
  },
  mick_drank_soja: {
    label: "Sojamelk met honing en nootmuskaat",
    text: [ "De geur van nootmuskaat lijkt hem ergens aan te herinneren. Hij ontspant net genoeg om zijn schouders te laten zakken, al blijft zijn blik op de grond gericht." ],
    choices: [ { text: "Ga verder", next: "mick_na_drank", leaf:"→" } ]
  },

  mick_na_drank: {
    label: "Wat rustiger",
    text: [ "Met de warme kop tussen zijn poten durft Mick eindelijk iets verder te vertellen." ],
    choices: [
      { text: "\"Wat bedoel je precies, 'niet meer vertrouwen'?\"", next: "mick_ask", leaf:"🗨" },
      { text: "Loop meteen naar de plank", next: "mick_spreuk", leaf:"→" }
    ]
  },

  mick_ask: {
    label: "De twijfel achter de twijfel",
    text: [
      "Mick friemelt aan een kluitje aarde tussen zijn poten. \"Ik groef altijd op gevoel. Nooit hoeven meten, nooit hoeven twijfelen: ik wíst gewoon waar de gang moest buigen. Nu graaf ik expres te langzaam, controleer ik alles drie keer, en toch voelt elke afslag als gokken.\"",
      "Hij kijkt eindelijk op. \"Het is niet dat ik niet meer kán graven. Het is dat ik mezelf niet meer geloof als ik het doe.\"",
      "Het gaat er dus niet om een betere gang te vinden. Het gaat erom dat hij zijn eigen gevoel weer leert vertrouwen."
    ],
    onEnter: (s) => { s.flags.mickGevraagd = true; },
    choices: [ { text: "Loop naar de plank en kies iets", next: "mick_spreuk", leaf:"→" } ]
  },

  mick_spreuk: {
    label: "Bij de plank",
    text: [
      "Je kijkt naar de potten. Mick kijkt naar zijn eigen poten, alsof hij ze op dit moment niet als de zijne herkent."
    ],
    dynamicChoices: (s) => {
      const opts = [];
      if (s.flags.kentIngredienten){
        opts.push({ text: "Trillingsdraad: span een draad die precies terugtrilt zoals zijn gevoel dat ooit deed", next: "mick_eind_trilling", leaf:"❦" });
        opts.push({ text: "Vuurvliegstof: geef hem de moed om het gewoon te proberen, niet om iets te repareren", next: "mick_eind_vuurvlieg", leaf:"❦" });
      } else {
        opts.push({ text: "Pak iets dat naar aarde en zekerheid ruikt, en hoop maar", next: "mick_eind_gok", leaf:"?" });
      }
      opts.push({ text: "Geen spreuk: vraag gewoon wanneer hij zijn gangen voor het laatst wél vertrouwde", next: "mick_eind_praten", leaf:"✦" });
      return opts;
    }
  },

  mick_eind_trilling: {
    label: "Trillingsdraad",
    text: [
      "Je spant een trillingsdraad langs het begin van een proefgang en laat Mick voelen hoe die exact terugtrilt op elke beweging van zijn snuit, niet om voor hem te beslissen maar om hem te laten zien dat zijn gevoel, letterlijk, nog steeds klopt.",
      "\"Dit is geen vervanging voor je instinct,\" zeg je. \"Het is gewoon een bewijs dat het er nog is.\" Mick graaft twee proefmeters, aarzelend eerst, dan met iets van zijn oude snelheid.",
      "\"Het klopte,\" zegt hij verbaasd, alsof hij dat zelf niet had durven geloven. Hij neemt de draad mee, niet om elke gang mee te controleren, maar voor de dagen dat hij het zelf nog niet gelooft."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Trillingsdraad: bewijs dat zijn instinct nog klopte."); tag(s,'instinct'); },
    ending: true
  },

  mick_eind_vuurvlieg: {
    label: "Vuurvliegstof",
    text: [
      "Je geeft hem geen bewijs, maar een duwtje: een klein beetje vuurvliegstof, genoeg om één gang lang gewoon door te zetten zonder halverwege te stoppen om te twijfelen.",
      "\"Ik kan je gevoel niet repareren,\" zeg je eerlijk. \"Maar ik kan je wel de moed geven om het gewoon nog een keer te proberen. De rest moet van jou komen.\"",
      "Die middag graaft Mick, langzaam maar zonder te stoppen, een korte proefgang naast zijn eigen tunnel. Aan het einde staat hij, ongeschonden, zelf verbaasd naar zijn eigen pootafdrukken te kijken."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Vuurvliegstof: een duwtje om het gewoon nog eens te proberen."); tag(s,'moed'); },
    ending: true
  },

  mick_eind_gok: {
    label: "Een gok",
    text: [
      "Je kent de kast nog niet goed genoeg, dus je geeft hem iets dat naar vochtige aarde na regen ruikt, in de hoop dat vertrouwdheid zelf al iets doet.",
      "Mick ruikt eraan, lang, en zijn schouders zakken een fractie. \"Dit ruikt naar de gang van vroeger,\" zegt hij zacht. \"Voor het ongeluk.\"",
      "Hij vertrekt niet genezen, maar wel iets rustiger, met de geur van een gang die ooit wél vanzelfsprekend voelde."
    ],
    onEnter: (s) => { s.gloed += 10; s.spreuken.push("Een gok naar natte aarde: een geur die iets terugbracht."); tag(s,'onzeker'); },
    ending: true
  },

  mick_eind_praten: {
    label: "Wanneer voelde het voor het laatst goed?",
    text: [
      "Je slaat de plank over. \"Wanneer,\" vraag je, \"vertrouwde je je eigen gangen voor het laatst zonder erover na te denken?\" Mick moet lang nadenken, alsof de vraag zelf ongebruikelijk is.",
      "\"Vanochtend,\" zegt hij uiteindelijk, verrast door zijn eigen antwoord. \"De gang naar hier. Ik heb er niet over nagedacht. Ik liep gewoon.\" Hij kijkt naar zijn eigen sporen bij de deur, alsof hij ze voor het eerst ziet.",
      "\"Misschien vertrouw ik mezelf meer dan ik denk,\" zegt hij, half tegen jou, half tegen zichzelf. Hij vertrekt zonder spreuk, alleen met het bewijs dat al die tijd al bij hem lag."
    ],
    onEnter: (s) => { s.gloed += 15; s.spreuken.push("Geen spreuk: alleen de vraag wanneer het wél goed voelde."); tag(s,'aanwezigheid'); },
    ending: true
  },

});

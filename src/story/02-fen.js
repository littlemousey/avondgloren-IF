// Avondgloren · Dag 1: Fen de kraai
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  dag1_intro: {
    day: "Dag 1 &middot; Fen",
    label: "Een bekende paniek",
    text: [
      "Het is Fen, de kraai van de open plek. Hij komt niet zozeer binnenvliegen als wel naar binnen tuimelen, met een wervelwolk van natte, goudbruine blaadjes in zijn kielzog die meteen over de vloer verspreid raken. \"Ik heb het weer gedaan,\" kondigt hij aan, alsof je het al zou moeten weten. \"Mijn wintervoorraad. Verstopt op de meest geniale plek ooit. Zo geniaal dat ik hem nu zelf niet meer kan vinden.\"",
      "Hij ijsbeert over de toonbank, veren alle kanten op. \"De eerste sneeuw komt eraan! Ergens onder een geniale hoop bladeren liggen mijn wintervoorraden te verrotten en ik weet niet meer waar!\""
    ],
    choices: [
      { text: "Zet een kop kruidenthee met kamille", next: "fen_drank_thee", leaf:"☕" },
      { text: "Warm de amandelmelk met kaneel op", next: "fen_drank_amandel", leaf:"☕" },
      { text: "Warm de sojamelk met honing en nootmuskaat op", next: "fen_drank_soja", leaf:"☕" }
    ]
  },

  fen_drank_thee: {
    label: "Kruidenthee",
    text: [ "Fen neemt gehaast een slok, verbrandt meteen zijn tong en drinkt onverstoorbaar door. \"Lekker,\" piept hij, ogen tranend van de hitte en misschien ook een beetje van de paniek." ],
    choices: [ { text: "Ga verder", next: "fen_na_drank", leaf:"→" } ]
  },
  fen_drank_amandel: {
    label: "Amandelmelk met kaneel",
    text: [ "Fen ruikt eraan, kijkt achterdochtig naar de kaneel en drinkt het dan in één teug leeg. \"Zoet genoeg om iets te vergeten,\" merkt hij droogjes op, \"of juist te onthouden. We zien wel welke van de twee het wordt.\"" ],
    choices: [ { text: "Ga verder", next: "fen_na_drank", leaf:"→" } ]
  },
  fen_drank_soja: {
    label: "Sojamelk met honing en nootmuskaat",
    text: [ "Fen bekijkt het schuimlaagje wantrouwig, alsof het een boodschap voor hem verbergt. Na de eerste slok ontspannen zijn veren zichtbaar. \"Oké,\" geeft hij toe. \"Dit helpt al een beetje.\"" ],
    choices: [ { text: "Ga verder", next: "fen_na_drank", leaf:"→" } ]
  },

  fen_na_drank: {
    label: "Met de kop nog dampend",
    text: [ "Met de kop nog dampend tussen zijn veren laat Fen zich eindelijk op het bankje zakken." ],
    choices: [
      { text: "\"Rustig. Vertel me precies wat je je nog wél herinnert.\"", next: "fen_ask", leaf:"🗨" },
      { text: "Loop meteen naar de plank", next: "fen_spreuk", leaf:"→" }
    ]
  },

  fen_ask: {
    label: "Terugspoelen",
    text: [
      "Fen sluit zijn ogen, wat hem duidelijk moeite kost. \"Er was... een boom met een gespleten tak. En het rook er naar iets zoets. En ik dacht nog: dit onthoud ik nooit, dus ik verstop het extra goed.\" Hij kijkt je hulpeloos aan. \"Dat was, achteraf gezien, geen goed plan.\"",
      "Het geheugen is er dus nog wel, ergens. Alleen niet toegankelijk. Dat is iets heel anders dan compleet vergeten."
    ],
    onEnter: (s) => { s.flags.fenGevraagd = true; },
    choices: [ { text: "Loop naar de plank en kies iets", next: "fen_spreuk", leaf:"→" } ]
  },

  fen_spreuk: {
    label: "Bij de plank",
    text: [
      "Je kijkt naar de potten. Fen kijkt naar jou, met de blik van iemand die nu werkelijk alles zou proberen, inclusief dingen die niet bestaan."
    ],
    dynamicChoices: (s) => {
      const opts = [];
      if (s.flags.kentIngredienten){
        opts.push({ text: "Eikengal-inkt: bind de herinnering vast aan een veer die hij bij zich draagt", next: "fen_eind_inkt", leaf:"❦" });
        opts.push({ text: "Spiegeldauw: laat met een druppel het laatste heldere moment herleven", next: "fen_eind_dauw", leaf:"❦" });
      } else {
        opts.push({ text: "Pak iets dat naar helderheid ruikt, en hoop maar", next: "fen_eind_gok", leaf:"?" });
      }
      opts.push({ text: "Geen spreuk: speel gewoon samen hardop de ochtend van toen na", next: "fen_eind_praten", leaf:"✦" });
      return opts;
    }
  },

  fen_eind_inkt: {
    label: "Eikengal-inkt",
    text: [
      "Je laat Fen zijn eigen herinnering influisteren terwijl je hem met eikengal-inkt op een veer schrijft, niet de plek zelf maar het gevoel erbij: gespleten tak, geur van iets zoets, trots op zijn eigen sluwheid.",
      "\"Draag deze bij je,\" zeg je. \"Bij de juiste boom begint hij te kriebelen.\" Fen bekijkt de veer wantrouwig, alsof hij hem op heterdaad wil betrappen op niet-werken.",
      "Hij vliegt weg, veer stevig vastgeklemd, en je hoort hem in de verte al roepen: \"HIJ KRIEBELT. HIJ KRIEBELT ECHT.\" De lantaarn flakkert geamuseerd."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Eikengal-veer: een herinnering die kriebelt bij de juiste plek."); tag(s,'geheugen'); },
    ending: true
  },

  fen_eind_dauw: {
    label: "Spiegeldauw",
    text: [
      "Je laat één druppel spiegeldauw op zijn snavelpunt vallen. Even wordt zijn blik glazig. Dan schiet zijn kop omhoog. \"De beuk! De beuk met de gespleten tak, naast de plek waar het naar honingzwam ruikt!\"",
      "\"Dat had je zelf ook geweten,\" zeg je, \"met een minuutje stilte.\" \"Ja, maar dit was sneller,\" zegt Fen, alweer bij de deur.",
      "Hij vliegt rakelings langs de avondlantaarn naar buiten, te opgewonden om te bedanken, wat voor Fen eigenlijk een compliment is."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Spiegeldauw: één druppel om een heldere seconde terug te halen."); tag(s,'helderheid'); },
    ending: true
  },

  fen_eind_gok: {
    label: "Een gok",
    text: [
      "Je kent de kast nog niet goed genoeg om er slim gebruik van te maken, dus je pakt iets dat vaag naar dennennaald ruikt en geeft het hem mee, met een blik die meer hoop dan vertrouwen uitstraalt.",
      "Fen ruikt eraan, niest en zegt dan: \"Weet je, daar moest ik ineens weer aan die ochtend denken.\" Of het de geur is of gewoon het feit dat iemand meedacht, blijft onduidelijk.",
      "Hij vliegt in elk geval opgewekter weg dan hij binnenkwam, wat voor vandaag genoeg lijkt."
    ],
    onEnter: (s) => { s.gloed += 10; s.spreuken.push("Een gok met dennengeur: niet feilloos, maar het hielp."); tag(s,'onzeker'); },
    ending: true
  },

  fen_eind_praten: {
    label: "Gewoon naspelen",
    text: [
      "Je slaat de plank helemaal over. In plaats daarvan laat je Fen de ochtend van het verstoppen naspelen, stap voor stap, vanaf het moment dat hij wakker werd tot het moment van geniale trots.",
      "Halverwege zijn eigen imitatie van zichzelf ('en toen dacht ik: DIT vergeet ik nooit, ha!') houdt hij ineens stil. \"De beuk. Het was de beuk.\"",
      "\"Zie je,\" zeg je. \"Je hoefde alleen maar jezelf serieus genoeg te nemen om het opnieuw te doorlopen.\" Fen kijkt je aan alsof je zojuist iets diepzinnigs hebt gezegd, in plaats van iets voor de hand liggends."
    ],
    onEnter: (s) => { s.gloed += 15; s.spreuken.push("Geen spreuk: alleen de ochtend hardop naspelen."); tag(s,'aanwezigheid'); },
    ending: true
  },

});

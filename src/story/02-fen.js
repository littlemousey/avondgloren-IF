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
      "Je kijkt naar de potten. Fen kijkt naar jou, met de blik van iemand die nu werkelijk alles zou proberen, inclusief dingen die niet bestaan.",
      "Je zucht, zo zacht dat Fen het niet hoort. Oma zou niet eens hebben hoeven kijken: één poot naar de plank, deksel eraf, een snufje van dit en een druppel van dat, en Fen zou alweer buiten hebben gestaan voor zijn kop was afgekoeld. Jij staat hier en weet niet eens bij welke pot je moet beginnen."
    ],
    dynamicChoices: (s) => {
      const opts = [];
      if (s.flags.kentIngredienten){
        opts.push({ text: "Eikengal-inkt: bind de herinnering vast aan een veer die hij bij zich draagt", next: "fen_inkt_1", leaf:"❦" });
        opts.push({ text: "Spiegeldauw: laat met een druppel het laatste heldere moment herleven", next: "fen_dauw_1", leaf:"❦" });
      } else {
        opts.push({ text: "Pak iets dat naar helderheid ruikt, en hoop maar", next: "fen_eind_gok", leaf:"?" });
      }
      opts.push({ text: "Geen spreuk: speel gewoon samen hardop de ochtend van toen na", next: "fen_eind_praten", leaf:"✦" });
      return opts;
    }
  },

  fen_inkt_1: {
    label: "De inkt klaarmaken",
    text: [
      "Je haalt de pot eikengal-inkt van de plank. Hij is zwaarder dan je had verwacht, en de inkt is zo ingedikt dat hij meer op stroop lijkt dan op iets waarmee je kunt schrijven. Fen houdt zijn kop schuin. \"Hoort dat zo?\" \"Natuurlijk,\" zeg je, met meer overtuiging dan je hebt.",
      "Oma deed er iets mee voor ze ging schrijven, dat weet je zeker. Alleen niet meer wát."
    ],
    choices: [
      { text: "Schud de pot stevig door elkaar", next: "fen_inkt_oma", leaf:"❦" },
      { text: "Rol de pot langzaam tussen je poten tot hij warm wordt", next: "fen_inkt_2", leaf:"❦" }
    ]
  },

  fen_inkt_oma: {
    label: "Och kind",
    text: [
      "Je schudt. De inkt klotst en er komen kleine belletjes naar boven. Ergens achter in je hoofd klakt iemand met haar tong.",
      oma("Och kind, leren ze dat niet meer op school? Eikengal-inkt schud je niet. Dan komen er luchtbelletjes in de herinnering, en dan weet hij straks wel dát het een boom was, maar niet meer welke."),
      "Je zet de pot neer, wacht tot de belletjes verdwenen zijn en rolt hem dan alsnog langzaam tussen je poten, zoals zij dat deed. Fen doet heel beleefd alsof hij niets heeft gezien."
    ],
    choices: [ { text: "Vraag Fen om een veer", next: "fen_inkt_2", leaf:"→" } ]
  },

  fen_inkt_2: {
    label: "Een veer",
    text: [
      "Onder je poten wordt de inkt warm en soepel, en ineens ruikt hij naar natte herfstbladeren. Fen trekt, na enig aandringen, een veer uit zijn vleugel en houdt hem je met tegenzin voor. \"Niet mijn mooiste,\" waarschuwt hij. \"Die heb ik zelf nodig.\""
    ],
    choices: [ { text: "Pak een pen en laat Fen fluisteren wat hij nog weet", next: "fen_eind_inkt", leaf:"❦" } ]
  },

  fen_dauw_1: {
    label: "Spiegeldauw",
    text: [
      "De spiegeldauw staat in het kleinste flesje van de plank, helemaal achteraan, alsof het niet gevonden wil worden. Als je het tegen het licht van het luik houdt, zie je je eigen gezicht erin, een beetje vervormd en met de hoed scheef.",
      "Oma gebruikte het bijna nooit. " + oma("Te sterk spul voor kleine zorgen,") + " zei ze dan. Maar een kwijtgeraakte wintervoorraad is voor Fen geen kleine zorg, en eerlijk gezegd weet je ook niet goed waar je anders moet beginnen."
    ],
    choices: [ { text: "Houd het flesje in je poten tot het glas warm is", next: "fen_dauw_2", leaf:"❦" } ]
  },

  fen_dauw_2: {
    label: "Hoeveel druppels?",
    text: [
      "Het glas wordt warm en de dauw begint zachtjes te glanzen. Fen zit al klaar met zijn snavel omhoog en zijn ogen dicht, alsof hij bij de dokter is. Nu nog de druppels. Of de druppel. Op het etiket staat niets."
    ],
    choices: [
      { text: "Doe er voor de zekerheid drie op", next: "fen_dauw_oma", leaf:"❦" },
      { text: "Laat er één op de punt van zijn snavel vallen", next: "fen_eind_dauw", leaf:"❦" }
    ]
  },

  fen_dauw_oma: {
    label: "Kind toch",
    text: [
      "Je kantelt het flesje al als je het hoort.",
      oma("Drie? Kind toch. Met drie druppels ziet hij niet alleen die ene ochtend terug, maar ook elke keer dat hij als kuiken uit het nest is gevallen. Eén is genoeg. Het is niet voor niets zo'n klein flesje."),
      "Je kijkt nog eens naar het etiket. Daar staat nu, in piepkleine letters, een 1. Je zou zweren dat die er net nog niet stond."
    ],
    choices: [ { text: "Laat één druppel vallen", next: "fen_eind_dauw", leaf:"❦" } ]
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
      "Achter in je hoofd hoor je iemand snuiven. " + oma("Dennennaald, kind? Dat is voor verstopte neuzen, niet voor verstopte noten."),
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

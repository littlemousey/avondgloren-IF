// Avondgloren · Dag 3: Louise & Levi
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  dag3_intro: {
    day: "Dag 3 &middot; Louise &amp; Levi",
    label: "Twee stemmen tegelijk",
    text: [
      "Het stof van de hoed vegen kost vandaag twee tellen langer dan gewoonlijk: er zit een spinnenweb verstrikt in de rand. Heel even lijkt het alsof oma erom zou hebben gelachen. Buiten giert de wind extra hard door de beukenrij, en met elke vlaag kletteren er eikels tegen de luiken.",
      "Op je oma's oude schrijftafel ligt, tussen twee potten distelpluis, een dun vergeeld blaadje dat je eerder nog niet was opgevallen. Je stopt het in de la voor later, want er wordt op de deur gebonkt, aan twee kanten tegelijk, wat meestal maar één ding betekent: Louise en Levi.",
      "Het zijn de eekhoorntweeling van de beukenrij, en ze praten allebei tegelijk door elkaar heen zodra de deur opengaat, met een paar meegewaaide blaadjes die achter hen naar binnen dwarrelen. \"Zij heeft het grootste deel van de voorraad genomen...\" \"Hij heeft niet eens geholpen met verzamelen, dus...\" \"Ik heb wél geholpen, ik heb alleen niet geteld...\""
    ],
    onEnter: (s) => { unlockNote(s, 'n1', "Uit een geel geworden bladzijde: 'Het gaat nooit om de juiste kruiden. Het gaat om de juiste vraag stellen voordat je iets in de pot gooit.'"); },
    choices: [
      { text: "Zet twee koppen kruidenthee met kamille", next: "le_drank_thee", leaf:"☕" },
      { text: "Warm amandelmelk met kaneel op, voor allebei", next: "le_drank_amandel", leaf:"☕" },
      { text: "Zet één grote kop warme sojamelk met honing, om te delen", next: "le_drank_soja", leaf:"☕" }
    ]
  },

  le_drank_thee: {
    label: "Kruidenthee",
    text: [ "Je zet twee koppen kamillethee neer. Louise slaat de hare bijna meteen achterover; Levi blaast eerst drie keer voorzichtig, wat Louise zichtbaar irriteert." ],
    choices: [ { text: "Ga verder", next: "le_na_drank", leaf:"→" } ]
  },
  le_drank_amandel: {
    label: "Amandelmelk met kaneel",
    text: [ "Bij de geur van kaneel zwijgen ze allebei even. \"Net als vroeger,\" mompelt Levi. \"Toen jullie nog niet ruzieden,\" vul jij aan, en niemand van de twee spreekt dat tegen." ],
    choices: [ { text: "Ga verder", next: "le_na_drank", leaf:"→" } ]
  },
  le_drank_soja: {
    label: "Sojamelk met honing",
    text: [ "Je zet expres één grote kop tussen hen in, in plaats van twee kleine. Ze kijken er allebei achterdochtig naar, tot de honger het wint van de trots, en ze om beurten slurpen zonder dat iemand het hardop afspreekt." ],
    choices: [ { text: "Ga verder", next: "le_na_drank", leaf:"→" } ]
  },

  le_na_drank: {
    label: "Even stil",
    text: [ "Met warme koppen tussen hun poten zijn ze allebei, heel even, stil genoeg om echt te luisteren." ],
    choices: [
      { text: "\"Louise, jij eerst. Levi, wachten.\"", next: "le_louise_eerst", leaf:"🗨" },
      { text: "\"Levi, jij eerst. Louise, wachten.\"", next: "le_levi_eerst", leaf:"🗨" }
    ]
  },

  le_louise_eerst: {
    label: "Louise's kant",
    text: [
      "Louise haalt diep adem, duidelijk opgelucht dat ze als eerste mag. \"Ik heb drie weken lang elke ochtend vroeg verzameld, terwijl hij nog lag te slapen. Dan is het toch niet gek dat ik meer heb?\"",
      "Ze klinkt minder boos dan moe, alsof ze dit al veel vaker heeft moeten uitleggen, aan zichzelf misschien wel het meest."
    ],
    choices: [ { text: "Luister nu naar Levi", next: "le_midden", leaf:"→" } ]
  },

  le_levi_eerst: {
    label: "Levi's kant",
    text: [
      "Levi kijkt eerst zijn zus aan voor hij begint, alsof hij toestemming vraagt om ook iets te mogen voelen. \"Ik zoek langzamer uit, dat is alles. Ik controleer of noten wel goed zijn voor ik ze meeneem. Dat telt toch ook mee, ook al gaat het niet snel?\"",
      "Pas dan besef je het: hij klinkt niet lui. Hij klinkt vooral bang dat 'langzaam' hetzelfde is als 'nutteloos'."
    ],
    choices: [ { text: "Luister nu naar Louise", next: "le_midden", leaf:"→" } ]
  },

  le_midden: {
    label: "Twee kanten van dezelfde voorraad",
    text: [
      "Nu je allebei hebt gehoord, wordt duidelijk dat dit geen ruzie is over wie het beste werk levert, maar over wie zich het meest gezien voelt: Louise, die vroeg opstaat en bang is dat niemand het merkt; Levi, die zorgvuldig is en bang is dat niemand daar waarde aan hecht.",
      "Ze zwijgen allebei, wat voor deze twee bijna een prestatie op zich is.",
      "Je zou willen dat oma hier stond. Zij had de twee met één opgetrokken wenkbrauw stilgekregen en daarna een oplossing uit haar mouw getoverd, alsof ze die daar speciaal voor vandaag had bewaard. Jij hebt alleen een half idee en de hoop dat de andere helft vanzelf komt."
    ],
    choices: [
      { text: "Vlecht een band van spinrag voor hen samen", next: "le_spinrag_1", leaf:"❦" },
      { text: "Geen spreuk: laat hen samen hardop tellen, om beurten", next: "le_eind_praten", leaf:"✦" }
    ]
  },

  le_spinrag_1: {
    label: "De leverancier",
    text: [
      "Spinrag staat niet in een pot. Het hangt in de hoek boven de voorraadplank, waar een oude kruisspin het al jaren voor de winkel spint. Oma noemde haar 'de leverancier'. Een andere naam heb je haar nooit horen geven.",
      "Je hebt er een draad van nodig. Louise en Levi kijken allebei toe, en voor het eerst vandaag zijn ze het ergens over eens: ze willen zien hoe dit afloopt."
    ],
    choices: [
      { text: "Trek snel een draad los, voor de spin het doorheeft", next: "le_spinrag_oma", leaf:"❦" },
      { text: "Vraag de spin eerst beleefd om een draad", next: "le_spinrag_2", leaf:"❦" }
    ]
  },

  le_spinrag_oma: {
    label: "Eerst vragen",
    text: [
      "Je poot is al halverwege als de spin één poot optilt. Eén maar. Het is genoeg.",
      oma("Kind. Je trekt toch ook niet zomaar iemands trui uit? Eerst vragen. Altijd eerst vragen. En daarna bedanken, ook al zegt ze nooit iets terug."),
      "Je trekt je poot terug, schraapt je keel en vraagt het zo beleefd als je kunt, met twee eekhoorns achter je die hun gegiechel nauwelijks binnen kunnen houden. Het is de eerste keer vandaag dat ze om hetzelfde lachen."
    ],
    choices: [ { text: "Wacht op de spin", next: "le_spinrag_2", leaf:"→" } ]
  },

  le_spinrag_2: {
    label: "Een draad",
    text: [
      "Na een lange, keurende stilte laat de spin een draad zakken. Hij is zo dun dat je hem alleen ziet als het licht erop valt, en sterker dan hij eruitziet. Je bedankt haar. Ze reageert niet, wat bij spinnen waarschijnlijk 'graag gedaan' betekent."
    ],
    choices: [ { text: "Vlecht de draad tot twee armbandjes", next: "le_eind_spinrag", leaf:"❦" } ]
  },

  le_eind_spinrag: {
    label: "Spinragdraad",
    text: [
      "Je vlecht een dunne spinragdraad tot twee armbandjes, één voor elk, verbonden door een enkele draad die knapt zodra een van beiden te ver bij de ander vandaan blijft, niet als straf maar als herinnering om terug te komen.",
      "\"Het is geen eerlijkheidsspreuk,\" leg je uit. \"Ik kan niet toveren dat jullie evenveel hebben gedaan. Het is een 'kom terug en praat'-spreuk.\"",
      "Louise en Levi bekijken hun bandjes, dan elkaar en lopen samen de deur uit, nog steeds pratend, alleen zachter nu, om beurten in plaats van tegelijk."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Spinragdraad-band: een herinnering om terug te komen en te praten."); tag(s,'harmonie'); },
    ending: true
  },

  le_eind_praten: {
    label: "Samen tellen",
    text: [
      "Je slaat de plank over en haalt in plaats daarvan een schaaltje eikels tevoorschijn. \"Tel om beurten,\" zeg je. \"Hardop. Ik wil horen hoe het klinkt als jullie allebei evenveel aan het woord zijn.\"",
      "Het begint stijfjes (\"één\", \"twee\", \"drie\"), maar ergens rond de twintig begint Levi te lachen om zijn eigen telfoutje, en Louise lacht mee in plaats van te corrigeren.",
      "Ze vertrekken zonder spreuk, met een schaaltje geleende eikels en, voor het eerst in weken, een gesprek dat niet door elkaar heen loopt."
    ],
    onEnter: (s) => { s.gloed += 15; s.spreuken.push("Geen spreuk: alleen samen hardop tellen."); tag(s,'aanwezigheid'); },
    ending: true
  },

});

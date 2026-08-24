// Avondgloren · Openingsochtend
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  start: {
    day: "Vroege herfst",
    label: "Voor openingstijd",
    text: [
      "Buiten hangt een lichte nevel over Amberwoud, en de wind jaagt goudbruine blaadjes tegen de ruiten. Binnen is het stil, op het zachte getik van de avondlantaarn na. Die hangt aan een ketting boven de toonbank, precies zoals hij daar al hing toen je oma de winkel nog runde. Hij dooft nooit helemaal, maar gloeit sinds gisteravond dof en laag, alsof hij wacht tot iemand hem aanspoort tot iets warmers. Je veegt het stof van de hoed (oma's hoed, eigenlijk, nooit helemaal de jouwe geworden) en zet hem recht. Hij zakt toch weer scheef. Even denk je aan haar, zoals elke ochtend, en dan kijk je de winkel rond, en naar de bladeren die zich al tegen de drempel hebben opgehoopt.",
      "Je hebt een paar minuten voor de eerste klant voor de deur staat. Wat doe je eerst?"
    ],
    choices: [
      { text: "Sus de avondlantaarn tot een goede gloed", next: "hearth", leaf:"✦" },
      { text: "Stal de nieuwe voorraad distelpluis en eikengal-inkt uit", next: "herbs", leaf:"❦" },
      { text: "Doe gewoon open: er wordt al ongeduldig op de stoep gewacht", next: "deur_vroeg", leaf:"🚪" }
    ]
  },

  hearth: {
    label: "De avondlantaarn",
    text: [
      "Je vouwt je pootjes om de lantaarn boven de toonbank en blaast er zachtjes tegenaan, niet om de vlam aan te wakkeren, maar om te laten weten dat je er bent, zoals je oma het altijd deed. De lantaarn sputtert, doet quasi-beledigd, en zakt dan in een warme, gelijkmatige gloed.",
      "\"Zo,\" zeg je. Hij tikt eenmaal, tevreden met zichzelf."
    ],
    onEnter: (s) => { s.flags.lanternKalm = true; s.gloed += 5; },
    choices: [ { text: "Loop naar de deur en draai het bordje om", next: "opening", leaf:"→" } ]
  },

  herbs: {
    label: "De voorraadplank",
    text: [
      "Je werkt de krat door: distelpluis, zilverig en licht als adem, goed om dingen buiten te houden die er niet horen te zijn: nachtmerries, tocht, pech. Ernaast eikengal-inkt, donker en traag drogend, gebruikt om een herinnering vast te leggen zodat die niet kan wegglippen.",
      "Je zet de potten op een rijtje voor het raam en voelt je, heel even, precies zo bekwaam als je oma altijd zei dat je zou worden."
    ],
    onEnter: (s) => { s.flags.kentIngredienten = true; s.gloed += 5; },
    choices: [ { text: "Loop naar de deur en draai het bordje om", next: "opening", leaf:"→" } ]
  },

  deur_vroeg: {
    label: "Een vroege klop",
    text: [
      "De lantaarn is amper aan en je hebt nog niets uitgestald, maar buiten staat iemand ongeduldig te ijsberen, en het voelt onaardig om diegene op formaliteiten te laten wachten.",
      "Je doet open nog voordat het bordje is omgedraaid."
    ],
    onEnter: (s) => { s.gloed += 2; },
    choices: [ { text: "Kijk wie het is", next: "dag1_intro", leaf:"→" } ]
  },

  opening: {
    label: "Het bordje omdraaien",
    text: [
      "Je draait het houten bordje naar OPEN. Het klikt tegen de deurpost, een geluid dat het hele bos lijkt te herkennen.",
      "Je hoeft niet lang te wachten."
    ],
    choices: [ { text: "Kijk wie er is", next: "dag1_intro", leaf:"→" } ]
  },

});

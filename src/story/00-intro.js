// Avondgloren · Introductie
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  intro_1: {
    label: "Avondgloren",
    text: [
      "Toen je oma vorige lente overleed, liet ze je haar winkel na, en daarmee ook een eigenzinnige lantaarn en een voorraadplank waarvan alleen zij precies wist wat er in de potten zat. En dan zijn er nog de vaste klanten, die hier al generaties over de vloer komen.",
      "Avondgloren is namelijk geen gewone winkel. Bezoekers uit heel Amberwoud komen er niet voor brood of naalden, maar voor iets wat je niet zomaar vraagt: een beetje moed voor een spannend moment, een spreuk tegen een nare droom of soms gewoon iemand om tegen aan te praten.",
      "Jij bent de nieuwe eigenaar. Oma's aantekeningen zitten nog overal tussen de potten verstopt (je hebt er tot nu toe maar een paar gevonden) en haar tovenaarshoed zakt tot over je muizenoren zodra je hem opzet. Net een maatje te groot, maar je zet hem toch op. Op de een of andere manier voel je je er zekerder door."
    ],
    choices: [ { text: "Ontgrendel de voordeur", next: "intro_2", leaf:"→" } ]
  },

  intro_2: {
    label: "Een nieuw seizoen",
    text: [
      "Het is nu een paar maanden later, begin herfst. Je kent de winkel inmiddels aardig. Sommige potten staan er nog altijd zonder etiket bij, en 's ochtends blijft de lantaarn soms dof tot je hem voorzichtig toespreekt.",
      "Vandaag is de eerste echt koude ochtend van het seizoen. Je adem hangt in wolkjes voor je gezicht als je de luiken opent. Op de bladeren voor de deur ligt een dunne laag rijp. Ergens buiten valt met een zacht getik een eikel tussen de wortels."
    ],
    choices: [ { text: "Begin de dag", next: "start", leaf:"→" } ]
  },

});

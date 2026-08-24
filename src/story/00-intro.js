// Avondgloren · Introductie
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  intro_1: {
    label: "Avondgloren",
    text: [
      "Toen je oma vorige lente overleed, liet ze je niet alleen haar winkel na. Ze liet je ook een eigenzinnige lantaarn na, een plank vol kruiden met een eigen willetje, en klanten die al generaties lang de weg naar de oude eik weten te vinden. De lantaarn dooft trouwens nooit helemaal. Hij gloeit dof of helder, naargelang zijn humeur.",
      "Avondgloren is namelijk geen gewone winkel. Bezoekers uit heel Amberwoud komen er niet voor brood of naalden, maar voor iets kleiners: een beetje moed voor een spannend moment, een spreuk tegen een nare droom, of soms gewoon een reden om even niet alleen te zijn.",
      "Jij bent de nieuwe eigenaar. Een muis, net als je oma was, met haar aantekeningen nog overal tussen de potten verstopt (je hebt er tot nu toe slechts enkele gevonden) en met haar tovenaarshoed op je hoofd. Die is eigenlijk een maatje te groot voor je, maar je zet hem koppig toch op. Op de een of andere manier voel je je er zekerder door."
    ],
    choices: [ { text: "Ontgrendel de voordeur", next: "intro_2", leaf:"→" } ]
  },

  intro_2: {
    label: "Een nieuw seizoen",
    text: [
      "Het is nu een paar maanden later, begin herfst. Je kent de winkel inmiddels aardig, al wil de lantaarn 's ochtends soms nog steeds niet meteen opleven tot een warme gloed (dan moet je hem net als vroeger voorzichtig toespreken), en staan sommige potten er nog altijd zonder etiket bij.",
      "Vandaag is de eerste echt koude ochtend van het seizoen. Je adem hangt in wolkjes voor je gezicht als je de luiken opent, er ligt een dunne laag rijp op de bladeren voor de deur, en de wind rukt de laatste goudbruine blaadjes van de takken. Ergens buiten valt met een zacht getik een eikel tussen de wortels."
    ],
    choices: [ { text: "Begin de dag", next: "start", leaf:"→" } ]
  },

});

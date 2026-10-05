// Avondgloren · Dag 5: Barry de egel
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  dag5_intro: {
    day: "Dag 5 &middot; Barry",
    label: "Wakker gehouden",
    text: [
      "De hoed heeft vandaag amper stof nodig, gisteren nog grondig gedaan, maar je zet hem toch recht, uit gewoonte. Heel even denk je aan oma's laatste winter, voor je de gedachte wegduwt en de dag begint. Buiten is de wind eindelijk gaan liggen, maar hij heeft een dikke laag losse bladeren voor de drempel achtergelaten, goud en bruin door elkaar.",
      "Terwijl je de toonbank afveegt, valt er een tweede blaadje uit de kier van een oude plank, ook in oma's handschrift. Je leest het twee keer voor je het wegstopt bij het eerste.",
      "Buiten klinkt geritsel dat te onrustig is voor gewoon lopen door bladeren. Het is Barry, de egel van de heuvelrand, die zich er dwars doorheen worstelt, stekels alle kanten op en ogen die eruitzien alsof ze al dagen niet echt dicht zijn geweest."
    ],
    onEnter: (s) => { unlockNote(s, 'n2', "'De moeilijkste spreuken zijn de spreuken die niemand kan zien. Een gedachte die je met iemand deelt. Dat is ook magie, al staat het in geen enkel receptenboek.'"); },
    choices: [ { text: "Laat Barry binnen", next: "barry_arrival", leaf:"→" } ]
  },

  barry_arrival: {
    label: "Een bezoeker",
    text: [
      "Barry's stekels staan alle kanten op, zijn mandje met paddenstoelen voor de markt klemt hij zo stevig vast dat zijn pootjes ervan trillen. \"Ik blijf dromen over de brand,\" zegt hij, zonder omhaal, alsof hij de zin al honderd keer heeft geoefend. \"Die van afgelopen winter. Ik slaap niet meer goed sindsdien.\"",
      "Hij kijkt niet helemaal naar je. \"Is er... iets voor? Voordat ik straks op de markt sta te slapen terwijl ik rechtop sta?\""
    ],
    choices: [
      { text: "Zet een kop kruidenthee met kamille", next: "barry_drank_thee", leaf:"☕" },
      { text: "Warm de amandelmelk met kaneel op", next: "barry_drank_amandel", leaf:"☕" },
      { text: "Warm de sojamelk met honing en nootmuskaat op", next: "barry_drank_soja", leaf:"☕" }
    ]
  },

  barry_drank_thee: {
    label: "Kruidenthee",
    text: [ "Barry drinkt de thee in kleine slokjes, zijn stekels langzaam plat tegen zijn rug zakkend naarmate de kop leger wordt." ],
    choices: [ { text: "Ga verder", next: "barry_na_drank", leaf:"→" } ]
  },
  barry_drank_amandel: {
    label: "Amandelmelk met kaneel",
    text: [ "Bij de eerste slok sluit hij heel even zijn ogen. \"Dit rook mijn moeder ook altijd,\" zegt hij, en het klinkt niet verdrietig. Gewoon zacht." ],
    choices: [ { text: "Ga verder", next: "barry_na_drank", leaf:"→" } ]
  },
  barry_drank_soja: {
    label: "Sojamelk met honing en nootmuskaat",
    text: [ "Hij houdt de kop lang vast zonder te drinken, gewoon om de warmte te voelen. Als hij eindelijk drinkt, is het bijna een zucht." ],
    choices: [ { text: "Ga verder", next: "barry_na_drank", leaf:"→" } ]
  },

  barry_na_drank: {
    label: "Iets rustiger",
    text: [ "Zijn stekels liggen al iets platter dan toen hij binnenkwam." ],
    choices: [
      { text: "\"Ga zitten. Vertel me wat er in de droom gebeurt.\"", next: "barry_ask", leaf:"🗨" },
      { text: "Loop meteen naar de plank", next: "barry_spreuk", leaf:"→" }
    ]
  },

  barry_ask: {
    label: "Luisteren",
    text: [
      "Barry trekt zich iets strakker op. \"Het is niet echt de brand zelf. Het is dat ik in de droom de anderen niet kan vinden. Iedereen is er gewoon niet, en ik zoek, en ik weet best dat ze in het echt gewoon in orde zijn. Ze zijn in orde,\" voegt hij toe, alsof hij zichzelf overtuigt.",
      "Geen angst dus voor het vuur zelf. Angst om er alleen voor te staan. Dat is een andere soort spreuk dan je eerst dacht."
    ],
    onEnter: (s) => { s.flags.barryGevraagd = true; },
    choices: [ { text: "Loop naar de plank en kies iets", next: "barry_spreuk", leaf:"→" } ]
  },

  barry_spreuk: {
    label: "Bij de plank",
    text: [
      "Je kijkt naar de potten. Barry kijkt liever naar de gloed van de avondlantaarn dan naar jou, makkelijker om op iets te hopen dat geen gezicht heeft.",
      "Je wacht op de zucht die meestal komt, het moment waarop je bedenkt hoe oma dit in een handomdraai zou hebben opgelost. Hij komt maar half. Misschien twijfelde zij ook wel, elke keer opnieuw. Misschien liet ze het alleen nooit zien."
    ],
    dynamicChoices: (s) => {
      const opts = [];
      if (s.flags.kentIngredienten){
        opts.push({ text: "Distelpluis: houd met een bescherming de brand-droom er helemaal buiten", next: "barry_distel_1", leaf:"❦" });
        opts.push({ text: "Eikengal-inkt: bind een veilige herinnering vast om eerst te landen", next: "barry_inkt_1", leaf:"❦" });
      } else {
        opts.push({ text: "Pak iets dat er warmst uitziet, en hoop maar", next: "barry_eind_gok", leaf:"?" });
      }
      opts.push({ text: "Geen spreuk: zit gewoon een minuut samen bij de lantaarn", next: "barry_eind_praten", leaf:"✦" });
      return opts;
    }
  },

  barry_distel_1: {
    label: "Distelpluis",
    text: [
      "De pot distelpluis staat nog precies zoals je hem die eerste herfstochtend hebt neergezet: met het deksel naar beneden. Je draait hem om. Het pluis daarbinnen beweegt al, alsof het voelt dat er iets gaat gebeuren.",
      "Barry kijkt toe met zijn mandje op schoot. Achter hem staat een luik open, en er waait een fris herfstbriesje de winkel in."
    ],
    choices: [
      { text: "Draai meteen het deksel los, Barry zit te wachten", next: "barry_distel_oma", leaf:"❦" },
      { text: "Doe eerst het luik dicht", next: "barry_distel_2", leaf:"❦" }
    ]
  },

  barry_distel_oma: {
    label: "Kind toch",
    text: [
      "Je draait het deksel los. Op hetzelfde moment waait er een vlaag door het open luik, en een wolkje distelpluis zweeft vrolijk omhoog, tussen de wortels boven je hoofd.",
      oma("Kind toch. Distelpluis en tocht, dat zijn oude vrienden. Straks zit het in zijn stekels, in Fens veren en in de soep van de familie Grijs, overal behalve in je charme. Eerst het luik dicht."),
      "Je doet het luik dicht en vangt met je hoed zoveel pluis uit de lucht als je kunt. Eindelijk is die te grote hoed ergens goed voor. Barry helpt mee, snuit omhoog, en voor het eerst sinds hij binnenkwam ziet hij er bijna vrolijk uit."
    ],
    choices: [ { text: "Kijk wat je nog overhebt", next: "barry_distel_2", leaf:"→" } ]
  },

  barry_distel_2: {
    label: "Een charme binden",
    text: [
      "Met het luik dicht is het stil in de winkel, op het tikken van de lantaarn na. Het distelpluis ligt in je poot, zo licht dat je het alleen voelt omdat het kriebelt.",
      "Oma bond zoiets altijd vast met iets van degene voor wie het bedoeld was, herinner je je. Je vraagt Barry om één stekel. Hij geeft hem zonder aarzelen."
    ],
    choices: [ { text: "Bind het pluis met de stekel tot een charme", next: "barry_eind_distel", leaf:"❦" } ]
  },

  barry_inkt_1: {
    label: "Eikengal-inkt",
    text: [
      "Je pakt de pot eikengal-inkt en rolt hem langzaam tussen je poten tot hij warm wordt. Schudden doe je niet, zoveel weet je inmiddels. De inkt wordt soepel en ruikt naar natte herfstbladeren.",
      "Nu heb je nog iets nodig om op te schrijven."
    ],
    choices: [
      { text: "Pak een vel van het mooie papier uit oma's schrijftafel", next: "barry_inkt_oma", leaf:"❦" },
      { text: "Scheur een reepje bast van het berkenhout bij de deur", next: "barry_inkt_2", leaf:"❦" }
    ]
  },

  barry_inkt_oma: {
    label: "Papier voor een egel",
    text: [
      "Je hebt de la van de schrijftafel al open als je haar hoort.",
      oma("Papier? Voor een egel? Dat zit na één nacht verfrommeld tussen zijn stekels, kind. Berkenbast. Die is taai, die buigt mee en die heeft al meer winters doorstaan dan papier ooit zal doen."),
      "Je schuift de la weer dicht en scheurt een reepje bast van het berkenhout bij de deur."
    ],
    choices: [ { text: "Leg het reepje op de toonbank", next: "barry_inkt_2", leaf:"→" } ]
  },

  barry_inkt_2: {
    label: "Het moeilijkste deel",
    text: [
      "Het reepje berkenbast ligt voor je op de toonbank, met de warme inkt ernaast. Je kijkt Barry aan. Nu komt het moeilijkste deel, en dat staat in geen enkele pot."
    ],
    choices: [ { text: "Vraag Barry om een veilige herinnering", next: "barry_eind_inkt", leaf:"🗨" } ]
  },

  barry_eind_distel: {
    label: "Distelpluis",
    text: [
      "Je verwerkt distelpluis tot een klein charme, licht als een ingehouden adem, en bindt het aan de bandriem van zijn mandje waar het de hele dag wind kan vangen. \"Dit houdt de brand-droom er helemaal buiten,\" leg je uit. \"Niet alleen vannacht. Tot hij vanzelf verslijt.\"",
      "Barry raakt het aan alsof het zou kunnen oplossen. \"Gewoon... buiten houden?\" \"Gewoon dat,\" zeg je.",
      "Hij vertrekt rustiger, mandje in balans, stekels voor het eerst sinds hij binnenkwam plat tegen zijn rug. De lantaarn wordt een tikkeltje helderder, alsof hij het goedkeurt."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Distelpluis-charme: om een nare droom buiten te houden."); tag(s,'bescherming'); },
    ending: true
  },

  barry_eind_inkt: {
    label: "Eikengal-inkt",
    text: [
      "Je vraagt Barry om één echt veilige herinnering (iets kleins is prima) en na even nadenken kiest hij zijn moeder die 's avonds zijn stekels telt voor het slapengaan. Je schrijft het met eikengal-inkt op een reepje berkenbast, vouwt het dubbel en stopt het in zijn mandje.",
      "\"Lees het voor je gaat slapen,\" zeg je. \"Het wist de droom niet. Het geeft je gedachten alleen een andere plek om eerst te landen.\"",
      "Barry knikt langzaam, alsof dit meer voor hem klopt dan een bescherming zou hebben gedaan. Hij vertrekt met het mandje net iets minder krampachtig vastgehouden."
    ],
    onEnter: (s) => { s.gloed += 20; s.spreuken.push("Eikengal-inkt: een veilige herinnering om eerst op te landen."); tag(s,'geheugen'); },
    ending: true
  },

  barry_eind_gok: {
    label: "Een gok",
    text: [
      "Je kent de kast nog niet goed genoeg, dus je gaat op gevoel af: iets rond ruikend, een beetje als mos na regen, de magische versie van een hand op de schouder.",
      oma("Mos is voor wie het koud heeft, kind.") + " Even blijft het stil in je hoofd. " + oma("Maar ach. Hij heeft het ook koud, op zijn manier."),
      "Het is niet precies de juiste spreuk voor wat Barry nodig heeft, maar het is goedbedoeld, en hij drinkt het rustig op en lijkt, zo niet genezen, dan toch minder alleen met de droom.",
      "\"Dank je,\" zegt hij, zachter dan toen hij binnenkwam. \"Ik denk dat ik vooral nodig had dat iemand het serieus nam.\" Hij vertrekt richting de markt, in een tempo dat niet gehaast is."
    ],
    onEnter: (s) => { s.gloed += 10; s.spreuken.push("Een gok, mosgeurig: niet precies goed, maar goedbedoeld."); tag(s,'onzeker'); },
    ending: true
  },

  barry_eind_praten: {
    label: "Bij de lantaarn",
    text: [
      "Je slaat de plank helemaal over en gaat gewoon naast Barry op het bankje onder de toonbanklantaarn zitten, dichtbij genoeg dat de warmte jullie allebei bereikt. Je zegt niets nuttigs. Je probeert het ook niet.",
      "De lantaarn tikt door, gelijkmatig, en na een tijdje valt Barry's ademhaling samen met dat ritme, zonder dat een van jullie het benoemt.",
      "\"Ik denk niet dat ik een spreuk nodig had,\" zegt Barry uiteindelijk, terwijl hij opstaat, stekels voor het eerst echt plat. \"Ik moest gewoon even niet alleen zijn met het.\" Hij vertrekt. De lantaarn gloeit warm en helder op, alsof dit precies zijn plan was."
    ],
    onEnter: (s) => { s.gloed += 15; s.spreuken.push("Geen spreuk: alleen de lantaarn, en niet alleen zijn."); tag(s,'aanwezigheid'); },
    ending: true
  },

});

// Avondgloren · Finale
// Scenes worden aan het STORY-object toegevoegd; build.js voegt alle bestanden samen.

Object.assign(STORY, {

  finale_intro: {
    day: "Eerste vorst",
    label: "Het Feest van de Eerste Vorst",
    text: [
      "De eerste vorst van het seizoen ligt als suiker over Amberwoud. Dennenappels en verkleurde bladeren knerpen onder elke poot die de winkel nadert. Voor Avondgloren zijn lantaarns opgehangen tussen de takken, niet van jou maar van de buren, die besloten hebben dat de winkel dit ook wel verdient. Je veegt het stof van de hoed, uit gewoonte, en zet hem recht. Voor het eerst sinds je de winkel overnam, blijft hij ook echt recht zitten.",
      "Fen zit al op het bankje onder de toonbank, veel te dicht bij de warme lantaarn. Jackie helpt Louise en Levi een tafel vol eikels uitstallen zonder dat iemand ruzie maakt over wie er meer heeft neergezet. Mick graaft, zonder aarzelen, een klein pad door de sneeuw naar de deur. En daar, in de deuropening, staat Barry, stekels ontspannen, die een kom warme bessen naar binnen brengt.",
      "Tussen de opgeruimde potten vindt je een laatste blaadje van oma, alsof het al die tijd op dit moment had liggen wachten."
    ],
    onEnter: (s) => { unlockNote(s, 'n3', "'Als de winkel ooit een echte specialiteit heeft gehad, was het dit: opletten wat iemand nodig heeft, niet wat er in de kast staat.'"); },
    choices: [ { text: "Lees het blaadje", next: "finale_eind", leaf:"→" } ]
  },

  finale_eind: {
    label: "Wat de winkel eigenlijk doet",
    text: [
      "Je vouwt het laatste blaadje open. Geen recept deze keer: gewoon een paar zinnen, in het handschrift dat je inmiddels beter kent dan je eigen gedachten.",
      "Je kijkt naar de winkel om je heen: naar Fen op de vensterbank, naar het rustige gepraat van Louise en Levi, naar Mick's voetstappen die vol vertrouwen door de sneeuw lopen, naar Barry die de kom bessen op tafel zet zonder één keer om te kijken naar de deur.",
      "SIGNATURE_LINE",
      "Buiten begint het licht te zachtjes te vallen zoals het bij de eerste vorst hoort. Binnen blijft de avondlantaarn gloeien, precies zoals hij dat al deed voor jij de winkel overnam, en precies zoals hij dat, vermoed je, nog heel lang zal blijven doen."
    ],
    endingSignature: true,
    ending: true
  }

});

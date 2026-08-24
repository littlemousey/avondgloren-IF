// Avondgloren · Engine (rendering, zijbalk, herstart)
// Wordt als laatste ingeladen en start het spel onderaan met render("intro_1").

let current = "start";

function glowText(w){
  if (w >= 90) return "De hele winkel voelt alsof hij hier altijd al heeft gestaan.";
  if (w >= 55) return "Het begint hier steeds meer op een thuis te lijken.";
  if (w >= 35) return "Er nestelt zich iets goeds in de winkel.";
  if (w >= 20) return "De winkel wordt net wakker.";
  return "Nog koud in de hoekjes.";
}

function renderLijst(id, emptyId, items, cls){
  const list = document.getElementById(id);
  const empty = document.getElementById(emptyId);
  list.innerHTML = "";
  if (items.length === 0){ empty.style.display = "block"; return; }
  empty.style.display = "none";
  items.forEach(entry => {
    const li = document.createElement('li');
    li.className = cls;
    li.innerHTML = entry;
    list.appendChild(li);
  });
}

function renderSidebar(){
  const pct = Math.max(0, Math.min(100, state.gloed));
  document.getElementById('glowFill').style.width = pct + "%";
  document.getElementById('glowLabel').textContent = glowText(state.gloed);
  renderLijst('journalList', 'journalEmpty', state.spreuken, 'spell');
  renderLijst('notebookList', 'notebookEmpty', state.dagboek, 'note');
}

function render(id){
  current = id;
  const node = STORY[id];
  if (node.onEnter) node.onEnter(state);

  document.getElementById('sceneLabel').textContent = node.label;
  document.getElementById('dayTag').textContent = node.day || "";

  let teksten = node.text.slice();
  if (node.endingSignature){
    const line = berekenSignature(state);
    teksten = teksten.map(t => t === "SIGNATURE_LINE" ? line : t);
  }

  const textEl = document.getElementById('storyText');
  textEl.innerHTML = teksten.map(p => `<p>${p}</p>`).join("");

  const choicesEl = document.getElementById('choices');
  choicesEl.innerHTML = "";
  const restartRow = document.getElementById('restartRow');

  const choiceList = node.dynamicChoices ? node.dynamicChoices(state) : (node.choices || []);

  if (node.ending || choiceList.length === 0){
    choicesEl.style.display = "none";
    restartRow.style.display = "block";
  } else {
    choicesEl.style.display = "flex";
    restartRow.style.display = "none";
    choiceList.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = "choice-btn";
      btn.innerHTML = `<span class="leaf">${choice.leaf || "&bull;"}</span>${choice.text}`;
      btn.onclick = () => render(choice.next);
      choicesEl.appendChild(btn);
    });
  }

  renderSidebar();
}

function restart(){
  state.gloed = 20;
  state.spreuken = [];
  state.dagboek = [];
  state.tags = [];
  state.flags = {};
  render("start");
}

render("intro_1");

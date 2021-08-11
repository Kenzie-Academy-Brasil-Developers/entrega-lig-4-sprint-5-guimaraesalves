function criaCardVitoria(jogador) {
  const cardVitoria = document.createElement("div");
  cardVitoria.classList.add("cardVitoria")
  criarTitulo(cardVitoria, jogador)
  document.body.appendChild(cardVitoria)
}

function criarTitulo(cardVitoria, titulo) {
  const criarTitulo = document.createElement("div");
  criarTitulo.classList.add("criarTitulo")
  criarTitulo.innerText = `${titulo}`
  cardVitoria.appendChild(criarTitulo)

  criaTrofeu(cardVitoria)
}

function criaTrofeu(cardVitoria) {
  const criaTrofeu = document.createElement("img");
  criaTrofeu.classList.add("criaTrofeu")
  cardVitoria.appendChild(criaTrofeu)
}


criaCardVitoria("Palmeiras tem Mundial")
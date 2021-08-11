function criaCardVitoria(jogador) {
  const cardVitoria = document.createElement("div");
  cardVitoria.classList.add("cardVitoria")
  criarTitulo(cardVitoria)
  criaVencedor(cardVitoria, jogador)
  document.body.appendChild(cardVitoria)
}

function criarTitulo(cardVitoria) {
  const criarTitulo = document.createElement("div");
  criarTitulo.classList.add("criarTitulo")
  criarTitulo.innerText = "Campeão"
  cardVitoria.appendChild(criarTitulo)

  criaTrofeu(cardVitoria)
}

function criaTrofeu(cardVitoria) {
  const criaTrofeu = document.createElement("img");
  criaTrofeu.classList.add("criaTrofeu")
  cardVitoria.appendChild(criaTrofeu)
}

function criaVencedor(cardVitoria, jogador) {
  const criaVencedor = document.createElement("div");
  criaVencedor.classList.add("criaVencedor")
  criaVencedor.innerText = `${jogador}`
  cardVitoria.appendChild(criaVencedor)
}


criaCardVitoria("Palmeiras tem Mundial")
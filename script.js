function criaCardVitoria(jogador) {
  const cardVitoria = document.createElement("div");
  cardVitoria.classList.add("cardVitoria")
  cardVitoria.innerText = `${jogador}`
  document.body.appendChild(cardVitoria)
}

criaCardVitoria("Palmeiras tem Mundial")
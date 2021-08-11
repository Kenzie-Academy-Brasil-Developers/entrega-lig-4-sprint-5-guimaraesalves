function criaCardVitoria(jogador) {
  const cardVitoria = document.createElement("div");
  cardVitoria.classList.add("cardVitoria")
  document.body.appendChild(cardVitoria)

  criarTitulo(cardVitoria)
  criaTrofeu(cardVitoria)
  criaVencedor(cardVitoria, jogador)
  criaFogosArtificos(cardVitoria)
  fogosArtificios()
}

function criarTitulo(cardVitoria) {
  const criarTitulo = document.createElement("div");
  criarTitulo.classList.add("criarTitulo")
  criarTitulo.innerText = "Campeão da Taça Rio"
  cardVitoria.appendChild(criarTitulo)
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

function criaFogosArtificos(cardVitoria) {
  const fogosArtificos = document.createElement("div");
  fogosArtificos.classList.add("fogos-artificios")
  cardVitoria.appendChild(fogosArtificos)
}

function fogosArtificios() {
  const fogos = document.querySelector('.fogos-artificios')
  const fireworks = new Fireworks(fogos, {
    rocketsPoint: 50,
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    speed: 2,
    acceleration: 1.05,
    friction: 0.95,
    gravity: 1.5,
    particles: 50,
    trace: 3,
    explosion: 5,
    autoresize: true,
    brightness: {
      min: 50,
      max: 80,
      decay: { min: 0.015, max: 0.03 }
    },
    mouse: {
      click: false,
      move: false,
      max: 3
    },
    boundaries: {
      x: 50,
      y: 50,
      width: fogos.clientWidth,
      height: fogos.clientHeight
    },
  });

  fireworks.setSize({ height: 500, width: 450 })

  fireworks.start();
}

criaCardVitoria("Palmeiras tem Mundial")
const container = document.querySelector(".container");
// === SONS ===

//sons da torcida durante o jogo.
const torcida = new Audio();
torcida.src = "./assets/sons/publico_estadio.mp3";
torcida.volume = 0.5;
torcida.loop = true;
torcida.play();

// Som das jogadas;
const chute = new Audio();
chute.src = "./assets/sons/chute.mp3";
chute.volume = 0.5;

//Som da vitória.
const venceu = new Audio();
venceu.src = "./assets/sons/VitoriaPublico.mp3";
venceu.volume = 0.5;


const tabuleiro = () => {
  for (let i = 0; i < 7; i++) {
    let linha = document.createElement("div");
    linha.classList.add("linha", `linha_${i}`);
    container.appendChild(linha);
    for (let j = 0; j < 6; j++) {
      let coluna = document.createElement("div");
      coluna.classList.add("bloco", `bloco_${j}`);
      linha.appendChild(coluna);
    }
  }
};

tabuleiro();

const jogadores = document.querySelector(".jogadores");

const jogador = document.createElement("div");
jogador.classList.add("jogador");
jogadores.appendChild(jogador);

//Inicializando eventos Selecionando discos

// variável de controle do clique.
let player1 = "R";
let player2 = "B";
let jogadorAtual = player1;

// alternância de jogadores
function alternaciaDeCor() {
  // container.addEventListener("click", function (event) {
  //   console.log("container");
  if (jogadorAtual === player1) {
    jogador.style.backgroundImage = "url('img/escudo-flamengo.png')";
    jogadorAtual = player2; //volta para true bloqueando o clique do jogador 2;
  } else {
    jogador.style.backgroundImage = "url('img/escudo-fluminense.png')";
    jogadorAtual = player1;
  }
  // });
}

let arrTabuleiro = [
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
];

const empate = () => {
  let ret = true
  arrTabuleiro.map(elem => {
    ret = elem.some(item => item === "V")
  })
  return ret
}

const colunas = document.querySelectorAll(".linha");
for (let i = colunas.length - 1; i >= 0; i--) {
  colunas[i].addEventListener("click", function (evt) {
    let indice = arrTabuleiro[i].lastIndexOf("V");
    arrTabuleiro[i][indice] = jogadorAtual;
    if (empate()) {
      vitoria(jogadorAtual);
    } else {
      criaCardVitoria("EMPATE", "TAÇA RIO")
    }
    //colocar a cor do disco no local do tabuleiro
    let estilo = `.linha_${[i]} > .bloco_${[indice]}`;
    let cor = document.querySelector(estilo);

    if (cor !== null) {
      if (jogadorAtual === "R") {
        const peca = document.createElement("div");
        peca.classList.add("peca");
        cor.appendChild(peca);
        peca.style.backgroundImage = "url('img/escudo-fluminense.png')";
        alternaciaDeCor();
        chute.play();
      } else {
        const peca = document.createElement("div");
        peca.classList.add("peca");
        cor.appendChild(peca);
        peca.style.backgroundImage = "url('img/escudo-flamengo.png')";
        alternaciaDeCor();
        chute.play();
      }
    }
  });
}

/**
 * Função para checar condição
 * @param {Number} numUm
 * @param {Number} numDois
 * @param {String} param
 * @returns
 */

const condicaoVitoriaVertical = (numUm, numDois, param) => {
  return (
    arrTabuleiro[numUm][numDois] === arrTabuleiro[numUm][numDois + 1] &&
    arrTabuleiro[numUm][numDois + 1] === arrTabuleiro[numUm][numDois + 2] &&
    arrTabuleiro[numUm][numDois + 2] === arrTabuleiro[numUm][numDois + 3] &&
    arrTabuleiro[numUm][numDois] === param
  );
};

const condicaoVitoriaHorizontal = (numUm, numDois, param) => {
  return (
    arrTabuleiro[numUm][numDois] === arrTabuleiro[numUm + 1][numDois] &&
    arrTabuleiro[numUm + 1][numDois] === arrTabuleiro[numUm + 2][numDois] &&
    arrTabuleiro[numUm + 2][numDois] === arrTabuleiro[numUm + 3][numDois] &&
    arrTabuleiro[numUm][numDois] === param
  );
};

/**
 * Função para checar a vitória na horizontal
 * @param {String} disco
 */

const vitoriaVertical = (disco) => {
  for (let i = 0; i < arrTabuleiro.length; i++) {
    for (let j = 0; j < arrTabuleiro[0].length - 3; j++) {
      if (condicaoVitoriaVertical(i, j, disco)) {
        (disco === "R") ? criaCardVitoria("FLUMINENSE") : criaCardVitoria("FLAMENGO");
        venceu.play();
      }
    }
  }
};

/**
 * Função para checar a vitória na vertical
 * @param {String} disco
 */

const vitoriaHorizontal = (disco) => {
  for (let i = 0; i < arrTabuleiro.length - 3; i++) {
    for (let j = 0; j < arrTabuleiro[0].length; j++) {
      if (condicaoVitoriaHorizontal(i, j, disco)) {
        (disco === "R") ? criaCardVitoria("FLUMINENSE") : criaCardVitoria("FLAMENGO");
        venceu.play();
      }
    }
  }
};

const vitoriaDiagonal = (disco) => {
  for (let i = 0; i < arrTabuleiro.length - 3; i++) {
    for (let j = 0; j < arrTabuleiro[0].length; j++) {
      if (
        arrTabuleiro[i][j] === arrTabuleiro[i + 1][j + 1] &&
        arrTabuleiro[i + 1][j + 1] === arrTabuleiro[i + 2][j + 2] &&
        arrTabuleiro[i + 2][j + 2] === arrTabuleiro[i + 3][j + 3] &&
        arrTabuleiro[i][j] === disco
      ) {
        (disco === "R") ? criaCardVitoria("FLUMINENSE") : criaCardVitoria("FLAMENGO");
        venceu.play();
      }
    }
  }
};

const vitoriaDiagonal2 = (disco) => {
  for (let i = 5; i > 2; i--) {
    for (let j = 0; j < arrTabuleiro[0].length; j++) {
      if (
        arrTabuleiro[i][j] === arrTabuleiro[i - 1][j + 1] &&
        arrTabuleiro[i - 1][j + 1] === arrTabuleiro[i - 2][j + 2] &&
        arrTabuleiro[i - 2][j + 2] === arrTabuleiro[i - 3][j + 3] &&
        arrTabuleiro[i][j] === disco
      ) {
        (disco === "R") ? criaCardVitoria("FLUMINENSE") : criaCardVitoria("FLAMENGO");
        venceu.play();
      }
    }
  }
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const glass = document.querySelector(".glass");
  if (glass.style.display === "none") {
    glass.style.display = "flex";
  } else {
    glass.style.display = "none";
  }
});

container.addEventListener("click", function () {
  const jogador = document.querySelector(".jogador");
  jogador.classList.add("chutar");
  setTimeout(function queda() {
    jogador.classList.remove("chutar");
  }, 1000);
});

function cronometro() {
  const timer = document.querySelector(".cronometro");
  let time = new Date();
  time.setHours(0, 0, 0, 0);
  const atualizarTexto = function () {
    time.setTime(time.getTime() + 1000);
    timer.innerHTML = time.toLocaleTimeString("pt-BR", {
      // hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return setInterval(atualizarTexto, 100);
}

cronometro();

/**
 * Função para checar a vitória
 * @param {String} discoVencedor
 */

const vitoria = (discoVencedor) => {
  vitoriaHorizontal(discoVencedor);
  vitoriaVertical(discoVencedor);
  vitoriaDiagonal(discoVencedor);
  vitoriaDiagonal2(discoVencedor);
};

/**
 * Função para criar a div Vitoria e chamar funcão
 * @param {String} time 
 * @param {String} titulo 
 */

const criaCardVitoria = (time, titulo) => {
  const cardVitoria = document.createElement("div");
  cardVitoria.classList.add("cardVitoria")
  document.body.appendChild(cardVitoria)

  criarTitulo(cardVitoria, titulo)
  criaTrofeu(cardVitoria)
  criaVencedor(cardVitoria, time)
  recomecar(cardVitoria)
  criaFogosArtificos(cardVitoria)
  fogosArtificios()
}

/**
 * 
 * @param {String} cardVitoria 
 * @param {String} titulo 
 */

const criarTitulo = (cardVitoria, titulo = "CAMPEÃO DA TAÇA RIO") => {
  const criarTitulo = document.createElement("div");
  criarTitulo.classList.add("criarTitulo")
  criarTitulo.innerText = titulo
  cardVitoria.appendChild(criarTitulo)
}

const criaTrofeu = (cardVitoria) => {
  const criaTrofeu = document.createElement("img");
  criaTrofeu.classList.add("criaTrofeu")
  cardVitoria.appendChild(criaTrofeu)
}

/**
 * Escreve o nome do time vencedor
 * @param {String} cardVitoria 
 * @param {String} time 
 */

const criaVencedor = (cardVitoria, time) => {
  const criaVencedor = document.createElement("div");
  criaVencedor.classList.add("criaVencedor")
  criaVencedor.innerText = `${time}`
  cardVitoria.appendChild(criaVencedor)
}
/**
 * Cria a div dos fogos de artificios
 * @param {String} cardVitoria 
 */
const criaFogosArtificos = (cardVitoria) => {
  const fogosArtificos = document.createElement("div");
  fogosArtificos.classList.add("fogos-artificios")
  cardVitoria.appendChild(fogosArtificos)
}
/**
 * Cria botao de reiniciar e chama a funcao de evento de click
 * @param {String} cardVitoria 
 */
const recomecar = (cardVitoria) => {
  let button = document.createElement('div')

  button.innerText = "Reiniciar"
  button.classList.add('reiniciar')

  cardVitoria.appendChild(button)

  eventosClick()
}

const eventosClick = () => {
  let button = document.querySelector('.reiniciar')

  button.addEventListener('click', refreshPagina)
}

const refreshPagina = () => {
  window.location.reload();
}

const fogosArtificios = () => {
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
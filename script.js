const container = document.querySelector(".container");

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
      console.log("Empatou", arrTabuleiro)
    }
    //colocar a cor do disco no local do tabuleiro
    let estilo = `.linha_${[i]} > .bloco_${[indice]}`;
    let cor = document.querySelector(estilo);
    if (cor !== null) {
      if (jogadorAtual === "R") {
        cor.style.backgroundImage = "url('img/escudo-fluminense.png')";
        alternaciaDeCor();
      } else {
        cor.style.backgroundImage = "url('img/escudo-flamengo.png')";
        alternaciaDeCor();
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
        console.log("Vitoria Vertical");
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
        console.log("Vitoria Horizontal");
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
        console.log("Vitoria Diagonal");
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
        console.log("Vitoria Diagonal");
      }
    }
  }
};

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

function criaCardVitoria(jogador) {
  const cardVitoria = document.createElement("div");
  cardVitoria.classList.add("cardVitoria");
  cardVitoria.innerText = jogador;
  document.body.appendChild(cardVitoria);
}

// criaCardVitoria("Palmeiras tem Mundial")

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
  setTimeout(function run() {
    jogador.classList.remove("chutar");
  }, 700);
});

function cronometro(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (++timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let duration = 0;
  display = document.querySelector(".cronometro");
  cronometro(duration, display);
};

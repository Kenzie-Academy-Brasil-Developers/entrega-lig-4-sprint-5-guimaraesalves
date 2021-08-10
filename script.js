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

const jogador_1 = document.createElement("div");
jogador_1.classList.add("jogador_1");
jogadores.appendChild(jogador_1);

const jogador_2 = document.createElement("div");
jogador_2.classList.add("jogador_2");
jogadores.appendChild(jogador_2);

let arrTabuleiro = [
  ["P", "P", "P", "P", "V", "V", "V"],
  ["P", "V", "V", "V", "V", "V", "V"],
  ["P", "V", "V", "V", "P", "V", "V"],
  ["V", "V", "V", "V", "P", "V", "V"],
  ["V", "V", "V", "P", "P", "P", "V"],
  ["V", "V", "V", "V", "P", "V", "V"],
];

/**
 * Função para checar a vitória
 * @param {String} discoVencedor 
 */

const vitoria = (discoVencedor) => {
  vitoriaHorizontal(discoVencedor)
  vitoriaVertical(discoVencedor)
};

/**
 * Função para checar condição
 * @param {Number} numUm 
 * @param {Number} numDois 
 * @param {String} param 
 * @returns 
 */

const condicaoVitoria = (numUm, numDois, param) => {
  return arrTabuleiro[numUm][numDois] === arrTabuleiro[numUm][numDois + 1] &&
    arrTabuleiro[numUm][numDois + 1] === arrTabuleiro[numUm][numDois + 2] &&
    arrTabuleiro[numUm][numDois + 2] === arrTabuleiro[numUm][numDois + 3] &&
    arrTabuleiro[numUm][numDois] === param
}

/**
 * Função para checar a vitória na horizontal
 * @param {String} disco 
 */

const vitoriaHorizontal = (disco) => {
  for (let i = 0; i < arrTabuleiro.length; i++) {
    for (let j = 0; j < arrTabuleiro[0].length - 3; j++) {
      if (condicaoVitoria(i, j, disco)) {
        console.log("test_0");
      }
    }
  }
}

/**
 * Função para checar a vitória na vertical
 * @param {String} disco
 */

const vitoriaVertical = (disco) => {
  for (let i = 0; i < arrTabuleiro.length - 3; i++) {
    for (let j = 0; j < arrTabuleiro[0].length; j++) {
      if (condicaoVitoria(i, j, disco)) {
        console.log("test_1");
      }
    }
  }
}

vitoria("P");

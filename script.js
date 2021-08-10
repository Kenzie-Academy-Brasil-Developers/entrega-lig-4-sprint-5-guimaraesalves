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
  ["V", "P", "P", "P", "V", "V", "V"],
  ["P", "V", "V", "V", "V", "V", "V"],
  ["P", "V", "V", "V", "P", "V", "V"],
  ["V", "V", "V", "V", "P", "V", "V"],
  ["V", "V", "V", "P", "P", "P", "V"],
  ["V", "V", "V", "V", "P", "V", "V"],
];
const vitoria = () => {
  for (let i = 0; i < arrTabuleiro.length; i++) {
    for (let j = 0; j < arrTabuleiro[0].length - 3; j++) {
      if (
        arrTabuleiro[i][j] === arrTabuleiro[i][j + 1] &&
        arrTabuleiro[i][j + 1] === arrTabuleiro[i][j + 2] &&
        arrTabuleiro[i][j + 2] === arrTabuleiro[i][j + 3] &&
        arrTabuleiro[i][j] === "P"
      ) {
        console.log("test_0");
      }
    }
  }
  for (let i = 0; i < arrTabuleiro.length - 3; i++) {
    for (let j = 0; j < arrTabuleiro[0].length; j++) {
      if (
        arrTabuleiro[i][j] === arrTabuleiro[i + 1][j] &&
        arrTabuleiro[i + 1][j] === arrTabuleiro[i + 2][j] &&
        arrTabuleiro[i + 2][j] === arrTabuleiro[i + 3][j] &&
        arrTabuleiro[i][j] === "P"
      ) {
        console.log("test_1");
      }
    }
  }
};

vitoria();

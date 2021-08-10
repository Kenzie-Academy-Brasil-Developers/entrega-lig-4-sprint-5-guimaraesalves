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
container.addEventListener("click", function (event) {
  if (jogadorAtual === player1) {
    jogador.style.backgroundColor = "red";
    jogadorAtual = player2; //volta para true bloqueando o clique do jogador 2;
  } else {
    jogador.style.backgroundColor = "black";
    jogadorAtual = player1;
  }
});

let arrTabuleiro = [
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "V", "V", "V"],
];

const colunas = document.querySelectorAll(".linha");

for (let i = colunas.length - 1; i >= 0; i--) {
  colunas[i].addEventListener("click", function (evt) {
    let indice = arrTabuleiro[i].lastIndexOf("V");
    arrTabuleiro[i][indice] = jogadorAtual;
    //colocar a cor do disco no local do tabuleiro
    console.log(arrTabuleiro);
    let estilo = `.linha_${[i]} > .bloco_${[indice]}`;
    let cor = document.querySelector(estilo);
    if (jogadorAtual === "B") {
      cor.style.backgroundColor = "black";
      console.log(estilo);
    } else {
      cor.style.backgroundColor = "red";
    }
  });
}

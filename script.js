const container = document.querySelector(".container");

//================================
//          Tabuleiro
//================================

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

//================================
//          Jogadores
//================================

const jogadores = document.querySelector(".jogadores");

const criarJogador = (jogador, strJogador) => {
  jogador.classList.add(strJogador);
  jogadores.appendChild(jogador);
}

const jogador_1 = document.createElement("div");
const jogador_2 = document.createElement("div");

criarJogador(jogador_1, 'jogador_1')
criarJogador(jogador_2, 'jogador_2')

//================================
//          Validação
//================================

let arrTabuleiro = [
  ["V", "V", "V", "V", "V", "V", "V"],
  ["V", "V", "V", "R", "R", "R", "R"],
  ["V", "V", "V", "V", "V", "V", "B"],
  ["V", "V", "V", "V", "V", "V", "B"],
  ["V", "V", "V", "V", "V", "V", "B"],
  ["V", "V", "V", "V", "V", "V", "B"]
]


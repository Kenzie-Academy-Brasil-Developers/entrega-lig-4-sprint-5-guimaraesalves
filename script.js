
//================================
//          Tabuleiro
//================================

const tabuleiro = () => {
  const container = document.querySelector(".container");
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

/**
 * @param {String} strJogador 
 */

const criarJogador = (strJogador) => {
  const jogadores = document.querySelector(".jogadores");
  let jogador = document.createElement("div");
  jogador.classList.add(strJogador);
  jogadores.appendChild(jogador);
}

criarJogador('jogador_1')
criarJogador('jogador_2')

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


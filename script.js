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
    let jogadorAtual = 1;    
    
        // alternância de jogadores
        container.addEventListener("click", function(event){
            if(jogadorAtual === 1){
            jogador.style.backgroundColor = "red";
            jogadorAtual = 2; //volta para true bloqueando o clique do jogador 2;
            } else {
                jogador.style.backgroundColor = "black";
                jogadorAtual = 1;
            }
            });
    
    



    
   
    






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



//Inicializando eventos Selecionando discos

    // variável de controle do clique.
    let clique = false;
    console.log(clique);  
    
    
        // clique false libera o jogador 1
        jogador_1.addEventListener("click", function(event){
            if(clique === false){
            clique = true; //volta para true bloqueando o clique do jogador 2;
            jogador_1.style.width = "40px";
            jogador_1.style.height = "40px";
            console.log(clique);  
            }
            });       
           
        jogador_1.addEventListener("mouseover", function(event){
                jogador_1.style.backgroundColor = "#3b3b2f";
            });
        jogador_1.addEventListener("mouseout", function(event){
                jogador_1.style.backgroundColor = "#000";
            });

        // Clique true libera o clique no tabuleiro e volta o clique para false;    
        container.addEventListener("click", function(event){
            if (clique === true){
            clique = false;
            console.log(clique);
            }
            
        });
    

        // clique false libera o jogador 2
        jogador_2.addEventListener("click", function(event){
        if(clique === false){
            clique = true; //volta para true bloqueando o clique do jogador 1;
            jogador_2.style.width = "40px";
            jogador_2.style.height = "40px";  
            console.log(clique);
        }            
        });  

        jogador_2.addEventListener("mouseover", function(event){
            jogador_2.style.backgroundColor = "#e64f47";
        });
        jogador_2.addEventListener("mouseout", function(event){
            jogador_2.style.backgroundColor = "#eb3434";
        });

    
    



    
   
    






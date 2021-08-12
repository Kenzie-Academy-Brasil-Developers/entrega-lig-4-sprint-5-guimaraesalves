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
  
container.addEventListener("click", function (event) {
  console.log("container");
  if (jogadorAtual === player1) {
    jogador.style.backgroundColor = "black";
    jogadorAtual = player2; //volta para true bloqueando o clique do jogador 2;
  } else {
    jogador.style.backgroundColor = "red";
    jogadorAtual = player1;
  }
});
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

const colunas = document.querySelectorAll(".linha");

for (let i = colunas.length - 1; i >= 0; i--) {
  colunas[i].addEventListener("click", function (evt) {
    let indice = arrTabuleiro[i].lastIndexOf("V");
    arrTabuleiro[i][indice] = jogadorAtual;
    vitoria(jogadorAtual);
    //colocar a cor do disco no local do tabuleiro
    let estilo = `.linha_${[i]} > .bloco_${[indice]}`;
    let cor = document.querySelector(estilo);
    if (cor !== null) {
      if (jogadorAtual === "R") {
        cor.style.backgroundColor = "red";
        alternaciaDeCor();
      } else {
        cor.style.backgroundColor = "black";
        alternaciaDeCor();
      }
    } else {

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


// Começo criação card inicial
function cardInicialFunction () {
  const cardInicial = document.createElement("div");
  cardInicial.classList = "cardInicial";
  document.body.appendChild(cardInicial);
  const container = document.createElement("div");
  container.id = "container";
  cardInicial.appendChild(container);
  criarTitulo(container);
  criarTrofeu(container)
  criarTimes(container);
  criarBotoes(container)
  jogar(cardInicial);
  regra(cardInicial);
  const botaoRegras = document.getElementById("botaoRegras");
  botaoRegras.addEventListener("click", () => {
    const chamarRegra = document.getElementById("regras");
      chamarRegra.style.display = "flex";
  })
  equipe(cardInicial)
  const botaoEquipe = document.getElementById("botaoEquipe");
  botaoEquipe.addEventListener("click", () => {
    const chamarEquipe = document.getElementById("equipe");
    chamarEquipe.style.display = "flex";
  })
}

function criarTitulo(container) {
  const criarTitulo = document.createElement("h1");
  criarTitulo.innerText = "Taça Rio";
  criarTitulo.id = "titulo";
  container.appendChild(criarTitulo);
}

function criarTrofeu(container) {
  const criarTroféu = document.createElement("img");
  criarTroféu.id = "trofeu";
  criarTroféu.src = "./trofeu.png"
  container.appendChild(criarTroféu);
}

function criarTimes(container) {
  const criarTimes = document.createElement("div");
  criarTimes.classList = "criarTimes";
  container.appendChild(criarTimes);
  const criarTime1 = document.createElement("img");
  criarTime1.id = "time1";
  criarTime1.src = "./escudo-flamengo.png"
  criarTimes.appendChild(criarTime1);
  const criarVersus = document.createElement("img");
  criarVersus.id = "versus";
  criarVersus.src = "./versus.png"
  criarTimes.appendChild(criarVersus);
  const criarTime2 = document.createElement("img");
  criarTime2.id = "time2";
  criarTime2.src = "./escudo-fluminense.png"
  criarTimes.appendChild(criarTime2);
}

function criarBotoes(container) {
  const botaoJogar = document.createElement("button");
  botaoJogar.id = "botaoJogar";
  botaoJogar.classList = "botoesIniciais";
  botaoJogar.innerText = "JOGAR";
  const botaoRegras = document.createElement("button");
  botaoRegras.id = "botaoRegras";
  botaoRegras.classList = "botoesIniciais";
  botaoRegras.innerText = "REGRA";
  const botaoEquipe = document.createElement("button");
  botaoEquipe.id = "botaoEquipe";
  botaoEquipe.classList = "botoesIniciais";
  botaoEquipe.innerText = "EQUIPE";
  container.appendChild(botaoJogar);
  container.appendChild(botaoRegras);
  container.appendChild(botaoEquipe);
}

function jogar(cardInicial) {
  const botaoJogar = document.getElementById("botaoJogar");
  botaoJogar.addEventListener("click", function (evt) {
    cardInicial.style.display = "none";
  })
}

function regra(cardInicial) {
  const regras = document.createElement("div");
  regras.id = "regras";
  cardInicial.appendChild(regras);
  const regrasEscritas = document.createElement("div");
  regrasEscritas.id = "regrasEscritas"
  regrasEscritas.innerText = `Regras \b\b\b\b\b\b\b\b\b\b\b\b\b Cada jogador tenta colocar quatro de suas pedras em fila, dentro do quadro, seja na horizontal, vertical ou diagonal, bloqueando seu adversário para que ele não consiga fazer o mesmo.`
  regras.appendChild(regrasEscritas);
  const botaoFechar = document.createElement("button");
  botaoFechar.id = "botaoFechar";
  botaoFechar.innerText = "Voltar";
  regrasEscritas.appendChild(botaoFechar);
  botaoFechar.addEventListener("click", function (evt){
    const chamarRegra = document.getElementById("regras");
    chamarRegra.style.display = "none";
  })
}

const nomesEquipes = [
  ["Felipe Silvera"],
  ["Laudemir do Nascimento"],
  ["Mateus Alves"],
  ["Victor Scherer"],
];

const linkedinEquipe = [
  ["https://www.linkedin.com/in/felipe-larson-da-silveira/"],
  ["https://www.linkedin.com/in/nlaudemir/"],
  ["https://www.linkedin.com/in/mateus-guimar%C3%A3es-alves-b49008190/"],
  ["https://www.linkedin.com/in/victorscherer/"],
];

const githubEquipe = [
  ["https://github.com/felipelarson"],
  ["https://github.com/LaudemirJunior"],
  ["https://github.com/guimaraesalves"],
  ["https://github.com/victorlscherer"],
]

function equipe(cardInicial) {
  const equipe = document.createElement("div");
  equipe.id = "equipe";
  cardInicial.appendChild(equipe);
  const equipeEscritas = document.createElement("div");
  equipeEscritas.id = "equipeEscritas"
  equipeEscritas.innerText = `Equipe do projeto`
  equipe.appendChild(equipeEscritas);
  const botaoFechar = document.createElement("button");
  botaoFechar.id = "botaoFechar";
  botaoFechar.innerText = "Voltar";
  criarCardEquipe(equipeEscritas, nomesEquipes[0],linkedinEquipe[0],githubEquipe[0]);
  criarCardEquipe(equipeEscritas, nomesEquipes[1],linkedinEquipe[1],githubEquipe[1]);
  criarCardEquipe(equipeEscritas, nomesEquipes[2],linkedinEquipe[2],githubEquipe[2]);
  criarCardEquipe(equipeEscritas, nomesEquipes[3],linkedinEquipe[3],githubEquipe[3]);
  equipeEscritas.appendChild(botaoFechar);
  botaoFechar.addEventListener("click", function (evt){
    const chamarRegra = document.getElementById("equipe");
    chamarRegra.style.display = "none";
  })
  
}

function criarCardEquipe(equipeEscritas, nomeIntegrante, linkedin, github) {
  const equipeContainer = document.createElement("div");
  equipeContainer.id = "equipeContainer";
  equipeEscritas.appendChild(equipeContainer);
  const criarNome = document.createElement("p");
  const criarLinkedin = document.createElement("a");
  const criarGithub = document.createElement("a");
  const criarDivImg = document.createElement("div");
  const criarImgLinkedin = document.createElement("img");
  const criarImgGithub = document.createElement("img");
  
  criarNome.classList = "nomeClass";
  criarLinkedin.classList = "linkedinClass";
  criarGithub.classList = "githubClass";
  
  criarNome.innerText = `${nomeIntegrante}`;
  
  criarDivImg.id = "criarDivImg";
  criarImgLinkedin.src = "./linkedin.png";
  criarLinkedin.appendChild(criarImgLinkedin);

  criarImgGithub.src = "./github.png";
  criarGithub.appendChild(criarImgGithub);
  
  criarLinkedin.href = `${linkedin}`;
  criarGithub.href = `${github}`;
  
  equipeContainer.appendChild(criarNome);
  equipeContainer.appendChild(criarDivImg);
  criarDivImg.appendChild(criarLinkedin);
  criarDivImg.appendChild(criarGithub);
  
}

cardInicialFunction();

// Fim criação card inicial
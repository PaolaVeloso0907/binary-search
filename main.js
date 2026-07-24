// TAREFAS PARA ESSA LIÇÃO:
// 1. Gerar série de números aleatórios e exibir na tela (Math.random)✅
// 2. Clicar em um botão e ordenar os números. (logica da amarelinha (selection sort))✅
// 3. Digitar um número e buscar a posição dele entre os numeros. (Binary Search)

function comecar() {
  document.getElementById("content-before").style.display = "none";
  document.getElementById("content-after").style.display = "block";

  gerarNum();
}

let listaDeNum = [];

function gerarNum() {
  listaDeNum = [];

  for (let i = 0; i < 10; i++) {
    let numAleatorio = Math.floor(Math.random() * 10 + 1);

    if (!listaDeNum.includes(numAleatorio)) {
      listaDeNum.push(numAleatorio);
    } else {
      i--;
    }
  }

  exibir.innerHTML = `${listaDeNum}`;
  return;
}

function ordenarNum() {
  // i -> coloca na posicao atual o valor q foi achado pelo j (organiza)
  // j -> corre e procura o menor valor (procura)

  // utilizo os "for" para poder achar o lugar de cada coisinha, mas ainda não organizei
  for (let i = 0; i < listaDeNum.length - 1; i++) {
    // verifica a posicao até o penultimo termo
    let menorIndice = i;

    for (let j = i + 1; j < listaDeNum.length; j++) {
      // verifica o menor numero contido na posicao
      if (listaDeNum[j] < listaDeNum[i]) {
        menorIndice = listaDeNum[j];
      }
    }

    // agora com tudo organizado, a gente já pode fazer as troca de posições
    // precisamos de uma variavel auxiliar para poder armazenar os valores corretamente e dps trocar o q for necessario
    let caixinhaEspecial = listaDeNum[i] // guarda o valor atual pra n perder ele
    listaDeNum[i] = listaDeNum[menorIndice] // coloca o menor valor na posicao atual
    listaDeNum[menorIndice] = caixinhaEspecial // coloca o valor anterior na posição q o menor saiu e deixou vago

    // o nome dessa troca é "swap"
  }

  exibir.innerHTML = `${listaDeNum}`;
  return;
}

function buscarNum() {}

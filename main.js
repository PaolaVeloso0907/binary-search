// TAREFAS PARA ESSA LIÇÃO:
// 1. Gerar série de números aleatórios e exibir na tela (Math.random)✅
// 2. Clicar em um botão e ordenar os números. (logica da amarelinha (selection sort))✅
// 3. Digitar um número e buscar a quantidade de tentativas para achar ele no array. (Binary Search)✅

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

  // [2, 6, 1, 5]

  // utilizo os "for" para poder achar o lugar de cada coisinha, mas ainda não organizei
  for (let i = 0; i < listaDeNum.length - 1; i++) {
    // verifica a posicao até o penultimo termo
    let menorIndice = i;

    for (let j = i + 1; j < listaDeNum.length; j++) {
      // verifica o menor numero contido a partir daquela posicao
      if (listaDeNum[j] < listaDeNum[menorIndice]) {
        // compara na posição de J e o menorIndice, pq o i é o valor q se altera e o menorIndice é a posição do menor valor, q pode ou nao se alterar.
        menorIndice = j;
      }
    }

    // agora com tudo organizado, a gente já pode fazer as troca de posições
    // precisamos de uma variavel auxiliar para poder armazenar os valores corretamente e dps trocar o q for necessario
    let caixinhaEspecial = listaDeNum[i]; // guarda o valor atual pra n perder ele
    listaDeNum[i] = listaDeNum[menorIndice]; // coloca o menor valor na posicao atual
    listaDeNum[menorIndice] = caixinhaEspecial; // coloca o valor anterior na posição q o menor saiu e deixou vago

    // o nome dessa troca é "swap"
  }

  exibir.innerHTML = `${listaDeNum}`;
  return;
}

function buscar() {
  document.getElementById("content-after").style.display = "none";
  document.getElementById("content-search").style.display = "block";
}

function buscarPosicao() {
  ordenarNum();

  const numeroDigitado = ipt_number.value;
  let inicio = listaDeNum[0];
  let fim = listaDeNum[listaDeNum.length - 1];

  document.getElementById("content-search").style.display = "none";
  document.getElementById("content-resultSearch").style.display = "block";

  for (let i = 1; fim >= inicio; i++) {
    let meio = Math.floor((inicio + fim) / 2);
    console.log(`O íniciio é ${inicio}, o fim é ${fim} e o meio é ${meio}`);

    if (numeroDigitado == meio) {
      console.log(`meio`, numeroDigitado, meio);
      return (exibirPosicao.innerHTML = `Encontrado em ${i} tentativas`);
    }

    if (numeroDigitado < meio) {
      fim = meio - 1;
      console.log(`${numeroDigitado} é menor que ${meio}? SIM`);
    } else if (numeroDigitado > meio) {
      inicio = meio + 1;
      console.log(`${numeroDigitado} é maior que ${meio}? SIM`);
    }
  }
 
  return;
}

function voltar() {
  document.getElementById("content-resultSearch").style.display = "none";
  document.getElementById("content-after").style.display = "block";
}
// TAREFAS PARA ESSA LIÇÃO:
// 1. Gerar série de números aleatórios e exibir na tela (Math.random)✅
// 2. Clicar em um botão e ordenar os números. (logica da amarelinha (ordenação linear))
// 3. Digitar um número e buscar a posição dele entre os numeros. (Binary Search)

function comecar() {
  document.getElementById("content-before").style.display = "none";
  document.getElementById("content-after").style.display = "block";

  gerarNum();
}


function gerarNum() {
  const listaDeNum = [];

  for (let i = 0; i < 10; i++) {
    let numAleatorio = Math.floor(Math.random() * 10 + 1);

    if (!listaDeNum.includes(numAleatorio)) {
      listaDeNum.push(numAleatorio);
    } else {
      i--;
    }
  }

  exibir.innerHTML = `${listaDeNum}`;

}

// Função que realiza a divisão e trata exceções
function realizarDivisao() {
  try {
    // Solicita ao usuário para inserir dois números
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Tenta realizar a divisão
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Por favor, insira números válidos.");
    }

    let resultado = numero1 / numero2;

    if (!isFinite(resultado)) {
      throw new Error("A divisão resulta em um valor não finito.");
    }

    console.log(`Resultado da divisão: ${resultado}`);
  } catch (error) {
    // Captura e trata a exceção
    console.error(`Ocorreu um erro: ${error.message}`);
  } finally {
    // Executa independentemente de haver ou não uma exceção
    console.log("Fim da execução.");
  }
}

// Chamada da função
realizarDivisao();


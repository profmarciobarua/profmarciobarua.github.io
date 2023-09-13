// Seleciona o botão de cálculo pelo seu ID
const calculateButton = document.getElementById("calculateButton");

// Seleciona o campo de entrada de números pelo seu ID
const numbersInput = document.getElementById("numbersInput");

// Seleciona o elemento onde o resultado será exibido pelo seu ID
const resultElement = document.getElementById("result");

// Adiciona um ouvinte de evento ao botão de cálculo
calculateButton.addEventListener("click", () => {
// Obtém o valor inserido pelo usuário no campo de entrada e divide-o em uma matriz de números.
// O método split(",") divide a entrada em partes sempre que encontrar uma vírgula.
// Em seguida, o método map() é usado para iterar sobre cada parte da matriz e convertê-las em números de ponto flutuante.
// A função parseFloat() converte uma string em um número de ponto flutuante.
// O método trim() é usado para remover espaços em branco desnecessários ao redor de cada número.


    const numbers = numbersInput.value.split(",").map(num => parseFloat(num.trim()));
    console.log(numbers);
    // Calcula o total somando todos os números da matriz
    const total = numbers.reduce((sum, num) => sum + num, 0);

    // Calcula a média dividindo o total pelo número de elementos na matriz
    const average = total / numbers.length;

    // Verifica se a média calculada é um número válido
    if (isNaN(average)) {
        // Se não for válido, exibe uma mensagem de erro
        resultElement.textContent = "Insira números válidos.";
    } else {
        // Se for válido, exibe a média com duas casas decimais
        resultElement.textContent = `A média dos números é: ${average.toFixed(2)}`;
    }
});

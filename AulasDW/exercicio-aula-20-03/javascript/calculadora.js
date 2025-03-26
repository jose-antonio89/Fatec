// Seleciona o formulário
const form = document.getElementById('formCalculadora');

// Adiciona event listeners para os botões de operação
document.getElementById('soma').addEventListener('click', function () {
    calcular('soma');
});

document.getElementById('subtracao').addEventListener('click', function () {
    calcular('subtracao');
});

document.getElementById('multiplicacao').addEventListener('click', function () {
    calcular('multiplicacao');
});

document.getElementById('divisao').addEventListener('click', function () {
    calcular('divisao');
});

// Função para realizar os cálculos
function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Erro: Divisão por zero';
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    // Exibe o resultado na lista
    const li = document.createElement('li');
    li.textContent = `Resultado: ${resultado}`;
    document.getElementById('resultados').appendChild(li);

    
}
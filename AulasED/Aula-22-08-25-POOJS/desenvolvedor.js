const Funcionario = require('Funcionario.js');

class Desenvolvedor extends Funcionario {
    // Sobrescreve o método para um cálculo diferente
    calcularBonus() {
        // Bônus de 10% para Desenvolvedor
        return this.salario * 0.10;
    }
}

module.exports = Desenvolvedor;
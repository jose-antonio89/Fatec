const Funcionario = require('Funcionario.js');

class Gerente extends Funcionario {
    // Sobrescreve o método para um cálculo diferente
    calcularBonus() {
        // Bônus de 15% para Gerente
        return this.salario * 0.15;
    }
}

module.exports = Gerente;
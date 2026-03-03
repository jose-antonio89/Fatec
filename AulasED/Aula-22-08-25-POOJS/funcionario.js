class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus() {
        // Bônus padrão de 5%
        return this.salario * 0.05;
    }
}

module.exports = Funcionario;
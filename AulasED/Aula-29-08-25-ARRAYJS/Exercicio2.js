const MeuArray = require('Array.js');

class RegistroFuncionarios {
    constructor() {
        this.funcionarios = new MeuArray();
    }

    adicionarFuncionario(nome) {
        // Verifica se o nome já existe antes de adicionar
        if (!this.nomeExiste(nome)) {
            this.funcionarios.adicionar(nome);
            return true;
        }
        return false;
    }

    obterFuncionario(indice) {
        return this.funcionarios.obter(indice);
    }

    removerUltimoFuncionario() {
        return this.funcionarios.removerUltimo();
    }

    quantidadeFuncionarios() {
        return this.funcionarios.tamanho();
    }

    registroVazio() {
        return this.funcionarios.estaVazio();
    }

    limparRegistro() {
        this.funcionarios.limpar();
    }

    nomeExiste(nome) {
        for (let i = 0; i < this.funcionarios.tamanho(); i++) {
            if (this.funcionarios.obter(i) === nome) {
                return true;
            }
        }
        return false;
    }

    exibirFuncionarios() {
        console.log("Funcionários no treinamento: " + this.funcionarios.toString());
    }

    estatisticas() {
        return {
            total: this.funcionarios.tamanho(),
            vazio: this.funcionarios.estaVazio()
        };
    }

    // Método para demonstrar acesso após limpar
    demonstrarAposLimpar() {
        console.log("\n--- Demonstração de Acesso Após Limpar ---");
        console.log("Tentativa de acesso ao índice 0:");
        const resultado = this.funcionarios.obter(0);
        console.log(`Resultado: ${resultado}`);
        console.log(`Índice 0 é válido? ${this.funcionarios.indiceValido(0)}`);
    }
}

module.exports = RegistroFuncionarios;
const MeuArray = require('Array.js');

class GerenciadorTarefas {
    constructor() {
        this.tarefas = new MeuArray();
    }

    adicionarTarefa(tarefa) {
        this.tarefas.adicionar(tarefa);
    }

    removerUltimaTarefa() {
        return this.tarefas.removerUltimo();
    }

    obterTarefa(indice) {
        return this.tarefas.obter(indice);
    }

    quantidadeTarefas() {
        return this.tarefas.tamanho();
    }

    semTarefas() {
        return this.tarefas.estaVazio();
    }

    exibirTarefas() {
        console.log("Lista de Tarefas: " + this.tarefas.toString());
    }

    estatisticas() {
        return {
            total: this.tarefas.tamanho(),
            vazia: this.tarefas.estaVazio()
        };
    }

    // Método para demonstrar acesso a índice inválido
    demonstrarAcessoInvalido() {
        console.log("\n--- Demonstração de Acesso a Índice Inválido ---");
        const indiceInvalido = this.tarefas.tamanho() + 2;
        const resultado = this.tarefas.obter(indiceInvalido);
        console.log(`Tentativa de acesso ao índice ${indiceInvalido}: ${resultado}`);
        console.log(`Índice ${indiceInvalido} é válido? ${this.tarefas.indiceValido(indiceInvalido)}`);
    }
}

module.exports = GerenciadorTarefas;
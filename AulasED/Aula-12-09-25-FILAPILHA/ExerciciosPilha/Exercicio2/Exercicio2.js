const Pilha = require('..Pilha');

class BauTesouro {
    constructor() {
        this.pilha = new Pilha();
    }

    guardarTesouro(tesouro) {
        this.pilha.push(tesouro);
    }

    retirarTesouro() {
        return this.pilha.pop();
    }

    olharUltimoTesouro() {
        return this.pilha.peek();
    }

    bauVazio() {
        return this.pilha.isEmpty();
    }

    tamanhoBau() {
        return this.pilha.size();
    }

    exibirBau() {
        console.log("Baú de tesouros: " + this.pilha.toString());
    }

    estatisticas() {
        return {
            total: this.pilha.size(),
            vazio: this.pilha.isEmpty()
        };
    }
}

module.exports = BauTesouro;
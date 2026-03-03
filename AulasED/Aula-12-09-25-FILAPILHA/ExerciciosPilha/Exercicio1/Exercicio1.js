const Pilha = require('..Pilha');

class TorreFeiticos {
    constructor() {
        this.pilha = new Pilha();
    }

    adicionarFeitico(nomeFeitico) {
        this.pilha.push(nomeFeitico);
    }

    usarFeitico() {
        return this.pilha.pop();
    }

    verTopo() {
        return this.pilha.peek();
    }

    torreVazia() {
        return this.pilha.isEmpty();
    }

    tamanhoTorre() {
        return this.pilha.size();
    }

    exibirTorre() {
        console.log("Torre de feitiços: " + this.pilha.toString());
    }

    estatisticas() {
        return {
            total: this.pilha.size(),
            vazia: this.pilha.isEmpty()
        };
    }
}

module.exports = TorreFeiticos;
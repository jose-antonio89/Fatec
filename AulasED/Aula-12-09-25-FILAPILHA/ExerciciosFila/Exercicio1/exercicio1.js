const Fila = require('..fila');

class SistemaAtendimento {
    constructor() {
        this.fila = new Fila();
        this.clientesAtendidos = 0;
        this.proximoId = 1;
    }

    adicionarCliente(nome) {
        const cliente = {
            id: this.proximoId++,
            nome: nome,
            tempoAtendimento: Math.floor(Math.random() * 3) + 1
        };
        
        this.fila.enqueue(cliente);
        return cliente;
    }

    atenderProximo() {
        if (this.fila.isEmpty()) {
            return undefined;
        }

        const cliente = this.fila.dequeue();
        this.clientesAtendidos++;
        return cliente;
    }

    verProximo() {
        return this.fila.front();
    }

    tamanhoFila() {
        return this.fila.size();
    }

    filaVazia() {
        return this.fila.isEmpty();
    }

    exibirFila() {
        console.log("Fila: " + this.fila.toString());
    }

    estatisticas() {
        return {
            naFila: this.fila.size(),
            atendidos: this.clientesAtendidos
        };
    }
}

module.exports = SistemaAtendimento;
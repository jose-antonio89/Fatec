const Fila = require('..fila');

class FilaImpressao {
    constructor(capacidadeMaxima = 5) {
        this.fila = new Fila();
        this.capacidadeMaxima = capacidadeMaxima;
        this.documentosImpressos = 0;
        this.proximoId = 1;
    }

    adicionarDocumento(nome, paginas) {
        if (this.fila.size() >= this.capacidadeMaxima) {
            return false;
        }

        const documento = {
            id: this.proximoId++,
            nome: nome,
            paginas: paginas
        };
        
        this.fila.enqueue(documento);
        return true;
    }

    imprimirProximo() {
        if (this.fila.isEmpty()) {
            return undefined;
        }

        const documento = this.fila.dequeue();
        this.documentosImpressos++;
        return documento;
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

    capacidadeRestante() {
        return this.capacidadeMaxima - this.fila.size();
    }

    filaCheia() {
        return this.fila.size() >= this.capacidadeMaxima;
    }

    exibirFila() {
        console.log("Fila de impressão: " + this.fila.toString());
    }

    estatisticas() {
        return {
            naFila: this.fila.size(),
            impressos: this.documentosImpressos,
            capacidade: this.capacidadeMaxima,
            disponivel: this.capacidadeRestante()
        };
    }
}

module.exports = FilaImpressao;
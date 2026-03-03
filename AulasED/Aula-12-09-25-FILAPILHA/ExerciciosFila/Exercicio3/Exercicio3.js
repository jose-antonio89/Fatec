const Fila = require('..fila');

class Brinquedo {
    constructor() {
        this.filaNormal = new Fila();
        this.filaVIP = new Fila();
        this.passageirosTransportados = 0;
        this.proximoId = 1;
    }

    adicionarVisitante(nome, ehVIP = false) {
        const visitante = {
            id: this.proximoId++,
            nome: nome,
            ehVIP: ehVIP
        };
        
        if (ehVIP) {
            this.filaVIP.enqueue(visitante);
        } else {
            this.filaNormal.enqueue(visitante);
        }
        return visitante;
    }

    embarcarProximo() {
        let visitante;
        
        if (!this.filaVIP.isEmpty()) {
            visitante = this.filaVIP.dequeue();
        } else if (!this.filaNormal.isEmpty()) {
            visitante = this.filaNormal.dequeue();
        } else {
            return undefined;
        }

        this.passageirosTransportados++;
        return visitante;
    }

    verProximo() {
        if (!this.filaVIP.isEmpty()) {
            return this.filaVIP.front();
        }
        return this.filaNormal.front();
    }

    tamanhoFilas() {
        return {
            normal: this.filaNormal.size(),
            vip: this.filaVIP.size(),
            total: this.filaNormal.size() + this.filaVIP.size()
        };
    }

    filasVazias() {
        return this.filaNormal.isEmpty() && this.filaVIP.isEmpty();
    }

    exibirFilas() {
        console.log("Fila VIP: " + this.filaVIP.toString());
        console.log("Fila Normal: " + this.filaNormal.toString());
    }

    estatisticas() {
        return {
            ...this.tamanhoFilas(),
            transportados: this.passageirosTransportados
        };
    }
}

module.exports = Brinquedo;
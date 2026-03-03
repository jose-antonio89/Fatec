const Fila = require('..Fila');

class Restaurante {
    constructor() {
        this.filaPedidos = new Fila();
        this.pedidosPreparados = 0;
        this.proximoNumero = 1;
    }

    adicionarPedido(nomeItem) {
        const pedido = {
            numero: this.proximoNumero++,
            nome: `Pedido ${this.proximoNumero - 1}: ${nomeItem}`,
            item: nomeItem,
            tempoPreparo: Math.floor(Math.random() * 3) + 1
        };
        
        this.filaPedidos.enqueue(pedido);
        return pedido;
    }

    prepararProximo() {
        if (this.filaPedidos.isEmpty()) {
            return undefined;
        }

        const pedido = this.filaPedidos.dequeue();
        this.pedidosPreparados++;
        return pedido;
    }

    verProximo() {
        return this.filaPedidos.front();
    }

    tamanhoFila() {
        return this.filaPedidos.size();
    }

    filaVazia() {
        return this.filaPedidos.isEmpty();
    }

    exibirFila() {
        console.log("Fila de pedidos: " + this.filaPedidos.toString());
    }

    estatisticas() {
        return {
            naFila: this.filaPedidos.size(),
            preparados: this.pedidosPreparados
        };
    }
}

module.exports = Restaurante;
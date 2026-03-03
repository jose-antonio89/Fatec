const Fila = require('..Fila');

class Supermercado {
    constructor(numCaixas = 3) {
        this.caixas = [];
        for (let i = 0; i < numCaixas; i++) {
            this.caixas.push({
                id: i + 1,
                fila: new Fila(),
                clienteAtual: null
            });
        }
        this.clientesAtendidos = 0;
        this.proximoId = 1;
    }

    adicionarCliente(nome) {
        const produtos = Math.floor(Math.random() * 10) + 1;
        const cliente = {
            id: this.proximoId++,
            nome: nome,
            produtos: produtos
        };

        let caixaEscolhido = this.caixas[0];
        for (let i = 1; i < this.caixas.length; i++) {
            if (this.caixas[i].fila.size() < caixaEscolhido.fila.size()) {
                caixaEscolhido = this.caixas[i];
            }
        }

        caixaEscolhido.fila.enqueue(cliente);
        return { cliente, caixa: caixaEscolhido.id };
    }

    atenderProximo(caixaId) {
        const caixa = this.caixas[caixaId - 1];
        if (caixa.fila.isEmpty()) {
            return undefined;
        }

        const cliente = caixa.fila.dequeue();
        this.clientesAtendidos++;
        return { cliente, caixa: caixa.id };
    }

    verProximo(caixaId) {
        const caixa = this.caixas[caixaId - 1];
        return caixa.fila.front();
    }

    tamanhoFilas() {
        const tamanhos = {};
        let total = 0;
        
        this.caixas.forEach(caixa => {
            tamanhos[`caixa${caixa.id}`] = caixa.fila.size();
            total += caixa.fila.size();
        });
        
        return { ...tamanhos, total };
    }

    exibirFilas() {
        console.log("--- Estado das Filas ---");
        this.caixas.forEach(caixa => {
            console.log(`Caixa ${caixa.id}: ${caixa.fila.toString() || "Vazia"}`);
        });
    }

    estatisticas() {
        return {
            filas: this.tamanhoFilas(),
            atendidos: this.clientesAtendidos,
            caixas: this.caixas.length
        };
    }
}

module.exports = Supermercado;
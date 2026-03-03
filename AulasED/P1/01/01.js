
class Fila {
    #items = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        this.#fim++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const item = this.#items[this.#inicio];
        delete this.#items[this.#inicio];
        this.#inicio++;

        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }

    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.#items[this.#inicio];
    }

    isEmpty = () => this.#fim === this.#inicio;

    size = () => this.#fim - this.#inicio;

    clean() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "Fila vazia";
        }
        
        let elementos = [];
        for (let i = this.#inicio; i < this.#fim; i++) {
            elementos.push(this.#items[i]);
        }
        return elementos.join(" -> ");
    }
}

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
        for (let i = 0; i < this.fila.length; i++) {
            
            return console.log('this.fila[i].nome');
        }
        
    }

    estatisticas() {
        return {
            naFila: this.fila.size(),
            atendidos: this.clientesAtendidos
        };
    }
}

const sistema = new SistemaAtendimento();


console.log("\n--------------------");
console.log('Adicionando clientes:');

sistema.adicionarCliente("João");
sistema.adicionarCliente("Maria");
sistema.adicionarCliente("Pedro");
sistema.adicionarCliente("Ronan");
sistema.adicionarCliente("Cida");
console.log("Adicionado clientes.");

console.log("\n--------------------");
console.log('Atendendo clientes:');

let clienteAtendido = sistema.atenderProximo();
console.log(`Atendido: ${clienteAtendido.nome}`);
sistema.exibirFila();

clienteAtendido = sistema.atenderProximo();
console.log(`Atendido: ${clienteAtendido.nome}`);
sistema.exibirFila();

clienteAtendido = sistema.atenderProximo();
console.log(`Atendido: ${clienteAtendido.nome}`);
sistema.exibirFila();

console.log("\n--------------------");
console.log('Próximo a ser atendido:');
const proximo = sistema.verProximo();
console.log(`Próximo: ${proximo.nome} (ID: ${proximo.id})`);

console.log("\n--------------------");
console.log('Estatísticas:');
const stats = sistema.estatisticas();
console.log(`Clientes na fila: ${stats.naFila}`);
console.log(`Clientes atendidos: ${stats.atendidos}`);
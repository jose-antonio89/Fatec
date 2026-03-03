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

module.exports = Fila;
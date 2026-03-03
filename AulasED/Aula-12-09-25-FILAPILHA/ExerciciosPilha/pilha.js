class Pilha {
    #items = [];
    #topo = -1;

    push(elemento) {
        this.#topo++;
        this.#items[this.#topo] = elemento;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const item = this.#items[this.#topo];
        delete this.#items[this.#topo];
        this.#topo--;
        
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.#items[this.#topo];
    }

    isEmpty = () => this.#topo === -1;
    
    size = () => this.#topo + 1;

    clear() {
        this.#items = [];
        this.#topo = -1;
    }

    toString() {
        if (this.isEmpty()) {
            return "Pilha vazia";
        }
        
        let elementos = [];
        for (let i = this.#topo; i >= 0; i--) {
            elementos.push(this.#items[i]);
        }
        return elementos.join(" -> ");
    }
}

module.exports = Pilha;
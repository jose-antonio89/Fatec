class Pilha {

    // Usamos uma lista para armazenar os elementos da pilha
    #items = [];
    // Mantemos o controle do tamanho da pilha
    #tamanho = 0;

    add(elemento) {
        // Insere o elemento na posição correspondente ao tamanho atual
        this.#items[this.#tamanho] = elemento;

        // Icrementa o tamanho
        this.#tamanho++;
    }

    remove() {

        // Se a pilha estiver vazia, retorna undefined
        if (this.#tamanho === 0) {
            return undefined;
        }

        // Pega o item no topo da pilha
        const ultimoItem = this.#items[this.#tamanho - 1];

        // Remove o item do topo
        delete this.#items[this.#tamanho - 1];

        // Decrementa o tamanho da pilha
        this.#tamanho--;

        // Retorna o item removido
        return ultimoItem;
    }

    top() {

        // Se a pilha estiver vazia, retorna undefined
        if (this.#tamanho === 0) {
            return undefined;
        }

        // Retorna o item no topo da pilha
        return this.#items[this.#tamanho - 1];
    }

    clean() {

        // Reseta a pilha
        this.#items = [];

        // Reinicia o tamanho
        this.#tamanho = 0;
    }

    // Verifica se a pilha está vazia
    // Verifica se o tamanho da pilha é igual a zero
    isEmpty = () => this.#tamanho === 0;

    // Retorna o tamanho da pilha
    size = () => this.#tamanho;

    search(value) {
        for (let i = this.#items.length - 1; i >= 0; i--) {
            if (this.#items[i] === value) {
                return this.#items.length - 1 - i; // Posição do topo (0 = topo)
            }
        }
        return -1; // Não encontrado
    }

    find(value) {
        for (let i = 0; i < this.#items.length; i++) {
            if (this.#items[i] === value) {
                return this.#items[i];
            }
        }
        return undefined;
    }

}

module.exports = Pilha;
class Fila {

    #items = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento) {

        // Coloca o elemento no final da fila
        this.#items[this.#fim] = elemento;

        // Incrementa o índice do fim
        this.#fim++;
    }

    dequeue() {

        // se a fila estiver vazia, retorna undefined
        if (this.isEmpty()) {
            return undefined;
        }

        // Obtem o elemento no início da fila
        const item = this.#items[this.#inicio];

        // Remove o elemento do início da fila
        delete this.#items[this.#inicio];

        // Incrementa o índice do início
        this.#inicio++;

        // Quando o inicio e o fim estiverme alinhados, redefine a fila
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        // Retorna o elemento removido
        return item;
    }

    front() {

        // Se a fila estiver vazia, retorna undefined
        if (this.isEmpty()) {
            return undefined;
        }

        // Retorna o primeiro elemento
        return this.#items[this.#inicio];
    }

    // Verifica se a fila está vazia
    // Verifica se o índice do fim é igual ao índice do início
    isEmpty = () => this.#fim === this.#inicio;

    // Retorna o tamanho da fila
    // calcula a diferença entre o índice do fim e o índice do início
    size = () => this.#fim - this.#inicio;

    clean() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }

    removeValue(value) {
        for (let i = this.#inicio; i < this.#fim; i++) {
            if (this.#items[i] === value) {
                // Remove o elemento e reorganiza a fila
                for (let j = i; j < this.#fim - 1; j++) {
                    this.#items[j] = this.#items[j + 1];
                }
                this.#fim--;
                delete this.#items[this.#fim];
                return true; // Remoção bem sucedida
            }
        }
        return false; // Valor não encontrado
    }

    search(value) {
        for (let i = this.#inicio; i < this.#fim; i++) {
            if (this.#items[i] === value) {
                return i - this.#inicio; // Retorna posição relativa ao início
            }
        }
        return -1; // Não encontrado
    }
}

module.exports = Fila;
class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

class ListaEncadeada {
    #head = undefined;
    #tail = undefined;  // ← ADICIONE ESTA LINHA - REFERÊNCIA AO ÚLTIMO
    #length = 0;

    insertAtBeggining(value) {
        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        
        // Se a lista estava vazia, atualiza o tail também
        if (this.#tail === undefined) {
            this.#tail = newNode;
        }
        
        this.#length++;
    }

    insertAtEnd(value) {
        let newNode = new Node(value);

        if (this.#head === undefined) {
            // Lista vazia - head e tail apontam para o mesmo nó
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            // Lista não vazia - usa o tail para inserção O(1)
            this.#tail.next = newNode;
            this.#tail = newNode;  // Atualiza o tail para o novo nó
        }

        this.#length++;
    }

    removeByValue(value) {
        if (this.#head === undefined) {
            return;
        }

        // Caso especial: remoção do primeiro nó
        if (this.#head.value === value) {
            this.#head = this.#head.next;
            this.#length--;
            
            // Se a lista ficou vazia, atualiza o tail também
            if (this.#head === undefined) {
                this.#tail = undefined;
            }
            return;
        }

        // Percorre a lista procurando o nó anterior ao que será removido
        let current = this.#head;
        while (current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        // Se encontrou o nó a ser removido
        if (current.next !== undefined) {
            // Se estamos removendo o último nó, atualiza o tail
            if (current.next === this.#tail) {
                this.#tail = current;
            }
            
            current.next = current.next.next;
            this.#length--;
        }
    }

    find(value) {
        let current = this.#head;
        while(current !== undefined) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return undefined;
    }

    size() {
        return this.#length;  // Agora O(1) em vez de O(n)
    }

    isEmpty = () => this.#head === undefined;

    ToString() {
        let current = this.#head;
        let list = '';
        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}

// Exportação corrigida
module.exports = ListaEncadeada;
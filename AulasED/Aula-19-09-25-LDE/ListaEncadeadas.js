class Node {
    constructor(value) {
        this.value = value;

        // Ponteiro para o próximo nó
        this.next = undefined;
    }
}

class ListaEncadeada {

    #head = undefined;
    #length = 0;

insertAtBeggining(value) {
        //Cria um novo nó
        let newNode = new Node(value);
        // O novo nó apota para o antigo "head"
        newNode.next = this.#head;
        // Atualiza o "head" o novo nó
        this.#head = newNode;
        // Incrementa o tamanho da lista
        this.#length++;
    }

insertAtEnd(value) {
        let newNode = new Node(value);

        // Se a lista estiver vazia, o novo nó se torna o "head"
        if (this.#head === undefined) {
            this.#head = newNode;
            return
        }

        // Percorre até o último nó
        let current = this.#head;
        while (current.next !== undefined) {
            current = current.next;
        }

        // Faz o último nó apontar para o novo nó
        current.next = newNode;

        this.#length++;
    }

removeByValue(value) {

        // Ver se a lista está vazia
        if (this.#head === undefined) {
            return;
        }

        // Se o valor a ser removido estiver no primeiro nó
        if (this.#head.value === value) {

            // Atualiza o "head" para o próximo nó
            this.head = this.#head.next;
            return;
        }

        // Percorre a lista procurando o nó a ser removido
        let current = this.#head;
        while (current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        // Se o nó foi encontrado, ajusta o ponteiro para o pular o nó removido
        if (current.next !== undefined) {
            current.next = current.next.next;
            this.#length--;
        }
    }

find(value) {
        let current = this.#head;

        // Percorre a lista até encontrar o nó ou até o final
        while(current !== undefined) {
            //console.log(current.value);
            if (current.value === value) {
                return current; // Nó encontrado
            }
            current = current.next;
        }

        return undefined; // Se não encontrar retorna null

    }
size(value) {
        let count = 0;
        let current = this.#head;
        while (current !== undefined) {
            count++;
            current = current.next;
        }
        return count;
    }

isEmpty = () => this.#head === undefined;

ToString () {
        let current = this.#head;
        let list = '';
        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}

module.exports = Node;
module.exports = ListaEncadeada;
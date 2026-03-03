class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined; // Próximo nó
        this.prev = undefined; // Nó anterior
    }
}

class ListaDupEncadeada{

    #head = undefined; // Primeiro nó (cabeça)
    #tail = undefined; // Último nó (cauda)
    #lenght = 0; // Tamanho da lista

    // Serve para adicionar um nó no final da lista    
    append(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.prev = this.#tail;
            this.#tail.next = newNode;
            this.#tail = newNode;
        }

        this.#lenght++;
    }

    // Serve para adicionar um nó no início da lista
    prepend(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        this.#lenght++;
    }

    // Remove o último nó da lista
    removeLast() {
        if (this.#tail === undefined) return undefined;

        const removedNode = this.#tail;
        if (this.#tail === this.#head) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail = this.#tail = undefined;
            this.#tail.next = undefined;
        }
        this.#lenght--;
        return removedNode.value; 
    }

    // Remove o primeiro nó da lista
    removeFirst() {
        if (this.#head === undefined) return undefined;

        const removedNode = this.#head;
        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = undefined;
        }

        this.#lenght--;
        return removedNode.value;
    }

    // Reccore a lista e aplica uma função a cada nó
    traverse() {
        if(this.isEmpty()) {
            console.log("A lista está vazia.");
            return;
        }

        let current = this.#head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Recorre a lista de trás para frente e aplica uma função a cada nó
    traverseReverse() {
        if(this.isEmpty()) {
            console.log("A lista está vazia.");
            return;
        }

        let current = this.#tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // Insere um nó em uma posição específica
    insertAt(value, index) {
        if (index < 0 || index > this.#lenght) return undefined;

        const newNode = new Node(value);

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.#lenght) {
            this.append(value);
            return;
        }

        let current = this.#head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        newNode.prev = previous;
        previous.next = newNode;
        current.prev = newNode;

        this.#lenght++;
    }

    // Remover um nó em uma posição específica
    removeAt(index) {
        if (index < 0 || index >= this.#lenght) return null;

        if (index === 0) return this.removeFirst();
        if (index === this.#lenght - 1) return this.removeLast();

        let current = this.#head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#lenght--;
        return current.value;
    }

    // Encontra o índice de um valor específico na lista
    find (value) {
        let current = this.#head;
        let index = 0;

        while (current) {
            if (current.value === value) 
                return index; // valor encontrado

                current = current.next;
                index++;

                return -1; // valor não encontrado
        }
    }

    size = ()  => this.#lenght;

    isEmpty = () => this.#lenght === 0;

    toString() {
        let current = this.#head;
        let list = '';

        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}

let lista = new ListaDupEncadeada();

lista.append('Fábrica');
lista.append('Transporte Marítimo');
lista.append('Centro de Distribuição');
lista.append('Transporte Terrestre');
lista.append('Loja Varejista');

lista.insertAt('Controle de Qualidade', 1);

console.log("--------------------------------");

console.log("Exibir processos:");
lista.traverse();

console.log("--------------------------------");

console.log("Exibir Processos inversamente:");
lista.traverseReverse();

console.log("--------------------------------");

console.log("Remover Transporte Marítimo:");
lista.removeAt(2);
lista.traverse();

console.log("--------------------------------");

console.log("Exibir processos:");
lista.traverse();
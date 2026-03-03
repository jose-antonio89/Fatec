// Classe Node pra representar um nó na árvore binária
class Node {
    constructor(value) {
        this.value = value; // Valor armazenado no nó
        this.left = undefined;   // Referencia para o no filho a esquerda
        this.right = undefined;  // Referencia para o no filho a direita
    }
}

// Classe BinaryTree para representar a árvore binária
class BinaryTree {
    constructor() {
        this.root = undefined; // Inicialmente, a arvore está vazia, então a raiz é undefined
    }

    // Método para inserir um valor na árvore
    insert(value) {
        const newNode = new Node(value); // Cria um novo nó com o valor dado
        if (this.root === undefined) {
            // Se a árvore estiver vazia, o novo nó se torna a raiz
            this.root = newNode;
        } else {
            // Caso contrário, insere o nó na posição correta
            this._insertNode(this.root, newNode);
        }
    }

    // Método auxiliar para encontrar a posição correta e inserir o nó na árvore
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === undefined) {
                // Se não houver nó a esquerda, insere o novo nó aqui 
                node.left = newNode;
            } else {
                // Caso contrário, chama o método recursivamente na subarvore
                this._insertNode(node.left, newNode);
            }
        } else {
            // Se o valor do novo nó for maior ou igual ao valor do nó atual, vá para a subarvore direita
            if (node.right === undefined) {
                // Se não houver nó a direita, insere o novo nó aqui
                node.right = newNode;
            } else {
                // Caso contrário, chama o método recursivamente na subárvore direita
                this._insertNode(node.right, newNode);
            }
        }

    }

    // Percuso em-ordem: visita a subárvore esquerda, o nó atual e a subarvore direita
    inOrder(node = this.root) {
        if (node !== undefined) {
            this.inOrder(node.left);  // Visita a subárvore esquerda
            console.log(node.value);  // Visita o nó atual
            this.inOrder(node.right); // Visita a subárvore direita
        }

    }

    // Percurso pré-ordem: visita o nó atual, a subárvore esquerda e a subárvore direita
    preOrder(node = this.root) {
        if (node !== undefined) {
            console.log(node.value);   // Visita o nó atual
            this.preOrder(node.left);  // Visita a subárvore esquerda
            this.preOrder(node.right); // Visita a subárvore direita
        }

    }

    // Percurso pós-ordem visita a subávore esquerda, a subárvore direita e o nó atual
    postOrder(node = this.root) {
        if (node !== undefined) {
            this.postOrder(node.left);  // Visita a subárvore esquerda
            this.postOrder(node.right); // Visita a subárvore direita
            console.log(node.value);    // Visita o nó atual
        }
    }

    // Método para buscar um valor na árvore
    search(value) {
        return this._searchNode(this.root, value); // Inicia a busca a partir da raiz
    }

    // Método auxiliar para realizar a busca recursivamente
    _searchNode(node, value) {
        if (node === undefined) {
            // Se o nó atual é undefined, o valor não está na árvore
            return false;
        } if (value === node.value) {
            // Se o valor é encontrado, retorna true 
            return true;
        } else if (value < node.value) {
            // Se o valor procurado é menor, continua a busca na subarvore esquerda
            return this._searchNode(node.left, value);
        } else {
            // Se o valor procurado é maior continua a busca na subárvore direita
            return this._searchNode(node.right, value);
        }
    }

    // Caso base: se não há nó à esquerda, encontramos o nó mínimo
    // Pois em uma BST, o menor valor sempre estará no extremo esquerdo
    _findMinNode(node) {
        if (node.left === undefined) {
            return node;
        } else {
            // Caso recursivo: continua procurando no filho esquerdo
            // até encontrar o nó mais à esquerda (que não tem left child)
            return this._findMinNode(node.left);
        }
    }

    // Método para remover um nó com o valor especificado
    remove(value) {
        this.root = this._removeNode(this.root, value); // Inicia a remoção a partir da raiz
    }

    _removeNode(node, value) {
        if (node === undefined) {
            return undefined; // Se o nó é undefined, não há nada para remover
        }

        if (value < node.value) {
            // Se o valor a ser removido é menor, continua na subárvore esquerda 
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            // Se o valor a ser removido é maior, continua na subárvore direita
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            // Se o valor é igual ao nó atual, este é o nó a ser removido

            // Caso 1: Nó sem filhos (nó folha)
            if (node.left === undefined && node.right === undefined) {
                node = undefined; // Remove o nó ao definir como undefined
                return node;
            }

            // Caso 2: Nó com um filho
            if (node.left === undefined) {
                node = node.right;
                return node;
            } else if (node.right === undefined) {
                node = node.left;
                return node;
            }

            // Caso 3: Nó com dois filhos
            // Encontra o nó com o menor valor na subárvore direita
            const aux = this._findMinNode(node.right);
            node.value = aux.value; // Substitui o valor do nó atual pelo valor mínimo encontrado
            node.right = this._removeNode(node.right, aux.value); // Remove o nó duplicado na subárvore direita
            return node;
        }
    }
}


module.exports = BinaryTree;
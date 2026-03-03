class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Todo nó começa com altura 1 
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Função utilitária para obter a altura de um nó
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Calcula o fator de balanceamento de um nó
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Atualiza a altura de um nó
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Rotação simples à direita
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y)
        this.updateHeight(x)

        return x;
    }

    // Rotação simples à esquerda
    rotateLeft(x) {
        const y = x.left;
        const T2 = y.right;

        y.right = x;
        x.left = T2;

        this.updateHeight(x)
        this.updateHeight(y)

        return y;
    }

    // Inserção com balanceamento AVL
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (!node) return new AVLNode(value)

        if (value < node.value) {
            node.left = this._insert(node.left, value)
        } else if (value > node.value) {
            node.right = this._insert(node.right, value)
        } else {
            return node; // Valor dupicado não é inserido
        }

        this.updateHeight(node)
        const balance = this.getBalanceFactor(node);

        // Casos de desbalanceamento:
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node); // Esquerda-Esquerda
        }
        if (balance < -1 && value > node.rigt.value) {
            return this.rotateLeft(node); // Direita-Direita
        }

        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node); // Esquerda-Direita
        }

        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node); // Direita-Esquerda
        }

        return node;
    }

    // Exibir percursos in-order (opcional)
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
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

module.exports = AVLTree;
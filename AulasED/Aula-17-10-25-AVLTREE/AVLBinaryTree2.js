class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    updateHeight(node) {
        if (node) {
            node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        }
    }

    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        // 1. Inserção normal de BST
        if (node === null) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node; // Valores duplicados não são permitidos
        }

        // 2. Atualizar altura do nó atual
        this.updateHeight(node);

        // 3. Obter o fator de balanceamento
        const balance = this.getBalanceFactor(node);

        // 4. Casos de desbalanceamento:

        // Caso Esquerda-Esquerda (LL)
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Caso Direita-Direita (RR)
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Caso Esquerda-Direita (LR)
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Caso Direita-Esquerda (RL)
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }
        
        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
    }

    _findMinNode(node) {
        let current = node;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current;
    }

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        // 1. Remoção padrão de BST
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._removeNode(node.right, value);
        } else {
            // Nó com apenas um filho ou nenhum filho
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Nó com dois filhos: pegar o sucessor in-order (menor na subárvore direita)
            const temp = this._findMinNode(node.right);
            node.value = temp.value;
            node.right = this._removeNode(node.right, temp.value);
        }

        // Se a árvore tinha apenas um nó
        if (node === null) {
            return node;
        }

        // 2. Atualizar altura
        this.updateHeight(node);

        // 3. Obter o fator de balanceamento
        const balance = this.getBalanceFactor(node);

        // 4. Casos de balanceamento:

        // Caso Esquerda-Esquerda (LL)
        if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
            return this.rotateRight(node);
        }

        // Caso Esquerda-Direita (LR)
        if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Caso Direita-Direita (RR)
        if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
            return this.rotateLeft(node);
        }

        // Caso Direita-Esquerda (RL)
        if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Método para visualizar a árvore (útil para debug)
    print(node = this.root, prefix = "", isLeft = true) {
        if (node !== null) {
            console.log(prefix + (isLeft ? "├── " : "└── ") + node.value + ` (h:${node.height})`);
            this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
            this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }
    }

    // Método para verificar se a árvore está balanceada (útil para debug)
    isBalanced(node = this.root) {
        if (node === null) {
            return true;
        }
        
        const balance = this.getBalanceFactor(node);
        if (Math.abs(balance) > 1) {
            return false;
        }
        
        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
}

module.exports = AVLTree;
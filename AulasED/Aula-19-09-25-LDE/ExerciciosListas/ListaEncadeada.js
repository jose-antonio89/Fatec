class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
        this.tamanho = 0;
    }

    // Adiciona no início
    adicionarInicio(valor) {
        const novoNo = new No(valor);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
        this.tamanho++;
    }

    // Adiciona no final
    adicionarFinal(valor) {
        const novoNo = new No(valor);
        
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        this.tamanho++;
    }

    // Remove um valor específico
    remover(valor) {
        if (!this.cabeca) {
            return false;
        }

        // Se é o primeiro nó
        if (this.cabeca.valor === valor) {
            this.cabeca = this.cabeca.proximo;
            this.tamanho--;
            return true;
        }

        let atual = this.cabeca;
        while (atual.proximo) {
            if (atual.proximo.valor === valor) {
                atual.proximo = atual.proximo.proximo;
                this.tamanho--;
                return true;
            }
            atual = atual.proximo;
        }
        return false;
    }

    // Busca um valor
    buscar(valor) {
        let atual = this.cabeca;
        let posicao = 0;
        
        while (atual) {
            if (atual.valor === valor) {
                return { encontrado: true, posicao: posicao };
            }
            atual = atual.proximo;
            posicao++;
        }
        return { encontrado: false, posicao: -1 };
    }

    // Verifica se está vazia
    estaVazia() {
        return this.tamanho === 0;
    }

    // Exibe a lista
    exibir() {
        let elementos = [];
        let atual = this.cabeca;
        
        while (atual) {
            elementos.push(atual.valor);
            atual = atual.proximo;
        }
        
        return elementos.join(" -> ");
    }

    // Retorna o tamanho
    obterTamanho() {
        return this.tamanho;
    }
}

module.exports = ListaEncadeada;
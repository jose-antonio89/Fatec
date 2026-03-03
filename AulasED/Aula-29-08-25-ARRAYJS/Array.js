class MeuArray {

    constructor() {
        // Usamos uma lista para
        // Armazenar os elementos do array
        this.items = [];

        // Mantemos o controle do tamanho do array
        this.tamanho = 0;
    }

    // Adiciona um elemento ao final do array
    adicionar(elemento) {

        // Insere o elemento na posição correspondente ao tamanho atual
        this.items[this.tamanho] = elemento;

        // Icrementa o tamanho
        this.tamanho++;
    }

    // Remove o último elemento do array
    remover() {
        // Se o array estiver vazio, retorna undefined
        if (this.tamanho === 0) {
            return undefined;
        }

        // Armazena o ultimo item
        const ultimoItem = this.items[this.tamanho - 1];

        // Remove o item do final
        delete this.items[this.tamanho - 1];

        // Decrementa o tamanho do array
        this.tamanho--;

        // Retorna o item removido
        return ultimoItem;
    }

    // Acessa o elemento no índice especificado
    obterElemento(indice) {
        // Se o índice for inválido, retorna undefined
        if (indice < 0 || indice >= this.tamanho) {
            return undefined;
        }

        // Retorna o elemento no índice especificado
        return this.items[indice];
    }

    obterIndice(elemento) {
        // Percorre o array
        for (let i = 0; i <= this.tamanho; i++) {
            // Verifica se o item é igual ao parâmetro
            if (this.itens[i] === elemento) {
                return i
            }
        }
    }

    // Retorna o tamanho atual do array
    tamanhoArray() {
        // Retorna o tamanho do array
        return this.tamanho;
    }

    // Remove todos os elementos do array
    limpar() {
        // Limpa o array
        this.items = [];

        // Reinicializa o tamanho
        this.tamanho = 0;
    }

    editar(indice, novoValor) {
        if (indice < 0 || indice >= this.tamanho) {
            // Se o índice estiver fora do alcance retorna undefined
            return undefined
        }

        // Armazena o item editado
        const itemEditado = this.itens[indice]

        // Atribui o novo valor
        this.itens[indice] = novoValor

        return itemEditado // Retorna o item editado
    }

    obterValor(valorProcurado) {
        // Percorre todo o array
        for (let i = 0; i < this.tamanho; i++) {
            // Se encontrar o valor, retorna true
            if (this.items[i] === valorProcurado) {
                return true;
            }
        }
        // Se não encontrar, retorna false
        return false;
    }

    // MÉTODO PARA REMOVER UM VALOR ESPECÍFICO
    removerValor(valor) {
        // Procura o índice do valor
        for (let i = 0; i < this.tamanho; i++) {
            if (this.items[i] === valor) {
                // Remove o elemento no índice encontrado
                return this.removerNoIndice(i);
            }
        }
        // Retorna undefined se o valor não foi encontrado
        return undefined;
    }

    // MÉTODO AUXILIAR PARA REMOVER EM UM ÍNDICE ESPECÍFICO
    removerNoIndice(indice) {
        if (indice < 0 || indice >= this.tamanho) {
            return undefined;
        }

        // Armazena o item que será removido
        const itemRemovido = this.items[indice];

        // Desloca todos os elementos à direita do índice uma posição para esquerda
        for (let i = indice; i < this.tamanho - 1; i++) {
            this.items[i] = this.items[i + 1];
        }

        // Remove a última posição (que agora está duplicada)
        delete this.items[this.tamanho - 1];
        this.tamanho--;

        return itemRemovido;
    }

    // MÉTODO PARA REMOVER TODAS AS OCORRÊNCIAS DE UM VALOR
    removerTodosValores(valor) {
        let removidos = 0;
        
        // Percorre do final para o início para evitar problemas de índice
        for (let i = this.tamanho - 1; i >= 0; i--) {
            if (this.items[i] === valor) {
                this.removerNoIndice(i);
                removidos++;
            }
        }
        
        return removidos; // Retorna quantos elementos foram removidos
    }

}



module.exports = MeuArray;
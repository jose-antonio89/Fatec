
/* Meu Array */

class MeuArray {
    
    constructor() {
        // Usamos uma lista para
        // Armazenar os elementos do array
        this.items = [];

        // Mantemos o controle do tamanho do array
        this.tamanho = 0;
    }

    exibirTodos() {
        return this.items;
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

    // Retorna o tamanho atual do array
    tamanho() {
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

}

/* Meu Array */

/* Carrinho */

class Carrinho {
    constructor() {
        this.produtos = new MeuArray();
    }

    adicionarProduto(produto) {
        this.produtos.adicionar(produto);
    }

    removerUltimoProduto() {
        return this.produtos.remover();
    }

    exibirProdutos() {
        let produtos_nome = [];

        this.produtos.exibirTodos().forEach(produtos => {
            produtos_nome.push(produtos.nome)    
        });
        
        return produtos_nome;
    }
}


/* Carrinho */


/* Pilha */

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

    clean () {

        // Reseta a pilha
        this.#items = [];

        // Reinicia o tamanho
        this.#tamanho = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "Fila vazia";
        }
        
        let elementos = [];
        for (let i = 0; i < this.#tamanho; i++) {
            elementos.push(this.#items[i]);
        }
        return elementos.join(" -> ");
    }

    // Verifica se a pilha está vazia
    // Verifica se o tamanho da pilha é igual a zero
    isEmpty = () => this.#tamanho === 0;
    
    // Retorna o tamanho da pilha
    size = () => this.#tamanho;

}

/* Pilha */

class Ecommerce {
    constructor() {
        this.pilha = new Pilha();
    }

    adicionarNavegacao(nomeFeitico) {
        this.pilha.add(nomeFeitico);
    }

    verTopo() {
        return this.pilha.top();
    }

    exibirNavegacao() {
        console.log("Navegando para: " + this.pilha.toString());
    }

    voltarPagina() {
        return this.pilha.remove();
    }
}

// ---

const abas = new Ecommerce();

console.log("\n--------------------");
console.log('Abas abertas:');

abas.adicionarNavegacao("Home");
abas.adicionarNavegacao("Produtos");
abas.adicionarNavegacao("Produto A");
abas.adicionarNavegacao("Checkut");

abas.exibirNavegacao();

console.log("\n--------------------");
// Retornar abas
console.log("Retornando 2 páginas:");

abas.voltarPagina();
abas.exibirNavegacao();

abas.voltarPagina();
abas.exibirNavegacao();

console.log("\n--------------------");
console.log(`Página atual: ${abas.verTopo()}`);

let carrinho = new Carrinho();

carrinho.adicionarProduto({
    nome: 'Mouse',
    preco: 20
});

carrinho.adicionarProduto({
    nome: 'Monitor',
    preco: 1200
});

carrinho.adicionarProduto({
    nome: 'Teclado',
    preco: 200
});

console.table(carrinho.exibirProdutos());
carrinho.removerUltimoProduto();

console.log("Remover Último Produto");
console.table(carrinho.exibirProdutos());

console.log("Itens restantes:");

console.table(carrinho.exibirProdutos());

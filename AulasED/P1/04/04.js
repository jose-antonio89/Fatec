
/* Meu Array */

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

}

/* Meu Array */

class Produtos {

    constructor() {
        this.array = new MeuArray();
    }

    adicionar(produto) {
        this.array.adicionar(produto)
    }

    buscarProdutoPorSkuNoArray(sku) {

        this.array.items.forEach(produto => {
            if (produto.codigo === sku) {
                console.table(produto);
            }
        });
    }

    retornarTodosProdutos() {

        let produtos_nome = [];

        this.array.items.forEach(produtos => {
            produtos_nome.push(produtos.nome);
        });

        return produtos_nome;
    }
}

let produtos = new Produtos();

produtos.adicionar({
    nome: 'Monitor',
    estoque: 5,
    codigo: 'MN-001',
    time: Math.floor(Math.random() * 3) + 1
});

produtos.adicionar({
    nome: 'Mouse',
    estoque: 20,
    codigo: 'MO-002',
    time: Math.floor(Math.random() * 3) + 1
});

produtos.adicionar({
    nome: 'Mesa',
    estoque: 67,
    codigo: 'ME-003',
    time: Math.floor(Math.random() * 3) + 1
});

produtos.adicionar({
    nome: 'Garrafa',
    estoque: 90,
    codigo: 'GA-004',
    time: Math.floor(Math.random() * 3) + 1
});

produtos.adicionar({
    nome: 'Camisa',
    estoque: 2,
    codigo: 'CA-005',
    time: Math.floor(Math.random() * 3) + 1
});

console.table(produtos.retornarTodosProdutos());

console.log('-----------------------');

console.log("Buscar pro Sku: CA-005");
produtos.buscarProdutoPorSkuNoArray('CA-005');

console.log("Buscar por Sku: ME-003");
console.time(produtos.buscarProdutoPorSkuNoArray('ME-003'));

const catalogo = new Map();



catalogo.set('MN-001', {
    nome: 'Monitor',
    estoque: 5,
});

catalogo.set('MO-002', {
    nome: 'Mouse',
    estoque: 20,
});

catalogo.set('ME-003', {
    nome: 'Mesa',
    estoque: 67,
});

catalogo.set('GA-004', {
    nome: 'Garrafa',
    estoque: 90,
});

catalogo.set('GA-004', {
    nome: 'Garrafa',
    estoque: 90
});

console.log('-----------------------');

console.log("Buscando o código: GA-004 com map.");
console.table(catalogo.get('GA-004'));

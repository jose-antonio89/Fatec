class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" adicionado ao carrinho.`);
    }

    total() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

module.exports = Carrinho;
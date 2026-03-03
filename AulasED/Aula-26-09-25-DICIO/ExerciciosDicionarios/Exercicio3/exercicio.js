// Exercício 3: Catálogo de Produtos
class CatalogoProdutos {
    constructor() {
        this.produtos = {};
    }

    adicionarProduto(codigo, nome, preco) {
        this.produtos[codigo] = { nome, preco };
    }

    obterProduto(codigo) {
        return this.produtos[codigo];
    }

    listarProdutosAcimaDe(precoMinimo) {
        console.log(`=== PRODUTOS ACIMA DE R$ ${precoMinimo} ===`);
        let encontrou = false;
        
        for (const codigo in this.produtos) {
            const produto = this.produtos[codigo];
            if (produto.preco > precoMinimo) {
                console.log(`Código: ${codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
                encontrou = true;
            }
        }
        
        if (!encontrou) {
            console.log("Nenhum produto encontrado.");
        }
    }

    exibirTodosProdutos() {
        console.log("=== CATÁLOGO COMPLETO ===");
        for (const codigo in this.produtos) {
            const produto = this.produtos[codigo];
            console.log(`Código: ${codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
        }
    }

    obterEstatisticas() {
        let totalValor = 0;
        let produtoMaisCaro = { preco: 0 };
        
        for (const codigo in this.produtos) {
            const produto = this.produtos[codigo];
            totalValor += produto.preco;
            if (produto.preco > produtoMaisCaro.preco) {
                produtoMaisCaro = produto;
            }
        }
        
        return {
            totalProdutos: Object.keys(this.produtos).length,
            valorMedio: totalValor / Object.keys(this.produtos).length,
            produtoMaisCaro: produtoMaisCaro
        };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 3 - CATÁLOGO DE PRODUTOS");

const catalogo = new CatalogoProdutos();

console.log("\n--- Adicionando produtos ---");
catalogo.adicionarProduto("P001", "Notebook", 2500.00);
catalogo.adicionarProduto("P002", "Mouse", 45.90);
catalogo.adicionarProduto("P003", "Teclado", 120.00);
catalogo.adicionarProduto("P004", "Monitor", 800.00);
catalogo.adicionarProduto("P005", "Cabo USB", 15.50);

catalogo.exibirTodosProdutos();

console.log("\n--- Produtos acima de R$ 50,00 ---");
catalogo.listarProdutosAcimaDe(50);

const stats = catalogo.obterEstatisticas();
console.log(`\nTotal de produtos: ${stats.totalProdutos}`);
console.log(`Preço médio: R$ ${stats.valorMedio.toFixed(2)}`);
console.log(`Produto mais caro: ${stats.produtoMaisCaro.nome} - R$ ${stats.produtoMaisCaro.preco.toFixed(2)}`);

module.exports = CatalogoProdutos;
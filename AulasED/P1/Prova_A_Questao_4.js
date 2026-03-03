// Para executar este arquivo, você precisará do 'MeuArray.js'.
// E rodar o comando: node Prova_A_Questao_4.js

const MeuArray = require('./MeuArray.js'); // Supondo que foi alterado para CommonJS

console.log("### Exercício 4: Solução - Otimização de Consulta ###\n");

// Dados de exemplo
const produtosParaTeste = [
    { sku: 'TV-001', nome: 'Smart TV 50"', estoque: 15 },
    { sku: 'CEL-002', nome: 'Smartphone 8GB RAM', estoque: 30 },
    { sku: 'NOTE-003', nome: 'Notebook i7', estoque: 10 },
    { sku: 'FONE-004', nome: 'Fone Bluetooth', estoque: 50 },
    { sku: 'TAB-005', nome: 'Tablet 10"', estoque: 25 }
];
const skuParaBuscar = 'NOTE-003'; // SKU que vamos procurar

// ================= PARTE A: Abordagem com Array =================
console.log("--- Parte A: Busca com Array Customizado (Lenta) ---");

// 1 e 2. Instancia e popula o MeuArray
const arrayDeProdutos = new MeuArray();
produtosParaTeste.forEach(p => arrayDeProdutos.adicionar(p));

// 3. Função de busca no array
function buscarProdutoPorSkuNoArray(sku, arr) {
    const tamanho = arr.tamanhoArray();
    // Percorre todos os elementos do array
    for (let i = 0; i < tamanho; i++) {
        const produto = arr.obterElemento(i);
        if (produto && produto.sku === sku) {
            return produto; // Retorna o produto se encontrar o SKU
        }
    }
    return undefined; // Retorna undefined se não encontrar
}

// 4. Mede o tempo de busca
console.time('Tempo de busca no Array');
const produtoEncontradoArray = buscarProdutoPorSkuNoArray(skuParaBuscar, arrayDeProdutos);
console.timeEnd('Tempo de busca no Array');

console.log("Produto encontrado:", produtoEncontradoArray);


// ================= PARTE B: Abordagem com Map =================
console.log("\n--- Parte B: Busca com Dicionário/Map (Rápida) ---");

// 1 e 2. Cria e popula o Map
const mapaDeProdutos = new Map();
produtosParaTeste.forEach(p => mapaDeProdutos.set(p.sku, p));

// 3. Função de busca no Map (embora seja tão simples que poderia ser usada diretamente)
function buscarProdutoPorSkuNoMap(sku, mapa) {
    // Acesso direto pela chave, extremamente rápido!
    return mapa.get(sku);
}

// 4. Mede o tempo de busca
console.time('Tempo de busca no Map');
const produtoEncontradoMap = buscarProdutoPorSkuNoMap(skuParaBuscar, mapaDeProdutos);
console.timeEnd('Tempo de busca no Map');

console.log("Produto encontrado:", produtoEncontradoMap);


// ================= PARTE C: Análise =================
console.log("\n--- Parte C: Análise de Desempenho ---");
console.log(`
Análise:

A busca no 'MeuArray' (função buscarProdutoPorSkuNoArray) precisa verificar cada
elemento, um por um, desde o início até encontrar o SKU desejado. Em um cenário
com milhões de produtos, isso seria extremamente lento. A complexidade dessa
operação é linear, ou O(n), onde 'n' é o número de produtos.

Por outro lado, o 'Map' (Dicionário) utiliza uma estrutura interna chamada 'hash table'.
Ela calcula um "endereço" único a partir da chave (o SKU) e armazena o produto
diretamente nesse local. Quando pedimos para buscar por um SKU, ele recalcula
esse endereço e vai direto ao ponto, sem precisar percorrer os outros elementos.
A complexidade dessa busca é, na média, constante, ou O(1).

Isso explica por que a busca no Map é ordens de magnitude mais rápida,
especialmente para grandes volumes de dados, sendo a escolha ideal para
consultas por chaves únicas como um SKU de produto.
`);
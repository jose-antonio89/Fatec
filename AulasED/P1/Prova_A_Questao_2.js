// Para executar este arquivo, você precisará do 'Pilha.js' e 'MeuArray.js'.
// E rodar o comando: node Prova_A_Questao_2.js

// Importa as classes. MinhaPilha usa module.exports, MeuArray usa export default.
// Para MeuArray, precisaríamos de um ambiente com ES Modules (ou um transpilador como Babel).
// Por simplicidade, assumirei que você alterou 'MeuArray.js' para também usar 'module.exports'.
// Se 'MeuArray.js' contiver "export default class MeuArray", altere para "module.exports = class MeuArray".
const MinhaPilha = require('./Pilha.js');
const MeuArray = require('./MeuArray.js'); // Supondo que foi alterado para CommonJS

console.log("### Exercício 2: Solução - Histórico e Carrinho de Compras ###\n");

// ================= PARTE A: Histórico de Navegação =================
console.log("--- Parte A: Histórico de Navegação com Pilha ---");

// 1. Instancia a pilha
const historicoNavegacao = new MinhaPilha();

// 2. Simula a navegação, adicionando páginas à pilha
console.log("Navegando pelas páginas...");
historicoNavegacao.adicionar('Home');
historicoNavegacao.adicionar('Produtos');
historicoNavegacao.adicionar('Produto A');
historicoNavegacao.adicionar('Checkout');
console.log(`Histórico com ${historicoNavegacao.tamanhoPilha()} páginas.`);

// 3. Simula o clique no botão "Voltar" duas vezes
console.log("\nClicando em 'Voltar' 2 vezes...");
const paginaAnterior1 = historicoNavegacao.remover();
console.log(`Voltou da página: ${paginaAnterior1}`);
const paginaAnterior2 = historicoNavegacao.remover();
console.log(`Voltou da página: ${paginaAnterior2}`);

// 4. Mostra a página atual (topo da pilha)
const paginaAtual = historicoNavegacao.topo();
console.log(`\nPágina atual do usuário: ${paginaAtual}`);


// ================= PARTE B: Carrinho de Compras =================
console.log("\n--- Parte B: Carrinho de Compras com Array Customizado ---");

// 1. Instancia o array customizado
const carrinho = new MeuArray();

// 2. Adiciona 3 produtos ao carrinho
console.log("Adicionando produtos ao carrinho...");
carrinho.adicionar({ nome: 'Mouse sem fio', preco: 89.90 });
carrinho.adicionar({ nome: 'Teclado Mecânico', preco: 250.00 });
carrinho.adicionar({ nome: 'Monitor 24"', preco: 999.90 });

// 3. Exibe todos os itens do carrinho
console.log("\nItens no carrinho:");
// O método verItens retorna o array interno, que pode ter "buracos" (empty slots).
// Filtramos para exibir apenas os itens válidos.
console.log(carrinho.verItens().filter(item => item !== undefined));

// 4. Remove o último item adicionado
const itemRemovido = carrinho.remover();
console.log(`\nItem removido do carrinho: ${itemRemovido.nome}`);

// 5. Mostra a quantidade final de itens
console.log(`\nQuantidade final de itens no carrinho: ${carrinho.tamanhoArray()}`);
console.log("Itens restantes:", carrinho.verItens().filter(item => item !== undefined));
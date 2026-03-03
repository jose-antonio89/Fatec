// Para executar este arquivo, você precisará do 'DoublyLinkedList.js'.
// E rodar o comando: node Prova_A_Questao_3.js

const DoublyLinkedList = require('./DoublyLinkedList.js');

console.log("### Exercício 3: Solução - Cadeia de Suprimentos ###\n");

// a) Instancia a lista
const cadeiaSuprimentos = new DoublyLinkedList();

// b) Adiciona as etapas iniciais
console.log("Adicionando etapas iniciais da cadeia de suprimentos...");
cadeiaSuprimentos.append('Fábrica');
cadeiaSuprimentos.append('Transporte Marítimo');
cadeiaSuprimentos.append('Centro de Distribuição');
cadeiaSuprimentos.append('Transporte Terrestre');
cadeiaSuprimentos.append('Loja Varejista');

console.log("\nCadeia de suprimentos inicial:");
cadeiaSuprimentos.toString(); // Usando o método de visualização

// c) Adiciona a etapa 'Controle de Qualidade' na posição 1
console.log("\nAdicionando 'Controle de Qualidade' após 'Fábrica' (índice 1)...");
cadeiaSuprimentos.insertAt('Controle de Qualidade', 1);

// d) Exibe o fluxo completo do início ao fim
console.log("\nFluxo completo (Início -> Fim):");
cadeiaSuprimentos.traverse();

// e) Exibe o fluxo reverso
console.log("\nFluxo reverso (Fim -> Início):");
cadeiaSuprimentos.traverseReverse();

// f) Remove a etapa 'Transporte Marítimo'
// Após a inserção, 'Transporte Marítimo' foi para o índice 2.
console.log("\nRemovendo a etapa 'Transporte Marítimo' (que agora está no índice 2)...");
cadeiaSuprimentos.removeAt(2);

console.log("\nCadeia de suprimentos final após remoção:");
cadeiaSuprimentos.toString();
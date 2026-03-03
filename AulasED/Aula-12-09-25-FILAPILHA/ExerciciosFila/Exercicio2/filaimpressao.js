const FilaImpressao = require('exercicio2.js');

const impressao = new FilaImpressao(3);

console.log("--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Sistema de Impressão Iniciado');
console.log(`Capacidade máxima: ${impressao.estatisticas().capacidade} documentos`);

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Adicionando documentos:');

impressao.adicionarDocumento("Relatório Financeiro", 5);
impressao.exibirFila();
impressao.adicionarDocumento("Contrato Cliente", 3);
impressao.exibirFila();
impressao.adicionarDocumento("Apresentação Comercial", 8);
impressao.exibirFila();

console.log("\n--------------------");
console.log('\x1b[31m%s\x1b[0m', 'Tentando adicionar além da capacidade:');
const resultado = impressao.adicionarDocumento("Documento Extra", 2);
console.log(resultado ? "Documento adicionado" : "ERRO: Fila cheia!");

console.log("\n--------------------");
console.log('\x1b[33m%s\x1b[0m', 'Imprimindo documentos:');

let documento = impressao.imprimirProximo();
console.log(`Impresso: ${documento.nome} (${documento.paginas} páginas)`);
impressao.exibirFila();

documento = impressao.imprimirProximo();
console.log(`Impresso: ${documento.nome} (${documento.paginas} páginas)`);
impressao.exibirFila();

console.log("\n--------------------");
console.log('\x1b[36m%s\x1b[0m', 'Estatísticas:');
const stats = impressao.estatisticas();
console.log(`Documentos na fila: ${stats.naFila}`);
console.log(`Documentos impressos: ${stats.impressos}`);
console.log(`Capacidade disponível: ${stats.disponivel}`);
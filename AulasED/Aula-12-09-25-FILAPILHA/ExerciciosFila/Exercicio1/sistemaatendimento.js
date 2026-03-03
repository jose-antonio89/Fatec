const SistemaAtendimento = require('exercicio1.js');

const sistema = new SistemaAtendimento();

console.log("--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Sistema de Atendimento Iniciado');
sistema.filaVazia() ? console.log("A fila está vazia.") : console.log("A fila não está vazia.");

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Adicionando clientes:');

sistema.adicionarCliente("João");
sistema.exibirFila();
sistema.adicionarCliente("Maria");
sistema.exibirFila();
sistema.adicionarCliente("Pedro");
sistema.exibirFila();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Próximo a ser atendido:');
const proximo = sistema.verProximo();
console.log(`Próximo: ${proximo.nome} (ID: ${proximo.id})`);

console.log("\n--------------------");
console.log('\x1b[33m%s\x1b[0m', 'Atendendo clientes:');

let clienteAtendido = sistema.atenderProximo();
console.log(`Atendido: ${clienteAtendido.nome}`);
sistema.exibirFila();

clienteAtendido = sistema.atenderProximo();
console.log(`Atendido: ${clienteAtendido.nome}`);
sistema.exibirFila();

console.log("\n--------------------");
console.log('\x1b[36m%s\x1b[0m', 'Estatísticas:');
const stats = sistema.estatisticas();
console.log(`Clientes na fila: ${stats.naFila}`);
console.log(`Clientes atendidos: ${stats.atendidos}`);
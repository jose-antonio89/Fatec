// Para executar este arquivo, você precisará do 'Fila.js' na mesma pasta.
// E rodar o comando: node Prova_A_Questao_1.js

// Importa a classe Fila do arquivo correspondente.
// Como o arquivo Pilha.js usa module.exports, usamos require para importar.
const Fila = require('./Fila.js');

console.log("### Exercício 1: Solução - Sistema de Gestão de Atendimento ###\n");

// a) Crie uma instância da classe Fila para gerenciar os chamados.
const filaDeAtendimento = new Fila();
console.log("Fila de atendimento criada.");

// b) Simule a chegada de 5 clientes.
console.log("\nAdicionando 5 clientes à fila...");
const clientes = [
    { id: 1, nome: 'Empresa A' },
    { id: 2, nome: 'Empresa B' },
    { id: 3, nome: 'Empresa C' },
    { id: 4, nome: 'Empresa D' },
    { id: 5, nome: 'Empresa E' }
];

// Adiciona cada cliente à fila usando o método enqueue.
clientes.forEach(cliente => {
    filaDeAtendimento.enqueue(cliente);
    console.log(`Cliente '${cliente.nome}' entrou na fila.`);
});

console.log(`\nTamanho atual da fila: ${filaDeAtendimento.tamanho()}`);


// c) Simule o atendimento dos 3 primeiros clientes.
console.log("\nIniciando atendimento dos 3 primeiros clientes...");

for (let i = 0; i < 3; i++) {
    // Remove o cliente do início da fila.
    const clienteAtendido = filaDeAtendimento.dequeue();
    if (clienteAtendido) {
        console.log(`Atendendo cliente: ${clienteAtendido.nome} (ID: ${clienteAtendido.id})`);
    }
}

// d) A equipe de suporte quer saber quem é o próximo cliente.
console.log("\nVerificando o próximo cliente da fila...");
const proximoCliente = filaDeAtendimento.front();
if (proximoCliente) {
    console.log(`O próximo cliente a ser atendido é: ${proximoCliente.nome}`);
} else {
    console.log("Não há mais clientes na fila.");
}


// e) Exiba no console quantos clientes ainda restam na fila.
console.log(`\nClientes restantes na fila: ${filaDeAtendimento.tamanho()}`);
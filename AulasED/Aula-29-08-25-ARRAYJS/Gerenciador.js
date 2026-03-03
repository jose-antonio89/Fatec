const GerenciadorTarefas = require('exercicio1.js');

const empresa = new GerenciadorTarefas();

console.log("--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Sistema de Gerenciamento de Tarefas');
empresa.semTarefas() ? console.log("Não há tarefas.") : console.log("Há tarefas pendentes.");

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Adicionando tarefas:');

empresa.adicionarTarefa("Reunião com equipe");
empresa.exibirTarefas();
empresa.adicionarTarefa("Relatório mensal");
empresa.exibirTarefas();
empresa.adicionarTarefa("Atualizar documentação");
empresa.exibirTarefas();
empresa.adicionarTarefa("Revisar código");
empresa.exibirTarefas();
empresa.adicionarTarefa("Planejar próximo sprint");
empresa.exibirTarefas();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Acessando tarefas específicas:');
console.log(`Tarefa 1: ${empresa.obterTarefa(0)}`);
console.log(`Tarefa 3: ${empresa.obterTarefa(2)}`);

console.log("\n--------------------");
console.log('\x1b[33m%s\x1b[0m', 'Removendo última tarefa:');
const tarefaRemovida = empresa.removerUltimaTarefa();
console.log(`Tarefa removida: ${tarefaRemovida}`);
empresa.exibirTarefas();

// Demonstração de acesso a índice inválido
empresa.demonstrarAcessoInvalido();

console.log("\n--------------------");
console.log('\x1b[36m%s\x1b[0m', 'Estatísticas:');
const stats = empresa.estatisticas();
console.log(`Total de tarefas: ${stats.total}`);
console.log(`Sem tarefas: ${stats.vazia}`);

console.log("\n" + "=".repeat(50));
console.log('\x1b[35m%s\x1b[0m', 'Respostas das Perguntas:');
console.log("1. O que acontece quando tentamos acessar um índice fora do tamanho do array?");
console.log("   RESPOSTA: Retorna 'undefined' e podemos verificar com o método indiceValido()");
console.log("\n2. Como garantir que a ordem das tarefas seja mantida ao adicionar e remover itens?");
console.log("   RESPOSTA: Usando métodos que mantêm a ordem sequencial (adicionar no final, remover do final)");
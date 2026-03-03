const MeuArray = require("./MeuArray.js");

// Criando uma instância da classe MeuArray
const tarefas = new MeuArray();

// Adicionando cinco tarefas ao array
tarefas.adicionar("Revisar relatório financeiro");
tarefas.adicionar("Preparar apresentação para a diretoria");
tarefas.adicionar("Responder e-mails pendentes");
tarefas.adicionar("Agendar reunião com fornecedores");
tarefas.adicionar("Atualizar documentação interna");

// Removendo a última tarefa adicionada
console.log("Tarefa removida:", tarefas.remover());

// Exibindo todas as tarefas armazenadas
console.log("Lista de tarefas:");
for (let i = 0; i < tarefas.tamanhoArray(); i++) {
    console.log(tarefas.obterElemento(i));
}


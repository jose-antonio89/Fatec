const RegistroFuncionarios = require('exercicio2.js');

const rh = new RegistroFuncionarios();

console.log("--------------------");
console.log('Registro de Funcionários - Treinamento');
rh.registroVazio() ? console.log("O registro está vazio.") : console.log("Há funcionários registrados.");

console.log("\n--------------------");
console.log('Adicionando funcionários:');

rh.adicionarFuncionario("Ana Silva");
rh.exibirFuncionarios();
rh.adicionarFuncionario("Carlos Santos");
rh.exibirFuncionarios();
rh.adicionarFuncionario("Maria Oliveira");
rh.exibirFuncionarios();
rh.adicionarFuncionario("Pedro Costa");
rh.exibirFuncionarios();

console.log("\n--------------------");
console.log('Tentativa de adicionar nome duplicado:');
const resultadoDuplicado = rh.adicionarFuncionario("Ana Silva");
console.log(resultadoDuplicado ? "Nome adicionado" : "ERRO: Nome já existe no registro!");

console.log("\n--------------------");
console.log('Acessando terceiro funcionário:');
const terceiroFuncionario = rh.obterFuncionario(2);
console.log(`Terceiro funcionário: ${terceiroFuncionario}`);

console.log("\n--------------------");
console.log('Limpando registro:');
rh.limparRegistro();
rh.exibirFuncionarios();

// Demonstração de acesso após limpar
rh.demonstrarAposLimpar();

console.log("\n--------------------");
console.log('Estatísticas:');
const stats = rh.estatisticas();
console.log(`Total de funcionários: ${stats.total}`);
console.log(`Registro vazio: ${stats.vazio}`);

console.log("\n" + "=".repeat(50));
console.log('Respostas das Perguntas:');
console.log("1. O que acontece se tentarmos acessar um índice inexistente após limpar o array?");
console.log("   RESPOSTA: Retorna 'undefined' e o índice é considerado inválido");
console.log("\n2. Como modificar a classe para garantir que os nomes armazenados sejam únicos?");
console.log("   RESPOSTA: Implementando o método nomeExiste() que verifica duplicatas antes de adicionar");
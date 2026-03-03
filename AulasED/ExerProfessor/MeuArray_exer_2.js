const MeuArray = require("./MeuArray.js");

// Criando uma instância da classe MeuArray
const participantes = new MeuArray();

// Adicionando os nomes de quatro funcionários
participantes.adicionar("Carlos");
participantes.adicionar("Ana");
participantes.adicionar("Roberto");
participantes.adicionar("Fernanda");

// Obtendo o nome do terceiro funcionário que participou
console.log("Terceiro participante:", participantes.obterElemento(2));

// Limpando todos os registros do array
participantes.limpar();

// Tentando acessar um índice após limpar o array
console.log("Tentando acessar após limpar:", participantes.obterElemento(0));
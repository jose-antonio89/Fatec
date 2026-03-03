
const busca = require("./Busca.js");

const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

var sequencial = busca.sequencial(array, 23);
console.log("Resultado da Busca Sequêncial: " + sequencial);

var binario = busca.binaria(array, 23);
console.log("Resultado da Busca Binária: " + binario);

/* A busca binária é mais eficiente pois não 
 * percorre todos os valores, por os itens 
 * já estarem ordenados, ela vai buscando 
 * enquanto "divide" os valores enquanto 
 * não for encontrado.
 */
const Brinquedo = require('exercicio3.js');

const brinquedo = new Brinquedo();

console.log("--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Brinquedo de Parque Iniciado');
brinquedo.filasVazias() ? console.log("As filas estão vazias.") : console.log("Há pessoas nas filas.");

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Visitantes chegando:');

brinquedo.adicionarVisitante("João");
brinquedo.adicionarVisitante("Maria", true);
brinquedo.adicionarVisitante("Pedro");
brinquedo.adicionarVisitante("Ana", true);
brinquedo.exibirFilas();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Próximo a embarcar:');
const proximo = brinquedo.verProximo();
console.log(`Próximo: ${proximo.nome} ${proximo.ehVIP ? '(VIP)' : ''}`);

console.log("\n--------------------");
console.log('\x1b[33m%s\x1b[0m', 'Embarcando visitantes:');

let visitante = brinquedo.embarcarProximo();
console.log(`Embarcou: ${visitante.nome} ${visitante.ehVIP ? '(VIP)' : ''}`);
brinquedo.exibirFilas();

visitante = brinquedo.embarcarProximo();
console.log(`Embarcou: ${visitante.nome} ${visitante.ehVIP ? '(VIP)' : ''}`);
brinquedo.exibirFilas();

console.log("\n--------------------");
console.log('\x1b[36m%s\x1b[0m', 'Estatísticas:');
const stats = brinquedo.estatisticas();
console.log(`Fila Normal: ${stats.normal} pessoas`);
console.log(`Fila VIP: ${stats.vip} pessoas`);
console.log(`Total transportados: ${stats.transportados}`);
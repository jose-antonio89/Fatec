const TorreFeiticos = require('Exercicio1.js');

const eldrin = new TorreFeiticos();

console.log("--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Torre de Feitiços do Eldrin');
eldrin.torreVazia() ? console.log("A torre está vazia.") : console.log("Há feitiços na torre.");

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Eldrin está guardando feitiços:');

eldrin.adicionarFeitico("Bola de Fogo");
eldrin.exibirTorre();
eldrin.adicionarFeitico("Cura");
eldrin.exibirTorre();
eldrin.adicionarFeitico("Invisibilidade");
eldrin.exibirTorre();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Eldrin verifica o topo:');
const topo = eldrin.verTopo();
console.log(`Feitiço no topo: ${topo}`);

console.log("\n--------------------");
console.log('\x1b[33m%s\x1b[0m', 'Eldrin usando feitiços:');

let feiticoUsado = eldrin.usarFeitico();
console.log(`Feitiço usado: ${feiticoUsado}`);
eldrin.exibirTorre();

feiticoUsado = eldrin.usarFeitico();
console.log(`Feitiço usado: ${feiticoUsado}`);
eldrin.exibirTorre();

console.log("\n--------------------");
console.log('\x1b[36m%s\x1b[0m', 'Estatísticas:');
const stats = eldrin.estatisticas();
console.log(`Total de feitiços na torre: ${stats.total}`);
console.log(`Torre vazia: ${stats.vazia}`);
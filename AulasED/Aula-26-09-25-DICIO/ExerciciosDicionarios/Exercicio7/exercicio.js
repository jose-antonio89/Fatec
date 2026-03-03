// Exercício 7: Conversor Map-Object
class ConversorDicionario {
    objetoParaMap(objeto) {
        const map = new Map();
        
        for (const [chave, valor] of Object.entries(objeto)) {
            map.set(chave, valor);
        }
        
        return map;
    }

    mapParaObjeto(map) {
        const objeto = {};
        
        for (const [chave, valor] of map.entries()) {
            objeto[chave] = valor;
        }
        
        return objeto;
    }

    exibirMap(map, titulo = "MAP") {
        console.log(`=== ${titulo} ===`);
        for (const [chave, valor] of map.entries()) {
            console.log(`${chave} => ${valor}`);
        }
    }

    exibirObjeto(objeto, titulo = "OBJETO") {
        console.log(`=== ${titulo} ===`);
        for (const [chave, valor] of Object.entries(objeto)) {
            console.log(`${chave}: ${valor}`);
        }
    }

    criarObjetoTeste() {
        return {
            nome: "Ana",
            idade: 30,
            cidade: "São Paulo",
            ativo: true
        };
    }

    criarMapTeste() {
        const map = new Map();
        map.set("produto", "Notebook");
        map.set("preco", 2500);
        map.set("estoque", 15);
        map.set("disponivel", true);
        return map;
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 7 - CONVERSOR MAP-OBJECT");

const conversor = new ConversorDicionario();

console.log("\n--- Convertendo Objeto para Map ---");
const objetoTeste = conversor.criarObjetoTeste();
console.log("Objeto original:");
conversor.exibirObjeto(objetoTeste, "OBJETO ORIGINAL");

const mapConvertido = conversor.objetoParaMap(objetoTeste);
conversor.exibirMap(mapConvertido, "OBJETO CONVERTIDO PARA MAP");

console.log("\n--- Convertendo Map para Objeto ---");
const mapTeste = conversor.criarMapTeste();
console.log("Map original:");
conversor.exibirMap(mapTeste, "MAP ORIGINAL");

const objetoConvertido = conversor.mapParaObjeto(mapTeste);
conversor.exibirObjeto(objetoConvertido, "MAP CONVERTIDO PARA OBJETO");

// Demonstração de que as conversões preservam os dados
console.log("\n--- Verificação de Integridade ---");
console.log(`Map tem ${mapConvertido.size} elementos`);
console.log(`Objeto tem ${Object.keys(objetoConvertido).length} propriedades`);
console.log(`Conversão reversa funciona: ${JSON.stringify(objetoTeste) === JSON.stringify(conversor.mapParaObjeto(mapConvertido))}`);

module.exports = ConversorDicionario;
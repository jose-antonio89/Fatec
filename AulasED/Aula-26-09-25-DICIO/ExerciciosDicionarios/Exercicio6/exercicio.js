// Exercício 6: Contador de Letras Case-Sensitive
class ContadorLetras {
    contarLetras(texto) {
        const contador = {};
        const textoSemEspacos = texto.replace(/\s/g, '');
        
        for (let letra of textoSemEspacos) {
            contador[letra] = (contador[letra] || 0) + 1;
        }
        
        return contador;
    }

    contarLetrasCaseInsensitive(texto) {
        const contador = {};
        const textoSemEspacos = texto.replace(/\s/g, '');
        
        for (let letra of textoSemEspacos) {
            const letraMinuscula = letra.toLowerCase();
            contador[letraMinuscula] = (contador[letraMinuscula] || 0) + 1;
        }
        
        return contador;
    }

    exibirContagem(contador, titulo = "CONTAGEM DE LETRAS") {
        console.log(`=== ${titulo} ===`);
        // Ordenar as chaves para melhor visualização
        const letrasOrdenadas = Object.keys(contador).sort();
        
        letrasOrdenadas.forEach(letra => {
            console.log(`'${letra}': ${contador[letra]} vez(es)`);
        });
    }

    obterLetraMaisFrequente(contador) {
        let maxQuantidade = 0;
        let letraMaisFrequente = null;
        
        for (const letra in contador) {
            if (contador[letra] > maxQuantidade) {
                maxQuantidade = contador[letra];
                letraMaisFrequente = letra;
            }
        }
        
        return { letra: letraMaisFrequente, quantidade: maxQuantidade };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 6 - CONTADOR DE LETRAS CASE-SENSITIVE");

const contador = new ContadorLetras();
const texto = "Hello World";

console.log(`\nTexto analisado: "${texto}"`);

console.log("\n--- Contagem Case-Sensitive ---");
const resultadoCaseSensitive = contador.contarLetras(texto);
contador.exibirContagem(resultadoCaseSensitive, "CASE-SENSITIVE");

console.log("\n--- Contagem Case-Insensitive ---");
const resultadoCaseInsensitive = contador.contarLetrasCaseInsensitive(texto);
contador.exibirContagem(resultadoCaseInsensitive, "CASE-INSENSITIVE");

const maisFrequente = contador.obterLetraMaisFrequente(resultadoCaseSensitive);
console.log(`\nLetra mais frequente (case-sensitive): '${maisFrequente.letra}' (${maisFrequente.quantidade} vezes)`);

console.log(`Total de letras únicas (case-sensitive): ${Object.keys(resultadoCaseSensitive).length}`);
console.log(`Total de letras únicas (case-insensitive): ${Object.keys(resultadoCaseInsensitive).length}`);

module.exports = ContadorLetras;
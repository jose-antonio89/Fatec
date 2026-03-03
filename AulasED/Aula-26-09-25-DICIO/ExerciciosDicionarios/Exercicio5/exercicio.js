// Exercício 5: Contador de Palavras
class ContadorPalavras {
    contarPalavras(frase) {
        const contador = {};
        const palavras = frase.toLowerCase()
            .replace(/[.,!?;:]/g, '')
            .split(/\s+/)
            .filter(palavra => palavra.length > 0);
        
        for (let palavra of palavras) {
            contador[palavra] = (contador[palavra] || 0) + 1;
        }
        
        return contador;
    }

    exibirContagem(contador) {
        console.log("=== CONTAGEM DE PALAVRAS ===");
        for (const palavra in contador) {
            console.log(`"${palavra}": ${contador[palavra]} vez(es)`);
        }
    }

    obterPalavraMaisFrequente(contador) {
        let maxQuantidade = 0;
        let palavraMaisFrequente = null;
        
        for (const palavra in contador) {
            if (contador[palavra] > maxQuantidade) {
                maxQuantidade = contador[palavra];
                palavraMaisFrequente = palavra;
            }
        }
        
        return { palavra: palavraMaisFrequente, quantidade: maxQuantidade };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 5 - CONTADOR DE PALAVRAS");

const contador = new ContadorPalavras();
const frase = "o rato roeu a roupa do rei de roma e o rei ficou com raiva do rato";

console.log(`\nFrase analisada: "${frase}"`);
const resultado = contador.contarPalavras(frase);
contador.exibirContagem(resultado);

const maisFrequente = contador.obterPalavraMaisFrequente(resultado);
console.log(`\nPalavra mais frequente: "${maisFrequente.palavra}" (${maisFrequente.quantidade} vezes)`);
console.log(`Total de palavras únicas: ${Object.keys(resultado).length}`);

module.exports = ContadorPalavras;
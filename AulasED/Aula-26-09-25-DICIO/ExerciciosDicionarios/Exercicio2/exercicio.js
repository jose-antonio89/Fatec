// Exercício 2: Contador de Caracteres
class ContadorCaracteres {
    contarCaracteres(texto) {
        const contador = {};
        const textoLimpo = texto.replace(/\s/g, '');
        
        for (let char of textoLimpo) {
            contador[char] = (contador[char] || 0) + 1;
        }
        
        return contador;
    }

    exibirContagem(contador) {
        console.log("=== CONTAGEM DE CARACTERES ===");
        for (const char in contador) {
            console.log(`'${char}': ${contador[char]} vez(es)`);
        }
    }

    obterCaracterMaisFrequente(contador) {
        let maxQuantidade = 0;
        let caracterMaisFrequente = null;
        
        for (const char in contador) {
            if (contador[char] > maxQuantidade) {
                maxQuantidade = contador[char];
                caracterMaisFrequente = char;
            }
        }
        
        return { caracter: caracterMaisFrequente, quantidade: maxQuantidade };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 2 - CONTADOR DE CARACTERES");

const contador = new ContadorCaracteres();
const texto = "hello world";

console.log(`\nTexto analisado: "${texto}"`);
const resultado = contador.contarCaracteres(texto);
contador.exibirContagem(resultado);

const maisFrequente = contador.obterCaracterMaisFrequente(resultado);
console.log(`\nCaracter mais frequente: '${maisFrequente.caracter}' (${maisFrequente.quantidade} vezes)`);

module.exports = ContadorCaracteres;
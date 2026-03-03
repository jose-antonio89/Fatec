// Exercício 4: Limpador de Dicionário
class LimpadorDicionario {
    removerValoresNulos(dicionario) {
        const dicionarioLimpo = {};
        
        for (const chave in dicionario) {
            if (dicionario[chave] !== null && dicionario[chave] !== undefined) {
                dicionarioLimpo[chave] = dicionario[chave];
            }
        }
        
        return dicionarioLimpo;
    }

    exibirDicionario(dicionario, titulo = "DICIONÁRIO") {
        console.log(`=== ${titulo} ===`);
        for (const chave in dicionario) {
            console.log(`${chave}: ${dicionario[chave]}`);
        }
    }

    criarDicionarioTeste() {
        return {
            nome: "João",
            idade: 25,
            endereco: null,
            telefone: undefined,
            email: "joao@email.com",
            cidade: "",
            ativo: true
        };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 4 - LIMPADOR DE DICIONÁRIO");

const limpador = new LimpadorDicionario();
const dicionarioTeste = limpador.criarDicionarioTeste();

console.log("\n--- Dicionário antes da limpeza ---");
limpador.exibirDicionario(dicionarioTeste, "ANTES DA LIMPEZA");

const dicionarioLimpo = limpador.removerValoresNulos(dicionarioTeste);

console.log("\n--- Dicionário após limpeza ---");
limpador.exibirDicionario(dicionarioLimpo, "APÓS LIMPEZA");

console.log(`\nItens removidos: ${Object.keys(dicionarioTeste).length - Object.keys(dicionarioLimpo).length}`);
console.log(`Itens restantes: ${Object.keys(dicionarioLimpo).length}`);

module.exports = LimpadorDicionario;
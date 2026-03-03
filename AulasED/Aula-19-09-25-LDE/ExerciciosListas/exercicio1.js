const ListaEncadeada = require('./ListaEncadeada');

class TrilhaExplorador {
    constructor() {
        this.trilha = new ListaEncadeada();
    }

    adicionarInicioTrilha(local) {
        this.trilha.adicionarInicio(local);
        console.log(`Local '${local}' adicionado ao início da trilha`);
    }

    adicionarFinalTrilha(local) {
        this.trilha.adicionarFinal(local);
        console.log(`Local '${local}' adicionado ao final da trilha`);
    }

    removerLocalPerigoso(local) {
        const resultado = this.trilha.remover(local);
        if (resultado) {
            console.log(`Local perigoso '${local}' removido da trilha`);
        } else {
            console.log(`Local '${local}' não encontrado na trilha`);
        }
        return resultado;
    }

    verificarMirante() {
        const resultado = this.trilha.buscar("Mirante");
        if (resultado.encontrado) {
            console.log(`Mirante encontrado na posição ${resultado.posicao}`);
        } else {
            console.log("Mirante não faz parte da trilha");
        }
        return resultado.encontrado;
    }

    exibirTrilha() {
        console.log("Trilha atual: " + this.trilha.exibir());
    }

    estatisticas() {
        return {
            totalLocais: this.trilha.obterTamanho(),
            vazia: this.trilha.estaVazia()
        };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCICIO 1 - TRILHA DO EXPLORADOR");

const explorador = new TrilhaExplorador();

console.log("\n--- Planejando a trilha ---");
explorador.adicionarInicioTrilha("Cachoeira");
explorador.adicionarFinalTrilha("Caverna");
explorador.adicionarFinalTrilha("Mirante");
explorador.adicionarInicioTrilha("Entrada da Floresta");
explorador.exibirTrilha();

console.log("\n--- Verificando mirante ---");
explorador.verificarMirante();

console.log("\n--- Removendo local perigoso ---");
explorador.removerLocalPerigoso("Caverna");
explorador.exibirTrilha();

console.log("\n--- Adicionando novos locais ---");
explorador.adicionarFinalTrilha("Lago Sereno");
explorador.adicionarInicioTrilha("Ponte Suspensa");
explorador.exibirTrilha();

console.log("\n--- Estatísticas da trilha ---");
const stats = explorador.estatisticas();
console.log(`Total de locais: ${stats.totalLocais}`);
console.log(`Trilha vazia: ${stats.vazia}`);

module.exports = TrilhaExplorador;
const ListaEncadeada = require('./ListaEncadeada');

class BatalhaHerois {
    constructor() {
        this.poderes = new ListaEncadeada();
    }

    adicionarPoderInicio(poder) {
        this.poderes.adicionarInicio(poder);
        console.log(`Poder '${poder}' adicionado ao início`);
    }

    adicionarPoderFinal(poder) {
        this.poderes.adicionarFinal(poder);
        console.log(`Poder '${poder}' adicionado ao final`);
    }

    removerPoder(poder) {
        const resultado = this.poderes.remover(poder);
        if (resultado) {
            console.log(`Poder '${poder}' removido (ineficaz)`);
        } else {
            console.log(`Poder '${poder}' não encontrado`);
        }
        return resultado;
    }

    verificarPoder(poder) {
        const resultado = this.poderes.buscar(poder);
        if (resultado.encontrado) {
            console.log(`Poder '${poder}' disponível na posição ${resultado.posicao}`);
        } else {
            console.log(`Poder '${poder}' não disponível`);
        }
        return resultado.encontrado;
    }

    exibirPoderes() {
        console.log("Lista de poderes: " + this.poderes.exibir());
    }

    ativarSequenciaPoderes() {
        console.log("=== ATIVANDO SEQUÊNCIA DE PODERES ===");
        let atual = this.poderes.cabeca;
        let posicao = 0;
        
        while (atual) {
            console.log(`Posição ${posicao}: Ativando poder '${atual.valor}'`);
            atual = atual.proximo;
            posicao++;
        }
    }

    estatisticas() {
        return {
            totalPoderes: this.poderes.obterTamanho(),
            vazia: this.poderes.estaVazia()
        };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCICIO 3 - BATALHA DOS HERÓIS");

const batalha = new BatalhaHerois();

console.log("\n--- Preparando poderes ---");
batalha.adicionarPoderInicio("Bola de Fogo");
batalha.adicionarPoderFinal("Raio Congelante");
batalha.adicionarPoderFinal("Escudo de Fogo");
batalha.adicionarPoderInicio("Cura Divina");
batalha.exibirPoderes();

console.log("\n--- Verificando poder especial ---");
batalha.verificarPoder("Escudo de Fogo");

console.log("\n--- Removendo poder ineficaz ---");
batalha.removerPoder("Raio Congelante");
batalha.exibirPoderes();

console.log("\n--- Adicionando novos poderes ---");
batalha.adicionarPoderFinal("Tempestade Elétrica");
batalha.adicionarPoderInicio("Invisibilidade");
batalha.exibirPoderes();

console.log("\n--- Ativando sequência ---");
batalha.ativarSequenciaPoderes();

console.log("\n--- Estatísticas da batalha ---");
const stats = batalha.estatisticas();
console.log(`Total de poderes: ${stats.totalPoderes}`);
console.log(`Sem poderes: ${stats.vazia}`);

module.exports = BatalhaHerois;
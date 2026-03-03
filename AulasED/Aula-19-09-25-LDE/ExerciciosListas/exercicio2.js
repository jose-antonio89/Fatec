const ListaEncadeada = require('./ListaEncadeada');

class CorridaTartarugas {
    constructor() {
        this.fila = new ListaEncadeada();
    }

    inserirInicio(nomeTartaruga) {
        this.fila.adicionarInicio(nomeTartaruga);
        console.log(`Tartaruga '${nomeTartaruga}' entrou no início da fila`);
    }

    inserirFinal(nomeTartaruga) {
        this.fila.adicionarFinal(nomeTartaruga);
        console.log(`Tartaruga '${nomeTartaruga}' entrou no final da fila`);
    }

    removerTartaruga(nomeTartaruga) {
        const resultado = this.fila.remover(nomeTartaruga);
        if (resultado) {
            console.log(`Tartaruga '${nomeTartaruga}' desistiu da corrida`);
        } else {
            console.log(`Tartaruga '${nomeTartaruga}' não encontrada na fila`);
        }
        return resultado;
    }

    encontrarTartaruga(nomeTartaruga) {
        const resultado = this.fila.buscar(nomeTartaruga);
        if (resultado.encontrado) {
            console.log(`Tartaruga '${nomeTartaruga}' encontrada na posição ${resultado.posicao}`);
        } else {
            console.log(`Tartaruga '${nomeTartaruga}' não está na fila`);
        }
        return resultado;
    }

    exibirFila() {
        console.log("Fila da corrida: " + this.fila.exibir());
    }

    estatisticas() {
        return {
            totalTartarugas: this.fila.obterTamanho(),
            vazia: this.fila.estaVazia()
        };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCICIO 2 - CORRIDA DAS TARTARUGAS");

const corrida = new CorridaTartarugas();

console.log("\n--- Organizando a fila ---");
corrida.inserirInicio("Rápida");
corrida.inserirFinal("Lenta");
corrida.inserirFinal("Veloz");
corrida.inserirInicio("Esperta");
corrida.exibirFila();

console.log("\n--- Tartaruga 'Lenta' desiste ---");
corrida.removerTartaruga("Lenta");
corrida.exibirFila();

console.log("\n--- Procurando tartaruga 'Veloz' ---");
corrida.encontrarTartaruga("Veloz");

console.log("\n--- Nova tartaruga entra ---");
corrida.inserirFinal("Determinada");
corrida.exibirFila();

console.log("\n--- Tentando remover tartaruga inexistente ---");
corrida.removerTartaruga("Ausente");

console.log("\n--- Estatísticas da corrida ---");
const stats = corrida.estatisticas();
console.log(`Total de tartarugas: ${stats.totalTartarugas}`);
console.log(`Fila vazia: ${stats.vazia}`);

module.exports = CorridaTartarugas;
const ListaEncadeada = require('./ListaEncadeada');

class OperacoesLista {
    constructor() {
        this.lista = new ListaEncadeada();
    }

    preencherListaTeste() {
        this.lista.adicionarFinal(10);
        this.lista.adicionarFinal(20);
        this.lista.adicionarFinal(30);
        this.lista.adicionarFinal(40);
        this.lista.adicionarFinal(50);
    }

    testarRemocao(valor) {
        console.log(`\n--- Testando remoção do valor ${valor} ---`);
        const antes = this.lista.exibir();
        const resultado = this.lista.remover(valor);
        const depois = this.lista.exibir();
        
        console.log(`Lista antes: ${antes}`);
        console.log(`Remoção bem-sucedida: ${resultado}`);
        console.log(`Lista depois: ${depois}`);
        
        return resultado;
    }

    testarBusca(valor) {
        console.log(`\n--- Testando busca do valor ${valor} ---`);
        const resultado = this.lista.buscar(valor);
        const listaAtual = this.lista.exibir();
        
        console.log(`Lista atual: ${listaAtual}`);
        console.log(`Valor encontrado: ${resultado.encontrado}`);
        if (resultado.encontrado) {
            console.log(`Posição: ${resultado.posicao}`);
        }
        
        return resultado;
    }

    adicionarValor(valor) {
        this.lista.adicionarFinal(valor);
        console.log(`Valor ${valor} adicionado à lista`);
    }

    exibirLista() {
        console.log("Lista atual: " + this.lista.exibir());
    }

    estatisticas() {
        return {
            tamanho: this.lista.obterTamanho(),
            vazia: this.lista.estaVazia()
        };
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCICIO 4 - OPERAÇÕES AVANÇADAS");

const operacoes = new OperacoesLista();

console.log("\n--- Preenchendo lista de teste ---");
operacoes.preencherListaTeste();
operacoes.exibirLista();

console.log("\n=== TESTES DE REMOÇÃO ===");
operacoes.testarRemocao(30);  // Valor do meio
operacoes.testarRemocao(10);  // Valor do início
operacoes.testarRemocao(50);  // Valor do final
operacoes.testarRemocao(99);  // Valor inexistente

console.log("\n--- Reabastecendo lista ---");
operacoes.adicionarValor(60);
operacoes.adicionarValor(70);
operacoes.adicionarValor(80);
operacoes.exibirLista();

console.log("\n=== TESTES DE BUSCA ===");
operacoes.testarBusca(20);   // Valor existente
operacoes.testarBusca(70);   // Valor existente
operacoes.testarBusca(99);   // Valor inexistente
operacoes.testarBusca(80);   // Valor do final

console.log("\n--- Estatísticas finais ---");
const stats = operacoes.estatisticas();
console.log(`Tamanho da lista: ${stats.tamanho}`);
console.log(`Lista vazia: ${stats.vazia}`);

module.exports = OperacoesLista;
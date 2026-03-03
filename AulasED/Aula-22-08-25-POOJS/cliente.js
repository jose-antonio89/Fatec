class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco; // Recebe um objeto Endereco
    }

    exibirDados() {
        console.log('Dados do Cliente:');
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco.toString()}`);
    }
}

module.exports = Cliente;
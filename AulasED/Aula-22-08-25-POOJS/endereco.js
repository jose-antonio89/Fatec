class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }

    toString() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
    }
}

module.exports = Endereco;
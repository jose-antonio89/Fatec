class pessoa {
    nome;
    idade;
    apresentar(){
        console.log(`Ola eu sou o ${this.nome} e tenho ${this.idade} anos`)
    }
    constructor(_nome,_idade) {
        this.nome = _nome
        this.idade = _idade
    }
}

module.exports = pessoa;
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }
    dirigir() {
        console.log(`Dirigindo o carro ${this.modelo}.`);
    }
}

class Moto {
    constructor(modelo) {
        this.modelo = modelo;
    }
    pilotar() {
        console.log(`Pilotando a moto ${this.modelo}.`);
    }
}

module.exports = { Carro, Moto };
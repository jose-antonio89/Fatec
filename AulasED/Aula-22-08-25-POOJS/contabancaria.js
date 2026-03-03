class ContaBancaria {
    constructor(saldoInicial = 0) {
        // Convenção para atributo privado
        this._saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else if (valor > this._saldo) {
            console.log("Saldo insuficiente.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }

    verSaldo() {
        console.log(`Saldo atual: R$${this._saldo.toFixed(2)}`);
    }
}

module.exports = ContaBancaria;
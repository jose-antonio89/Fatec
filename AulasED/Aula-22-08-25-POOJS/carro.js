class carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
      }
   acelerar(){
    this.velocidade += 100;
   console.log(`O ${this.modelo} acelerou ${this.velocidade}km/h agora está em!`)
   }
   frear(){
    this.velocidade -= 80;
    console.log(`O ${this.modelo} desacelerou ${this.velocidade}km/h, o pneu não aguenta mais do que isso`)
   }

}

module.exports = carro;
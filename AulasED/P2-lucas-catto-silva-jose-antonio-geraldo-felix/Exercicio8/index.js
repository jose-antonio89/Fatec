const Busca = require("./Busca.js")

var arrayUm = [];
var arrayDois = [];

function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 1000000; i++) {
    if (i % 2 == 0) {
        arrayUm.push(i);    
    }
}

for (let i = 0; i < 1000000; i++) {
        arrayDois.push(getRandomIntRange(0, 1000000));    
}

console.time('Binaria um')
{
console.log(Busca.binaria(arrayUm, 29));
}
console.timeEnd('Binaria um')

console.time('Binaria dois')
{
    console.log(Busca.binaria(arrayDois, 29));
}
console.timeEnd('Binaria dois')

console.time('Interpolacao um') 
{
    console.log(Busca.interpolacao(arrayUm, 29))
}
console.timeEnd('Interpolacao um')

console.time('Interpolacao Dois')
{
    console.log(Busca.interpolacao(arrayDois, 29))
}
console.timeEnd('Interpolacao Dois')

/* No cenario dois foi melhor,  */ 
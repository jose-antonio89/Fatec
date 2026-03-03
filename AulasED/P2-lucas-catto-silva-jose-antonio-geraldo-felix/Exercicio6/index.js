const sorter = require("./Sorters.js")

var arrayAleatorio = [];
var arrayOrdenado = [];

function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10000; i++) {
    arrayAleatorio.push(getRandomIntRange(0, 100000));    
}

for (let i = 1; i <= 10000; i++) {
    arrayOrdenado.push(i);    
}

console.log('-------------------------------------------')
console.time("label")
{
   sorter.quickSort(arrayAleatorio);
}
console.timeEnd("label")

console.log('-------------------------------------------')

console.time("label")
{
   sorter.quickSort(arrayOrdenado);
}
console.timeEnd("label")

/* Se o array ja estiver ordenado o quicksort so vai direto até o valor buscado, se ele 
* não estiver ordenado vai ir mudando de posição particionando a lista e percorrendo com dois numeros 
* selecionados e o pivo ate organizar 
*/
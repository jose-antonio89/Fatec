const AVLtree = require('./AVL.js')
const BinaryTree= require('./BinaryTree.js')

const instanciaBinary = new BinaryTree();
const instanciaAVL = new AVLtree();

var arrayAleatorio = [];

function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 20000; i++) {
    arrayAleatorio.push(getRandomIntRange(0, 100000));    
}

console.time("label")
{
    arrayAleatorio.forEach(elemento => {
    
        instanciaBinary.insert(elemento);
    });
}
console.timeEnd("label")
console.log('-------------------------------------------')
console.time("label")
{
    arrayAleatorio.forEach(elemento => {
    
        instanciaAVL.insert(elemento);
    });
}
console.timeEnd("label")

/* Em aplicações que precisem manter resposta rápida sob inserções frequentes, como jogos, e sistemas de busca e pesquisa*/

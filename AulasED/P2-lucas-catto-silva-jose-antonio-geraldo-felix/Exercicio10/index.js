const busca = require('./Busca.js');
const AVLTree = require('./AVL.js');
const BinaryTree = require('./BinaryTree.js');
const Sorter = require('./Sorters.js')

const instanciaAVL = new AVLTree();

var arrayUm = [];
var arrayDois = [];

function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 1000000; i++) {
    arrayUm.push(getRandomIntRange(0, 1000000));    
}

for (let i = 1; i <= 1000; i++) {
    arrayDois.push(i);    
}
console.log('--------------------------------------')
console.time('MergeSort')
{
    Sorter.mergeSort(arrayUm)
}
console.timeEnd('MergeSort')
console.log('--------------------------------------')
console.time('Busca Binaria')
{
    busca.binaria(arrayDois)
}
console.timeEnd('Busca Binaria')
console.log('--------------------------------------')
console.time('Arvore AVL insert')
{
    arrayUm.forEach(elemento => {
    
        instanciaAVL.insert(elemento);
    });
}
console.timeEnd('Arvore AVL insert')
console.log('--------------------------------------')
console.time('Arvore AVL busca')
{
    instanciaAVL.buscar(arrayDois)
}
console.timeEnd('Arvore AVL busca')
console.log('--------------------------------------')

/* 
 Ordernação e busca binária foi o mais rápido, e foi melhor em ambos contextos 
*/ 
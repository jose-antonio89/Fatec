// Importando as classes necessárias para o benchmark
const AVLTree = require('../Aula-17-10-25-AVLTREE/AVLBinaryTree2.js')
const BinaryTree = require('../Aula-10-10-25-TREE/BinaryTree.js')
const LinkedList = require('./ListaEncadeada2.js');
const DoublyLinkedList = require('../Aula-19-09-25-LDE/ListaDupEncadeada.js');
const Fila = require('../Aula-12-09-25-FILAPILHA/MinhaFila.js');
const Pilha = require('../Aula-12-09-25-FILAPILHA/MinhaPilha.js');
const Array = require('../Aula-29-08-25-ARRAYJS/Array.js')





// Instanciando as classes
const treeAVL = new AVLTree();
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();
const ray = new Array();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 10000000

const FixoRemove = getRandomIntRange(0, size)
const FixoBuscar = "José"
const nome = "José"

console.log('Numeros a buscar')
console.log(`Buscar: ${FixoBuscar}`)
console.log(`Remover: ${FixoRemove}`)
console.log('-------------------------------------------')
console.log("Inserindo")
console.time("Timer Array")
for (let i = 0; i < size; i++) {
    ray.adicionar(getRandomIntRange(i, size))
}
console.timeEnd("Timer Array")
ray.adicionar(nome)

console.time("Timer Pilha")
for (let i = 0; i < size; i++) {
    stack.add(getRandomIntRange(i, size))
}
console.timeEnd("Timer Pilha")
stack.add(nome)

console.time("Timer Fila")
for (let i = 0; i < size; i++) {
    queue.enqueue(getRandomIntRange(i, size))
}
console.timeEnd("Timer Fila")
queue.enqueue(nome)

console.time("Timer ListaEncadeada")
for (let i = 0; i < size; i++) {
   list.insertAtEnd(getRandomIntRange(i, size))
}
console.timeEnd("Timer ListaEncadeada")
list.insertAtEnd(nome)

console.time("Timer ListaDEncadeada")
for (let i = 0; i < size; i++) {
    doublyList.append(getRandomIntRange(i, size))
}
console.timeEnd("Timer ListaDEncadeada")
doublyList.append(nome)

console.time("Timer ÁrvoreBinária")
for (let i = 0; i < size; i++) {
    tree.insert(getRandomIntRange(i, size))
}
console.timeEnd("Timer ÁrvoreBinária")
tree.insert(nome)

console.time("Timer ÁrvoreAVL")
for (let i = 0; i < size; i++) {
    treeAVL.insert(getRandomIntRange(i, size))
}
console.timeEnd("Timer ÁrvoreAVL")
treeAVL.insert(nome)

console.log('-------------------------------------------')
console.log('Buscando')
console.time("Timer Array")
{
    ray.obterValor(FixoBuscar)
}
console.timeEnd("Timer Array")
console.time("Timer Pilha")
{
    stack.search(FixoBuscar)
}
console.timeEnd("Timer Pilha")
console.time("Timer Fila")
{
    queue.search(FixoBuscar)
}
console.timeEnd("Timer Fila")

console.time("Timer ListaEncadeada")
{
    list.find(FixoBuscar)
}
console.timeEnd("Timer ListaEncadeada")

console.time("Timer ListaDEncadeada")
{
    doublyList.find(FixoBuscar)
}
console.timeEnd("Timer ListaDEncadeada")

console.time("Timer ÁrvoreBinária")
{
    tree.search(FixoBuscar)
}
console.timeEnd("Timer ÁrvoreBinária")

console.time("Timer ÁrvoreAVL")
{
    treeAVL.search(FixoBuscar)
}
console.timeEnd("Timer ÁrvoreAVL")

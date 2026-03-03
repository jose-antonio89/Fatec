
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
console.log(`Busca: ${FixoBuscar}`)
console.log(`Remove: ${FixoRemove}`)


// Testando o Array
console.log("---------------------------")
console.log("Array")
console.log("---------------------------")
console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
    ray.adicionar(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{
    ray.obterValor(FixoBuscar)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    ray.removerValor(FixoRemove)
}
console.timeEnd("Timer Removendo")
ray.adicionar(nome)
// Testando a Fila
console.log("---------------------------")
console.log("Fila")
console.log("---------------------------")
console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
    queue.enqueue(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{
    queue.search(FixoBuscar)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    queue.removeValue(FixoRemove)
}
console.timeEnd("Timer Removendo")
queue.enqueue(nome)

// Testando a Pilha
console.log("---------------------------")
console.log("Pilha")
console.log("---------------------------")
console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
    stack.add(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{ 
    stack.search(FixoBuscar)
} 
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    stack.remove(FixoRemove)
}
console.timeEnd("Timer Removendo")
stack.add(nome)

// Testando a LinkedList
console.log("---------------------------")
console.log("Lista encadeada")
console.log("---------------------------")
console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
   list.insertAtEnd(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{
    list.find(FixoBuscar)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    list.removeByValue(FixoRemove)
}
console.timeEnd("Timer Removendo")
list.insertAtEnd(nome)

// Testando a DoublyLinkedList
console.log("---------------------------")
console.log("Lista Duplamente encadeada")
console.log("---------------------------")
console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
    doublyList.append(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{
    doublyList.find(FixoBuscar)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    doublyList.removeAt(FixoRemove)
}
console.timeEnd("Timer Removendo")
doublyList.append(nome)

// Testando a BinaryTree
console.log("---------------------------")
console.log("Arvore binaria")
console.log("---------------------------")

console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
    tree.insert(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{
    tree.search(FixoBuscar)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    tree.remove(FixoRemove)
}
console.timeEnd("Timer Removendo")
tree.insert(nome)

// Testando a AVLTree
console.log("---------------------------")
console.log("Arvore AVL")
console.log("---------------------------")

console.time("Timer Inserindo")
for (let i = 0; i < size; i++) {
    treeAVL.insert(getRandomIntRange(i, size))
}
console.timeEnd("Timer Inserindo")

console.time("Timer Preocurando")
{
    treeAVL.search(FixoBuscar)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    treeAVL.remove(FixoRemove)
}
console.timeEnd("Timer Removendo")
treeAVL.insert(nome)
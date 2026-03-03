
// Importando as classes necessárias para o benchmark
const BinaryTree = require('./BinaryTree.js')
const LinkedList = require('../Aula-19-09-25-LDE/ListaEncadeadas.js');
const DoublyLinkedList = require('../Aula-19-09-25-LDE/ListaDupEncadeada.js');
const Fila = require('../Aula-12-09-25-FILAPILHA/MinhaFila.js');
const Pilha = require('../Aula-12-09-25-FILAPILHA/MinhaPilha.js');





// Instanciando as classes
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 10000;

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

}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{

}
console.timeEnd("Timer Removendo")

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

}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    stack.remove(8976)
}
console.timeEnd("Timer Removendo")

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
    list.find(8976)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    list.removeByValue(2400)
}
console.timeEnd("Timer Removendo")

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
    doublyList.find(8976)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    doublyList.removeAt(2400)
}
console.timeEnd("Timer Removendo")

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
    tree.search(8976)
}
console.timeEnd("Timer Preocurando")

console.time("Timer Removendo")
{
    tree.remove(2400)
}
console.timeEnd("Timer Removendo")
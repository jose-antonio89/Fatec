const Node = require('./ListaEncadeadas')
const ListaEncadeada = require('./ListaEncadeadas');


const lista = new ListaEncadeada();

console.log('Lista Inicial')
lista.estaVazia() ? console.log("A lista está vazia.") : console.log("A lista não está vazia.");

lista.inserirNoComeco("abcd")
lista.paraString()
lista.inserirNoComeco("fj")
lista.paraString()
lista.inserirNoComeco("klm")
lista.paraString()
console.log(`Tamanho da lista é: ${lista.tamanho()}`)

console.log('Inserindo no fim:')
lista.inserirNoFim(1)
lista.paraString ()
lista.inserirNoFim(2)
lista.paraString()
console.log(`Tamanho da lista é: ${lista.tamanho()}`)

console.log('Exibindo a lista:')
lista.paraString()

console.log('Removendo os Itens:')
lista.removerPeloValor("abcd")
lista.paraString()

console.log('Procurando um valor:')
let node = lista.achar(2)
console.log(node ? `Valor encontrado: ${node.value}` : "Valor não encontrado")
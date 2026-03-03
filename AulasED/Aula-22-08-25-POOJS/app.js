// Exercicio 1
const pessoa = require('./Pessoa.js')

const pessoa1 = new pessoa("Kilian", 28)
pessoa1.nome = "Killian"
pessoa1.idade = 28


const pessoa2 = new pessoa("Mia", 21);
pessoa2.nome = "Mia"
pessoa2.idade = 21

pessoa1.apresentar()

pessoa2.apresentar()

// Exercicio 2

const carro = require('../Exercicio 2/carro.js')

const carro1 = new carro("Kwid", 2018) 

carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.frear()

// Exercicio 3 

const animal = require ('./animal')
const gato = require ('./gato')
const cachorro = require ('./cachorro')

const gato1 = new gato()
const cachorro1 = new cachorro()
const animal1 = new animal()

animal1.falar()

gato1.falar()

cachorro1.falar()

// Exercicio 4

const ContaBancaria = require('contabancaria.js');

const minhaConta = new ContaBancaria(100);

minhaConta.verSaldo();
minhaConta.depositar(50);
minhaConta.verSaldo();
minhaConta.sacar(30);
minhaConta.verSaldo();
minhaConta.sacar(150);
minhaConta.verSaldo();


// Exercicio 5

const { Carro, Moto } = require('veiculos.js');

const carro = new Carro('Sedan');
const moto = new Moto('Esportiva');

carro.dirigir();
moto.pilotar();

// Exercicio 6

const Endereco = require('Endereco.js');
const Cliente = require('Cliente.js');

const enderecoDoJose = new Endereco('Rua das Flores', '123', 'São Paulo', 'SP');
const clienteJose = new Cliente('José Silva', enderecoDoJose);

clienteJose.exibirDados();

// Exercicio 7

const Gerente = require('gerente.js');
const Desenvolvedor = require('desenvolvedor.js');

const gerente = new Gerente('Carlos', 5000);
const dev = new Desenvolvedor('Ana', 3000);

console.log(`Bônus do Gerente ${gerente.nome}: R$${gerente.calcularBonus().toFixed(2)}`);
console.log(`Bônus da Desenvolvedora ${dev.nome}: R$${dev.calcularBonus().toFixed(2)}`);


// Exercicio 8

const Matematica = require('matematica.js');

// Usa os métodos sem criar uma instância da classe
console.log(`Soma 5 + 3 = ${Matematica.somar(5, 3)}`);
console.log(`Subtração 10 - 4 = ${Matematica.subtrair(10, 4)}`);
console.log(`Fatorial de 5 = ${Matematica.fatorial(5)}`);

// Exercicio 9

const Produto = require('Produto.js');
const Carrinho = require('Carrinho.js');

const produto1 = new Produto('Notebook', 3500.00);
const produto2 = new Produto('Mouse', 120.50);
const produto3 = new Produto('Teclado', 250.00);

const meuCarrinho = new Carrinho();
meuCarrinho.adicionarProduto(produto1);
meuCarrinho.adicionarProduto(produto2);
meuCarrinho.adicionarProduto(produto3);

console.log(`\nValor total do carrinho: R$${meuCarrinho.total().toFixed(2)}`);

// Exercicio 10

const Livro = require('livro.js');
const Biblioteca = require('biblioteca.js');

// Criando os livros
const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
const livro2 = new Livro('O Hobbit', 'J.R.R. Tolkien', 1937);
const livro3 = new Livro('1984', 'George Orwell', 1949);
const livro4 = new Livro('A Revolução dos Bichos', 'George Orwell', 1945);


// Montando a biblioteca
const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

// Testando os métodos
minhaBiblioteca.listarLivros();
minhaBiblioteca.buscarPorAutor('Tolkien');
minhaBiblioteca.buscarPorAutor('George Orwell');
minhaBiblioteca.buscarPorAutor('Machado de Assis');




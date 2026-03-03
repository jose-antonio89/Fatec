/*
1)o resultado de meuArray.tamanhoArray() sem operações é 0
Porque se uma nova instancia da classe meuArray é criada, o atributo tamanho é inicializado com 0.

2)O valor exibido no console será 2
const meuArray = new MeuArray(); cria um array vazio com tamanho 0.
meuArray.adicionar(10); adiciona o valor 10, aumenta o tamanho pra 1.
meuArray.adicionar(20); adiciona o valor 20, aumenta o tamanho pra 2.
meuArray.adicionar(30); adiciona o valor 30, aumenta o tamanho pra 3.
meuArray.remover(); vai remover o último elemento que é 30, diminuindo o tamanho para 2.
console.log(meuArray.tamanhoArray()); vai retornar no console o tamanho atual, que é 2.

3)A saída no console será b os elementos são adicionados nas posições 0 ('a'), 1 ('b') e 2 ('c').
meuArray.obterElemento(1) retorna o elemento no índice 1, que é b.

4)O método remover() retorna undefined, porque o array está vazio

5)O recurso é chamado de campo privado(private field) e serve para evitar que os dados internos da classe sejam 
acessados ou modificados diretamente de fora da classe e se tentarmos acessar meuArray.#items 
diretamente, vai acontecer erro de sintaxe porque campos privados não são acessíveis externamente.

6)O conteúdo do array interno após a execução do código será [25, 35]
MeuArray.adicionar(5);   adiciona 5 → [5]
MeuArray.adicionar(15);  adiciona 15 → [5, 15]
MeuArray.limpar();       limpa o array → []
MeuArray.adicionar(25);  adiciona 25 → [25]
MeuArray.adicionar(35);  adiciona 35 → [25, 35]
MeuArray.verItens()      retorna [25, 35].

6)O conteúdo do array interno após a execução do código será [25, 35]

7) O valor da variável itemRemovido será banana. 
depois de adicionar 'maçã' e 'banana', o array contém ['maçã', 'banana'].
meuArray.remover() remove e retorna o último elemento, que é banana.

8)
console.log(meuArray.obterElemento(0)); retorna 100, pois é o elemento no índice 0.
console.log(meuArray.obterElemento(2)); retorna undefined, pois o índice 2 está fora dos limites (array tem tamanho 2, índices 0 e 1).
console.log(meuArray.obterElemento(-1)); retorna undefined, pois índices negativos são inválidos.

9) O conceito fundamental é o de "Encapsulamento". Ele é um princípio da programação orientada a objetos que consiste em esconder os detalhes
 internos de um objeto e controlar o acesso aos seus dados por meio de métodos públicos, que garante uma segurança e integridade melhor dos dados.
*/
//10) 
const meuArray = require('./meuArray');
const leuArray = new meuArray();
leuArray.adicionar(5);
leuArray.adicionar(10);
leuArray.adicionar(15);
leuArray.remover();
leuArray.adicionar(20);
console.log(leuArray.obterElemento(1)); // retorna 10
console.log(leuArray.tamanhoArray()); // retorna 3
//Depois de adicionar 5, 10 e 15, o array tem [5, 10, 15]. Remover o último elemento resulta em [5, 10]. 
//Adicionar 20 resulta em [5, 10, 20], o elemento no índice 1 é 10 e o tamanho final é 3.



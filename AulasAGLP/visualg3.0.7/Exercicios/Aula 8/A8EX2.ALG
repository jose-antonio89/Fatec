Algoritmo "cofrinho"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/04/2025
Var

   meta : inteiro
   valor : inteiro
   deposito : inteiro

Inicio

   Escreval("Qual sua meta?")
   leia (meta)

   Escreval("Quanto voce ja tem?")
   leia (valor)

   enquanto (meta > valor) faca
      Escreval("Deseja fazer um deposito?")
      leia (deposito)

      valor <- valor + deposito

      Escreval("Voce ja acumulou:", valor)
   fimenquanto

   Se valor = meta entao
      Escreval("Parabens voce atingiu a sua meta")
   fimse

Fimalgoritmo
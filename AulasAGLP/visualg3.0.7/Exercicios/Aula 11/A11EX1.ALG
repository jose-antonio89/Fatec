Algoritmo "A11EX1"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 09/05/2025

Var
   //1) Crie um algoritmo que leia 5 n�meros
   //inteiros e os armazene em um vetor.
   //Em seguida, exiba os n�meros na ordem em
   //que foram digitados.

   i : inteiro
   numero : vetor[1..5] de inteiro

Inicio

   para i de 1 ate 5 faca
      escreval("Digite 5 N�meros")
      escreva("")
      Leia(numero[i])
   fimpara

   para i de 1 ate 5 faca
      escreva("")
      escreva(" Esse foi o", i ," n�mero, n�mero:", numero[i])
      escreva("")
   fimpara


Fimalgoritmo
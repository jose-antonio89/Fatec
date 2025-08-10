Algoritmo "A11EX1"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 09/05/2025

Var
   //1) Crie um algoritmo que leia 5 números
   //inteiros e os armazene em um vetor.
   //Em seguida, exiba os números na ordem em
   //que foram digitados.

   i : inteiro
   numero : vetor[1..5] de inteiro

Inicio

   para i de 1 ate 5 faca
      escreval("Digite 5 Números")
      escreva("")
      Leia(numero[i])
   fimpara

   para i de 1 ate 5 faca
      escreva("")
      escreva(" Esse foi o", i ," número, número:", numero[i])
      escreva("")
   fimpara


Fimalgoritmo
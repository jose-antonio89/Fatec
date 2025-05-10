Algoritmo "A11EX2"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 09/05/2025
Var

   //2) Crie um algoritmo que leia 10 números inteiros
   //em um vetor e calcule a soma
   //de todos os valores armazenados.

   i : inteiro
   numero : vetor[1..10] de inteiro
   res : inteiro

Inicio

   Escreval("Digite 10 numeros que deseje somar")

   Para i de 1 ate 10 faca
      Escreval( i," número")
      Escreva("")
      Leia(numero[i])
      limpatela
      res <- res + numero[i]
   Fimpara

   limpatela
   Escreva("Esse é o seu resultado:", res)



Fimalgoritmo
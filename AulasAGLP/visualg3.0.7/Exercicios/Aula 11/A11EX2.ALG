Algoritmo "A11EX2"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 09/05/2025
Var

   //2) Crie um algoritmo que leia 10 n�meros inteiros
   //em um vetor e calcule a soma
   //de todos os valores armazenados.

   i : inteiro
   numero : vetor[1..10] de inteiro
   res : inteiro

Inicio

   Escreval("Digite 10 numeros que deseje somar")

   Para i de 1 ate 10 faca
      Escreval( i," n�mero")
      Escreva("")
      Leia(numero[i])
      limpatela
      res <- res + numero[i]
   Fimpara

   limpatela
   Escreva("Esse � o seu resultado:", res)



Fimalgoritmo
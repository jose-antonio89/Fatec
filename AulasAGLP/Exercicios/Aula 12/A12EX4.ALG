Algoritmo "A11EX4"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 09/05/2025
Var

   //4)Leia 6 valores numéricos inteiros e armazene
   //em um vetor. Depois, exiba os
   //valores na ordem inversa da que foram digitados.

   numero : vetor[1..6] de inteiro
   i : inteiro

Inicio

   Escreval("Digite seis numeros")

   Para i de 1 ate 6 faca
      Escreval("Digite o", i ," numero")
      leia(numero[i])
   fimpara
   Escreval("")
   Escreval("Numeros na ordem inversa")
   Para i de 6 ate 1 passo -1 Faca
      Escreval(numero[i])
   Fimpara

Fimalgoritmo
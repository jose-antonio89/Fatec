Algoritmo "A10EX2"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Mostra qual numero e maior e qual eo menor
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 11/04/2025
Var

   numu, numd : inteiro


Inicio

   Escreval("Bem-Vindo ao tribunal dos numeros")
   Escreval("Quer saber qual numero e maior e qual e menor me diga dois numeros")

   Escreva("Me diga o primeiro numero: ")
   Leia(numu)

   Escreva("Me diga o segundo numero: ")
   Leia(numd)

   Se (numu > numd) entao
      limpatela
      Escreval("O maior numero foi o primeiro", numu)
   senao
      se (numd > numu) entao
         limpatela
         Escreval("O maior numero foi o segundo", numd)
      fimse
   fimse

   Se (numu = numd) e (numd = numu) entao
      Escreval("Empatou ambos são iguais")
   fimse

Fimalgoritmo
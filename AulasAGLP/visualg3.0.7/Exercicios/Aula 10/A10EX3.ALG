Algoritmo "A10EX3"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 11/04/2025
Var

   magoy, magoz, magof : inteiro
   num : inteiro
   resposta : inteiro

Inicio

   magoy <- randi(10)
   magoz <- randi(10)
   magof <- randi(10)

   Escreval("Os tres sabios possuem numeros magicos")
   Escreval("Descubra quem tem o maior entre eles")
   Escreval("Qual deles voce acha ter o maior numero?")
   leia(resposta)



   se (magoy > magoz) e (magoy > magoz) entao
      maiornum <- magoy
   senao
      se (magoz > magoy) e (magoz> magof) entao
         maiornum <- magoz
      senao
         se (magof > magoz) e (magof > magoy) entao
            maiornum <- magof
         senao
            se (magoy = magoz) e (magoz = magC) e (magC = magoy) entao
               maiornum <- magoz
               Escreval ("Todos os tr�s s�o iguais")
            senao
               se (magoy = magoz) entao
                  maiornum <- magoy
                  Escreval ("H� dois n�meros iguais")
               senao
                  se (magoy = magC) entao
                     maiornum <- magoy
                     Escreval ("H� dois n�meros iguais")
                  senao
                     se (magoz = magC) entao
                        maiornum <- magoz
                        Escreval ("Dois magos possuem o mesmo numero")
                     fimse
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse




Fimalgoritmo
Algoritmo "Dia de sorte"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descris��o   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descris��o nos exercicios
// antigos
Var

   numero: inteiro

Inicio
   Escreval("Jogue um dado e diga seu numero:")
   Leia(numero)

   Escolha numero
   Caso 33
      Escreval("Grande Sorte")
   Caso 666
      Escreval("Tigrinho vai pagar hoje")
   Caso 63
      Escreval("Vai acha dinheiro na rua")
   Caso 09
      Escreval("N�o passa por baixo de uma escada")
   Caso 777
      Escreval("Ganhou na loto")
   Caso 11
      Escreval("Vai trope�ar na rua")
   OutroCaso
      Escreval("Invalido")
   Fimescolha
   
Fimalgoritmo
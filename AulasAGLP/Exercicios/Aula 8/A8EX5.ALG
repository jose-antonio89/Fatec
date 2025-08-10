Algoritmo "semnome"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/04/2025
Var

   nomeum : caracter
   nomedois : caracter
   roboum : inteiro
   robodois : inteiro
   distum : inteiro
   distdois : inteiro

Inicio

   roboum <- 1
   robodois <- 1

   roboum <- randi(10)
   robodois <- randi(10)

   Escreval("Digite o nome do robo 1")
   Leia(nomeum)
   Escreval("Digite o nome do robo 2")
   Leia(nomedois)

   enquanto (roboum < 100) e (robodois < 100) faca
      distum <- randi(10)
      distdois <- randi(10)
      roboum <- roboum + distum
      robodois <- robodois + distdois
      Escreval("O Robo um esta na distancia", roboum)
      Escreval("O Robo dois esta na distancia", robodois)
   fimenquanto

  se (roboum >= 100) entao
      escreval("O robô" , nomeum,"foi o campeão!")
   senao
      se(robodois >= 100) entao
         escreval("O robô" , nomedois,"foi o campeão!")
      fimse
   fimse

Fimalgoritmo
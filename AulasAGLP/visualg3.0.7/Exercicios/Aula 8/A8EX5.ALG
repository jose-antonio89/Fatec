Algoritmo "semnome"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
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
      escreval("O rob�" , nomeum,"foi o campe�o!")
   senao
      se(robodois >= 100) entao
         escreval("O rob�" , nomedois,"foi o campe�o!")
      fimse
   fimse

Fimalgoritmo
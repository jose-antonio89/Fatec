Algoritmo "semnome"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 04/04/2025
Var

   x : inteiro
   est : inteiro
   confirmar : caracter

Inicio

   Escreval("Você viu uma estrela ?")
   Escreval("s/n")
   
   leia(confirmar)

   est <- 1

   enquanto confirmar = "s" faça
      Escreval("Estrelas vista: ", est)
      est <- est + 1
   Fimenquanto

   Se confirmar = "n" entao
      Escreval("Estrelas vistas: ", est)
   Fimse

Fimalgoritmo
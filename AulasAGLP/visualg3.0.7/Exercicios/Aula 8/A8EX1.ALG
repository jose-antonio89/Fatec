Algoritmo "semnome"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 04/04/2025
Var

   x : inteiro
   est : inteiro
   confirmar : caracter

Inicio

   Escreval("Voc� viu uma estrela ?")
   Escreval("s/n")
   
   leia(confirmar)

   est <- 1

   enquanto confirmar = "s" fa�a
      Escreval("Estrelas vista: ", est)
      est <- est + 1
   Fimenquanto

   Se confirmar = "n" entao
      Escreval("Estrelas vistas: ", est)
   Fimse

Fimalgoritmo
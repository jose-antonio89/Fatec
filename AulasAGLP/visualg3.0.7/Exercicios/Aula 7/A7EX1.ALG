Algoritmo "maiormenorV2"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
Var

   num : inteiro
   maior, menor : inteiro
   parar : caracter
   rpt : inteiro

Inicio

   Repita
   
      rpt <- rpt + 1

      Escreval("Digite n�meros:")
      Leia(num)

      Se(rpt = 1) Entao
         maior <- num
         menor <- num
      Fimse
      
      Se (num > maior) Entao
         maior <- num
      Fimse

      Se (num < menor) Entao
         menor <- num
      Fimse

      Limpatela()
      Escreval("--------------------------------------")
      Escreval("Voc� j� digitou ", rpt, " n�meros")
      Escreval("O maior numero at� agora foi:", maior)
      Escreval("O menor numero at� agora foi:", menor)
      Escreval("--------------------------------------")
      Escreval("Quer digitar outro numero?")
      Escreva("s/n")
      Leia(parar)

   At� (parar = "n") ou (parar = "N")
   
   Escreval("Programa encerrado")

Fimalgoritmo
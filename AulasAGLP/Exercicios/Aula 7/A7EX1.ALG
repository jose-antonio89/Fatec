Algoritmo "maiormenorV2"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
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

      Escreval("Digite números:")
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
      Escreval("Você já digitou ", rpt, " números")
      Escreval("O maior numero até agora foi:", maior)
      Escreval("O menor numero até agora foi:", menor)
      Escreval("--------------------------------------")
      Escreval("Quer digitar outro numero?")
      Escreva("s/n")
      Leia(parar)

   Até (parar = "n") ou (parar = "N")
   
   Escreval("Programa encerrado")

Fimalgoritmo
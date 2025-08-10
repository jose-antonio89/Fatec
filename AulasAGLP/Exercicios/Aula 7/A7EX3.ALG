Algoritmo "notas"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
Var

   i : inteiro
   media : real
   nota_um, nota_dois : real

Inicio

   Para i de 1 ate 10 faca

      Escreval("---------------------------")
      Escreval("Nota do aluno: ",i)
      Repita
         Escreval("---------------------------")
         Escreval("Qual a primeira nota?")
         Escreval("---------------------------")
         leia(nota_um)
      Ate (nota_um > 0) e (nota_um <= 10)

      Repita
         Escreval("---------------------------")
         Escreval("Qual a segunda nota?")
         Escreval("---------------------------")
         leia(nota_dois)
      Ate (nota_dois > 0) e (nota_dois <= 10)

      media <- (nota_um + nota_dois)/2:2:2
      Escreval("---------------------------")

      Escreval("---------------------------")
      Escreval("A média foi: ", media)
      Escreval("---------------------------")

   fimpara

Fimalgoritmo
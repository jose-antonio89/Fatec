Algoritmo "Maioremenor"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descris��o   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descris��o nos exercicios
// antigos
Var

   i, num, maior, menor : inteiro

Inicio

   Escreval("Digite 10 numeros")
   Escreval("------------------------")
   leia(num)
   maior <- num // Atribuir ao primeiro numero ambas as variaveis
   menor <- num

   para i de 2 ate 10 fa�a
      Escreval("------------------------")
      Escreval("Digite o", i, " numero: ")

      leia(num)
      // usar o PARA para repetir o processo dos SEs
      // Se o NUM for MAIOR que o NUM anterior
      // Entao NUM vai ser atualizada para o numero MAIOR, agora maior q o anterior
      Se num > maior entao
         maior <- num
      fimse
      Se num < menor entao
         menor <- num
      fimse
   fimpara

   Escreval("------------------------")
   Escreval("o maior numero �: ", maior)
   Escreval("o menor numero �: ", menor)
   Escreval("------------------------")

Fimalgoritmo
Algoritmo "A10EX9"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 12/04/2025
Var

   num : inteiro
   posi : inteiro
   nega : inteiro


Inicio

   posi <- 0
   nega <- 0

   Escreval("Digite numeros negativos e positivos")
   Escreval("Que irei conta-los para voçê")
   Escreval("Digite 0 para parar")

   repita

      Escreval("Numero: ")
      leia(num)

      se num > 0 entao
         posi <- posi + 1
      senao
         se num < 0 entao
            nega <- nega + 1
         fimse
      fimse
   ate num = 0

   Escreval("Eu contei")
   Escreval("Números positivos : ", posi)
   Escreval("Números negativos : ", nega)

Fimalgoritmo
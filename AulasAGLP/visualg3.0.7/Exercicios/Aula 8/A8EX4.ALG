Algoritmo "sortede1a100"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/04/2025
Var

   sorte : inteiro
   ten : inteiro

Inicio

   sorte <- randi(100)

   Escreval("Acerte o numero da sorte de 1 a 100")
   Escreval("Digite o numero da sorte:")
   leia(ten)

   Enquanto (sorte <> ten) faca
      Escreval("Tente novamente:")
      leia (ten)

      Se ten > sorte entao
         Escreval("Numero muito alto! tente um numero menor")
      fimse

      Se ten < sorte entao
         Escreval("Numero muito baixo! tente um numero maior")
      fimse
   fimenquanto
   
   Se ten = sorte entao
   limpatela
   Escreval("Parabens voc� acertou")
   fimse
   
Fimalgoritmo
Algoritmo "Jogo da sorte"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
Var

   sorte : inteiro
   qtd : inteiro
   tentativa : inteiro
   comecar : caracter

Inicio

   sorte <- randi(10)
   qtd <- 0

   Escreval("------------------------------")
   Escreval("Jogo da sorte")
   Escreval("------------------------------")
   Escreval("Advinhe o numero da v�z e ganhe um premio")
   Escreval("Dica o numero est� entre 1 e 10")
   Escreval("Quer come�ar agora ? S/N")
   Escreval("------------------------------")
   Leia(comecar)

   se (comecar = "n") ou (comecar = "n") ent�o
      Escreval("Saiu do jogo")
      fimalgoritmo
   fimse

   se (comecar = "s") ou (comecar = "S") ent�o
    Limpatela()
    fimse
      Repita

         Escreval("------------------------------")
         Escreval("Tentativas at� agora", qtd)
         Escreval("------------------------------")
         Leia(tentativa)
         qtd <- qtd + 1

         Se tentativa < sorte entao
            Escreval("------------------------------")
            Escreval("� um n�mero maior")
            Escreval("------------------------------")
         fimse

         se tentativa > sorte entao
            Escreval("------------------------------")
            Escreval("� um n�mero menor")
            Escreval("------------------------------")
         fimse

   At� tentativa = sorte

   Escreval("------------------------------")
   Escreval("Voc� acertou em ",qtd ," tentativas")
   Escreval("------------------------------")
   
Fimalgoritmo
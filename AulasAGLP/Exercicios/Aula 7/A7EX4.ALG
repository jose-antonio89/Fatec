Algoritmo "Jogo da sorte"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
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
   Escreval("Advinhe o numero da véz e ganhe um premio")
   Escreval("Dica o numero está entre 1 e 10")
   Escreval("Quer começar agora ? S/N")
   Escreval("------------------------------")
   Leia(comecar)

   se (comecar = "n") ou (comecar = "n") então
      Escreval("Saiu do jogo")
      fimalgoritmo
   fimse

   se (comecar = "s") ou (comecar = "S") então
    Limpatela()
    fimse
      Repita

         Escreval("------------------------------")
         Escreval("Tentativas até agora", qtd)
         Escreval("------------------------------")
         Leia(tentativa)
         qtd <- qtd + 1

         Se tentativa < sorte entao
            Escreval("------------------------------")
            Escreval("É um número maior")
            Escreval("------------------------------")
         fimse

         se tentativa > sorte entao
            Escreval("------------------------------")
            Escreval("É um número menor")
            Escreval("------------------------------")
         fimse

   Até tentativa = sorte

   Escreval("------------------------------")
   Escreval("Você acertou em ",qtd ," tentativas")
   Escreval("------------------------------")
   
Fimalgoritmo
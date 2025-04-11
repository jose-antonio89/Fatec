Algoritmo "A10EX4"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Caverna sagrada
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 11/04/2025
Var

   senha : inteiro
   correta : inteiro
   confirmar : caracter

Inicio

   senha <- 8976

   Escreval("Bem-vindo aventureiro")
   Escreval("Se deseja entrar na caverna sagrada")
   Escreval("Acerte a senha")

   repita

      Escreva("A senha é:")
      leia(correta)

      Se correta > 9999 entao
         Escreval("Senha fora dos padroes magicos")
         Escreval("É um numero menor")
      fimse

      Se correta < 1000 entao
         Escreval("Senha fora dos padroes magicos")
         Escreval("É um numero maior")
      fimse

   ate correta = senha

   limpatela
   Escreval("Voce conseguiu entrar")

Fimalgoritmo
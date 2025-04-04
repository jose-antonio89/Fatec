Algoritmo "contabloqueada"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 04/04/2025
Var

   senha : caracter
   ten : inteiro

Inicio

   ten <- 3

   Escreval("Digite sua senha:")
   leia (senha)

   enquanto (senha <> "umdoistreisquatro") faca

      Escreval("Senha incorreta! Tente novamente:")
      Escreval("Tentativas restantes:", ten)
      ten <- ten - 1
      leia(senha)

      Se (ten = 0) entao
         limpatela
         Escreval("CONTA BLOQUIADA")
         fimalgoritmo
      fimse

fimenquanto



Escreval("Acesso permitido")




Fimalgoritmo
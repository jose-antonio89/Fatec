Algoritmo "lojarpg"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Simula uma loja de rpg
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 06/04/2025
Var

   ouro : inteiro
   item : real

Inicio

   ouro <- 200

   Repita
      Enquanto ouro <> 0 faca
         Escreval("======================================")
         Escreval("|      Bem Vindo a loja do RPG       |")
         Escreval("======================================")
         Escreval("|1 - Espada mágica - 50 de ouro")
         Escreval("|2 - Escudo de Dragão - 40 de ouro ")
         Escreval("|3 - Poção de Cura - 10 de ouro")
         Escreval("|4 - Sair da loja")
         Escreval("======================================")
         leia(item)
         escolha(item)

         caso 1

            ouro <- ouro - 50
            Escreval("Você comprou uma Espada mágica")
            Escreval("Ainda possui", ouro," moedas de ouro")

         caso 2

            ouro <- ouro - 40
            Escreval("Você comprou um Escudo do Dragão")
            Escreval("Ainda possui", ouro," moedas de ouro")

         caso 3

            ouro <- ouro - 10
            Escreval("Você comprou uma Poção de Cura")
            Escreval("Ainda possui", ouro," moedas de ouro")

         caso 4

            limpatela
            Escreval("Adeus")
            fimalgoritmo

         outrocaso

            Escreval("Não possuimos itens alem desses porfavor selecione outra opção")

         fimescolha
      fimenquanto
   ate item = 4
Fimalgoritmo
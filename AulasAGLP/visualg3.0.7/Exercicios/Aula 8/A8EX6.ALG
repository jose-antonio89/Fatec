Algoritmo "lojarpg"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Simula uma loja de rpg
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
         Escreval("|1 - Espada m�gica - 50 de ouro")
         Escreval("|2 - Escudo de Drag�o - 40 de ouro ")
         Escreval("|3 - Po��o de Cura - 10 de ouro")
         Escreval("|4 - Sair da loja")
         Escreval("======================================")
         leia(item)
         escolha(item)

         caso 1

            ouro <- ouro - 50
            Escreval("Voc� comprou uma Espada m�gica")
            Escreval("Ainda possui", ouro," moedas de ouro")

         caso 2

            ouro <- ouro - 40
            Escreval("Voc� comprou um Escudo do Drag�o")
            Escreval("Ainda possui", ouro," moedas de ouro")

         caso 3

            ouro <- ouro - 10
            Escreval("Voc� comprou uma Po��o de Cura")
            Escreval("Ainda possui", ouro," moedas de ouro")

         caso 4

            limpatela
            Escreval("Adeus")
            fimalgoritmo

         outrocaso

            Escreval("N�o possuimos itens alem desses porfavor selecione outra op��o")

         fimescolha
      fimenquanto
   ate item = 4
Fimalgoritmo
Algoritmo "A10EX12"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 11/05/2025
Var

   suco : inteiro
   opcao : caractere
   esco : inteiro

Inicio

   Escreval("Seja bem-vindo ao banquete dos sucos")
   Escreval("O Que deseja beber?")
   Escreval("1 - Suco de tomate (100 ml)")
   Escreval("2 - Suco de morango (200 ml)")
   Escreval("3 - Suco de beterraba (200 ml)")
   Leia(esco)

   Escolha esco

   caso 1

      suco <- suco + 100

   caso 2

      suco <- suco + 200

   caso 3

      suco <- suco + 300

   Fimescolha


   repita

      Escreval("Deseja consumir mais? S/N")
      leia(opcao)

      Se opcao = "s" entao
         Escreval("1 - Suco de tomate (100 ml)")
         Escreval("2 - Suco de morango (200 ml)")
         Escreval("3 - Suco de beterraba (200 ml)")
         Leia(esco)

         Escolha esco

         caso 1

            suco <- suco + 100

         caso 2

            suco <- suco + 200

         caso 3

            suco <- suco + 300

         Fimescolha
      Fimse

      Se suco >= 1000 entao
         Escreval("Cuidado, Vampiro empanturrado!")
      Fimse
   ate opcao = "n"

Fimalgoritmo
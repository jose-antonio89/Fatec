Algoritmo "Robo do WhatsApp"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descris��o   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descris��o nos exercicios
// antigos
Var

   menu: inteiro
   idade : inteiro
   renda : real
   parcela : real
   valor : real
   parcelaMax : real
   seguro : real

Inicio

      Escreval("-----------------------------")
      Escreval("")
      Escreval("Boas Vindas!")
      Escreval("")
      Escreval("-----------------------------")
      Escreval("")
      Escreval("")
      Escreval("-----------------------------")
      Escreval("")
      Escreval("Escolha a op��o desejada")
      Escreval("1-Requisitos de contrata��o de emprestimo")
      Escreval("2-Fazer Emprestimo")
      Escreval("3-Informa��es de Contato")
      Escreval("-----------------------------")
      Escreval("")
      Leia(menu)

      // menu 1
      Escolha menu

      Caso 1
         Limpatela()
         Escreval("-----------------------------")
         Escreval("� necess�rio ter uma renda maior de 1500")
         Escreval("E ter mais de 18 anos de idade")
         Escreval("-----------------------------")

      Caso 2
         Escreval("")
         Escreval("-----------------------------")
         Escreval("")
         Escreval("Quantos anos voc� tem?")
         Escreval("")
         Escreval("-----------------------------")
         Leia(idade)

         Se (idade < 18 ) ent�o
            Limpatela()
            Escreval("Voc� n�o tem idade suficiente!")
Fimalgoritmo
Fimse

Escreval("-----------------------------")
Escreval("")
Escreval("Quanto o senhor/a recebe por m�s?")
Escreval("")
Escreval("-----------------------------")
Leia(renda)

Se (renda < 1500) entao
   Limpatela()
   Escreval("Infelizmente voc� n�o recebe o suficiente")
Fimalgoritmo
Fimse

Se (renda >= 1500) ent�o
   parcelaMax <- (renda/100) * 15
Fimse

Se (renda >= 2000) ent�o
   parcelaMax <- (renda/100) * 20
Fimse

Se (renda >= 2500) ent�o
   parcelaMax <- (renda/100) * 25
Fimse

Se (idade >= 18) E (idade < 29) ent�o
   seguro <- (parcelaMax/100) * 5
Fimse

Se (idade > 30) E (idade < 44) ent�o
   seguro <- (parcelaMax/100) * 7
Fimse

Se (idade > 45) E (idade < 60) ent�o
   seguro <- (parcelaMax/100) * 10
Fimse

Se (idade >= 60) ent�o
   seguro <- (parcelaMax/100) * 15
Fimse

Escreval("-----------------------------")
Escreval("Emprestimo Aprovado")
Escreval("-----------------------------")
Escreval("Valor da Parcela: R$:", parcelaMax)
Escreval("Valor do Seguro R$:", seguro)
Escreval("Valor Total da Parcela+Seguro: R$:", parcelaMax + seguro)
Escreval("-----------------------------")

Caso 3

   Escreval("-----------------------------")
   Escreval("")
   Escreval("Numero de telefone: 1199999999")
   Escreval("Email: empresa@gmail.com")
   Escreval("Site: www.empresa.com")
   Escreval("")
   Escreval("-----------------------------")

OutroCaso

   Escreval("Essa op��o n�o existe tente novamente")

Fimescolha

Fimalgoritmo
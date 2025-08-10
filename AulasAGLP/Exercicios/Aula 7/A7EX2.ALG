Algoritmo "Robo do WhatsAppV2"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descrisção   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descrisção nos exercicios
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

   Repita

      Escreval("-----------------------------")
      Escreval("Boas Vindas!")
      Escreval("-----------------------------")
      Escreval("")
      Escreval("Escolha a opção desejada")
      Escreval("1-Requisitos de contratação de emprestimo")
      Escreval("2-Fazer Emprestimo")
      Escreval("3-Informações de Contato")
      Escreval("4-Sair do zap")
      Escreval("-----------------------------")
      Escreval("")
      Leia(menu)

      // menu 1
      Escolha menu

      Caso 1
         Limpatela()
         Escreval("-----------------------------")
         Escreval("É necessário ter uma renda maior de 1500")
         Escreval("E ter mais de 18 anos de idade")
         Escreval("-----------------------------")

      Caso 2
         Escreval("")
         Escreval("-----------------------------")
         Escreval("")
         Escreval("Quantos anos você tem?")
         Escreval("")
         Escreval("-----------------------------")
         Leia(idade)

         Se (idade < 18 ) então
            Limpatela()
            Escreval("Você não tem idade suficiente!")
Fimalgoritmo
Fimse

Escreval("-----------------------------")
Escreval("")
Escreval("Quanto o senhor/a recebe por mês?")
Escreval("")
Escreval("-----------------------------")
Leia(renda)

Se (renda < 1500) entao
   Limpatela()
   Escreval("Infelizmente você não recebe o suficiente")
Fimalgoritmo
Fimse

Se (renda >= 1500) então
   parcelaMax <- (renda/100) * 15
Fimse

Se (renda >= 2000) então
   parcelaMax <- (renda/100) * 20
Fimse

Se (renda >= 2500) então
   parcelaMax <- (renda/100) * 25
Fimse

Se (idade >= 18) E (idade < 29) então
   seguro <- (parcelaMax/100) * 5
Fimse

Se (idade > 30) E (idade < 44) então
   seguro <- (parcelaMax/100) * 7
Fimse

Se (idade > 45) E (idade < 60) então
   seguro <- (parcelaMax/100) * 10
Fimse

Se (idade >= 60) então
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

Caso 4

   Escreval("-----------------------------")
   Escreval("")
   Escreval("Você saiu do zap")
   Escreval("")
   Escreval("-----------------------------")

OutroCaso

   Escreval("Essa opção não existe tente novamente")

Fimescolha
Até (menu  = 4)

Fimalgoritmo
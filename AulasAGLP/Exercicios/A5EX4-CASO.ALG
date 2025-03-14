Algoritmo "A5Ex4-Caso"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 14/03/2025
Var
   menu: inteiro
   idade : inteiro
   renda : real
   parcela : real
   valor : real
   parcelaMax : real
   seguro : real

Inicio
   Escreval("Boas Vindas!")
   Escreval("Escolha a opção desejada")
   Escreval("1-Requisitos de contratação de emprestimo")
   Escreval("2-Fazer Emprestimo")
   Escreval("3-Informações de Contato")
   Leia(menu)

   // menu 1
   Escolha menu
   Caso 1
      Escreval("É necessário ter uma renda maior de 1500 e idade acima de 18 anos")
   Caso 2
      Escreval("Quantos anos você tem?")
      Leia(idade)

      Se (idade < 18 ) então
         Escreval("Você não tem idade suficiente")
Fimalgoritmo
Fimse

Escreval("Quanto o senhor recebe por mês?")
Leia(renda)

Se (renda >= 1500) Então
   parcelaMax <- (renda/100) * 15
Fimse

Se (renda >= 2000) Então
   parcelaMax <- (renda/100) * 20
Fimse

Se (renda >= 2500) Então
   parcelaMax <- (renda/100) * 25
Fimse

Se (idade >= 18) E (idade < 29) Então
   seguro <- (parcelaMax/100) * 5
Fimse

Se (idade > 30) E (idade < 44) Então
   seguro <- (parcelaMax/100) * 7
Fimse

Se (idade > 45) E (idade < 60) Então
   seguro <- (parcelaMax/100) * 10
Fimse

Se (idade >= 60) Então
   seguro <- (parcelaMax/100) * 15
Fimse

Escreval("")
Escreva("-----------------------------")
Escreval("")
escreva("Emprestimo Aprovado")

Escreval("")

escreva("Valor da Parcela: R$:", parcelaMax)

Escreval("")

escreva("Valor do Seguro R$:", seguro)

Escreval("")

escreva("Valor Total da Parcela+Seguro: R$:", parcelaMax + seguro)
Escreval("")
Escreva("-----------------------------")
Escreval("")
Caso 3
   Escreval("Numero de telefone: 1199999999")
   Escreval("Email: empresa@gmail.com")
   Escreval("Site: www.empresa.com")
fimescolha

Fimalgoritmo
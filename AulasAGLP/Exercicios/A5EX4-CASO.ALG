Algoritmo "A5Ex4-Caso"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
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
   Escreval("Escolha a op��o desejada")
   Escreval("1-Requisitos de contrata��o de emprestimo")
   Escreval("2-Fazer Emprestimo")
   Escreval("3-Informa��es de Contato")
   Leia(menu)

   // menu 1
   Escolha menu
   Caso 1
      Escreval("� necess�rio ter uma renda maior de 1500 e idade acima de 18 anos")
   Caso 2
      Escreval("Quantos anos voc� tem?")
      Leia(idade)

      Se (idade < 18 ) ent�o
         Escreval("Voc� n�o tem idade suficiente")
Fimalgoritmo
Fimse

Escreval("Quanto o senhor recebe por m�s?")
Leia(renda)

Se (renda >= 1500) Ent�o
   parcelaMax <- (renda/100) * 15
Fimse

Se (renda >= 2000) Ent�o
   parcelaMax <- (renda/100) * 20
Fimse

Se (renda >= 2500) Ent�o
   parcelaMax <- (renda/100) * 25
Fimse

Se (idade >= 18) E (idade < 29) Ent�o
   seguro <- (parcelaMax/100) * 5
Fimse

Se (idade > 30) E (idade < 44) Ent�o
   seguro <- (parcelaMax/100) * 7
Fimse

Se (idade > 45) E (idade < 60) Ent�o
   seguro <- (parcelaMax/100) * 10
Fimse

Se (idade >= 60) Ent�o
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
Algoritmo "semnome"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/03/2025
Var

desconto : real
pagamento : inteiro
valor : real
valorFinal : real




Inicio

Escreval("Ficou")
Leia (valor)
 
Escreval("Escolha sua forma de pagamento")
Escreval("1 Para pix")
Escreval("2 Para dinheiro")
Escreval("3 Para cart�o de cr�dito")
Escreval("4 Para cart�o de d�bito")

Leia (pagamento)

Se (pagamento = 1) ent�o
 desconto <- 10
 valorFinal <- valor * 0.90
 Escreval(valorFinal)
fimse

Se (pagamento = 2) ent�o
 desconto <- 5
 valorfinal <- valor * 0.95
 Escreval(valorFinal)
fimse

Se (pagamento = 3) ent�o
 Escreval(valor)
fimse

Se (pagamento = 4) ent�o
 Escreval(valor)
fimse

Se (pagamento => 5) ent�o
 Escreval("Essa op��o n�o existe")
fimse



Fimalgoritmo
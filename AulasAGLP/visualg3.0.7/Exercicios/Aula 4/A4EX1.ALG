Algoritmo "Desconto"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Algoritmo para calcular desconto dado
// nas formas de pagamento
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descrição nos exercicios
// antigos
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
Escreval("3 Para cartão de crédito")
Escreval("4 Para cartão de débito")

Leia (pagamento)

Se (pagamento = 1) então
 desconto <- 10
 valorFinal <- valor * 0.90
 Escreval(valorFinal)
fimse

Se (pagamento = 2) então
 desconto <- 5
 valorfinal <- valor * 0.95
 Escreval(valorFinal)
fimse

Se (pagamento = 3) então
 Escreval(valor)
fimse

Se (pagamento = 4) então
 Escreval(valor)
fimse

Se (pagamento => 5) então
 Escreval("Essa opção não existe")
fimse

Fimalgoritmo
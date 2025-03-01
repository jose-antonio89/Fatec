Algoritmo "semnome"
// Disciplina   : Técnicas de Programação e Algoritmos
// Professor   : Tiago Antonio da Silva 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 18/08/2021
Var

V_Mussarela : real
V_Presunto : real
V_Peitodeperu : real
V_Mortadela : real

QTD_Mussarela : real
QTD_Presunto : real
QTD_Peitodeperu : real
QTD_Mortadela : real
QTD_Total : real

COM_M : real
COM_P : real
COM_PP : real
COM_MO : real
COM_Total : real

Inicio

Escreval("Quantos kilos de Mussarela você quer ?")
Leia(QTD_Mussarela)
Escreval("Quantos kilos de Presunto você quer ?")
Leia(QTD_Presunto)
Escreval("Quantos kilos de Peito de peru você quer ?")
Leia(QTD_Peitodeperu)
Escreval("Quantos kilos de Mortadela você quer ?")
Leia(QTD_Mortadela)

QTD_Total <- QTD_Mussarela + QTD_Presunto + QTD_Peitodeperu + QTD_Mortadela

Escreval("Foram vendidas", QTD_Mussarela, " gramas de Mussarela")
Escreval("Foram vendidas", QTD_Presunto, " gramas de Presunto")
Escreval("Foram vendidas", QTD_Peitodeperu, " gramas de Peito de peru")
Escreval("Foram vendidas", QTD_Mortadela, " gramas de Mortadela")

V_Mussarela <- QTD_Mussarela * 56.20
V_Presunto <- QTD_Presunto * 78.20
V_Peitodeperu <- QTD_Peitodeperu * 89.60
V_Mortadela <- QTD_Mortadela * 25.90



Fimalgoritmo
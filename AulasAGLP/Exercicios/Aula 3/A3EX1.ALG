Algoritmo "Comissão"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrição   : Calcular a comissão da venda dos frios
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descrição nos exercicios
// antigos
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

Escreval("Foram vendidas", QTD_Mussarela, " kilos de Mussarela")
Escreval("Foram vendidas", QTD_Presunto, " kilos de Presunto")
Escreval("Foram vendidas", QTD_Peitodeperu, " kilos de Peito de peru")
Escreval("Foram vendidas", QTD_Mortadela, " kilos de Mortadela")

V_Mussarela <- QTD_Mussarela * 56.20
V_Presunto <- QTD_Presunto * 78.20
V_Peitodeperu <- QTD_Peitodeperu * 89.60
V_Mortadela <- QTD_Mortadela * 25.90

COM_M <- V_Mussarela * 0.03
COM_P <- V_Presunto * 0.05
COM_PP <- V_Peitodeperu * 0.10
COM_MO <- V_Mortadela * 0.08
COM_Total <-  COM_M + COM_P + COM_PP + COM_MO

Escreval("A comissão da Mussarela foi ", COM_M)
Escreval("A comissão do Presunto foi ", COM_P)
Escreval("A comissão do Peito de peru foi ", COM_PP)
Escreval("A comissão da Mortadela foi ", COM_MO)

Escreval("O total de vendas foi", QTD_Total, " kilos")

Escreval("O total de comissão foi", COM_Total, " reais")

Fimalgoritmo
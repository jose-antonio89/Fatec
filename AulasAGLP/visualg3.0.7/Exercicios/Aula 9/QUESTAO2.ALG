Algoritmo "Questao2"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Um programa para calcular o custo da viagem
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 06/04/2025
var

   kmInicial, kmFinal, kmRodados: real
   litrosDiesel, custoDiesel: real
   qtdPedagios, i: inteiro
   valorPedagio, totalPedagios, custoTotal: real
   continuar: caractere
   precoDiesel, rendimento: real

inicio

   // Valor do diesel e rendimento
   precoDiesel <- 4.40
   rendimento <- 3.8 // km por litro

   // Entrada de dados da viagem
   escreval("=================================")
   escreval("|  C�LCULO DE CUSTOS DE VIAGEM  |")
   escreval("=================================")

   // Leitura dos quil�metros
   repita
      // Repita para impedir que o kmInicial seja igual ou menor que o maior
      escreva("Digite o km inicial do hod�metro: ")
      leia(kmInicial)
      escreva("Digite o km final do hod�metro: ")
      leia(kmFinal)

      se kmFinal <= kmInicial entao
         escreval("O km final deve ser maior que o km inicial!")
      fimse
   ate kmFinal > kmInicial

   // C�lculo do consumo de diesel
   kmRodados <- kmFinal - kmInicial
   litrosDiesel <- kmRodados / rendimento
   custoDiesel <- litrosDiesel * precoDiesel

   // Entrada de ped�gios
   totalPedagios <- 0
   qtdPedagios <- 0
   continuar <- "S"
   i <- 1

   escreval("=====================================")
   escreval("|       REGISTRO DE PED�GIOS        |")
   escreval("=====================================")

   // Primeiro ped�gio
   qtdPedagios <- 1
   escreva("Valor do 1� ped�gio (R$): ")
   leia(valorPedagio)
   totalPedagios <- totalPedagios + valorPedagio
   escreva("Deseja adicionar mais ped�gios? (S/N): ")
   leia(continuar)

   se (continuar = "S") ou (continuar = "s") entao
      i <- 2
      repita // Repita para adicionar mais pedagios caso necessario
         escreva("Valor do ", i, "� ped�gio (R$): ")
         leia(valorPedagio)
         totalPedagios <- totalPedagios + valorPedagio
         qtdPedagios <- qtdPedagios + 1
         i <- i + 1
         escreva("Deseja adicionar mais ped�gios? (S/N): ")
         leia(continuar)
      ate (continuar = "N") ou (continuar = "n")
   fimse

   // C�lculo do custo total
   custoTotal <- custoDiesel + totalPedagios

   // Resultados
   limpatela
   escreval("========================================")
   escreval("|         RESUMO DA VIAGEM             |")
   escreval("========================================")
   escreval("|Dist�ncia percorrida: ", kmRodados:5:1, " km")
   escreval("|Consumo de diesel: ", litrosDiesel:5:1, " litros")
   escreval("|Custo com diesel: R$ ", custoDiesel:5:2)
   escreval("========================================")
   escreval("|Quantidade de ped�gios: ", qtdPedagios)
   escreval("|Custo total com ped�gios: R$ ", totalPedagios:5:2)
   escreval("========================================")
   escreval("|CUSTO TOTAL DA VIAGEM: R$ ", custoTotal:5:2)
   escreval("========================================")
   
fimalgoritmo
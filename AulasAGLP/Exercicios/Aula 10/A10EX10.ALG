Algoritmo "A10EX10"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 19/04/2025
var

   opcao: inteiro
   continuar: caractere
   raio, base, altura, area: real
   
inicio

   repita
      escreval("==============================")
      escreval("|    GRIMORIO DE FEITIÇOS    |")
      escreval("==============================")
      escreval("|a) Area do circulo   (1)    |")
      escreval("|b) Area do retangulo (2)    |")
      escreval("|c) Sair do grimorio  (3)    |")
      escreval("==============================")

      repita
         escreva("Escolha seu feitiço (1-3): ")
         leia(opcao)
      ate (opcao >= 1) e (opcao <= 3)

      escolha opcao
         caso 1
            escreva("Digite o raio do círculo: ")
            leia(raio)
            area <- 3.14159 * raio * raio
            escreval("Area do circulo: ", area)
         caso 2
            escreva("Digite a base do retangulo: ")
            leia(base)
            escreva("Digite a altura do retangulo: ")
            leia(altura)
            area <- base * altura
            escreval("Area do retangulo: ", area)
         caso 3
            escreval("Grimorio esta sendo fechado...")
      fimescolha

      se opcao <> 3 entao
         repita
            escreva("Deseja usar outro feitico? (S/N): ")
            leia(continuar)
            continuar <- maiusc(continuar)
         ate (continuar = "S") ou (continuar = "N")
      senao
         continuar <- "N"
      fimse

   ate continuar = "N"
   escreval("O Grimorio foi fechado")
   
fimalgoritmo
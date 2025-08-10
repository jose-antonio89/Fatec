Algoritmo "Alturadosjogadores"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descrisção   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descrisção nos exercicios
// antigos
Var

   i, num_jogadores : inteiro
   altura, soma_alturas, media : real

Inicio

   Escreva("Informe o número de jogadores: ")
   Leia(num_jogadores)
   soma_alturas <- 0
   Para i de 1 até num_jogadores Faça
      Escreva("Altura do Jogador ", i, ":")
      Leia(altura)
      soma_alturas<-soma_alturas+altura
   Fimpara
   media <- soma_alturas/num_jogadores
   Escreva("A média de alturas é: ", media:2:2)

Fimalgoritmo
Algoritmo "Alturadosjogadores"

Var

   i, num_jogadores : inteiro
   altura, soma_alturas, media : real

Inicio

   Escreva("Informe o n�mero de jogadores: ")
   Leia(num_jogadores)
   soma_alturas <- 0
   Para i de 1 at� num_jogadores Fa�a
      Escreva("Altura do Jogador ", i, ":")
      Leia(altura)
      soma_alturas<-soma_alturas+altura
   Fimpara
   media <- soma_alturas/num_jogadores
   Escreva("A m�dia de alturas �: ", media:2:2)

Fimalgoritmo
Algoritmo "semnome"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/03/2025
Var
 //A  >= 8.5 / B >= 7.5 / C >= 6.0 / D >= 5.0 / E <= 5.0

media : real
nota : real
prova_um : real
prova_dois : real

Inicio

Escreval("Nota da prova 1:")
Leia(prova_um)

Escreval("Nota da prova 2:")
Leia(prova_dois)

Escreval("Sua média é:")
media <- (prova_um + prova_dois) / 2

Se (media >= 8.5) Então
 Escreval("Tirou A, com a media", media)
Fimse

Se (media >= 7.5) Então
 Escreval("Tirou B, com a media", media)
Fimse

Se (media >= 6.0) Então
 Escreval("Tirou C, com a media", media)
Fimse

Se (media >= 5.0) Então
 Escreval("Tirou D, com a media", media)
Fimse

Se (media < 5.0) Então
 Escreval("Tirou E, com a media", media)
Fimse







Fimalgoritmo
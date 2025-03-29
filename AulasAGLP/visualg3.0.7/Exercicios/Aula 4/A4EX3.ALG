Algoritmo "Menção"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descrisção   : um algoritmo para ver qual a menção
// que o aluno recebeu baseado em sua nota
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descrisção nos exercicios
// antigos
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
Algoritmo "Men��o"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descris��o   : um algoritmo para ver qual a men��o
// que o aluno recebeu baseado em sua nota
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descris��o nos exercicios
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

Escreval("Sua m�dia �:")
media <- (prova_um + prova_dois) / 2

Se (media >= 8.5) Ent�o
 Escreval("Tirou A, com a media", media)
Fimse

Se (media >= 7.5) Ent�o
 Escreval("Tirou B, com a media", media)
Fimse

Se (media >= 6.0) Ent�o
 Escreval("Tirou C, com a media", media)
Fimse

Se (media >= 5.0) Ent�o
 Escreval("Tirou D, com a media", media)
Fimse

Se (media < 5.0) Ent�o
 Escreval("Tirou E, com a media", media)
Fimse

Fimalgoritmo
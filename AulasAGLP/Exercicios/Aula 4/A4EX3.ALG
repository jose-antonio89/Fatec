Algoritmo "semnome"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 07/03/2025
Var

idade : inteiro
renda : real
parcela : real
valor : real
parcelaMax : real
seguro : real

//Rendas acima de 1500 Parcela max 15%
//2000 Max 20%
//2500 Max 25%

//Idades entre 18 e 29, Seguro 5%
//Idades entre 30 e 44, Seguro 7%
//Idades entre 45 e 60, Seguro 10%
//Idades maior que 60, Seguro 15%


//Caso aprovado cacular a parcela beseado na renda

Inicio

Escreval("Quanto o senhor recebe por m�s?")
Leia(renda)

Escreval("Quantos anos voc� tem?")
Leia(idade)

Se (renda >= 1500) Ent�o
 parcelaMax <- renda * 0.1
Fimse

Se (renda >= 2000) Ent�o
 parcelaMax <- renda * 0.2
Fimse

Se (renda >= 2500) Ent�o
 parcelaMax <- renda * 0.25
Fimse

Se (idade >= 18) E (idade <= 29) Ent�o
   seguro <- parcelaMax * 0.05
Fimse

Se (idade >= 30) E (idade <= 44) Ent�o
   seguro <- parcelaMax * 0.07
Fimse

Se (idade >= 45) E (idade <= 60) Ent�o
   seguro <- parcelaMax * 0.10
Fimse

Se (idade >= 60) Ent�o
   seguro <- parcelaMax * 0.15
Fimse




















Fimalgoritmo

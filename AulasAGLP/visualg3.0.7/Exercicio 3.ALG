Algoritmo "semnome"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva 
// Descrição   : Aqui você descreve o que o programa faz! (função)
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

Escreval("Quanto o senhor recebe por mês?")
Leia(renda)

Escreval("Quantos anos você tem?")
Leia(idade)

Se (renda >= 1500) Então
 parcelaMax <- renda * 0.1
Fimse

Se (renda >= 2000) Então
 parcelaMax <- renda * 0.2
Fimse

Se (renda >= 2500) Então
 parcelaMax <- renda * 0.25
Fimse

Se (idade >= 18) E (idade <= 29) Então
   seguro <- parcelaMax * 0.05
Fimse

Se (idade >= 30) E (idade <= 44) Então
   seguro <- parcelaMax * 0.07
Fimse

Se (idade >= 45) E (idade <= 60) Então
   seguro <- parcelaMax * 0.10
Fimse

Se (idade >= 60) Então
   seguro <- parcelaMax * 0.15
Fimse




















Fimalgoritmo

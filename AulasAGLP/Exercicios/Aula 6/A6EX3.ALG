Algoritmo "Login"
// Disciplina   : Lógica de Programação e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descrisção   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descrisção nos exercicios
// antigos
Var

   tentativas : inteiro
   usuario, senha : caractere

Inicio

   Para tentativas de 1 até 3 Faça
      Escreva("Login ")
      Escreval("Tentativa ", tentativas, " de 3")

      Escreval("Informe seu usuário:")
      Leia(usuario)

      Escreval("Informe sua senha:")
      Leia(senha)

      Se(usuario = "admin") e (senha = "123") então
         limpatela()
         Escreval("Bem-vindo ao sistema")
         interrompa
      Senão
         limpatela()
         Escreval("Dados Incorretos. Acesso negado.")
      Fimse
   fimpara

Fimalgoritmo
Algoritmo "Login"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// descris��o   :
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 29/03/2025
// Data em que adicionei a descris��o nos exercicios
// antigos
Var

   tentativas : inteiro
   usuario, senha : caractere

Inicio

   Para tentativas de 1 at� 3 Fa�a
      Escreva("Login ")
      Escreval("Tentativa ", tentativas, " de 3")

      Escreval("Informe seu usu�rio:")
      Leia(usuario)

      Escreval("Informe sua senha:")
      Leia(senha)

      Se(usuario = "admin") e (senha = "123") ent�o
         limpatela()
         Escreval("Bem-vindo ao sistema")
         interrompa
      Sen�o
         limpatela()
         Escreval("Dados Incorretos. Acesso negado.")
      Fimse
   fimpara

Fimalgoritmo
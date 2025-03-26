Algoritmo "Login"

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
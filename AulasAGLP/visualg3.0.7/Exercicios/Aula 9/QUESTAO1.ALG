algoritmo "Questao1"
// Disciplina   : L�gica de Programa��o e Algoritmos
// Professor   : MSc. Tiago Antonio da Silva
// Descri��o   : Simula uma urna eletr�nica
// Autor(a)    : Jose Antonio Geraldo Felix
// Data atual  : 06/04/2025
var

   confirmacao : caractere
   voto, opcao, totalVotos, titulo : inteiro
   votosY, votosZ, votosF : inteiro
   porcentagemY, porcentagemZ, porcentagemF : real
   senha, senhaDigitada : inteiro

inicio

   votosY <- 0
   votosZ <- 0
   votosF <- 0
   totalVotos <- 0
   senha <- 1234 // Senha do mesario

   repita // Repita inicial para sempre voltar no menu e adicionar mais votos
      limpatela
      escreval("=============================")
      escreval("|     URNA ELETR�NICA       |")
      escreval("=============================")
      escreval("|1 - Votar                  |")
      escreval("|2 - Menu do Mes�rio        |")
      escreval("|3 - Sair                   |")
      escreval("=============================")
      escreva("Escolha uma op��o: ")
      leia(opcao)

      escolha opcao

      caso 1

         repita
            escreval("Digite seu t�tulo de eleitor (somente n�meros):")
            leia(titulo)

            // Teste do titulo, tem que ser positivo
            se titulo <= 0 entao
               escreval("T�tulo inv�lido! Deve ser um n�mero positivo.")
               escreva("Pressione ENTER para continuar...")
               leia(confirmacao)
            fimse
         ate titulo > 0

         repita // Segundo repita pra poder escolher os candidatos e fazer testes voltando sempre nele
            limpatela
            escreval("===============================")
            escreval("|         CANDIDATOS          |")
            escreval("===============================")
            escreval("|1 - Candidato Jairo          |")
            escreval("|2 - Candidato Diuma          |")
            escreval("|3 - Candidato L de death note|")
            escreval("===============================")
            escreva("Digite o n�mero do candidato: ")
            leia(voto)

            se (voto < 1) ou (voto > 3) entao // Teste do voto para so poder escolher entre 1, 2 e 3
               escreval("Candidato inv�lido! Digite 1, 2 ou 3.")
               escreva("Pressione ENTER para continuar...")
               leia(confirmacao)
            fimse
         ate (voto >= 1) e (voto <= 3)

         escreval("Voc� votou no candidato: ", voto)
         escreva("Confirmar voto? (S/N): ")
         leia(confirmacao)

         se (confirmacao = "S") ou (confirmacao = "s") entao
            escolha voto
            caso 1
               votosY <- votosY + 1
            caso 2
               votosZ <- votosZ + 1
            caso 3
               votosF <- votosF + 1
            fimescolha
            totalVotos <- totalVotos + 1
            escreval("Voto confirmado com sucesso!")
            escreval("Obrigado por votar!")
            escreva("Pressione ENTER para continuar...")
            leia(confirmacao)
         senao
            escreval("Voto cancelado!")
            escreva("Pressione ENTER para continuar...")
            leia(confirmacao)
         fimse

      caso 2
         // Sistema de senha para acessar o menu do mesario
         limpatela
         escreval("=============================")
         escreval("|      MENU DO MES�RIO      |")
         escreval("=============================")
         escreva("Digite a senha de acesso: ")
         leia(senhaDigitada)

         se senhaDigitada = senha entao // Teste pra senha
            limpatela
            escreval("=============================")
            escreval("|      MENU DO MES�RIO      |")
            escreval("=============================")
            escreval("|Total de votantes: ", totalVotos,"      |")
            escreval("=============================")

            se totalVotos > 0 entao // Teste para saber se ja tem algum voto ou nao
               porcentagemY <- (votosY / totalVotos) * 100
               porcentagemZ <- (votosZ / totalVotos) * 100
               porcentagemF <- (votosF / totalVotos) * 100

               escreval("Candidato Jairo: ", votosY, " votos (", porcentagemY:4:2, "%)")
               escreval("Candidato Diuma: ", votosZ, " votos (", porcentagemZ:4:2, "%)")
               escreval("Candidato L: ", votosF, " votos (", porcentagemF:4:2, "%)")
            senao // Msg caso nao tenha nenhum voto
               escreval("Nenhum voto registrado ainda.")
            fimse
            escreval("=============================")
            escreva("Pressione ENTER para continuar...")
            leia(confirmacao)
         senao
            escreval("Senha incorreta! Acesso negado.")
            escreva("Pressione ENTER para continuar...")
            leia(confirmacao)
         fimse

      caso 3

         escreval("=================================")
         escreval("|Desligando a urna eletr�nica...|")
         escreval("=================================")

      outrocaso // Para impedir de digitar o numero errado no menu
         escreval("Op��o inv�lida! Digite 1, 2 ou 3.")
         escreva("Pressione ENTER para continuar...")
         leia(confirmacao)
      fimescolha
   ate opcao = 3

fimalgoritmo
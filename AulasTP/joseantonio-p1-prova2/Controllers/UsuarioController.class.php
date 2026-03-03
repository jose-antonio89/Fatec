<?php
	require_once "Models/Conexao.class.php";
	require_once "Models/usuarioDAO.class.php";
	require_once "Models/Usuarios.class.php";
	class UsuarioController
	{
		public function login()
		{	
			$msg = array("","","");
			$erro = false;
			if($_POST)
			{
				//verificar os dados
				if(empty($_POST["email"]))
				{
					$msg[0] = "Preecha o e-mail";
					$erro = true;
				}
				if(empty($_POST["senha"]))
				{
					$msg[1] = "Preecha a senha";
					$erro = true;
				}
				//verificar no banco de dados se existe esse usuário
				if(!$erro)
				{
					$usuario = new Usuarios(email:$_POST["email"]);
					$usuarioDAO = new usuarioDAO();
					$retorno = $usuarioDAO->login($usuario);
					
					if(is_array($retorno))
					{
						if(count($retorno) > 0)
						{
							//verificar se a senha corresponde
							if(password_verify($_POST['senha'], $retorno[0]->senha))
							{
								//logar
								
								if(!isset($_SESSION))
								{
									session_start();
								}
								$_SESSION["nome"] = $retorno[0]->nome;
								$_SESSION["id"] = $retorno[0]->id_usuario;
								$_SESSION["email"] = $retorno[0]->email;
								header("location:index.php");
							}
							else
							{
								$msg[2] = "Verifique os dados digitados";
							}
						}
						else
						{
							$msg[2] = "Verifique os dados digitados";
						}
					}
				}
					
				
			}
			//require views formulário
			require_once "Views/login.php";
			
		}//fim do login
		public function inserir()
		{
			$msg = array("","","","");
			$erro = false;
			if($_POST)
			{
				if(empty($_POST["nome"]))
				{
					$msg[0] = "Preencha o nome";
					$erro = true;
				}
				if(empty($_POST["email"]))
				{
					$msg[1] = "Preencha o email";
					$erro = true;
				}
				else
				{
					//verificar se já não tem um usuário com esse email cadastrado
					$usuario = new Usuarios(email:$_POST["email"]);
					$usuarioDAO = new usuarioDAO();
					$retorno = $usuarioDAO->verificar_email($usuario);
					if(is_array($retorno))
					{
						if(count($retorno) > 0)
						{
							$msg[1] = "E-mail já está cadastrado";
							$erro = true;
						}
					}
				}
				if(empty($_POST["senha"]))
				{
					$msg[2] = "Preencha o senha";
					$erro = true;
				}
				if(!$erro)
				{
					$usuario = new Usuarios(0,$_POST["nome"], $_POST["email"], password_hash($_POST["senha"], PASSWORD_DEFAULT));
					//cadastrar no banco de dados
					$usuarioDAO = new usuarioDAO();
					$retorno = $usuarioDAO->inserir($usuario);
				}
				
			}
			require_once "Views/form_usuario.php";
		}//fim inserir
		public function logout()
		{
			if(!isset($_SESSION))
			{
				session_start();
			}
			$_SESSION = array();
			session_destroy();
			header("location:index.php");
		}//fim do logout
	}//fim da classe
?>
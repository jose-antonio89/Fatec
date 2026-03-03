<?php
require_once "Models/Conexao.class.php";
require_once "Models/usuarioDAO.class.php";
require_once "Models/Usuarios.class.php";
class UsuarioController
{
	public function login()
	{
		//require views formulário
		$msg = array ("","", "");
		$erro = false;
		if ($_POST) {
			//verificar os dados
			if(empty($_POST["email"])) {
				$msg[0] = "preencha o email";
				$erro = true;
			}
			if(empty($_POST["senha"])) {
				$msg[1] = "preencha o senha";
				$erro = true;
			}
			if(!$erro) {
				$usuario = new Usuarios(email:$_POST["email"]);
				$usuarioDAO = new usuarioDAO;
				$retorno = $usuarioDAO->login($usuario);
				
				if(is_array($retorno)) {
					if(count($retorno) > 0) {
						//verificar se a senha corresponde
						if(password_verify($_POST['senha'],$retorno[0]->senha)) {
							//logar
							$msg[2] = "Login com sucesso!";
						}
					}
					else {
						$msg[2] = "Verifique os dados digitados";
					}
				} 
				else {
					$msg[2] = "Verifique os dados digitados";
				}
			}
		}
		require_once "Views/login.php";
	} //fim do login

	public function inserir()
	{
		$msg = array("", "", "", "");
		$erro = false;
		if ($_POST) {
			if (empty($_POST["nome"])) {
				$msg[0] = "Preencha o nome";
				$erro = true;
			}
			if (empty($_POST["email"])) {
				$msg[1] = "Preencha o email";
				$erro = true;
			} else {
				//verificar se já não tem um usuário com esse email cadastrado
				$usuario = new Usuarios(email:$_POST["email"]);
				$usuarioDAO = new usuarioDAO();
				$retorno = $usuarioDAO->verificar_email($usuario);
				if (is_array($retorno)) {
					if (count($retorno) > 0) {	
						$msg[1] = "Email ja cadastrado!";
						$erro = true;
					}
				}
			}
			if (empty($_POST["senha"])) {
				$msg[2] = "Preencha o senha";
				$erro = true;
			}
			if (empty($_POST["celular"])) {
				$msg[3] = "Preencha o celular";
				$erro = true;
			}
			if (!$erro) {
				$usuario = new Usuarios(0, $_POST["nome"], $_POST["email"], password_hash($_POST["senha"], PASSWORD_DEFAULT), $_POST["celular"]);
				// password_hash criptografa a senha
				$usuarioDAO = new usuarioDAO();
				$retorno = $usuarioDAO->inserir($usuario);
				//cadastrar no banco de dados
			}
		}
		require_once "Views/form_usuario.php";
	}
} //fim da classe

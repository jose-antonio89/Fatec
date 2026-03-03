<?php
require_once "Models/conexao.class.php";
require_once "Models/usuario.class.php";
require_once "Models/usuarioDAO.class.php";

class usuarioController
{
    public function login()
    {
        $msg = array("","","");
        $erro = false;
        if ($_POST) {
            // Verificar os dados
            if (empty($_POST["email"])) {
                $msg[0] = "Preencha o e-mail";
                $erro = true;
            }
            if (empty($_POST["senha"])) {
                $msg[1] = "Preencha a senha";
                $erro = true;
            }
            // Verificar no banco de dados se existe esse usuário
            if (!$erro) {    
                $usuario = new usuarios(email:$_POST["email"]);
                $usuarioDAO = new usuarioDAO;
                $retorno = $usuarioDAO->login($usuario);
                // verificar se a senha corresponde

                if(is_array($retorno)) {
                    if(count($retorno) > 0) {
                        // verificar se a senha corresponde
                        if (password_verify($_POST['senha'],$retorno[0]->senha))
                        {
                            // logar
                            $msg[2] = "Login com Sucesso!";
                        } 
                    }
                        else{
                            $msg[2] = "Verifique os dados digitados";
                        }
                    else {
                        $msg[2] = "Verifique os dados digitados";
                    }
                }  // Require views formulário
        require_once "Views/login.php";
            }
    } // fim do login
}

    public function inserir() {
        $msg = array("", "", "", "");
        $erro = false;
        if ($_POST) {
            if (empty($_POST["nome"])) {
                $msg[0] = "Preencha o campo nome";
                $erro = true;
            }
            if (empty($_POST["email"])) {
                $msg[1] = "Preencha o campo email";
                $erro = true;
            } else {
                // verificar se ja não existe um usuario com o email cadastrado
                $usuario = new usuarios(email:$_POST["email"]);
                $usuarioDAO = new usuarioDAO();
                $retorno = $usuarioDAO->verificar_email($usuario);
                if (is_array($retorno))
                {
                    if(count($retorno) > 0)
                    {
                        $msg[1] = "E-mail já está cadastrado";
                        $erro = true;
                    }
                }
            }
            if (empty($_POST["senha"])) {
                $msg[2] = "Preencha o campo senha";
                $erro = true;
            }
            if (empty($_POST["celular"])) {
                $msg[3] = "Preencha o campo celular";
                $erro = true;
            }
            if (!$erro) {
                $usuario = new usuarios(0, $_POST["nome"], $_POST["email"], password_hash ($_POST["senha"], PASSWORD_DEFAULT), $_POST["celular"]);
                // cadastrar banco de dados
                $usuarioDAO = new usuarioDAO();
                $retorno = $usuarioDAO ->inserir($usuario);
            }
        }
        require_once "Views/form_usuario.php";
    }
}    // fim da classe

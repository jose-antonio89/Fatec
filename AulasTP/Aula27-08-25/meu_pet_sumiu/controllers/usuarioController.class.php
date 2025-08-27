<?php
require_once "Models/usuario.class.php";
class usuarioController
{
    public function login()
    {
        // Require views formulário
        if ($_POST) {
            // Verificar os dados
            // Verificar no banco de dados se existe esse usuário
        } // fim do login
    } // fim do login
    public function inserir()
    {
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
                $usuario = new usuarios(email: $_POST["email"]);
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
                $usuario = new usuarios(0, $_POST["nome"], $_POST["email"], $_POST["senha"], $_POST["celular"]);
                // cadastrar banco de dados
            }
        }
        require_once "Views/form_usuario.php";
    }
}// fim da classe

<?php
if (!isset($_SESSION)) {
	session_start();
}

require_once __DIR__ . '/../Models/Conexao.class.php';
require_once __DIR__ . '/../Models/Usuarios.class.php';
require_once __DIR__ . '/../Models/Alimento.class.php';
require_once __DIR__ . '/../Models/AlimentoDAO.class.php';

class AlimentoController
{
	public function inserir()
	{
		$msg = array("", "", "", "");
		if ($_POST) {
			$erro = false;
			if ($_POST["nome"] == 0) {
				$msg[0] = "Preencha o nome da comida";
				$erro = true;
			}
			if (empty($_POST["Porcao"])) {
				$msg[1] = "Preencha a porcao do alimento";
				$erro = true;
			}
			if (empty($_POST["Calorias"])) {
				$msg[2] = "Preencha a quantidade de calorias";
				$erro = true;
			}
			if ($_FILES["foto"]["name"] == "") {
				$msg[3] = "Selecione a foto do Alimento";
				$erro = true;
			} else {
				if (
					$_FILES["foto"]["type"] != "image/png" &&
					$_FILES["foto"]["type"] != "image/jpg" &&
					$_FILES["foto"]["type"] != "image/jpeg"
				) {
					$msg[3] = "Tipo de foto invalido";
					$erro = true;
				}
			}

			if (!$erro) {
				//inserir no BD - instanciar os objetos
				$usuario = new Usuarios($_SESSION["id"]);
				$Alimento = new Alimento(
					0,
					$_POST["nome"],
					$_POST["porcao"],
					$_POST["calorias"],
					$_POST["foto"],
					$usuario
				);

				$AlimentoDAO = new AlimentoDAO();

				$AlimentoDAO->inserir($Alimento);
				// fazer upload da foto
				$caminho = "imagens/" . $_FILES["foto"]["name"];
				move_uploaded_file($_FILES["foto"]["tmp_name"], $caminho);
				
				header("location:index.php");
				die();
			}
		} //fim if post

		require_once "Views/form_Alimento.php";
	}
} //fim classe

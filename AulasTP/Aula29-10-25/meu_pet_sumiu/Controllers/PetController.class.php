<?php
if (!isset($_SESSION)) {
	session_start();
}

require_once __DIR__ . "/../Models/Conexao.class.php";
require_once __DIR__ . "/../Models/Usuarios.class.php";
require_once __DIR__ . "/../Models/pet.class.php";
require_once __DIR__ . "/petDAO.class.php";

class petController
{
	public function inserir()
	{
		$msg = array("", "", "", "", "", "", "");
		if ($_POST) {
			echo "<pre>";
			var_dump($_FILES["imagem"]);
			echo "</pre>";

			$erro = false;

			if ($_POST["porte"] == 0) {
				$msg[0] = "Preencha o porte do pet";
				$erro = true;
			}

			if (empty($_POST["local"])) {
				$msg[1] = "Preencha onde o pet foi encontrado ou perdido";
				$erro = true;
			}

			if (empty($_POST["data"])) {
				$msg[2] = "Preencha a data em que o pet foi encontrado ou perdido";
				$erro = true;
			}

			if (empty($_POST["cor_olhos"])) {
				$msg[3] = "Preencha a cor dos olhos do pet";
				$erro = true;
			}

			if (empty($_POST["cor"])) {
				$msg[4] = "Preencha as cores do pet";
				$erro = true;
			}

			if (!isset($_POST["situacao"])) {
				$msg[5] = "Escolha a situacao do pet";
				$erro = true;
			}

			if (empty($_FILES["imagem"]["name"])) {
				$msg[6] = "Selecione a imagem do pet";
				$erro = true;
			} else {
				if (
					$_FILES["imagem"]["type"] != "image/png" &&
					$_FILES["imagem"]["type"] != "image/jpg" &&
					$_FILES["imagem"]["type"] != "image/jpeg"
				) {
					$msg[6] = "Tipo de imagem invalido";
					$erro = true;
				}
			}

			if (!$erro) {
				// pegar nome da imagem (para salvar no banco)
				$nomeImagem = $_FILES["imagem"]["name"] ?? '';

				// tratar outros campos opcionais para garantir que sejam strings
				$observacoes = $_POST["observacoes"] ?? '';
				$situacao = $_POST["situacao"] ?? '';

				$usuario = new Usuarios($_SESSION["id"]);

				$pet = new pet(
					0,
					$_POST["nome"] ?? '',
					$_POST["idade"] ?? '',
					$_POST["raca"] ?? '',
					$_POST["porte"] ?? '',
					$_POST["local"] ?? '',
					$_POST["data"] ?? '',
					$nomeImagem,
					$_POST["cor_olhos"] ?? '',
					$_POST["cor"] ?? '',
					$observacoes,
					$situacao,
					$usuario
				);

				$petDAO = new petDAO();
				$petDAO->inserir($pet);

				// fazer upload da imagem (opcional)
				$caminho = "imagens/" . $_FILES["imagem"]["name"];
				move_uploaded_file($_FILES["imagem"]["tmp_name"], $caminho);

				header("location:index.php");
				die();
			}
		}
		require_once "Views/form_pet.php";
	}
}

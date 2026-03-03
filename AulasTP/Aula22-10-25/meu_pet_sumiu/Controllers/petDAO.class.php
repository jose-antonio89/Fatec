<?php
class petDAO extends Conexao
{
	public function __construct()
	{
		parent::__construct();
	}

	public function buscar_pets() {}

	public function inserir($pet)
	{
		$sql = "INSERT INTO pets(nome, idade, raca, porte, local, data, imagem, cor_olhos, cor, observacoes, situacao, id_usuario) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		try {
			echo "Entrou no inserir do petDAO<br>";

			var_dump(
				$pet->getnome(),
				$pet->getidade(),
				$pet->getraca(),
				$pet->getporte(),
				$pet->getlocal(),
				$pet->getdata(),
				$pet->getimagem(),
				$pet->getcor_olhos(),
				$pet->getcor(),
				$pet->getobservacoes(),
				$pet->getsituacao(),
				$pet->getusuario()->getid_usuario()
			);

			$stm = $this->db->prepare($sql);
			$stm->bindValue(1, $pet->getnome());
			$stm->bindValue(2, $pet->getidade());
			$stm->bindValue(3, $pet->getraca());
			$stm->bindValue(4, $pet->getporte());
			$stm->bindValue(5, $pet->getlocal());
			$stm->bindValue(6, $pet->getdata());
			$stm->bindValue(7, $pet->getimagem());
			$stm->bindValue(8, $pet->getcor_olhos());
			$stm->bindValue(9, $pet->getcor());
			$stm->bindValue(10, $pet->getobservacoes());
			$stm->bindValue(11, $pet->getsituacao());
			$stm->bindValue(12, $pet->getusuario()->getid_usuario());

			if ($stm->execute()) {
				echo "Inserção realizada com sucesso!";
				return true;
			} else {
				$errorInfo = $stm->errorInfo();
				echo "Erro na execução: " . implode(" | ", $errorInfo);
				return false;
			}
		} catch (PDOException $e) {
			echo "Erro no banco: " . $e->getMessage();
			return false;
		}
	}
} //fim da classe

<?php
	class AlimentoDAO extends Conexao
	{
		public function __construct()
		{
			parent:: __construct();
		}
		public function inserir($Alimento) 
		{
			$sql = "INSERT INTO alimento (nome, porcao, calorias, foto)
			VALUES (?,?,?,?)";
			try {
				$stm = $this->db->prepare($sql);
				$stm->bindValue(1,$Alimento->getnome());
				$stm->bindValue(2,$Alimento->getporcao());
				$stm->bindValue(3,$Alimento->getcalorias());
				$stm->bindValue(4,$Alimento->getfoto());
				$stm->execute();
				$this->db = null;
				return "Alimento inserido com sucesso";
			}
			
			catch (PDOException $e) {
				$this->db = null;
				return "Problema ao inserir Alimento";
			}
		}
	}//fim da classe
?>
<?php
	class Alimento
	{
		public function __construct(
			private int    $id_alimento = 0,
			private string $nome = "",
			private string $porcao = "",
			private string $calorias = "",
			private string $foto = "",
			private Usuarios $usuario = new Usuarios()){}
	}
?>
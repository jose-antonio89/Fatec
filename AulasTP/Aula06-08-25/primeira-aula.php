<?php
	$nome = "Kilian";
	$idade = 48;
	$altura = 1.90;
	$casado = false;
	
	echo "<h3 style='color:blue;'>
	Nome: $nome</h3><br>"; 
	echo "Idade: $idade<br>";
	echo "Altura: $altura<br>";
	if($casado) {
		echo "Estado Civil: Casado";
	} else {
		echo "Estado Civil: Solteiro";
	}
?>
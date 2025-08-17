<?php
	if($_GET) {
		// ou $_POST
		echo "{$_GET['nome']} <br> {$_GET['idade']}"; 
	} else {	
		// redireciona para a pagina index.html
		header("location:index.html");
	}
?>
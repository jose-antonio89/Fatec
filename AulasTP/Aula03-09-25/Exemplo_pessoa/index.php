<?php
// Exemplo de pessoas
require_once "models/pessoa.class.php";
require_once "models/fisica.class.php";
require_once "models/juridica.class.php";

$pessoafisica = new fisica("256.879.369.61", "Zilian", "(14)87524563", "Rua Tenente lopes, 321, 16406-209");

echo "<pre>";
var_dump($pessoafisica);
echo "</pre>";

echo $pessoafisica->inserir($pessoafisica);
echo "<br>";
echo $pessoafisica->alterar($pessoafisica);
echo "<br>";

// Pessoa esta abstract logo não pode ser replicada
//$pessoa = new pessoa("Corki", "(15)8888-9999","Rua XIX De dezembro, 987, 19405-490");

<?php
// Exemplo de conta de banco
require_once "Exemplo_banco/models/conta.class.php";
require_once "Exemplo_banco/models/corrente.class.php";
require_once "Exemplo_banco/models/poupanca.class.php";

// Exemplo de conta de banco
$corrente = new corrente(1000, "321-1", "390", 5000);
echo "<br>";
echo $corrente->getsaldo();
echo "<br>";
$corrente->retirar(3000);
echo "<br>";
echo $corrente->getsaldo();
echo "<br>";
$poupanca = new poupanca(4, "987-6", "605", 15000);
echo "<br>";
echo $poupanca->getsaldo();
echo "<br>";
$poupanca->retirar(5000);
echo "<br>";
echo $poupanca->getsaldo();

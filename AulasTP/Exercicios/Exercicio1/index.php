<?php

require_once 'Telefone.class.php';
require_once 'Pessoa.class.php'; 
require_once 'Decoracao.class.php'; 
require_once 'Cliente.class.php'; 
require_once 'Contratado.class.php';
require_once 'Festa.class.php';


$decoracaoFesta = new Decoracao("Tema Sereia com balões azuis");
$telCliente = new Telefone(11, "98888-7777");
$telContratado = new Telefone(14, "99999-5555");
$telContratadoComercial = new Telefone(14, "3333-4444");

$cliente = new Cliente("Ana Silva", "123.456.789-00", $telCliente);

$contratado = new Contratado("Buffet Alegria", "11.222.333/0001-44", $telContratado);

$contratado->addTelefone($telContratadoComercial);

$festa = new Festa(
"2025-10-01",
"2025-12-20",
4500.50,
$cliente,
$contratado,
 $decoracaoFesta
);

echo "<h2>Detalhes da Festa</h2>";
echo "Data da Festa: " . $festa->getDataFesta() . "<br>";
echo "Valor: R$ " . number_format($festa->getValor(), 2, ',', '.') . "<br>";
echo "<hr>";

echo "<h3>Dados do Cliente</h3>";
echo "Nome: " . $festa->getCliente()->getNome() . "<br>";
echo "CPF: " . $festa->getCliente()->getCpf() . "<br>";
echo "Telefone: " . $festa->getCliente()->getTelefones()[0]->getTelefoneFormatado() . "<br>";
echo "<hr>";

echo "<h3>Dados do Contratado</h3>";
echo "Empresa: " . $festa->getContratado()->getNome() . "<br>";
echo "CNPJ: " . $festa->getContratado()->getCnpj() . "<br>";

echo "Telefones do Contratado: <ul>";
foreach ($festa->getContratado()->getTelefones() as $tel) {
echo "<li>" . $tel->getTelefoneFormatado() . "</li>";
}
echo "</ul>";
echo "<hr>";

echo "<h3>Decoração</h3>";
echo "Tema: " . $festa->getDecoracao()->getDescritivo() . "<br>";
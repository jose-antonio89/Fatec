<?php

require_once "./produto/produto.class.php";
require_once "./categoria/categoria.class.php";
require_once "../composicao/celular.class.php";
require_once "../composicao/pessoa.class.php";

$categoria1 = new Categoria(1, "Material escolar");
$categoria2 = new Categoria(2, "Material de escritorio");

$produto1 = new Produto(1, "Lápis", 2.50, array($categoria1, $categoria2));

// Mostrar os dados de Produto1
echo "<h2>Produto - {$produto1->getNome()}<h2>";
echo "Preço R$ " . number_format($produto1->getPreco(), 2, ",", ".") . "<br>";
echo "<h3>Categoria(s)</h3>";
foreach ($produto1->getCategorias() as $dado) {
    echo "Descritivo: {$dado->getDescritivo()}<br>";
}

// Instanciado o objeto todo (Pessoa)
$pessoa1 = new Pessoa("Aatrox", 21, "996658708");

$pessoa1->setCelular(16, "999999999");

// Instaciando objeto Parte (celular)
$pessoa2 = new Pessoa("Vaarus");
$celular1 = new Celular(14, "786546890", $pessoa2);

echo "<br>";

echo "<pre>";
var_dump($pessoa1);
echo "</pre>";

echo "<br>";

echo "<pre>";
var_dump($celular1);
echo "</pre>";

<?php


require_once 'Pessoa.class.php'; 
require_once 'Condominio.class.php';
require_once 'Proprietario.class.php'; 
require_once 'Shopping.class.php';
require_once 'Loja.class.php';

$shopping = new Shopping("Shopping Central Park", "01.001.001/0001-01");

$proprietario1 = new Proprietario("Carlos Santos", "111.222.333-44");
$proprietario2 = new Proprietario("Empresa Investimentos LTDA", "44.555.666/0001-77");

$loja105 = new Loja("105", 1, $shopping);

$loja105->addProprietario($proprietario1);
$loja105->addProprietario($proprietario2);

$condominioJan = new Condominio("2025-01-01", 1250.00, "2025-01-15");
$condominioFev = new Condominio("2025-02-01", 1250.00, "2025-02-14");

$loja105->addCondominio($condominioJan);
$loja105->addCondominio($condominioFev);

echo "<h2>Detalhes da Loja " . $loja105->getNumero() . "</h2>";
echo "Lotes Pertencentes: " . $loja105->getLotes() . "<br>";
echo "<hr>";

echo "<h3>Shopping Pertencente</h3>";
echo "Nome: " . $loja105->getShopping()->getNome() . "<br>";
echo "CNPJ: " . $loja105->getShopping()->getCnpj() . "<br>";
echo "<hr>";

echo "<h3>Proprietários (Pessoas)</h3>";
echo "<ul>";
foreach ($loja105->getProprietarios() as $prop) {
    echo "<li>";
    echo "Nome: **{$prop->getNome()}** | ";
    echo "Documento: " . (method_exists($prop, 'getCpf') ? $prop->getCpf() : 'N/A');
    echo "</li>";
}
echo "</ul>";
echo "<hr>";

echo "<h3>Cobranças de Condomínio</h3>";
echo "<ul>";
$totalCondominio = 0;
foreach ($loja105->getCondominios() as $cond) {
    echo "<li>";
    echo "Referência: **{$cond->getDataGeracao()}** | ";
    echo "Valor: R$ " . number_format($cond->getValor(), 2, ',', '.') . " | ";
    echo "Vencimento: {$cond->getDataPagamento()}";
    echo "</li>";
    $totalCondominio += $cond->getValor();
}
echo "</ul>";

echo "<h4>Soma Total do Condomínio (Exemplo): R$ " . number_format($totalCondominio, 2, ',', '.') . "</h4>";

?>
<?php

require_once 'Telefone.class.php';
require_once 'Pessoa.class.php'; 
require_once 'Avaliacao.class.php';
require_once 'Chef.class.php'; 
require_once 'Avaliador.class.php';
require_once 'Receita.class.php';


$chefTel1 = new Telefone(11, "91234-5678");
$chef = new Chef("Helena Rizzo", "Alta Gastronomia");
$chef->addTelefone($chefTel1);

$avaliador1Tel = new Telefone(19, "99876-5432");
$avaliador1 = new Avaliador("João Barreto", "001.001.001-01");
$avaliador1->addTelefone($avaliador1Tel);

$avaliador2 = new Avaliador("Maria Lúcia", "002.002.002-02");

$ingredientes = "Massa, Tomate, Manjericão, Azeite, Parmesão";
$receita = new Receita("Focaccia Clássica", $ingredientes, $chef);

$notaJoao = new Avaliacao(9.5);
$receita->addAvaliacao($avaliador1, $notaJoao);

$notaMaria = new Avaliacao(8.0);
$receita->addAvaliacao($avaliador2, $notaMaria);

echo "<h2>Receita: " . $receita->getNome() . "</h2>";
echo "Ingredientes: " . $receita->getIngredientes() . "<br>";
echo "<hr>";

echo "<h3>Chef Responsável</h3>";
echo "Nome: " . $receita->getChef()->getNome() . "<br>";
echo "Especialidade: " . $receita->getChef()->getEspecialidade() . "<br>";
echo "Contato: " . $receita->getChef()->getTelefones()[0]->getTelefoneFormatado() . "<br>";
echo "<hr>";

echo "<h3>Avaliações</h3>";
echo "Nota Média: **" . number_format($receita->getMediaAvaliacoes(), 2) . "**<br>";

echo "<h4>Detalhes das Avaliações:</h4>";
echo "<ul>";
foreach ($receita->getAvaliacoes() as $item) {
    $avaliador = $item['avaliador'];
    $avaliacao = $item['avaliacao'];

    echo "<li>";
    echo "Avaliador: **" . $avaliador->getNome() . "** (CPF: " . $avaliador->getCpf() . ") - ";
    echo "Nota: **" . $avaliacao->getNota() . "**";
    echo "</li>";
}
echo "</ul>";
<?php

require_once 'Pessoa.class.php'; 
require_once 'Servico.class.php';
require_once 'Cliente.class.php'; 
require_once 'Prestador.class.php';
require_once 'Itens.class.php';
require_once 'Agenda.class.php';


$servicoCorte = new Servico("Corte de Cabelo Masculino", 45.00);
$servicoBarba = new Servico("Modelagem de Barba", 30.00);
$servicoProgressiva = new Servico("Escova Progressiva", 150.00);

$prestador = new Prestador("João Cabeleireiro", "99123-4567", "Cortes e Barba");

$cliente = new Cliente("Fernanda Souza", "98765-4321", "000.111.222-33");

$agenda = new Agenda("2025-11-10", $cliente);

$item1 = new Itens("14:00", $servicoCorte);
$item2 = new Itens("14:45", $servicoBarba);
$item3 = new Itens("16:00", $servicoProgressiva);

$item3->cancelar();

$agenda->addItens($item1);
$agenda->addItens($item2);
$agenda->addItens($item3);

echo "<h2>Resumo do Agendamento</h2>";
echo "Data: **" . $agenda->getData() . "**<br>";
echo "<h3>Cliente</h3>";
echo "Nome: " . $agenda->getCliente()->getNome() . "<br>";
echo "Celular: " . $agenda->getCliente()->getCelular() . "<br>";
echo "CPF: " . $agenda->getCliente()->getCpf() . "<br>";
echo "<hr>";

echo "<h3>Serviços Agendados (Itens) com o Prestador: " . $prestador->getNome() . "</h3>";
echo "Especialidade: " . $prestador->getEspecialidade() . "<br>";
echo "<ul>";
foreach ($agenda->getItens() as $item) {
    $statusCor = ($item->getStatus() == Itens::STATUS_CANCELADO) ? 'red' : 'green';
    
    echo "<li>";
    echo "Horário: **{$item->getHorario()}** | ";
    echo "Serviço: {$item->getServico()->getDescritivo()} (R$ " . number_format($item->getServico()->getPreco(), 2, ',', '.') . ") | ";
    echo "Status: <span style='color:{$statusCor}'>**{$item->getStatus()}**</span>";
    echo "</li>";
}
echo "</ul>";

echo "<h3>Total a Pagar (Apenas Ativos)</h3>";
echo "Total: **R$ " . number_format($agenda->calcularTotal(), 2, ',', '.') . "**";

?>
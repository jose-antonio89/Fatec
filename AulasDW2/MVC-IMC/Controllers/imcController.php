<?php
require_once __DIR__ . '/../Models/imc.class.php';

class IMCController
{
    public function calcular()
    {
        if (isset($_POST['altura']) && isset($_POST['peso'])) {
            // Aceita vírgula
            $altura = str_replace(',', '.', $_POST['altura']);
            $peso   = str_replace(',', '.', $_POST['peso']);
            // Converte para float
            $altura = floatval($altura);
            $peso   = floatval($peso);
            if ($altura > 3) {
                $altura = $altura / 100;
            }
            $model = new IMC();
            $imc = $model->calcularIMC($altura, $peso);
            $classificacao = $model->classificacaoIMC($imc);
            $recomendacao = $model->recomendacao($imc);
            include __DIR__ . '/../Views/resultado.php';
        }
    }
}
$controller = new IMCController();
$controller->calcular();

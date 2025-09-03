<?php

class poupanca extends conta
{
    public function __construct(
        private string $aniversario = "",
        string $numero = "",
        string $agencia = "",
        float $saldo = 0,
    ) {
        parent::__construct($numero, $agencia, $saldo);
    }

    public function retirar($valor)
    {
        $diacorrente = (int)date("d");
        echo $diacorrente;
        if ($this->aniversario) {
            echo " Você perderá os rendimentos";
        }
        if ($this->saldo >= $valor) {
            parent::retirar($valor);
        } else {
            echo "Sem saldo para retirar";
        }
    }
}

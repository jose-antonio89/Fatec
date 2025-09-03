<?php

class corrente extends conta
{
    public function __construct(
        private string $limite = "",
        string $numero = "",
        string $agencia = "",
        float $saldo = 0,
    ){
        parent::__construct($numero, $agencia, $saldo);
    }

    public function retirar($valor)
    {
        if ($this->saldo + $this->limite >= $valor) {
            parent::retirar($valor);
        } else {
            echo "Conta sem saldo suficiente";
        }
    }
}

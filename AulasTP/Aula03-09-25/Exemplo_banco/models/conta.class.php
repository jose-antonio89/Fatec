<?php

class conta
{
    public function __construct(
        protected string $numero = "",
        protected string $agencia = "",
        protected float $saldo = 0
    ) {}
    public function getnumero()
    {
        return $this->numero;
    }
    public function getagencia()
    {
        return $this->agencia;
    }
    public function getsaldo()
    {
        return $this->saldo;
    }
    public function setnumero($numero)
    {
        $this->numero = $numero;
    }
    public function setagencia($agencia)
    {
        $this->agencia = $agencia;
    }
    public function setsaldo($saldo)
    {
        $this->saldo = $saldo;
    }
    public function retirar($valor)
    {
       if($valor > 0)
       {
        // $this->saldo = $this->saldo - $valor;  maneira mais longa de fazer a mesma função abaixo
        $this->saldo -= $valor;
       }
    }
}

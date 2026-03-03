<?php

class Festa
{
    private string $data_contrato;
    private string $data_festa;
    private float $valor;
    private Cliente $cliente;
    private Contratado $contratado;
    private Decoracao $decoracao;
    public function __construct(
        string $data_contrato,
        string $data_festa,
        float $valor,
        Cliente $cliente,
        Contratado $contratado,
        Decoracao $decoracao ) {
        $this->data_contrato = $data_contrato;
        $this->data_festa = $data_festa;
        $this->valor = $valor;
        $this->cliente = $cliente;
        $this->contratado = $contratado;
        $this->decoracao = $decoracao;
    }

    public function getDataContrato(): string
    {
        return $this->data_contrato;
    }

    public function getDataFesta(): string
    {
        return $this->data_festa;
    }

    public function getValor(): float
    {
        return $this->valor;
    }


    public function getCliente(): Cliente
    {
        return $this->cliente;
    }

    public function getContratado(): Contratado
    {
        return $this->contratado;
    }

    public function getDecoracao(): Decoracao
    {
        return $this->decoracao;
    }
}

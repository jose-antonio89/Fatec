<?php

class Condominio
{
    private string $data_geracao;
    private float $valor;
    private string $data_pagamento;

    public function __construct(string $data_geracao, float $valor, string $data_pagamento)
    {
        $this->data_geracao = $data_geracao;
        $this->valor = $valor;
        $this->data_pagamento = $data_pagamento;
    }

    public function getDataGeracao(): string
    {
        return $this->data_geracao;
    }

    public function getValor(): float
    {
        return $this->valor;
    }

    public function getDataPagamento(): string
    {
        return $this->data_pagamento;
    }
}
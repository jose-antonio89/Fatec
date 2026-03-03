<?php

class Servico
{
    private string $descritivo;
    private float $preco;
    public function __construct(string $descritivo, float $preco)
    {
        $this->descritivo = $descritivo;
        $this->preco = $preco;
    }

    public function getDescritivo(): string
    {
        return $this->descritivo;
    }

    public function getPreco(): float
    {
        return $this->preco;
    }
}
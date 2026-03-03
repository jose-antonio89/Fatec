<?php

class Pessoa
{
    protected string $nome;
    private string $celular;
    public function __construct(string $nome, string $celular)
    {
        $this->nome = $nome;
        $this->celular = $celular;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getCelular(): string
    {
        return $this->celular;
    }
}
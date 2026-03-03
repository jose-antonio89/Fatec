<?php

class Contratado extends Pessoa
{
    private string $cnpj;
    public function __construct(string $nome, string $cnpj, Telefone $telefoneInicial)
    {
        parent::__construct($nome, $telefoneInicial);
        $this->cnpj = $cnpj;
    }

    public function getCnpj(): string
    {
        return $this->cnpj;
    }
}
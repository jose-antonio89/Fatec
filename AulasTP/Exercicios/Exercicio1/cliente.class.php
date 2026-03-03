<?php

class Cliente extends Pessoa
{
    private string $cpf;
    public function __construct(string $nome, string $cpf, Telefone $telefoneInicial)
    {
        parent::__construct($nome, $telefoneInicial);
        $this->cpf = $cpf;
    }

    public function getCpf(): string
    {
        return $this->cpf;
    }
}
<?php

class Cliente extends Pessoa
{
    private string $cpf;
    public function __construct(string $nome, string $celular, string $cpf)
    {
        parent::__construct($nome, $celular);
        $this->cpf = $cpf;
    }

    public function getCpf(): string
    {
        return $this->cpf;
    }
}
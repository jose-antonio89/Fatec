<?php

class Chef extends Pessoa
{
    private string $especialidade;
    public function __construct(string $nome, string $especialidade)
    {
        parent::__construct($nome);
        $this->especialidade = $especialidade;
    }

    public function getEspecialidade(): string
    {
        return $this->especialidade;
    }
}
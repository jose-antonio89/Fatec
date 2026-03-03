<?php

class Prestador extends Pessoa
{
    private string $especialidade;
    public function __construct(string $nome, string $celular, string $especialidade)
    {
        parent::__construct($nome, $celular);
        $this->especialidade = $especialidade;
    }

    public function getEspecialidade(): string
    {
        return $this->especialidade;
    }
}
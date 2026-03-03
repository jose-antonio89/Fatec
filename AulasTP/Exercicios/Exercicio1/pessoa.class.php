<?php

class pessoa
{
    protected string $Nome;
    private array $telefones = [];
    public function __construct(string $nome, Telefone $telefoneInicial)
    {
        $this->Nome = $nome;
        $this->addTelefone($telefoneInicial);
    }

    public function addTelefone(Telefone $telefone)
    {
        $this->telefones[] = $telefone;
    }

    public function getNome(): string
    {
        return $this->Nome;
    }

    public function getTelefones(): array
    {
        return $this->telefones;
    }
}
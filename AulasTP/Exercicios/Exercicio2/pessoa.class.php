<?php

class Pessoa
{
    protected string $nome;
    private array $telefones = [];
    public function __construct(string $nome)
    {
        $this->nome = $nome;
    }

    public function addTelefone(Telefone $telefone): void
    {
        $this->telefones[] = $telefone;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getTelefones(): array
    {
        return $this->telefones;
    }
}

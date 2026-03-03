<?php 

class Shopping extends Pessoa
{
    private string $cnpj;
    public function __construct(string $nome, string $cnpj)
    {
        parent::__construct($nome);
        $this->cnpj = $cnpj;
    }

    public function getCnpj(): string
    {
        return $this->cnpj;
    }
}
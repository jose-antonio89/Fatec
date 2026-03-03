<?php

class Telefone
{
    private int $ddd;
    private string $numero;
    public function __construct(int $ddd, string $numero)
    {
        $this->ddd = $ddd;
        $this->numero = $numero;
    }

    public function getDdd(): int
    {
        return $this->ddd;
    }

    public function getNumero(): string
    {
        return $this->numero;
    }

    public function getTelefoneFormatado(): string
    {
        return "($this->ddd) $this->numero";
    }
}

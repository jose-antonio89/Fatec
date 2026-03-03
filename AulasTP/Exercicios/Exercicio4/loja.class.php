<?php

class Loja
{
    private int $lotes;
    private string $numero;
    private Shopping $shopping;
    private array $proprietarios = [];
    private array $condominios = [];
    public function __construct(string $numero, int $lotes, Shopping $shopping)
    {
        $this->numero = $numero;
        $this->lotes = $lotes;
        $this->shopping = $shopping;
    }

    public function addProprietario(Proprietario $proprietario): void
    {
        $this->proprietarios[] = $proprietario;
    }

    public function addCondominio(Condominio $condominio): void
    {
        $this->condominios[] = $condominio;
    }

    public function getNumero(): string
    {
        return $this->numero;
    }

    public function getLotes(): int
    {
        return $this->lotes;
    }

    public function getShopping(): Shopping
    {
        return $this->shopping;
    }

    public function getProprietarios(): array
    {
        return $this->proprietarios;
    }

    public function getCondominios(): array
    {
        return $this->condominios;
    }
}
<?php

class Categoria
{
    public function __construct(
        private int $id = 0,
        private string $descritivo = "",
        private array $produtos = array()
    ) {}

    public function getId()
    {
        return $this->id;
    }

    public function getDescritivo()
    {
        return $this->descritivo;
    }

    public function getProdutos()
    {
        return $this->produtos;
    }
}

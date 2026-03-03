<?php

class Produto
{
    public function __construct(
        private int $id = 0,
        private string $nome = "",
        private float $preco = 0.00,
        private array $categorias = array()
    ) {}

    public function getId()
    {
        return $this->id;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function getPreco()
    {
        return $this->preco;
    }

    public function getCategorias()
    {
        return $this->categorias;
    }
}

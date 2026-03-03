<?php

//require_once "./celular.class.php";

class Pessoa
{
    private array $celular = array();
    public function __construct(
        private string $nome = "",
        //private array $celular = array(),

        int $ddd = 0,
        string $numero = ""
    ) {
        $this->celular[] = new Celular($ddd, $numero);
    }

    public function getNome()
    {
        return $this->nome;
    }
    public function setCelular(int $ddd, string $numero)
    {
        return $this->celular[] = new Celular($ddd, $numero);
    }
}

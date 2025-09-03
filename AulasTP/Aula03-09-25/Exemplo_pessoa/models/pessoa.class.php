<?php

abstract class pessoa
{
    public function __construct(
        protected string $nome = "",
        protected string $celular = "",
        protected string $endereco = ""
    ) {}
    public function getendereco()
    {
        return $this->endereco;
    }
    public function getnome()
    {
        return $this->nome;
    }
    public function getcelular()
    {
        return $this->celular;
    }
    public function setendereco($endereco)
    {
        $this->endereco = $endereco;
    }
    public function setnome($nome)
    {
        $this->nome = $nome;
    }
    public function setcelular($celular)
    {
        $this->celular = $celular;
    }
    public function inserir($pessoa)
    {
        echo "Inserir";
    }
    public function alterar($pessoa)
    {
        echo "Alterar";
    }
}

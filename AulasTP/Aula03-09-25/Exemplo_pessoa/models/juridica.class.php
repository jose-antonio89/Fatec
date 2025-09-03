<?php

class juridica extends pessoa
{
    public function __construct(
        private string $cnpj = "",
        string $nome = "",
        string $celular  = "",
        string $endereco = ""
    ) {
        parent::__construct($nome, $celular, $endereco);
    }
    public function getcnpj()
    {
        return $this->cnpj;
    }
    public function setcnpj()
    {
        return $this->cnpj;
    }
    public function validarcnpj($cnpj)
    {
        echo "Validar cnpj";
    }
}

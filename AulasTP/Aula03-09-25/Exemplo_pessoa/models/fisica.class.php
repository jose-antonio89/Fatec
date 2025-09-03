<?php
// Final serve pra impedir a classe de ter "filhos"
final class fisica extends pessoa
{
    public function __construct(
        private string $cpf = "",
        string $nome = "",
        string $celular  = "",
        string $endereco = ""
    ) {
        parent::__construct($nome, $celular, $endereco);
    }
    public function getcpf()
    {
        return $this->cpf;
    }
    public function setcpf()
    {
        return $this->cpf;
    }
    public function validarcpf($cpf)
    {
        echo "Validar cpf";
    }
}

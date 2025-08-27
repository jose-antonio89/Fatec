<?php

class usuarios
{
    public function __construct(
        private int $id_usuario = 0,
        private string $nome = "",
        private string $email = "",
        private string $senha = "",
        private string $celular = ""
    ) {}
    public function getId_usuario()
    {
        return $this->id_usuario;
    }
    public function getnome()
    {
        return $this->nome;
    }
    public function getemail()
    {
        return $this->email;
    }
    public function getsenha()
    {
        return $this->senha;
    }
    public function getcelular()
    {
        return $this->celular;
    }
    public function setid_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;
    }
    public function setnome($nome)
    {
        $this->nome = $nome;
    }
    public function setemail($email)
    {
        $this->email = $email;
    }
    public function setsenha($senha)
    {
        $this->senha = $senha;
    }
    public function setcelular($celular)
    {
        $this->celular = $celular;
    }
}

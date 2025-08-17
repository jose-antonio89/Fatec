<?php

//Cria uma class
class Usuario 
{
    public function __construct(
    private string $nome = "", 
    private string $email = "", 
    private string $senha = "",){}

    public function getNome() {
        return $this->nome;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getSenha() {
        return $this->senha;
    }
    
    public function setNome(string $nome) {
        $this->nome = $nome;
    }
   
    public function setEmail(string $email) {
        $this->email = $email;
    }
   
    public function setSenha(string $senha) {
        $this->senha = $senha;
    }

}
// Definindo como null deixando em branco 
// Caso tirar o = "" vai dar erro ao executar o usuario

// Arquivo da classe separado de seu uso

?>
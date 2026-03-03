<?php

class Paciente extends Usuarios
{
    public function __construct(
        private string $id_paciente = "",
        private string $nome = "",
        

        private array $Exames = []
    ) {
        parent::__construct($nome, $email, $senha, $perfil);
    }

    public function getCpf()
    {
        return $this->cpf;
    }
    public function getExames()
    {
        return $this->Exames;
    }

    public function setExames($Exame)
    {
        $this->Exames[] = $Exame;
    }
}

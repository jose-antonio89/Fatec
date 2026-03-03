<?php

class Nutricionista extends Usuarios
{
    public function __construct(
        private int $id_nutricionista = 0, 
		private string $CRN = "", )
    {
        parent::__construct($nome, $email, $senha, $perfil);
    }

    public function getId_nutricionista()
    {
        return $this->getId_nutricionista;
    }
    public function getCRN()
    {
        return $this->CRN;
    }

    public function setId_Nutricionista()
    {
        return $this->id_nutricionista;
    }
    public function setCRN($CRN)
    {
        $this->$CRN;
    }

}

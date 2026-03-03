<?php

class Exame
{
    public function __construct (
        private int $id_exame = 0,
        private string $nome = "",
        private string $data = "",
		private string $resultado

    ) {
        $Paciente->setExames($this);
    }

    public function getId_paciente()
    {
        return $this->Id_paciente;
    }
    public function getCardapio()
    {
        return $this->Cardapio;
    }
    public function getPaciente()
    {
        return $this->avaliador;
    }
}

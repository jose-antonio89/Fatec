<?php

class Itens
{
    private string $horario;
    private string $status;
    private Servico $servico;

    const STATUS_ATIVO = 'Ativo';
    const STATUS_CANCELADO = 'Cancelado';

    public function __construct(string $horario, Servico $servico, string $status = self::STATUS_ATIVO)
    {
        $this->horario = $horario;
        $this->servico = $servico;
        $this->status = $status;
    }

    public function getHorario(): string
    {
        return $this->horario;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getServico(): Servico
    {
        return $this->servico;
    }

    public function cancelar(): void
    {
        $this->status = self::STATUS_CANCELADO;
    }
}
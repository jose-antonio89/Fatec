<?php

class Agenda
{
    private string $data;
    private Cliente $cliente;
    private array $itens = []; 
    public function __construct(string $data, Cliente $cliente)
    {
        $this->data = $data;
        $this->cliente = $cliente;
    }

    public function addItens(Itens $item): void
    {
        $this->itens[] = $item;
    }

    public function getData(): string
    {
        return $this->data;
    }

    public function getCliente(): Cliente
    {
        return $this->cliente;
    }

    public function getItens(): array
    {
        return $this->itens;
    }
    
    public function calcularTotal(): float
    {
        $total = 0.0;
        foreach ($this->itens as $item) {
            if ($item->getStatus() === Itens::STATUS_ATIVO) {
                $total += $item->getServico()->getPreco();
            }
        }
        return $total;
    }
}
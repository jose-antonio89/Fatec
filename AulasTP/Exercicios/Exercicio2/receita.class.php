<?php

class Receita
{
    private string $nome;
    private string $ingredientes;
    private Chef $chef;
    private array $avaliacoes = [];
    public function __construct(string $nome, string $ingredientes, Chef $chef)
    {
        $this->nome = $nome;
        $this->ingredientes = $ingredientes;
        $this->chef = $chef;
    }

    public function addAvaliacao(Avaliador $avaliador, Avaliacao $avaliacao): void
    {
        $this->avaliacoes[] = [
            'avaliador' => $avaliador,
            'avaliacao' => $avaliacao
        ];
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getIngredientes(): string
    {
        return $this->ingredientes;
    }

    public function getChef(): Chef
    {
        return $this->chef;
    }

    public function getAvaliacoes(): array
    {
        return $this->avaliacoes;
    }

    public function getMediaAvaliacoes(): float
    {
        if (empty($this->avaliacoes)) {
            return 0.0;
        }

        $somaNotas = 0;
        foreach ($this->avaliacoes as $item) {
            $somaNotas += $item['avaliacao']->getNota();
        }

        return $somaNotas / count($this->avaliacoes);
    }
}

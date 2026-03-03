<?php

class Avaliacao
{
    private float $nota;
    public function __construct(float $nota)
    {
        if ($nota < 0 || $nota > 10) {
            throw new InvalidArgumentException("A nota deve ser entre 0 e 10.");
        }
        $this->nota = $nota;
    }

    public function getNota(): float
    {
        return $this->nota;
    }
}
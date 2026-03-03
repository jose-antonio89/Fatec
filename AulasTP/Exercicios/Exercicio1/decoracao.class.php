
<?php

class Decoracao
{
    private string $descritivo;
    public function __construct(string $descritivo)
    {
        $this->descritivo = $descritivo;
    }

    public function getDescritivo(): string
    {
        return $this->descritivo;
    }
}

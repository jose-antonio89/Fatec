<?php
class IMC
{
    private float $peso;
    private float $altura;
    private float $imc;
    public function calcularIMC($altura, $peso)
    {
        if ($altura > 3) {
            $altura = $altura / 100;
        }

        $this->altura = $altura;
        $this->peso = $peso;
        if ($altura <= 0) {
            return 0;
        }

        $this->imc = $peso / ($altura * $altura);
        return $this->imc;
    }
    public function classificacaoIMC($imc)
    {
        if ($imc < 18.5) return "Abaixo do Peso Normal";
        if ($imc < 25) return "Peso Normal";
        if ($imc < 30) return "Sobrepeso";
        if ($imc < 35) return "Obesidade Grau I";
        if ($imc < 40) return "Obesidade Grau II";
        return "Obesidade Grau III";
    }
    public function recomendacao($imc)
    {
        if ($imc >= 25) return "Sim precisa fazer regime";
        return "Não precisa fazer regime";
    }
}

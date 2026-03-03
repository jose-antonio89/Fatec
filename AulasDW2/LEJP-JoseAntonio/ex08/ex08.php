<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex8PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <h1>Notas por Matriz:</h1>
        <label for="numero">Aluno3 e sua nota:</label>
        <input type="text" name="numero">
        <br>

        <button name="enviar">Enviar</button>
    </form>
</body>

</html>

<?php

function fatorialN($n)
{
    $fatorial = 1; // armazena resultado
    $n_int = (int)$n; // converte numero em inteiro
    $equacao = ""; // armazena string p equacao

    // $i que e igual a $n se repete ate ser 1, diminuindo toda run
    for ($i = $n_int; $i >= 1; $i--) {

        $fatorial = $fatorial * $i; // resultado recebe ele mesmo x $i
        $equacao .= $i; // string recebe ela mesma + $i

        if ($i > 1) {
            // enquanto nao for um vai ser adicionado um "x" na string
            $equacao .= " x ";
        }
    }

    return $equacao . " = " . $fatorial; // retorna a string completa + o resultado
}

if (isset($_POST['enviar'])) {
    $n = $_POST['numero'];

    $resultado = fatorialN($n);
    echo "$resultado";
}

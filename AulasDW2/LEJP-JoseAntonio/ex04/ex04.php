<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex4PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <label for="nota">Nota do Aluno:</label>
        <input type="text" name="nota">
        <label for="presenca">Porcentagem de presenca:</label>
        <input type="text" name="presenca"> <br>

        <button name="enviar">Enviar</button>
    </form>
</body>

</html>

<?php

if (isset($_POST['enviar'])) {
    $n = $_POST['nota'];
    $p = $_POST['presenca'];

    if ($n > 10 || $n < 0 || $p > 100 || $p < 0) {
        $msg = "Nota ou presenca invalida";
    } else {
        if ($n >= 6) {
            $msg = "Aprovado, nota acima da media!" . " " . "Aluno tem $p% de presenca";
        }
        if (6 > $n && $n >= 4) {
            $msg = "Aluno foi para segunda epoca, abaixo da media!" . " " . "Aluno tem $p% de presenca";
        }
        if ($n < 4) {
            $msg = "Aluno reprovado!" . " " . "Aluno tem $p% de presenca";
        }
    }

    echo "$msg";
}

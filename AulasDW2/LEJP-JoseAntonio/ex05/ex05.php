<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex5PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <h1>Soma dos numeros ate N</h1>
        <label for="numero">Insira um numero:</label>
        <input type="text" name="numero">

        <button name="enviar">Enviar</button>
    </form>
</body>

</html>

<?php

if (isset($_POST['enviar'])) {
    $n = $_POST['numero'];
    $soma = 0;
    $expressao = "";

    for ($i = 1; $i <= $n; $i++) {
        $soma = $soma + $i;
        $expressao .= $i;

        if ($n > $i) {
            $expressao .= " + ";
        }
    }
    echo "<p>A soma e: <strong>" . $expressao . " = " . $soma . "</strong></p>";
}

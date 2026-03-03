<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex9PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <h1>Decimais Arredondados:</h1>
        <label for="decimal">insira um numero decimal</label>
        <input type="text" name="decimal">
        <br>
        <button name="enviar">Enviar</button>
        <br><br>
    </form>
</body>

</html>

<?php

if (isset($_POST['decimal'])) {
    $d = str_replace(",", ".", $_POST['decimal']);
    $d = (float)$d;


    $resultadoCeil = ceil($d);
    $resultadoFloor = floor($d);
    $resultadoRound = round($d);

    echo "
        Valor original: $d<br>
        Arredondado para cima (ceil): <strong>$resultadoCeil</strong><br>
        Arredondado para baixo (floor): <strong>$resultadoFloor</strong><br>
        Arredondamento normal (round): <strong>$resultadoRound</strong>`;";
}

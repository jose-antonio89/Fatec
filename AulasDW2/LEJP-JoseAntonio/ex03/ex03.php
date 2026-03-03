<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex3PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <h1>Calculadora: Area e Perimetro de <strong>Retangulos</strong></h1>

    <form action="" method="post">
        <p>A respeito do Retangulo:</p>
        <label for="base">Insira a base:</label>
        <input type="text" name="base"> <br>
        <label for="altura">Insira a altura:</label>
        <input type="text" name="altura"> <br><br>

        <button name="calcular" value="">Calcular</button>
    </form>

</body>

</html>

<?php
if (isset($_POST['calcular'])) {
    $b = $_POST['base'];
    $h = $_POST['altura'];

    $area = $b * $h;
    $perimetro = 2 * ($b + $h);

    echo "<p>
                A area deste retangulo e de: <strong>$area</strong>,<br>
                E seu perimetro: <strong>$perimetro</strong>
                </p>";
}

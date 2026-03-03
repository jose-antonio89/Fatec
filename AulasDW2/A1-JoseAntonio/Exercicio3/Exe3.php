<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Exercicio 3</title>
    <link rel="stylesheet" href="../style.css" />
</head>

<body>
    <a href="../ListaP1.html">Voltar para lista</a> <br><br>

    <h1>Descubra se o número é Impar ou Par</h1>

    <form method="post">
        <label for="numero">Digite o número:</label>
        <input
            type="number"
            id="numero"
            name="numero"
            value="<?php echo isset($_POST['numero']) ? htmlspecialchars($_POST['numero']) : '' ?>"
            required />
        <br><br>
        <button type="submit" name="verificar">Verificar</button>
    </form>

    <?php
    if (isset($_POST['verificar'])) {
        $num = $_POST['numero'];

        if (is_numeric($num)) {
            $num = intval($num);
            $resultado = ($num % 2 === 0) ? "Par" : "Ímpar";

            echo "<h2>Resultado:</h2>";
            echo "<p>O número digitado foi <strong>$num</strong> e ele é <strong>$resultado</strong>.</p>";
        } else {
            echo "<p style='color:red;'>Erro: Por favor, insira um número válido.</p>";
        }
    }
    ?>
</body>

</html>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Exercicio 7</title>
    <link rel="stylesheet" href="../style.css" />
</head>

<body>

    <a href="../ListaP1.html">Voltar para lista</a> <br><br>

    <h1>Conversão de Celsius para Fahrenheit</h1>

    <?php
    if (!isset($_POST['celsius'])) {
        echo '<form method="post">
            <label for="celsius">Digite a temperatura em °C:</label>
            <input type="number" name="celsius" step="any" required>
            <button type="submit">Converter</button>
          </form>';
    } else {
        $celsius = floatval($_POST['celsius']);
        $fahrenheit = ($celsius * 9 / 5) + 32;

        echo "<h2>Resultado:</h2>";
        echo "<p>Temperatura em Celsius: <strong>{$celsius}°C</strong></p>";
        echo "<p>Temperatura em Fahrenheit: <strong>{$fahrenheit}°F</strong></p>";
    }
    ?>

</body>

</html>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Exercicio 9</title>
    <link rel="stylesheet" href="../style.css" />
</head>

<body>

    <a href="../ListaP1.html">Voltar para lista</a> <br><br>

    <h1>Lista de Veículos</h1>

    <?php
    if (!isset($_POST['veiculos'])) {

        echo '<form method="post">
            <label>Digite o nome de 5 veículos:</label><br><br>';
        for ($i = 1; $i <= 5; $i++) {
            echo "Veículo $i: <input type='text' name='veiculos[]' required><br>";
        }
        echo '<br><button type="submit">Mostrar ordem</button>
          </form>';
    } else {

        $veiculos = $_POST['veiculos'];

        echo "<h2>Veículos na ordem de entrada:</h2><ul>";
        foreach ($veiculos as $v) {
            echo "<li>" . htmlspecialchars($v) . "</li>";
        }
        echo "</ul>";

        sort($veiculos, SORT_STRING | SORT_FLAG_CASE);

        echo "<h2>Veículos em ordem alfabética:</h2><ul>";
        foreach ($veiculos as $v) {
            echo "<li>" . htmlspecialchars($v) . "</li>";
        }
        echo "</ul>";
    }
    ?>

</body>

</html>
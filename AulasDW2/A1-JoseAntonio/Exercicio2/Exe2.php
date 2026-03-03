<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 2</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body>

    <a href="../ListaP1.html">Voltar para lista</a> <br><br>

    <h1>Digite a quantidade de números</h1>

    <?php
    if (!isset($_POST['quantidade']) && !isset($_POST['numeros'])) {
        // Para ler a quantidade de numeros
        echo '<form method="post">
                <label for="quantidade">Digite a quantidade de numeros:</label>
                <input type="number" name="quantidade" min="1" required>
                <button type="submit">Continuar</button>
              </form>';
    } elseif (isset($_POST['quantidade']) && !isset($_POST['numeros'])) {
        // Mostrar os campos
        $qtd = intval($_POST['quantidade']);
        echo '<form method="post">
                <h2>Digite os números:</h2>';
        for ($i = 1; $i <= $qtd; $i++) {
            echo "<label>Número $i:</label>
                  <input type='number' name='numeros[]' required><br>";
        }
        echo "<br><button type='submit'>Enviar</button>";
        echo '</form>';
    } elseif (isset($_POST['numeros'])) {
        // Processar os números e encontra maior/menor
        $numeros = $_POST['numeros'];
        $todos = implode(', ', $numeros);
        $maior = max($numeros);
        $menor = min($numeros);

        echo "<h2>Números digitados:</h2>";
        echo "<p>$todos</p>";

        echo "<h3>Maior número: <strong>$maior</strong></h3>";
        echo "<h3>Menor número: <strong>$menor</strong></h3>";
    }
    ?>
</body>

</html>
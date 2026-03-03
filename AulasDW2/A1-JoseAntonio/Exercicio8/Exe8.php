<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Exercicio 8</title>
    <link rel="stylesheet" href="../style.css" />
</head>

<body>

    <a href="../ListaP1.html">Voltar para lista</a> <br><br>

    <h1>Contagem de 1 até 100 com PIN</h1>

    <?php
    if (!isset($_POST['contar'])) {

        echo '<form method="post">
            <button type="submit" name="contar">Iniciar contagem</button>
          </form>';
    } else {

        $i = 1;
        echo "<h2>Resultado da contagem:</h2>";
        echo "<ul>";
        while ($i <= 100) {
            if ($i % 5 == 0) {
                echo "<li>$i - PIN</li>";
            } else {
                echo "<li>$i</li>";
            }
            $i++;
        }
        echo "</ul>";
    }
    ?>

</body>

</html>
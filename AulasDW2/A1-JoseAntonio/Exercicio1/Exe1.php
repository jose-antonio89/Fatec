<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 1</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body>

    <a href="../ListaP1.html">Voltar para lista</a> <br><br>


    <form action="" method="post">

        <label for="nota1">Nota 1:</label>
        <input type="text" name="nota1"><br>

        <label for="nota2">Nota 2:</label>
        <input type="text" name="nota2"><br>

        <label for="nota3">Nota 3:</label>
        <input type="text" name="nota3"><br>

        <label for="nota4">Nota 4:</label>
        <input type="text" name="nota4"><br>

        <label for="nota5">Nota 5:</label>
        <input type="text" name="nota5"><br><br>

        <button type="submit" name="media">Calcular Média</button>
        <input type="reset" value="Limpar">
    </form>

    <?php
    if (isset($_POST['media'])) {
        $notas = [
            $_POST['nota1'],
            $_POST['nota2'],
            $_POST['nota3'],
            $_POST['nota4'],
            $_POST['nota5']
        ];

        $todasPreenchidas = true;
        foreach ($notas as $n) {
            if (!is_numeric($n)) {
                $todasPreenchidas = false;
                break;
            }
        }

        if ($todasPreenchidas) {
            $soma = array_sum($notas);
            $media = $soma / count($notas);

            echo "<br><strong>Notas inseridas:</strong><br>";
            foreach ($notas as $i => $nota) {
                echo "Nota " . ($i + 1) . ": $nota<br>";
            }

            echo "<br><strong>Média final:</strong> " . number_format($media, 2, ',', '');
        } else {
            echo "<br><strong style='color:red;'>Erro:</strong> Por favor, insira valores numéricos válidos em todas as notas.";
        }
    }
    ?>

</body>

</html>
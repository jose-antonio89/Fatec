<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex7PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <h1>Notas por Matriz:</h1>
        <label for="nome1">Aluno1 e sua nota:</label>
        <input type="text" name="nome1">
        <input type="text" name="nota1">
        <br>
        <label for="nome2">Aluno2 e sua nota:</label>
        <input type="text" name="nome2">
        <input type="text" name="nota2">
        <br>
        <label for="nome3">Aluno3 e sua nota:</label>
        <input type="text" name="nome3">
        <input type="text" name="nota3">
        <br>

        <button name="enviar">Enviar</button>
    </form>
</body>

</html>

<?php

if (isset($_POST['enviar'])) {
    $nota1 = explode(" ", trim($_POST['nota1']));
    $nota2 = explode(" ", trim($_POST['nota2']));
    $nota3 = explode(" ", trim($_POST['nota3']));

    $matriz = [
        $_POST['nome1'] => $nota1,
        $_POST['nome1'] => $nota2,
        $_POST['nome3'] => $nota3,
    ];

    // matriz e o nome da var
    // nomes: nome de cada aluno
    // $nomes => $notas: desmembra o array em 2 partes, nomes e notas(dentro de nomes)
    foreach ($matriz as $nomes => $notas) {

        $soma_aluno = 0;
        $notas_tamanho = count($notas);
        // outro foreach para trabalhar com cada nota dentro de nota
        foreach ($notas as $nota) {
            if ($nota <= 10 && $nota >= 0) {
                $soma_aluno = $soma_aluno + (float)$nota;

                // para validacao fora do foreach
                $valido = 1;
            } else {
                $valido = 0;
            }
        }

        // se for 0 quer dizer q n passou no if
        if ($valido > 0) {
            $media_aluno = $soma_aluno / $notas_tamanho;
            $media_formatada = number_format($media_aluno, 2, ',', '.');
            echo "A media de <strong>$nomes</strong> e de: <strong>$media_aluno</strong> <br>";
        } else {
            echo "Notas invalidas inseridas no aluno <strong>$nomes</strong>!<br>";
        }
    }

    echo "<pre>";
    print_r($matriz);
    echo "</pre>";
}

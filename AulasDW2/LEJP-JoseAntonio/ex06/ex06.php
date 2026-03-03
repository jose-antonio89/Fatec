<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex6PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <h1>Media por vetor:</h1>
        <label for="notas">Insira os 5 numeros:</label>
        <input type="text" name="notas">

        <button name="enviar">Enviar</button>
    </form>
</body>

</html>

<?php
if (isset($_POST['enviar'])) {
    $original = trim($_POST['notas']);
    // trim remove espacos extras
    $vetor = explode(" ", $original);
    // explode transforma string em array explode(remover, $string)

    $tamanho = count($vetor);
    // count conta tamanho do vetor
    $total = 0;

    if ($tamanho == 5) {
        foreach ($vetor as $nota) {
            $total = $total + (float)$nota;
        }

        $media = $total / $tamanho;
        $media_formatada = number_format($media, 2, ',', '.');

        $msg = "A media do aluno e de: <strong>$media_formatada</strong>";

        echo "<pre>";
        var_dump($vetor);
        echo "</pre>";
    } else {
        $msg = "ERRO: Insira 5 numeros validos!";
    }

    echo "$msg";
}

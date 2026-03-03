<?php
$corFundo = ($recomendacao == "Sim precisa fazer regime") ? "red" : "green";
?>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Resultado do IMC</h2>
    <p>Seu IMC é: <strong><?= number_format($imc, 2) ?></strong></p>
    <p>Classificação: <strong><?= $classificacao ?></strong></p>
    <div class="box" style="background: <?= $corFundo ?>;">
        <?= $recomendacao ?>
    </div>
    <br><br>
    <a href="../Views/imc.php">Calcular novamente</a>
</body>
</html>
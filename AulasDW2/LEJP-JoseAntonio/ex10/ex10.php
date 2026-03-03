<?php
session_start();
// cria uma sessao pra poder guarda as variaveis a cada envio no form

if (!isset($_SESSION['pares'])) {
    $_SESSION['fim'] = false; // variavel pra check
    $_SESSION['pares'] = 0; // variavel pra quantia de pares
    $_SESSION['paresArray'] = []; // guarda os pares
}

if (isset($_POST['numero'])) {
    $num = (int)$_POST['numero']; //numero inteiro

    if ($num == 0) {
        $_SESSION['fim'] = true;
        // se for igual a 0 troca check pra true
    } else {
        if ($num % 2 == 0) {
            // se for par armazena e incrementa
            $_SESSION['pares']++;
            $_SESSION['paresArray'][] = $num;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex10PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>


    <h2>Digite numeros abaixo</h2>

    <?php if ($_SESSION['fim'] == false): ?>
        <!-- se o check for falso mostra formulario -->
        <p>Para mostrar seu resultado, digite 0. O form se repetira</p>
        <form method="post">
            <input type="number" name="numero" required>
            <button type="submit">Enviar</button>
        </form>

    <?php else: ?>
        <!-- se nao for falso ele mostra os resultados -->
        <h3>foi digitado <?php echo $_SESSION['pares']; ?> numeros pares.</h3>
        <p>pares digitados:
            <?php
            // foreach pra mostrar o array como string
            foreach ($_SESSION['paresArray'] as $pares) {
                echo $pares . " ";
            }
            ?>
        </p>

        <form action="" method="post">
            <button type="submit" name="reset">Reiniciar</button>
        </form>

    <?php endif; ?>
    <!-- tem que fechar esse if especial -->

    <?php
    // se clicar no botao de reset ele reseta a sessao
    if (isset($_POST['reset'])) {
        session_destroy();
        // limpa ela
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
        // retorna ao arquivo resetado
    }
    ?>

</body>

</html>
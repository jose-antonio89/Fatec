<!-- 
    Leia um nome completo, email, telefone e idade.
    Exiba como no exemplo: 
    "Nome Completo tem Idade anos. Seu email: nome.sobrenome@email.com e telefone: (014) 99102-3456
-->

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex1PHP</title>
     <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a href="../index.html">Voltar</a> <br><br>

    <form action="" method="post">
        <label for="nome">Insira seu nome:</label>
        <input type="text" name="nome">
        <label for="sobrenome">sobrenome:</label>
        <input type="text" name="sobrenome"> <br><br>

        <label for="email">Insira seu email:</label>
        <input type="text" name="email"> <br><br>

        <label for="idade">Insira sua idade:</label>
        <input type="text" name="idade"> <br><br>

        <label for="telefone">Insira seu telefone:</label>
        <input type="text" name="telefone"> <br><br>


        <input type="submit" name="submit">
        <input type="reset" name="reset">
    </form>
</body>

</html>

<?php
if (isset($_POST['nome'])) {
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $nomeCompleto = $nome . " " . $sobrenome;
    $email = $_POST['email'];
    $idade = $_POST['idade'];
    $telefone = $_POST['telefone'];

    echo "<p><strong>$nomeCompleto</strong> tem <strong>$idade</strong> anos. Seu email: <strong>$email</strong> e telefone: <strong>$telefone</strong>";
}
?>
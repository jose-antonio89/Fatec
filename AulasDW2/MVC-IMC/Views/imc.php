<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Calculadora de IMC</h2>
    <form method="POST" action="../Controllers/imcController.php">
        <input type="number" step="0.01" name="altura" placeholder="Altura (cm ou m)" required><br>
        <input type="number" step="0.01" name="peso" placeholder="Peso (kg)" required><br>
        <button type="submit">Calcular IMC</button>
    </form>
</body>
</html>
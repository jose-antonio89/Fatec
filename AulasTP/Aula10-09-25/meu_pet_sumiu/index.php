<?php

if ($_GET) {
    // Outras Rotas
    $controle = $_GET["controle"];
    $metodo = $_GET["metodo"];
    require_once "controllers/$controle.class.php";
    $obj = new $controle();
    $obj->$metodo();
} else {
    // Rota Inicial
    require_once "controllers/inicioController.class.php";

    $obj = new inicioController();
    $obj->inicio();
}

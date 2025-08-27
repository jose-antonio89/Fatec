<?php
class produtoController
{
    public function listar()
    {
        // Buscar os dados de produtos no banco de dados
        //Abriu conexão com o banco de dados
        $parametros = "mysql:host=localhost;dbname=exemplo_mvc;charset=utf8mb4";
        $conn = new PDO($parametros, "root", "");
        //Buscar os dados
        $sql = "SELECT * FROM produtos";
        $stm = $conn->prepare($sql);
        $stm->execute();
        // Para fechar conexão
        $conn = null;
        $resultado = $stm->fetchAll(PDO::FETCH_OBJ);

        /*echo "<pre>";
        var_dump($resultado);
        echo "</pre>";*/
        
        // Mostrar uma visão
        require_once "views/lista.php";
    }
}

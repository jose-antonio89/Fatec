<?php

// puxando classe de outro arquivo

// include "novo.php"; - se nao encontrar o arquivo da erro 
// include_once "Usuario.class.php"; - faz apenas uma vez
// require "Usuario.class.php"; - se nao encontrar o arquivo da erro direto
require_once "usuario-class.php"; // - apenas uma vez

// Criando um objeto

$usuario1 = new Usuario(
    "Kilian", "Kilian@gmail.com", "l1234"
    );
    $usuario2 = new Usuario(
        "Azurath", "Azurath@gmail.com", "k4321"
        );
        $usuario3 = new Usuario(
            email:"Leon@gmail.com", senha:"r1234"
            );
            
            // echo $usuario1 - nao funciona
            
            /*
            echo "<pre>";
            var_dump($usuario1);
            var_dump($usuario2);
            var_dump($usuario3);
            echo "</pre>";
            */
            
            // Chama um objeto especifico $usuario1->nome
            
            echo "Nome: {$usuario1->getNome()}<br>"; 
            echo "Email: {$usuario1->getEmail()}<br>";
            echo "Senha: {$usuario1->getSenha()}<br>";
            
            // Trocando um objeto especifico
            
            $usuario1->setNome("Maria da Silva");
            echo "Nome: {$usuario1->getNome()}<br>";

?>
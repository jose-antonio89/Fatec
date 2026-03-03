<?php
 
class usuarioDAO extends Conexao {
    public function __construct() {
        parent:: __construct();
    }
 
    public function inserir($usuario) {
        $sql = "INSERT INTO usuarios (nome, email, senha, celular) VALUES (?,?,?,?)";
        try
        {
            // preparar a frase SQL
            $stm = $this->db->prepare($sql);
            // substituir os pontos de interrogação pelos valores que estão no objeto $usuario
            $stm->bindValue(1,$usuario->getnome());
            $stm->bindValue(2,$usuario->getemail());
            $stm->bindValue(3,$usuario->getsenha());
            $stm->bindValue(4,$usuario->getcelular());
            $stm->execute();
            $tihs->db = null;
            return "Usuario inserido com sucesso";
        }
        catch(PDOException $E)
        {
            $tihs->db = null;
            return "Problema com o cadastro do usuário";
        }
    }
 
    public function login() {
       
    }
   
    public function verificar_email() {
   
    }
} // fim classe
 
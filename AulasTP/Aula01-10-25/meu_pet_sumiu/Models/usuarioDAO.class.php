<?php

class usuarioDAO extends Conexao
{
    public function __construct()
    {
        parent::__construct();
    }

    public function inserir($usuario)
    {
        $sql = "INSERT INTO usuario (nome, email, senha, celular) VALUES(?,?,?,?)";
        try {
            //preparar a frase sql
            $stm = $this->db->prepare($sql);
            //substituir nos pontos de interrogacao pelos valores que estao no objeto usuario
            $stm->bindValue(1, $usuario->getnome());
            $stm->bindValue(2, $usuario->getemail());
            $stm->bindValue(3, $usuario->getsenha());
            $stm->bindValue(4, $usuario->getcelular());
            $stm->execute();
            $this->db = null;
        } catch (PDOException $e) {
            $this->db = null;
            return "Problema com o cadastro do usuario";
        }
    }

    public function login($usuario)
    {
        $sql = "SELECT id_usuario, email, senha, nome FROM usuario WHERE email = ?";

        try {
            $stm = $this->db->prepare($sql);
            $stm->bindValue(1, $usuario->getemail());
            $stm->execute();
            $this->db = null;
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            $this->db = null;
            return "Problema ao validar o email";
        }
    }

    public function verificar_email($usuario)
    {
        $sql = "SELECT email, nome, id_usuario FROM usuario WHERE email = ?";

        try {
            $stm = $this->db->prepare($sql);
            $stm->bindValue(1, $usuario->getemail());
            $stm->execute();
            $this->db = null;
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            $this->db = null;
            return "Problema ao validar o email";
        }
    }

    public function alterar_senha($usuario)
    {
        $sql = "UPDATE usuario SET senha = ? WHERE id_usuario = ?";

        try {
            $stm = $this->db->prepare($sql);
            $stm->bindValue(1, $usuario->getsenha());
            $stm->bindValue(2, $usuario->getid_usuario());
            $stm->execute();
            $this->db = null;
            return "Senha alterada com sucesso!";
            } 
        catch (PDOException $e) {
            $this->db = null;
            return "Problema na alteração da senha";
        }
    }

} // fim classe
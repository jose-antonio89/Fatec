SHOW DATABASES;

-- Criar um banco de dados
CREATE DATABASE IF NOT EXISTS jose;

DROP DATABASE IF EXISTS aula_180925;

-- Deletar um banco de dados
DROP DATABASE IF EXISTS ronan;

-- Cria um banco de dados completo
CREATE DATABASE IF NOT EXISTS aula_250925 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Mostra o script de criação do banco completo, com o charset.
SHOW CREATE DATABASE aula_250925;

-- Marca um banco de dados para ser utilizado ate que a conexão finalize
USE aula_250925;

-- Cria uma tabela que impede erro
CREATE TABLE IF NOT EXISTS usuarios (
	id_usuario BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    email VARCHAR(255) UNIQUE,
    data_nascimento DATE,
    admin BOOLEAN DEFAULT FALSE,
    salario DECIMAL(10,2),
    cargo ENUM('Vendedor','Supervisor','Gerente'),
    senha VARCHAR(255) NOT NULL,
    -- Campos para Log / Auditoria
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
    alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em DATETIME NULL
    ); 
    
-- Busca todos os dados presentes em uma tabela
SELECT * FROM usuarios;
    
    -- Descreve a tabela mostrando seus dados de criação
DESCRIBE usuarios;
    
-- Adicionando a coluna Genero
ALTER TABLE usuarios
-- ENUM por padrão é NOT NULL e não aceita vazio ""
--                             0           1         2              3
	ADD COLUMN genero ENUM('Feminino','Masculino','Outros','Prefiro não declarar');
	
-- Apagando a coluna genero, para inserir ela no local correto
ALTER TABLE usuarios
	DROP COLUMN genero;

-- AFTER define depos de quando um campo será criado
ALTER TABLE usuarios
	ADD COLUMN genero ENUM('Feminino','Masculino','Outros','Prefiro não declarar')
    AFTER data_nascimento;
    
-- SET - Não utilizamos porque ele é OUTRA TABELA N:M
-- SET Permite NULL e a seleção de várias opções.

-- Troca o tipo do campo na tabela
ALTER TABLE usuarios
	MODIFY COLUMN genero CHAR(1);

-- Trocar o nome de uma coluna
ALTER TABLE usuarios
   CHANGE COLUMN nome nome_completo VARCHAR(255) NOT NULL;


-- Exemplo de tabela de ligação de muitos pra muitos

CREATE TABLE IF NOT EXISTS produtos (
	id_produto BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	quantidade DECIMAL(6,3),
	valor DECIMAL(10,2),
	validade DATE NULL,
	-- Logs
	criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
	alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS categorias (
	id_categoria BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nome VARCHAR(255),
	-- Logs
	criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
	alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS produtos_categorias (
	produto_id BIGINT UNSIGNED NOT NULL,
	categoria_id BIGINT UNSIGNED NOT NULL,
	-- Logs
	criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
	alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletado_em DATETIME NULL,
    -- Cria uma chave primaria composta
    PRIMARY KEY (produto_id,categoria_id),
    FOREIGN KEY (produto_id) REFERENCES produtos (id_produto)
);

-- Adicionar um relacionamento depois da tabela criada.
-- Informar o nome do BD no script é uma boa prática, mas pouco usada para comandos simples.
ALTER TABLE aula_250925.produtos_categorias
-- Ao fazer com ALTER TABLE é obrigatório informar o nome do Relacionamento
 ADD CONSTRAINT fk_produtos_categorias_categorias
 FOREIGN KEY (categoria_id) REFERENCES categorias (id_categoria);

DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS produtos_categorias;

DESCRIBE categorias;
DESCRIBE produtos;
DESCRIBE produtos_categorias;
   





    





        

    
    
    
    
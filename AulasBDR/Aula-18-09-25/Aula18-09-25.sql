SHOW DATABASES;

-- Criar um banco de dados
CREATE DATABASE IF NOT EXISTS jose;

-- Deletar um banco de dados
DROP DATABASE IF EXISTS ronan;

-- Cria um banco de dados completo
CREATE DATABASE IF NOT EXISTS aula_180925 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Mostra o script de criação do banco completo, com o charset.
SHOW CREATE DATABASE aula_180925;

-- Marca um banco de dados para ser utilizado ate que a conexão finalize
USE aula_180925;

-- Cria uma tabela que impede erro
CREATE TABLE usuarios (
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
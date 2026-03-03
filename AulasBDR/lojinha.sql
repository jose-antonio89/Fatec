SHOW DATABASES;


-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS lojinha CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOW CREATE DATABASE lojinha;

USE lojinha;

CREATE TABLE IF NOT EXISTS clientes(
id_clientes BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_completo VARCHAR(255) NOT NULL,
cpf VARCHAR(14) UNIQUE,
email VARCHAR(255) UNIQUE,
data_nascimento DATE,
genero ENUM('Feminino','Masculino','Outros','Prefiro não declarar'),
admin BOOLEAN DEFAULT FALSE,
salario DECIMAL(10,2),
cargo ENUM('Vendedor','Supervisor','Gerente'),
senha VARCHAR(255) NOT NULL,
ativo TINYINT DEFAULT 1,
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS produtos (
id_produtos BIGINT  UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome VARCHAR(255) NOT NULL,
quantidade DECIMAL(6,3),
valor DECIMAL(10,2),
validade DATE NULL,
ativo TINYINT DEFAULT 1,
-- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS vendas (
id_vendas BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
usuario_id BIGINT UNSIGNED NOT NULL,
data_venda DATETIME DEFAULT CURRENT_TIMESTAMP,
valor_total DECIMAL(10,2),
ativo TINYINT DEFAULT 1,
-- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL,

FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);

-- Tabela de ligação para itens da venda (muitos para muitos entre vendas e produtos)
CREATE TABLE IF NOT EXISTS itens_venda (
venda_id BIGINT UNSIGNED NOT NULL,
produto_id BIGINT UNSIGNED NOT NULL,
quantidade DECIMAL(6,3),
valor_unitario DECIMAL(10,2),
ativo TINYINT DEFAULT 1,
-- Logs 
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL,

PRIMARY KEY (venda_id, produto_id),
FOREIGN KEY (venda_id) REFERENCES vendas(id_venda),
FOREIGN KEY (produto_id) REFERENCES produtos(id_produto)
);

-- Modificações estruturais

RENAME TABLE clientes TO usuarios;

ALTER TABLE usuarios 
CHANGE COLUMN id_cliente id_usuario BIGINT UNSIGNED AUTO_INCREMENT NOT NULL;

ALTER TABLE vendas 
CHANGE COLUMN cliente_id usuario_id BIGINT UNSIGNED NOT NULL;

-- Adição e modificação de campos
ALTER TABLE usuarios 
MODIFY COLUMN ativo CHAR(1) DEFAULT 'S';
ALTER TABLE produtos 
MODIFY COLUMN ativo CHAR(1) DEFAULT 'S';
ALTER TABLE vendas 
MODIFY COLUMN ativo CHAR(1) DEFAULT 'S';
ALTER TABLE itens_venda 
MODIFY COLUMN ativo CHAR(1) DEFAULT 'S';


CREATE USER IF NOT EXISTS 'jose'@'localhost' IDENTIFIED BY 'senha_segura';

GRANT INSERT, SELECT, UPDATE, DELETE ON lojinha.* TO 'jose'@'localhost';

-- VERIFICAÇÕES
SHOW DATABASES;
USE loja;
DESCRIBE usuarios;
DESCRIBE produtos;
DESCRIBE vendas;
DESCRIBE itens_venda;

SHOW GRANTS FOR 'jose'@'localhost';


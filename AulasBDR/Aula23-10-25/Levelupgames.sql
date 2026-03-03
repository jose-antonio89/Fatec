
CREATE DATABASE IF NOT EXISTS levelupgames CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE levelupgames;

Create table if not exists clientes (
id_cliente BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome varchar(255),
cpf varchar(14) UNIQUE,
email varchar(255) UNIQUE,
data_nascimento DATE,
telefone VARCHAR(30),
genero ENUM('Feminino','Masculino','Outros','Prefiro não declarar'),
admin BOOLEAN DEFAULT FALSE,
salario DECIMAL(10,2),
cargo ENUM('Vendedor','Supervisor','Gerente'),
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS produtos (
id_produto BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome VARCHAR(255) NOT NULL,
preco_unitario DECIMAL(10,2) NOT NULL,
estoque DECIMAL(10,3) DEFAULT 0,
codigo_barras VARCHAR(50) UNIQUE,
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS vendas (
id_venda BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
cliente_id BIGINT UNSIGNED NOT NULL,
valor_total DECIMAL(10,2),
data_venda DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
forma_pagamento ENUM('dinheiro', 'crédito', 'débito', 'pix'),
observacoes TEXT, 
desconto_total DECIMAL(5,2) DEFAULT 0,
total_venda DECIMAL(10,2) NOT NULL,
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL,

CONSTRAINT fk_vendas_clientes FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente) 
);

CREATE TABLE IF NOT EXISTS vendas_produtos (
 id_venda_produto BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 venda_id BIGINT UNSIGNED NOT NULL,
 produto_id BIGINT UNSIGNED NOT NULL,
 quantidade DECIMAL (10,3) NOT NULL,
 preco_unitario DECIMAL (10,3) NOT NULL,
 desconto DECIMAL(10,2) DEFAULT 0,
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL,

CONSTRAINT fk_vendas_produtos_produtos FOREIGN KEY (produto_id) REFERENCES produtos (id_produto),
CONSTRAINT fk_vendas_produtos_vendas FOREIGN KEY (venda_id) REFERENCES vendas (id_venda)
);

CREATE TABLE IF NOT EXISTS jogos (
id_jogo BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
plataforma_id BIGINT UNSIGNED NOT NULL,
nome varchar(255),
preco_unitario decimal(10,3) NOT NULL,
genero varchar(255) NOT NULL,
descricao text,
faixa_etaria enum('Livre','+12','+14','+16','+18'),
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS plataformas (
id_plataforma BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL, 
plataforma enum ('Xbox','Playstation','Nintendo'),
 -- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS jogos_plataformas (
id_jogo_plataforma BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
jogo_id BIGINT UNSIGNED NOT NULL,
plataforma_id BIGINT UNSIGNED NOT NULL,
quantidade DECIMAL (10,3) NOT NULL,
preco_unitario DECIMAL (10,3) NOT NULL,
desconto DECIMAL(10,2) DEFAULT 0,
-- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletado_em DATETIME NULL,

CONSTRAINT fk_jogos_plataformas_plataformas FOREIGN KEY (plataforma_id) REFERENCES plataformas(id_plataforma),
CONSTRAINT fk_jogos_plataforma_jogos FOREIGN KEY (jogo_id) REFERENCES jogos(id_jogo)
);

-- CRUD com SQL 

-- C -> Create = INSERT -> Insere dados em uma tabela
INSERT INTO tabela (campo1, campo2, campo3)
	VALUES (valor1, 'valor2', 'YYYY-mm-dd');
    
INSERT INTO clientes (nome) VALUES ('Adilson');

INSERT INTO clientes (nome) VALUES ('Azir'), ('Aatrox'), ('Anivia'), ('Annie');

INSERT INTO clientes (id_cliente,nome,cpf,email,data_nascimento,telefone,genero,admin,salario,cargo,criado_em,alterado_em,deletado_em)
	VALUES (NULL,'Vaarus','589.623.589-42','vaarus@gmail.com','2017-12-25','(14)98825-6325',NULL,NULL,NULL,NULL,DEFAULT,DEFAULT,NULL);

-- R -> Read = SELECT -> Visualiza os dados presentes na tabela.
-- Mostra todos os campos e todos os dados de uma tabela
SELECT * FROM clientes;


SELECT nome FROM clientes;



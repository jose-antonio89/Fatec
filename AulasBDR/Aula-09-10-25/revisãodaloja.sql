-- Apaga o BD para garantir que a estrutura será a da versão final do SQL.
DROP DATABASE IF EXISTS lojavendas_produtos_ibfk_2_revisao;

-- Cria o Banco de Dados
CREATE DATABASE IF NOT EXISTS loja_revisao CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- EXTREMAMENTE IMPORTANTE! Tem que avisar qual BD vai ser usado
USE loja_revisao;

-- Tabela Clientes
-- So para de dar erro depois de finalizar o Script com pelo menos 1 campo
CREATE TABLE IF NOT EXISTS clientes(
 id_cliente BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 -- Alem de obrigatorio o E-mail é DEVE ser ÚNICO
 email VARCHAR(255) NOT NULL UNIQUE,
 cpf VARCHAR(14) NOT NULL UNIQUE,
 telefone VARCHAR(30),
 -- Demais campos do cliente...
 -- Registro de LOG
 criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
 -- Somente o MySQL possui ON UPDATE
 alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 -- EM campos de DATA/HORA é importante confirmar que ele aceita null
 deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS produtos (
 id_produto BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 descricao TEXT,
 preco_unitario DECIMAL(10,2) NOT NULL,
 estoque DECIMAL(10,3) DEFAULT 0,
 codigo_barras VARCHAR(50) UNIQUE,
  -- Registro de LOG
 criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
 -- Somente o MySQL possui ON UPDATE
 alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 -- EM campos de DATA/HORA é importante confirmar que ele aceita null
 deletado_em DATETIME NULL
);

CREATE TABLE IF NOT EXISTS vendas (
id_venda BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id BIGINT UNSIGNED NOT NULL,
data_venda DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
forma_pagamento ENUM('dinheiro', 'crédito', 'débito', 'pix'),
observacoes TEXT, 
desconto_total DECIMAL(5,2) DEFAULT 0,
total_venda DECIMAL(10,2) NOT NULL,
-- Logs
criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
-- Somente o MySQL possui ON UPDATE
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- EM campos de DATA/HORA é importante confirmar que ele aceita null
deletado_em DATETIME NULL,

CONSTRAINT fk_vendas_clientes FOREIGN KEY (cliente_id) REFERENCES clientes (id_cliente) 
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
-- Somente o MySQL possui ON UPDATE
alterado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- EM campos de DATA/HORA é importante confirmar que ele aceita null
deletado_em DATETIME NULL,

FOREIGN KEY (produto_id) REFERENCES produtos (id_produto),
FOREIGN KEY (venda_id) REFERENCES vendas (id_venda)
);

-- Modificações estruturais
-- Altere o nome da tabela clientes para usuarios.
ALTER TABLE clientes RENAME TO usuarios;

-- Atualizar o nome do campo chave primaria para refletir o novo nome
ALTER TABLE usuarios CHANGE COLUMN id_cliente id_usuario BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;
-- Ver se deu certo
DESCRIBE loja_revisao.usuarios;

-- Atualize o nome de qualquer chave estrangeira que esteja relacionada a tabela clientes
DESCRIBE loja_revisao.vendas;
-- Primeiro remove a chave estrangeira
ALTER TABLE vendas DROP FOREIGN KEY fk_vendas_clientes;

-- Altera a coluna
ALTER TABLE vendas CHANGE COLUMN cliente_id usuario_id BIGINT UNSIGNED NOT NULL;

-- Adiciona novamente o relacionamento
ALTER TABLE vendas
 ADD CONSTRAINT fk_vendas_usuarios
 FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario);
 
 -- Adição e modificação de campos
 
 -- Adicione um campo chamado ativo em cada tabela, inicialmente do tipo TINYINT.
 -- Usuarios
  ALTER TABLE usuarios ADD COLUMN ativo TINYINT NOT NULL DEFAULT 1;
 -- Vendas
 ALTER TABLE vendas ADD COLUMN ativo TINYINT NOT NULL DEFAULT 1;
 -- Produtos
  ALTER TABLE produtos ADD COLUMN ativo TINYINT NOT NULL DEFAULT 1;
 -- Vendas_produtos
  ALTER TABLE vendas_produtos ADD COLUMN ativo TINYINT NOT NULL DEFAULT 1;
  
 -- Adicionar os demais campos nas tabelas
 -- Usuarios
  ALTER TABLE usuarios MODIFY COLUMN ativo CHAR(1) NOT NULL DEFAULT 'S';
 -- Vendas
 ALTER TABLE vendas MODIFY COLUMN ativo CHAR(1) NOT NULL DEFAULT 'S';
 -- Produtos
  ALTER TABLE produtos MODIFY COLUMN ativo CHAR(1) NOT NULL DEFAULT 'S';
 -- Vendas_produtos
  ALTER TABLE vendas_produtos MODIFY COLUMN ativo CHAR(1) NOT NULL DEFAULT 'S';
  
  -- Gerenciamento de acesso
  
  -- Crie um usuário no SGBD com o seu nome própio.
  CREATE USER IF NOT EXISTS 'jose'@'%' IDENTIFIED BY 'Senha segura';
  
  -- Conceda a esse usuário permissões de CRUD (Create, Read, Update, Delete) para todas as tabelas
  GRANT SELECT, INSERT, UPDATE, DELETE ON loja_revisao.* TO 'jose'@'%';
  
  -- Aplica os previsao
  FLUSH PRIVILEGES;
 

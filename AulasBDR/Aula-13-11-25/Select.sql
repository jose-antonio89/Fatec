USE sakila_pt;

SHOW TABLES;

SELECT * FROM pagamentos;
-- Agregação
SELECT SUM(valor), AVG(valor), MAX(valor), MIN(valor) FROM pagamentos
WHERE data_pagamento < 2006-02-14;

SELECT * FROM pagamentos WHERE valor = 0.00;
 
-- Alteração da visualização
SELECT UPPER(CONCAT(primeiro_nome, ' ', ultimo_nome)) AS nome, email
FROM clientes;

SELECT LOWER(titulo), titulo FROM filmes;

SELECT * FROM filmes
WHERE LOWER(titulo) = LOWER('');

-- date('d/m/y', strtotime($var_data))
-- DATE FORMAT - Consultar a aspotila!
SELECT 
	id_pagamento AS id,
    CONCAT(clientes.primeiro_nome, ' ', clientes.ultimo_nome) AS nome_cliente,
    DATE_FORMAT(data_pagamento, '%d/%m/%y') AS data_pagamento,
    valor,
    FORMAT (valor, 2, 'pt_BR') AS valor_pt
FROM pagamentos
INNER JOIN clientes ON pagamentos.cliente_id = clientes.id_cliente;

-- Subquery - Podemos inserir SELECTs dentros de outros SELECTs
-- para ampliar o poder de consulta em lugares que o JOIN não resolve.

-- Exibir clientes com pagamentos acima da média
SELECT
	CONCAT(c.primeiro_nome, ' ', c.ultimo_nome) AS nome_cliente,
    p.data_pagamento,
    p.valor
FROM clientes c
INNER JOIN pagamentos p ON c.id_cliente = p.cliente_id
WHERE 
	c.id_cliente IN (
	-- Cria o resultado a ser utilizado o IN
    SELECT cliente_id
    FROM pagamentos
);

-- SELECT no FROM - Usamos o resultado de um SELECT para fazer novos filtros.ALTER
SELECT resultado.nome_cliente, resultado.valor
FROM (
		SELECT
			CONCAT(c.primeiro_nome, ' ', c.ultimo_nome) AS nome_cliente,
			p.data_pagamento,
			p.valor
		FROM clientes c
		INNER JOIN pagamentos p ON c.id_cliente = p.cliente_id
		WHERE 
			c.id_cliente IN (
			-- Cria o resultado a ser utilizado o IN
			SELECT cliente_id
			FROM pagamentos
		) -- FIM DO SELECT INTERNO
	)AS resultado
WHERE valor < 6;

-- SELECT dentro de SELECT dentro de SELECT
SELECT
	CONCAT(c.primeiro_nome, ' ', c.ultimo_nome) AS nome_cliente
	-- p.data_pagamento,
    -- p.valor
FROM clientes c
	INNER JOIN pagamentos p ON c.id_cliente = p.cliente_id
		WHERE 
			c.id_cliente IN (
				SELECT p.cliente_id FROM pagamentos p WHERE p.valor > (
				SELECT AVG(valor) FROM pagamentos 
				)
			)
GROUP BY nome_cliente -- Prefira GROUP BY ao DISTINCT, o DISTINCT vai remover repetidos após acabar a query, fazendo outra query
ORDER BY nome_cliente ASC;

-- Exemplo de consulta com Sub query dentro do select
SELECT a.ator_id,
CONCAT(a.primeiro_nome, ' ', a.ultimo_nome) AS atores_nome,
	(
    SELECT COUNT(*)
    FROM filmes_atores fa
    WHERE fa.atores_id = a.atores_id
    ) AS total_filmes
FROM atores a
ORDER BY total_filmes DESC;
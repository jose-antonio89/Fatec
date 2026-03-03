SHOW TABLES;

SELECT * FROM city;

SELECT city, last_update FROM city;

-- Criando filtros (=, <>, <, >, <=, >=)
SELECT title, length FROM film
WHERE length > 70;

SELECT title FROM film
WHERE title = 'YOUNG LANGUAGE';

-- Operadores lógicos (AND, OR)
SELECT title, length FROM film
WHERE length >= 70 AND length <= 100;

SELECT title, length FROM film
WHERE length < 70 OR length = 100;

-- Operadores especiais (BETWEEN, IN, LIKE)
SELECT title, length FROM film
WHERE length BETWEEN 70 AND 100;

SELECT title, length FROM film
WHERE length BETWEEN 70 AND 100;

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-07-30';

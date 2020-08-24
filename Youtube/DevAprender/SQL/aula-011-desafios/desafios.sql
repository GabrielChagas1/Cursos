/*

Desafios

*/

--1)Quantos produtos temos cadastrados no sistema que custam mais que 1500 dolares ?

SELECT COUNT(ListPrice) as totalProducts
FROM Production.Product
WHERE ListPrice > 1500;

-- 2)Quantas pessoas temos com o sobrenome que iniciam com a letra P

SELECT COUNT(LastName) 
FROM Person.Person
WHERE LastName LIKE 'p%';

-- 3) Em quantas cidades únicas estão cadastrados nossos clientes
SELECT COUNT (DISTINCT City)
FROM Person.Address;

-- 4) Quais são as cidades únicas que temos cadastrados em nosso sistema
SELECT DISTINCT City
FROM Person.Address ORDER BY City ASC;

-- 5) Quantos produtos vermelhos tem o preço entre 500 a 1000 dolares
SELECT * 
FROM Production.Product 
WHERE Color = 'red'
AND ListPrice BETWEEN 500 AND 1000;

-- 6) Quantos produtos cadastrados tem palavra road no nome deles ?

SELECT * 
FROM Production.Product
WHERE Name LIKE '%road%';
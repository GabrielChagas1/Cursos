/*
Este texto da consulta foi recuperado do XML do plano de execução e pode estar truncado.
*/

USE AdventureWorks2017;

--Selecionando os nomes e o seu total de repetição maior que 10
SELECT FirstName, COUNT(FirstName) AS "quantidade"
FROM Person.Person
GROUP BY FirstName
HAVING COUNT(FirstName) > 10

--Selecionando os produtos que a venda total esteja entre 162k e 500k
SELECT ProductID, SUM(LineTotal) as "total"
FROM Sales.SalesOrderDetail
GROUP BY ProductID
HAVING SUM(LineTotal)
BETWEEN 162000 AND 500000;

--Quais nomes no sistema tem uma ocorrência maior que 10 vezes, porém somento o título é Mr.
SELECT FirstName, Title, COUNT(FirstName) AS "Ocorrências"
FROM Person.Person
WHERE Title = 'Mr.'
GROUP BY FirstName, Title
HAVING COUNT(FirstName) > 10;

/*
	DESAFIOS
*/

-- 1)Encontrar as provincias que se repetem mais de 1000 vezes -> stateProvinceId
SELECT s.Name, COUNT(p.StateProvinceID) AS "Quantidade"
FROM Person.Address as p
JOIN Person.StateProvince as s 
ON p.StateProvinceID = s.StateProvinceID
GROUP BY s.Name
HAVING COUNT(p.StateProvinceID) > 1000
ORDER BY Quantidade DESC;

SELECT StateProvinceID, COUNT(StateProvinceID) AS "Quantidade"
FROM Person.Address
GROUP BY StateProvinceID
HAVING COUNT(StateProvinceID) > 1000
ORDER BY Quantidade;

-- 2)quais os produtos não estão trazendo em média no mínimo 1 milhão em total de vendas
SELECT ProductID, AVG(LineTotal) AS "Vendas Total"
FROM Sales.SalesOrderDetail
GROUP BY ProductID
HAVING AVG(LineTotal) < 1000000
ORDER BY [Vendas Total] ASC;

SELECT p.Name, AVG(LineTotal) AS "Vendas Total"
FROM Sales.SalesOrderDetail as s
JOIN Production.Product as p
ON s.ProductID = p.ProductID
GROUP BY p.Name
HAVING AVG(LineTotal) < 1000000
ORDER BY [Vendas Total] ASC;

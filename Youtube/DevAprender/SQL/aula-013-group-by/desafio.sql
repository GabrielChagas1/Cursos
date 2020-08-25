SELECT * 
FROM Sales.SalesOrderDetail;

--Listando a soma de todas as ofertas especiais
SELECT SpecialOfferID, SUM(UnitPrice) AS SOMA
FROM Sales.SalesOrderDetail
GROUP BY SpecialOfferID
ORDER BY SpecialOfferID ASC;

--Listando todos os id e os seus total de registros na tabela sales
SELECT ProductID, COUNT(ProductID) AS CONTAGEM
FROM Sales.SalesOrderDetail
GROUP BY ProductID;

--Listando todos os nomes e os seus total de registro
SELECT FirstName, COUNT(FirstName) AS TotalNome
FROM Person.Person
GROUP BY FirstName
ORDER BY TotalNome DESC;

--Selecionando os produtos e as suas médias de preços
SELECT Name , AVG(ListPrice) AS MediaPreco
FROM Production.Product
WHERE Color = 'Silver'
GROUP BY Name;

/*
DESAFIOS
*/

--1) Quantas pessoas tem o mesmo sobrenome, agrupados pelo sobrenome
SELECT MiddleName, COUNT(MiddleName) AS TOTAL
FROM Person.Person
GROUP BY MiddleName
ORDER BY MiddleName ASC;

--2) Em média qual é a quantidade que cada produto é vendido na loja por pedido.
SELECT ProductID, AVG(OrderQty) AS QUANTIDADE
FROM Sales.SalesOrderDetail
GROUP BY ProductID
ORDER BY QUANTIDADE DESC;

--3)Qual foram as 10 vendas que no total tiveram os maiores valores de venda lineTotal por produto do maior para o menor
SELECT  ProductID, SUM(UnitPrice) TOTAL
FROM Sales.SalesOrderDetail
GROUP BY ProductID
ORDER BY TOTAL DESC;

--4) Quantos produtos e qual a quantidade média dos produtos que temos cadastrados nas nossas ordem de seviços, agrupados por productID
SELECT ProductID, 
COUNT(ProductID) AS Total,
AVG(OrderQty) AS Media
FROM Production.WorkOrder
GROUP BY ProductID;





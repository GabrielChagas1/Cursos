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




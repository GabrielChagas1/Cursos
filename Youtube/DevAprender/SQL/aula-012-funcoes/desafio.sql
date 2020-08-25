use AdventureWorks2017;

--Trazendo a soma de uma coluna do SQL
SELECT SUM(LineTotal) as soma
FROM Sales.SalesOrderDetail;

--Trazendo a média de coluna do SQL
SELECT TOP 10 AVG(LineTotal) as total
FROM Sales.SalesOrderDetail;

--Trazendo o valor máximo de uma coluna do SQL
SELECT TOP 10 MAX(LineTotal) as "MAXIMO"
FROM Sales.SalesOrderDetail;

--Trazendo o valor mínimo de uma coluna do SQL
SELECT TOP 10 MIN(LineTotal) as "MINIMO"
FROM Sales.SalesOrderDetail;

SELECT
MAX (LineTotal) as "MAXIMO",
MIN (LineTotal) as "MINIMO",
SUM (LineTotal) as "TOTAL",
AVG (LineTotal) as "MEDIA"
FROM Sales.SalesOrderDetail;

SELECT TOP 10 *
FROM Sales.SalesOrderDetail 
WHERE LineTotal = 1.374000

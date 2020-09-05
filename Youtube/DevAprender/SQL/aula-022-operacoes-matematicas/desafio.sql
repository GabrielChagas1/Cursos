--divindo os valores de uma linha
SELECT UnitPrice / LineTotal
FROM Sales.SalesOrderDetail;

--multiplicando os valores de uma linha
SELECT UnitPrice * LineTotal
FROM Sales.SalesOrderDetail

--somando os valores de uma linha
SELECT UnitPrice + LineTotal
FROM Sales.SalesOrderDetail;

--subtraindo os valores de uma linha
SELECT UnitPrice - LineTotal
FROM Sales.SalesOrderDetail;

--arredondando os valores
SELECT ROUND(LineTotal, 2)
FROM Sales.SalesOrderDetail;

--raiz quadrada de uma linha
SELECT SQRT(LineTotal)
FROM Sales.SalesOrderDetail;
--Trazendo todas as ordem de vendas do mês atual
SELECT SalesOrderID, DATEPART(DAY, OrderDate) AS Dia, DATEPART(MONTH, OrderDate) AS Mês, DATEPART(YEAR, OrderDate) AS Ano
FROM Sales.SalesOrderHeader
WHERE DATEPART(MONTH, OrderDate) = DATEPART(MONTH, GETDATE())
ORDER BY Mês ASC;

--Trazendo a média dos valores que precisam ser pagos mensalmente
SELECT DATEPART(MONTH, OrderDate) AS Mês, AVG(TotalDue) AS Média
FROM Sales.SalesOrderHeader
GROUP BY DATEPART(MONTH, OrderDate)
ORDER BY Mês ASC;

--Trazendo a médio dos valores que precisam ser pagos diáriamente junto com o mês correspondente
SELECT DATEPART(DAY, OrderDate) AS DIA, DATEPART(MONTH, OrderDate) AS MES, AVG(TotalDue) AS MEDIA
FROM Sales.SalesOrderHeader
GROUP BY DATEPART(DAY, OrderDate), DATEPART(MONTH, OrderDate)
ORDER BY MES, DIA;





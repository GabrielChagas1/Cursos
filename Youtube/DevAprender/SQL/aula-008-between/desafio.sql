--Selecionando os produtos que os preços estejam entre 1000 e 1500
SELECT *
FROM Production.Product
WHERE ListPrice between 1000 and 1500;

--Selecionando os produtos que o id esteja entre 1 e 500
SELECT * 
FROM Production.Product
WHERE ProductID BETWEEN 1 AND 500;

--Selecionando os empregados que foram cadastrados entre 2009 e 2010
SELECT *
FROM HumanResources.Employee
WHERE HireDate BETWEEN '2009/01/01' AND '2010/01/01' ORDER BY HireDate ASC;
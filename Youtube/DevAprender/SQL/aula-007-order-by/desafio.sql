use AdventureWorks2017;

--Selecionando os 100 primeiros nomes que sejam distintos em ordem descrescente
SELECT DISTINCT TOP 100 FirstName 
FROM Person.Person
ORDER BY FirstName DESC;

--Selecionando os 100 primeiros registros em que o nome seja em ordem descrescente e o sobrenome em ordem crescente
SELECT TOP 100 FirstName, LastName
FROM Person.Person
ORDER BY FirstName DESC, LastName ASC;

--Desafios

/*
Desafio 1
--Obter o productId dos 10 produtos mais caros cadastrados no sistema, listando do mais caro para o mais barato
*/

SELECT TOP 10 ProductID, ListPrice	
FROM Production.Product 
ORDER BY ListPrice DESC;

/*
Desafio 2
--Obter o nome e número do produto dos produtos que tem o productID entre 1 e 4
*/

SELECT TOP 4 Name, ProductNumber
FROM Production.Product ORDER BY ProductID ASC

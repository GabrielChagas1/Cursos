use AdventureWorks2017;

--Selecionando os 100 primeiros nomes que sejam distintos em ordem descrescente
SELECT DISTINCT TOP 100 FirstName 
FROM Person.Person
ORDER BY FirstName DESC;

--Selecionando os 100 primeiros registros em que o nome seja em ordem descrescente e o sobrenome em ordem crescente
SELECT TOP 100 FirstName, LastName
FROM Person.Person
ORDER BY FirstName DESC, LastName ASC;
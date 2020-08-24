--Selecionando todas as pessoas que o BusinessEntityID esteja entre os valores (2, 7 e 12)
SELECT * 
FROM Person.Person
WHERE BusinessEntityID IN (2, 7, 12);
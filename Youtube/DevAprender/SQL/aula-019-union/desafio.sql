USE AdventureWorks2017;

--Traz os registros que tenham as strings "decal" e "caps" no nome
SELECT ProductID, Name, ProductNumber
FROM Production.Product
WHERE Name like '%decal%'
UNION
SELECT ProductID, Name, ProductNumber
FROM Production.Product
WHERE Name like '%Caps%';

--Trazendo as pessoas que tenho o título de Mr e pessoas que tenham o sobrenome como A.
SELECT FirstName, Title, MiddleName
FROM Person.Person
WHERE Title = 'Mr.'
UNION ALL
SELECT FirstName, Title, MiddleName
FROM Person.Person
WHERE MiddleName = 'A'

--Trazendo os produtos que começam com a palavra "TOURING" e terminando em "TIRE"
SELECT Name, ProductNumber
FROM Production.Product
WHERE Name like 'Touring%'
UNION
SELECT Name, ProductNumber
FROM Production.Product
WHERE Name like '%Tire'

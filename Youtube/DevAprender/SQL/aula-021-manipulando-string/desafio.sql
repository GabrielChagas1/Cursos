use AdventureWorks2017;

--Concatenando o primeiro nome com o último
SELECT CONCAT(FirstName, ' ', LastName) AS "Nome Completo"
FROM Person.Person;

--Deixando a palavra toda maíscula e miníscula
SELECT UPPER(FirstName), LOWER(FirstName)
FROM Person.Person;

--Retornando os caracteres do primeiro nome
SELECT FirstName, LEN(FirstName) AS "Total de Caracteres"
FROM Person.Person;

--pegando partes de uma string
SELECT FirstName, SUBSTRING(FirstName, 1, 3) AS "Apelido"
FROM Person.Person

--substituindo um caractere de uma string por outra
SELECT REPLACE(ProductNumber, '-', '#')
FROM Production.Product;


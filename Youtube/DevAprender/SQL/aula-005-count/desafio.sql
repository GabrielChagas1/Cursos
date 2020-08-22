use AdventureWorks2017;

--Trazendo todos os títulos distintos
SELECT COUNT(DISTINCT Title) FROM Person.Person

/*
--DESAFIOS
*/


-- 1)Eu quero saber quantos produtos temos cadastrados em nossa tabela de produtos(production.product)
SELECT COUNT(*)
FROM Production.Product;

-- 2)Eu quero saber quantos tamanhos de produtos temos cadastrados em nossa tabela de produtos(production.product)
SELECT COUNT (Size)
FROM Production.Product;

-- 3)Eu quero saber quantos tamanhos de produtos temos cadastrados em nossa tabela de produtos(production.product)
SELECT COUNT(DISTINCT Size)
FROM Production.Product;
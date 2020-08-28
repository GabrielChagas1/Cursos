--BusinessEntityId, FirstName, LastName, EmailAddress
SELECT P.BusinessEntityID, P.FirstName, P.LastName, E.EmailAddress
FROM Person.Person P 
INNER JOIN Person.EmailAddress E
ON P.BusinessEntityID = E.BusinessEntityID
ORDER BY P.BusinessEntityID ASC;

--Queremos os nomes dos produtos e as informações de suas subcategorias
--ListPrice, Nome do produto, nome da subcategoria.

SELECT TOP 10 *
FROM Production.Product;

SELECT TOP 10 *
FROM Production.ProductSubcategory;

SELECT P.Name, P.ListPrice, PS.Name AS "Nome da Subcategoria"
FROM Production.Product P
INNER JOIN Production.ProductSubcategory PS
ON P.ProductSubcategoryID = PS.ProductSubcategoryID;

/*
Desafios
*/

--Fazer o join e trazer as colunas BusinessEntityId, Name, PhoneNumberTypeId, PhoneNumber
SELECT PP.BusinessEntityID, PN.Name, PN.PhoneNumberTypeID, PP.PhoneNumber 
FROM Person.PersonPhone PP
INNER JOIN Person.PhoneNumberType PN
ON PP.PhoneNumberTypeID = PN.PhoneNumberTypeID;

--Fazer o join e trazer as colunas AddressId, City, StateProvinceId, Nome do estado
SELECT A.AddressID, A.City AS "Cidade", S.StateProvinceID, S.Name AS "Estado"
FROM Person.Address A
INNER JOIN Person.StateProvince S
ON A.StateProvinceID = S.StateProvinceID;






--trazendo todos os registros que começam com el
SELECT *
FROM Person.Person
WHERE FirstName LIKE 'el%';

--trazendo todos os registros que terminam com el
SELECT *
FROM Person.Person
WHERE FirstName LIKE '%el';

--trazendo todos os registros que contêm o el
SELECT *
FROM Person.Person
WHERE FirstName LIKE '%el%';

--trazendo todos os registros que contêm apenas um caractere após o el
SELECT *
FROM Person.Person
WHERE FirstName LIKE '%el_';
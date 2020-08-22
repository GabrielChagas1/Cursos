/*
OPERADORES

	igual            = 
    maior que        >
    menor que        <
    maior ou igual   >=
    menor ou igual   <=
    diferente de     <>
    E                AND
    OU               OR 

*/

--trazendo os registros que o nome seja miller e o sobrenome anna
SELECT * 
FROM Person.Person
WHERE LastName = 'miller' 
AND FirstName = 'anna';

--trazendo todos os produtos que a cor seja azul ou preto
SELECT * 
FROM Production.Product
WHERE Color = 'Blue' 
OR Color = 'Black';

--trazendo todos os produtos que a cor seja diferente de vermelho e ordenando pela cor
SELECT *
FROM Production.Product
WHERE Color <> 'Red' ORDER BY Color;


/*
DESAFIO 1
A equipe de produção de produtos precisa do nome de todas as peças que pesam mais que 500kg
mas não mais que 700kg para inspeção
*/
SELECT Name 
FROM Production.Product
WHERE Weight > 500 
AND
Weight < 700

/*
DESAFIO 2
Foi pedido pelo marketing uma relação de todos os empregados(employees) que são casados e são assalariados
*/
SELECT * 
FROM HumanResources.Employee
WHERE MaritalStatus = 'm' 
AND SalariedFlag = 1;

/*
DESAFIO 3
Um usuário chamado Peter Krebs está devendo um pagamento, 
consiga o e-mail dele para que possamos enviar uma cobrança
*/

SELECT e.EmailAddress
FROM Person.Person AS p
JOIN Person.EmailAddress as e
ON p.BusinessEntityID = e.BusinessEntityID
WHERE p.FirstName = 'peter'
AND p.LastName = 'krebs'







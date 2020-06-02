import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);


// indica em que porta a aplicação será executada
app.listen(3333);



// função get recebe os parâmetros que indicam a rota e a função que é executada nessa rota, que também contém dois parâmetros
// request: obter dados da requisição
// response: devolver a respota para quem consumir os dados (navegador, etc);

// Recurso: Qual a entidade estamos acessando do sistemas (localhost:3333/users);

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Request Body: Parâmetros para criação/atualização de informações
// Query Param: Parâmetros opcionais, que vem na própria rota para filtros, paginações etc.

// Return server para parar a aplicação senão ele vai executar o que tem após a função
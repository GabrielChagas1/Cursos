import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import { router } from './routes';

// criando a conexão com o banco de dados
createConnection();

// criando uma variavel que tem acesso ao métodos do express
const app = express();

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

// usando as routas que estão dentro do arquivo de routes
app.use(router)

export {app}
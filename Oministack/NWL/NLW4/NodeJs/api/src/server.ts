import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

// usando as routas que estão dentro do arquivo de routes
app.use(router)

// abrindo uma conexão para o servidor.
app.listen(3333, () => console.log("Server is running!"));
import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import "./database";

const app = express();

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

app.use(router);

// subindo o servidor na porta 3000
app.listen(3000, () => console.log('Server is running: http://localhost:3000'));

/**
 * GET => Buscar uma informação
 * POST => Inserir uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH => Alterar uma informação específica
 */

/**
 * Routes params => parâmetros passados pela rota
 * 
 * Query Params => parâmetros que fazem parte de uma query (produtos?name=teclado&description=redragon)
 * 
 * Body Params => parâmetros que vão no corpo da requisição
 * 
 */





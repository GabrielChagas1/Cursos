import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./database";

const app = express();

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

app.use(router);

// middleware para erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });


});

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





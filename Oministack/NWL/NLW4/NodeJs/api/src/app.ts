import 'reflect-metadata';
import express, { NextFunction } from 'express';
import "express-async-errors"
import createConnection from './database';
import { router } from './routes';
import { appError } from './errors/appError';
import {Request, Response} from 'express'

// criando a conexão com o banco de dados
createConnection();

// criando uma variavel que tem acesso ao métodos do express
const app = express();

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

// usando as routas que estão dentro do arquivo de routes
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof appError) {
        return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`
    })
})

export {app}
import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

/* 
GET => Busca
POST => Salvar
PUT => Alterar
DELETE => Deletar
PATCH => alteração específica
*/

/*
    1 param => Rota(Recurso API)
    2 param => Request, response (req, res)
*/

// criando uma rota de get
app.get('/', (req, res) =>{
    return res.json({message: 'Hello World - NLW#04'});
});

app.post('/', (req, res) =>{
    return res.json({message: 'Os dados foram salvos com sucesso!'});
});

app.listen(3333, () => console.log("Server is running!"));
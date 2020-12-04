// Incluindo a dependência express
const express = require('express');

const app = express();

const mongoose = require('mongoose');

app.use(express.json());


// Routes

app.post('/orcamento', async (req, res) =>{
    console.log(req.body);
    res.send('req.params.nam');
});

app.post('')

app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080 http://localhost:8080');
});
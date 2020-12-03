// Incluindo a dependência express
const express = require('express');

const app = express();


// Routes

app.get('/orcamento', (req, res) =>{
    res.send('Orçamentos');
});

app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080 http:localhost:8080');
});
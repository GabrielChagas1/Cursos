// Incluindo a dependência express
const express = require('express');

const app = express();

app.use(express.json());


// Routes

app.get('/orcamento', async (req, res) =>{
    console.log(req.body);
    res.send('Orçamentos 2');
});

app.post('')

app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080 http:localhost:8080');
});
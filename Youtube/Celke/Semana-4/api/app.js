// Incluindo a dependência express
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// deixando nosso projeto interagir com dados json
app.use(express.json());

// conectando na base de dados
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});


// Routes
app.post('/orcamento', async (req, res) =>{
    console.log(req.body);
    res.send('req.params.nam');
});

app.post('')

app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080 http://localhost:8080');
});
import express from 'express';

const app = express();

// função get recebe os parâmetros que indicam a rota e a função que é executada nessa rota, que também contém dois parâmetros
// request: obter dados da requisição
// response: devolver a respota para quem consumir os dados (navegador, etc)
app.get('/users', (req, res) =>{
    console.log('listagem');

    res.json([
        'Diego',
        'Gabriel',
        'Grealish',
        'Norwood',
        'Henderson',
        'Sheap'
    ]);
});

// indica em que porta a aplicação será executada
app.listen(3333);
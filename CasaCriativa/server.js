const express = require('express');

const server = express();

const db = require('./db');


// const ideas = [
//     {
//         img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
//         title: "Cursos de Programação",
//         category: "Estudo",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis corporis voluptatem, quo placeat vel, perferendis accusantium, libero perspiciatis vitae rerum modi voluptas obcaecati rem? Assumenda dolore iste obcaecati in saepe.",
//         url: "https://rocketseat.com.br",
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
//         title: "Exercícios",
//         category: "Saúde",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis corporis voluptatem, quo placeat vel, perferendis accusantium, libero perspiciatis vitae rerum modi voluptas obcaecati rem? Assumenda dolore iste obcaecati in saepe.",
//         url: "https://rocketseat.com.br",
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
//         title: "Meditação",
//         category: "Mentalidade", 
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis corporis voluptatem, quo placeat vel, perferendis accusantium, libero perspiciatis vitae rerum modi voluptas obcaecati rem? Assumenda dolore iste obcaecati in saepe.",
//         url: "https://rocketseat.com.br",
//     },
// ]


// configurar arquivos estáticos
server.use(express.static('public'));

// configurando o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: server,
    noCache: true,
});


server.get('/', (req, res) =>{

     // consultar dados da tabela
    db.all(`SELECT * FROM ideias`, (err, rows) =>{
        if(err) return console.log(err);

        const reversedIdeas = [...rows].reverse();
        let lastIdeas = [];
        for(let idea of reversedIdeas){
            if(lastIdeas.length < 2){
                lastIdeas.push(idea);
            }
        }

        return res.render('index.html', {ideas: reversedIdeas});
    });

    
}); 

server.get('/ideias', (req, res) =>{
    db.all(`SELECT * FROM ideias`, (err, rows) =>{
        const reversedIdeas = [...rows].reverse();
        return res.render('ideias.html', {ideas: reversedIdeas});
    });
}); 

// ligando o servidor.
server.listen(3000);
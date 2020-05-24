const express = require('express');

const server = express();

const db = require('./db');

// configurar arquivos estáticos
server.use(express.static('public'));

// configurando o req.body
server.use(express.urlencoded({extended: true}));

// configurando o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: server,
    noCache: true,
});


server.get('/', (req, res) =>{

     // consultar dados da tabela
    db.all(`SELECT * FROM ideias`, (err, rows) =>{
        if(err){
            console.log(err);
            return res.send('Erro no banco de dados');
        }

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
        if(err){
            console.log(err);
            return res.send('Erro no banco de dados');
        }

        const reversedIdeas = [...rows].reverse();
        return res.render('ideias.html', {ideas: reversedIdeas});
    });
}); 

server.post('/', (req, res) =>{
  console.log(req.body);

    if(checkField(req.body)){
        // inserir dados na tabela
        const query = `
        INSERT INTO ideias(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?, ?, ?, ?, ?);`;

        const values = [
            req.body.image,
            req.body.title,
            req.body.category,
            req.body.description, 
            req.body.link
        ]
        db.run(query, values, (err) =>{
            if(err){
                console.log(err);
                return res.send('Erro no banco de dados');
            };

            return res.redirect('/ideias');

        });
    }else{
        return res.send('Por favor preencher todos os dados');
    }
});

function checkField(body){
    if(
        body.image == '' || 
        body.title == '' ||
        body.category == '' ||
        body.description == '' ||
        body.link == '' 
    ) return false;
    else true;
}


// ligando o servidor.
server.listen(3000);
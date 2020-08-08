const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

// configurando arquivos estáticos (css, js, img)
server.use(express.static("public"))
    // receber dados do req.body
    .use(express.urlencoded({extended: true}))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post('/save-classes', saveClasses)   
.listen(8000)
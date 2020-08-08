const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

// configurando arquivos estáticos (css, js, img)
server.use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses).listen(8000)
const proffys = [{
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89996889",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],


}]

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// função que vai ser executada ao ser chamada a / 
function pageLanding(req, res) {
    return res.render("index.html");
}

// função que vai ser executada ao ser chamada a page de study
function pageStudy(req, res) {
    const proffys = [{
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89996889",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220],


    }, 
    {
        name: "Gabriel Chagas",
        avatar: "https://avatars1.githubusercontent.com/u/36548770?s=460&v=4",
        whatsapp: "89996889",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Skate",
        cost: "40,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    }];
    return res.render("study.html", {
        proffys: proffys
    });
}

// função que vai ser executada ao ser chamada a page de give classes
function pageGiveClasses(req, res) {

    return res.render("give-classes.html");
}


// configurando arquivos estáticos (css, js, img)
server.use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses).listen(8000)
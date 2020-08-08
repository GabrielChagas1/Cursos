const {subjects, weekDays, getSubject} = require('./utils/format');
// função que vai ser executada ao ser chamada a / 
function pageLanding(req, res) {
    return res.render("index.html");
}

// função que vai ser executada ao ser chamada a page de study
function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekDays
    });
}

// função que vai ser executada ao ser chamada a page de give classes
function pageGiveClasses(req, res) {

    const data = req.query;
    const isNotEmpty = Object.keys(data).length > 0; 

    // se tiver dados ele insere na lista de proffys
    if(isNotEmpty){
        data.subject = getSubject(data.subject);

        proffys.push(data);
        return res.redirect("/study");
    }

    // senão mostrar a página
    return res.render("give-classes.html", {
        subjects,
        weekDays
    });
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}
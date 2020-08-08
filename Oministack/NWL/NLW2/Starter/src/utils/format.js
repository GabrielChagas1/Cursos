// array com as matérias
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
    
]

// array com os dias da semana
const weekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// função para recupera o dia da semana
function getSubject(subjectId){
    const arrayPosition = +subjectId -1;
    return subjects[arrayPosition]
}


function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(':');

    return Number((hour * 60)) + minutes
}

module.exports = {
    subjects,
    weekDays,
    getSubject,
    convertHoursToMinutes
}
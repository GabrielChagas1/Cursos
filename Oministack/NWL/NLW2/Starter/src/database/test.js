// importando o db para esse arquivo
const Database = require('./db');

const createProffy = require('./createProffy');

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89996889",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    };

    classValue = {
        subject: "Química",
        cost: "20",
       
    }

    classScheduleValues = [
        // class_id virá pelo banco após cadastrar a class
        {
            weekday: [0],
            time_from: [720],
            time_to: [1220],
            // o proffy virá pelo banco de dados
        },
        {
            weekday: [1 ],
            time_from: [520],
            time_to: [1020],
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar dados
    
    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);

    // consultar as classes de um determinado professor e trazer seus dados juntos
    const selectedClassesProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);
    // console.log(selectedClassesProffys);

    // consultar as classes e as class_schedule de um determinado professor
    


})
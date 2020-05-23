const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(() =>{
    // criar a tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideias(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         link TEXT
    //     );
    // `);

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
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis corporis voluptatem, quo placeat vel, perferendis accusantium, libero perspiciatis vitae rerum modi voluptas obcaecati rem? Assumenda dolore iste obcaecati in saepe.",
        "https://rocketseat.com.br",
    ]
    // db.run(query, values, (err) =>{
    //     if(err) return console.log(err);

    //     console.log(this);
    // });

    // deletar um dado da tabela
    // db.run(`
    //     DELETE FROM ideias WHERE id = ?;
    // `, [1], (err) =>{
    //     if(err) return console.log(err);

    //     console.log(this);
    // });

});

module.exports = db;
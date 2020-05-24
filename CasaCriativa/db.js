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

    

    // deletar um dado da tabela
    // db.run(`
    //     DELETE FROM ideias WHERE id = ?;
    // `, [1], (err) =>{
    //     if(err) return console.log(err);

    //     console.log(this);
    // });

});

module.exports = db;
const Database = require('sqlite-async');

// abrindo a conexão com o banco de dados
Database.open(__dirname + '/database.sqlite').then(execute);

function execute(db) {
    db.exec(`
    CREATE TABLE IF NOT EXISTS proffys(
        id INTEGER
        
    );
`)
}
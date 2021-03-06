const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curso_nodejs'
});

let cidade = 'Santos';

let sqlStatement = `
    SELECT p.nome AS Pessoa, c.nome AS Cidade, c.estado AS Estado
    FROM pessoas p
    INNER JOIN cidades c on c.id = p.cidade
    WHERE c.nome = "${cidade}"
`;

con.connect((err) =>{
    if(err) throw err;

    con.query(sqlStatement, (err, result, fields) => {
        if(err) throw err;

        console.log(result[0]);
       
        con.end();

    })
})
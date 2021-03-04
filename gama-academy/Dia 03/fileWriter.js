const fs = require('fs');

const text = "Curso de Node.js";

const file = fs.writeFile('./curso.txt', text, () =>{
    console.log('Escrita conclida')
})
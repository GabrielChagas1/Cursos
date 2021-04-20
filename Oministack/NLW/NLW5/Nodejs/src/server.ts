import express from 'express';

// importando o database
import "./database";

const app = express();

app.listen(3333, () => console.log('Server running on http://localhost:3333'));

app.get('/', (req, res) =>{
  // res.send('Hello World');
  return res.json({message: "Olá NLW 05!"})
});

app.post('/', (req, res) =>{
  return res.json({
    message: 'Usuário cadastrado com sucesso!'
  });
})
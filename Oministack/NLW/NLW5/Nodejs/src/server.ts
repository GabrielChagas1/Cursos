import express from 'express';

// importando o database
import "./database";

const app = express();

app.listen(3333, () => console.log('Server running on http://localhost:3333'));

app.get('/', (req, res) =>{
  // res.send('Hello World');
  return res.json({message: "Olá NLW 05!"})
});

// iniciando o servidor
app.listen(3333, () => console.log('Server running on http://localhost:3333'));
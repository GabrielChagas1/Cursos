import express from 'express';

const app = express();

app.listen(3333, () => console.log('Server running on http://localhost:3333'));

app.get('/', (req, res) =>{
  // res.send('Hello World');
  res.json({message: "Olá NLW 05!"})
})
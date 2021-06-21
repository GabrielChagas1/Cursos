import express, { Request, Response } from "express";

const app = express();


app.get('/', (req, res) =>{
  res.send('Hello World');
});

app.post('/teste-post', (req, res) => {
  res.send('Hello World')
})


// subindo o servidor na porta 3000
app.listen(3000, () => console.log('Server is running: http://localhost:3000'));
import express from 'express';

import {routes} from './routes';

// importando o database
import "./database";

const app = express();

// habilitando o nosso projeto a trabalhar com json
app.use(express.json())

// linkando as rotas criadas
app.use(routes);

// iniciando o servidor
app.listen(3333, () => console.log('Server running on http://localhost:3333'));
import express from 'express';
import {routes} from './routes';
import {createServer} from "http";
import{Server, Socket} from "socket.io"

// importando o database
import "./database";

const app = express();
// criando protocolo http
const http = createServer(app);

// criando protocolo de web socket
const io = new Server(http);

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

// linkando as rotas criadas
app.use(routes);

// iniciando o servidor
app.listen(3333, () => console.log('Server running on http://localhost:3333'));
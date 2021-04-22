import express from 'express';
import {routes} from './routes';
import {createServer} from "http";
import{Server, Socket} from "socket.io";
import path from "path";

// importando o database
import "./database";

const app = express();

// definindo os arquivos publicos da aplicação
app.use(express.static(path.join(__dirname, "..", "public")));

app.set("views", path.join(__dirname, "..", "public"));

// setando html para a view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) =>{
  return res.render("html/client.html");
})

// criando protocolo http
const http = createServer(app);

// criando protocolo de web socket
const io = new Server(http);

io.on("connection", (socket: Socket) =>{
  console.log(`Socket: ${socket.id}`)
})

// habilitando o nosso projeto a trabalhar com json
app.use(express.json());

// linkando as rotas criadas
app.use(routes);

export {http, io}
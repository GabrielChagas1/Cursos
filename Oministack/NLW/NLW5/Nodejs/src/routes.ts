  
import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

//criando um objeto controller de settings 
const settingsController = new SettingsController();

// criando um objeto controller para users
const usersController = new UsersController();

// criando um objeto controller para messages
const messagesController = new MessagesController();

// rota para cadastrar um settings
routes.post("/settings",settingsController.create);

// rota para cadastrar um usuário
routes.post("/users", usersController.create);

// rota pra uma message
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };

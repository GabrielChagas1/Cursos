  
import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

//criando um objeto controller de settings 
const settingsController = new SettingsController();

// criando um objeto controller para users
const usersController = new UsersController();

// rota para cadastrar um settings
routes.post("/settings",settingsController.create);

// rota para cadastrar um usuário
routes.post("/user", usersController.create)

export { routes };

  
import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

//criando um objeto controller de settings 
const settingsController = new SettingsController

// rota para cadastrar um settings
routes.post("/settings",settingsController.create);

export { routes };

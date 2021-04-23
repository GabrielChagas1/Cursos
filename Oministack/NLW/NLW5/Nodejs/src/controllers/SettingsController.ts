import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { SettingsService } from '../services/SettingsService';

class SettingsController{
  async create(req: Request, res: Response){
    
    // recuperando os dados que vem da requisição
    const {username, chat} = req.body;
    
    // criando um objeto do settingsService
    const settingsService = new SettingsService();

    try {
      // utilizando o create para persistir os dados no banco de dados
      const settings = await settingsService.create({username, chat})

      // retornando o settings criado
      return res.json(settings);

    } catch (err) {
      return res.status(400).json({
        message: err.message
      });
    }
    
  }

  async findByUsername(req: Request, res: Response){
    const {username} = req.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return res.json(settings);
  }

  async update(req: Request, res: Response){
    const {username} = req.params;
    const {chat} = req.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return res.json(settings);
  }
}

export { SettingsController }
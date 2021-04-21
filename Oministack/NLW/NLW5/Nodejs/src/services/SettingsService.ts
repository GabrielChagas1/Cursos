import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

// Interface para o settings
interface ISettingsCreate{
  username: string;
  chat: boolean;
}

class SettingsService{
  async create({username, chat} : ISettingsCreate){

    //recuperando o repository do settings
    const settingsRepository = getCustomRepository(SettingsRepository);

    // verificando se o usuário já existe
    const userAlreadyExists = await settingsRepository.findOne({username});

    // se o usuário existir ele retorna um erro
    if(userAlreadyExists){
      throw new Error("User already exists!");
    }

    // criando o objeto settings para persistir no banco de dados
    const settings = settingsRepository.create({
      username,
      chat
    });

    // Salvando no banco 
    await settingsRepository.save(settings);

    // retornando settings
    return settings;
  }
}

export {SettingsService}
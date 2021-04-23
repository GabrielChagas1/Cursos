import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

// Interface para o settings
interface ISettingsCreate{
  username: string;
  chat: boolean;
}

class SettingsService{

  private settingsRepository: Repository<Setting>

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({username, chat} : ISettingsCreate){

    // verificando se o usuário já existe
    const userAlreadyExists = await this.settingsRepository.findOne({username});

    // se o usuário existir ele retorna um erro
    if(userAlreadyExists){
      throw new Error("User already exists!");
    }

    // criando o objeto settings para persistir no banco de dados
    const settings = this.settingsRepository.create({
      username,
      chat
    });

    // Salvando no banco 
    await this.settingsRepository.save(settings);

    // retornando settings
    return settings;
  }

  async findByUsername(username: string){
    const settings = await this.settingsRepository.findOne({username});
    return settings;
  }

  async update(username: string, chat:boolean){
    const settings = await this.settingsRepository.createQueryBuilder().update(Setting).set({chat}).where("username = :username",{
      username
    }).execute();
  }


}

export {SettingsService}
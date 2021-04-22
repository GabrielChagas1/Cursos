import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"


class UserService{

  private usersRepository: Repository<User>

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create(email: string){

    // verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({email});

    // se existir, retornar user
    if(userExists){
      return userExists;
    }
    
    // criando um objeto user
    const user = this.usersRepository.create({email});

    // persistindo o objeto user no banco de dados
    await this.usersRepository.save(user);

    // retornando o user
    return user;

  }
}

export {UserService}
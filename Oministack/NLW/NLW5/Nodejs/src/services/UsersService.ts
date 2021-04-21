import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UserService{
  async create(email: string){

    const usersRepository = getCustomRepository(UsersRepository); 

    // verificar se o usuário existe
    const userExists = await usersRepository.findOne({email});

    // se existir, retornar user
    if(userExists){
      throw new Error("User already exists!");
    }
    
    // criando um objeto user
    const user = usersRepository.create({email});

    // persistindo o objeto user no banco de dados
    await usersRepository.save(user);

    // retornando o user
    return user;

  }
}

export {UserService}
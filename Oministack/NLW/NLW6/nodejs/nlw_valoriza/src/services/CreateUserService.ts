import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean
}

class CreateUserService{
  async execute({name, email, admin} : IUserRequest){

    // criando uma instância do repositório de users
    const usersRepository = getCustomRepository(UsersRepositories);

    // se o email não existir é devolvido um erro
    if(!email)
      throw new Error("Email incorrect");

    // verificando se existe um usuário com o email recebido
    const userAlreadyExists = await usersRepository.findOne({email});

    // se já existir um user é retornado um erro
    if(userAlreadyExists)
      throw new Error("User already exists");

    
    // senão é criado um repositórios com as informações recebidas
    const user = usersRepository.create({
      name,
      email,
      admin
    });

    // é persistido no banco dados as informações
    await usersRepository.save(user);

    // retorna as informações que foram preechidas
    return user;

  }
}

export {CreateUserService}
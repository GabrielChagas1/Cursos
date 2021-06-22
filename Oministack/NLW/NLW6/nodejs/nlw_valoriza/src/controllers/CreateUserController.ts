import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController{
  async handle(request: Request, response: Response){
    // recuperando os valores que chegam do body da aplicação
    const { name, email, admin} = request.body; 

    // instanciando um objeto do user service
    const createUserService = new CreateUserService();

    // utilizando o método execute para criar um novo usuário
    const user = await createUserService.execute({name, email, admin});

    // retornando os dados cadastrados
    return response.json(user);
  }
}

export {CreateUserController}
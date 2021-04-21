import {Request, Response} from "express";
import { UserService } from "../services/UsersService";


class UsersController {
  async create(req: Request, res: Response){
    // recuperando os dados que vem da requisição
    const {email} = req.body; 

    // criando um objeto do service do user
    const userService = new UserService();

   try {
    // chamando o método create para persistir um user no banco de dados
    const user = await userService.create(email);

    // retornando o usuário criado
    return res.json(user);

   } catch (err) {
     return res.status(400).json({
       message: err.message
     })
   }

  }
}

export {UsersController}
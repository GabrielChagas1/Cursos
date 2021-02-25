import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController{
    async create(req: Request, res: Response){
        const {name, email} = req.body;

        // criando um repositório de um usuário
        const usersRespository = getCustomRepository(UsersRepository);

        // verificando se existe um usuário já cadastrado com aquele email
        const userAlreadyExists = await usersRespository.findOne({ email });

        // se já existir, ele retorna uma mensagem de erro.
        if(userAlreadyExists)
            return res.status(400).json({
                error: "User already exists"
            });
        
        //se não exisitr ele cria um novo usuário passando o nome e email 
        const user = usersRespository.create({
            name, email
        });

        // usando o ORM para salvar no banco de dados.
        await usersRespository.save(user);

        // retornando em json o usuário cadastrado.
        return res.status(201).json(user);

    }
}

export { UserController };

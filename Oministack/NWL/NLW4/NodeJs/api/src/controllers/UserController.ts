import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UsersRespository";
import { appError } from "../errors/appError";
import * as yup from 'yup';

class UserController{
    async create(req: Request, res: Response){
        const {name, email} = req.body;

        // criando o schema do objeto
        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigatório"),
            email: yup.string().email("Formato de email inválido").required("Email é obrigatório")
        });

        // validando nosso schema
        try {
            await schema.validate(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({error: err })
        }



        // criando um repositório de um usuário
        const usersRespository = getCustomRepository(UsersRespository);

        // verificando se existe um usuário já cadastrado com aquele email
        const userAlreadyExists = await usersRespository.findOne({ email });

        // se já existir, ele retorna uma mensagem de erro.
        if(userAlreadyExists)
            throw new appError("User already exists")
        
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

import {resolve} from 'path';
import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UsersRespository";
import { SurveysRespository } from "../repositories/SurveysRespository";
import { SurveysUsersRespository } from "../repositories/SurveysUsersRespository";
import SendMailService from '../services/SendMailService';
import { appError } from '../errors/appError';


class SendMailController{
    async execute(req: Request, res: Response){
        const {email, survey_id} = req.body;
        const usersRespository = getCustomRepository(UsersRespository);
        const surveysRespository = getCustomRepository(SurveysRespository);
        const surveysUsersRespository = getCustomRepository(SurveysUsersRespository);

        // verificando se o user existe, senão ele retorna um erro
        const user = await usersRespository.findOne({ email });
        if(!user){
            throw new appError("User does not exist");
        }
            
        // verificando se o survey existe, senão ele retorna um erro   
        const survey = await surveysRespository.findOne({ id: survey_id });
        if(!survey){
            throw new appError("Survey does not exist");
        }

    
        // recuperando o local que o meu handlebars está
        let npsPath = resolve(__dirname, "../", "views", "emails", "npsMail.hbs");

        // validando se já existe um cadastro com esse e-mail e id
        const surveyUserAlreadyExists = await surveysUsersRespository.findOne({ 
            where: {user_id: user.id, value: null},
            relations: ["user", "survey"]
        });

        //criando um objeto com diversos valores
        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            link: process.env.URL_MAIL,
            id: ""
        }

        // se já existir um usuário cadastrado ele dispara um e-mail
        if(surveyUserAlreadyExists){
            variables.id = surveyUserAlreadyExists.id
            await SendMailService.execute(email, survey.title, variables, npsPath);
            return res.json(surveyUserAlreadyExists);
        }
            
        // salvar informações no banco de dados
        const surveyUser = surveysUsersRespository.create({
            user_id: user.id,
            survey_id
        });

        await surveysUsersRespository.save(surveyUser);

         variables.id = surveyUser.id;

        // chamando o métod execute da nossa classe sendMailService
        await SendMailService.execute(email, survey.title ,variables, npsPath);

        // retornando o json se tudo ocorrer bem
        return res.json(surveyUser);
    }
}

export {SendMailController}
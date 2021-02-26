import {resolve} from 'path';
import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UsersRespository";
import { SurveysRespository } from "../repositories/SurveysRespository";
import { SurveysUsersRespository } from "../repositories/SurveysUsersRespository";
import SendMailService from '../services/SendMailService';


class SendMailController{
    async execute(req: Request, res: Response){
        const {email, survey_id} = req.body;
        const usersRespository = getCustomRepository(UsersRespository);
        const surveysRespository = getCustomRepository(SurveysRespository);
        const surveysUsersRespository = getCustomRepository(SurveysUsersRespository);

        // verificando se o user existe, senão ele retorna um erro
        const user = await usersRespository.findOne({ email });
        if(!user){
            return res.status(400).json({
                error: 'User does not exists',
            });
        }
            
        // verificando se o survey existe, senão ele retorna um erro   
        const survey = await surveysRespository.findOne({ id: survey_id });
        if(!survey){
            return res.status(400).json({
                error: 'Survey does not exists',
            });
        }

        //criando um objeto com diversos valores
        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            link: process.env.URL_MAIL,
            user_id: user.id
        }

        // recuperando o local que o meu handlebars está
        let npsPath = resolve(__dirname, "../", "views", "emails", "npsMail.hbs");

        // validando se já existe um cadastro com esse e-mail e id
        const surveyUserAlreadyExists = await surveysUsersRespository.findOne({ 
            where: [{user_id: user.id}, {value: null}],
            relations: ["user", "survey"]
        });

        // se já existir um usuário cadastrado ele dispara um e-mail
        if(surveyUserAlreadyExists){
            await SendMailService.execute(email, survey.title, variables, npsPath);
            return res.json(surveyUserAlreadyExists);
        }
            
        // salvar informações no banco de dados
        const surveyUser = surveysUsersRespository.create({
            user_id: user.id,
            survey_id
        });

        await surveysUsersRespository.save(surveyUser);

         

        // chamando o métod execute da nossa classe sendMailService
        await SendMailService.execute(email, survey.title ,variables, npsPath);

        // retornando o json se tudo ocorrer bem
        return res.json(surveyUser);
    }
}

export {SendMailController}
import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UsersRespository";
import { SurveysRespository } from "../repositories/SurveysRespository";
import { SurveysUsersRespository } from "../repositories/SurveysUsersRespository";


class SendMailController{
    async execute(req: Request, res: Response){
        const {email, survey_id} = req.body;
        const usersRespository = getCustomRepository(UsersRespository);
        const surveysRespository = getCustomRepository(SurveysRespository);
        const surveysUsersRespository = getCustomRepository(SurveysUsersRespository);

        // verificando se o user existe, senão ele retorna um erro
        const userAlreadyExists = await usersRespository.findOne({ email });
        if(!userAlreadyExists){
            return res.status(400).json({
                error: 'User does not exists',
            });
        }
            
        // verificando se o survey existe, senão ele retorna um erro   
        const surveysAlreadyExists = await surveysRespository.findOne({ id: survey_id });
        if(!userAlreadyExists){
            return res.status(400).json({
                error: 'Survey does not exists',
            });
        }
            
        // salvar informações no banco de dados
        const surveyUser = surveysUsersRespository.create({
            user_id: userAlreadyExists.id,
            survey_id
        });

        await surveysUsersRespository.save(surveyUser);

        return res.json(surveyUser);
    }
}

export {SendMailController}
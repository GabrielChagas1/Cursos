import { Request, Response } from 'express'
import { getCustomRepository, Not, IsNull } from 'typeorm';
import { SurveysUsersRespository } from '../repositories/SurveysUsersRespository';


class NpsController{
    async execute(request: Request, response: Response){
        let { survey_id} = request.params;

        let surveysUsersRespository = getCustomRepository(SurveysUsersRespository);

        let surveysUsers = await surveysUsersRespository.find({
            survey_id,
            value : Not(IsNull())
        });

        let detractor = surveysUsers.filter(
            (survey) => survey.value >= 0 && survey.value <=6
        ).length;

        let promoters = surveysUsers.filter(
            survey => survey.value >= 9 && survey.value <= 10
        ).length;

        let passive = surveysUsers.filter(
            survey => survey.value >= 7 && survey.value <= 8
        ).length;

        let totalAnswers = surveysUsers.length;

        let calculate = Number(
            (((promoters - detractor) / totalAnswers) * 100).toFixed(2)
        );

        return response.json({
            detractor, 
            promoters,
            passive,
            totalAnswers,
            nps: calculate
        })
         
    }
}

export {NpsController}
import { Request, Response, response } from 'express';
import { getCustomRepository } from 'typeorm';
import { appError } from '../errors/appError';
import { SurveysUsersRespository } from '../repositories/SurveysUsersRespository';

class AnswerController {
    async execute(request: Request, response: Response) {
      const { value } = request.params;
      const { u } = request.query;
  
      const surveysUsersRepository = getCustomRepository(SurveysUsersRespository);
  
      const surveyUser = await surveysUsersRepository.findOne({
        id: String(u),
      });
  
      if(!surveyUser){
          throw new appError("Survey User does not exists");
      }
  
      surveyUser.value = Number(value);
  
      await surveysUsersRepository.save(surveyUser);
  
      return response.json(surveyUser);
    }
  }
  
  export { AnswerController };
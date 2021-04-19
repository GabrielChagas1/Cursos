import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Surveys";

@EntityRepository(Survey)
class SurveysRespository extends Repository<Survey> {
    
}

export {SurveysRespository}
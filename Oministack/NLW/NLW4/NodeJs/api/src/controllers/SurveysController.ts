import {Request, response, Response} from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRespository } from "../repositories/SurveysRespository";

class SurveysController {
    async create(req: Request, res: Response){
        const {title, description} = req.body; 

        const surveysRespository = getCustomRepository(SurveysRespository);

        const surveys = surveysRespository.create({
            title,
            description
        });

        await surveysRespository.save(surveys);

        return res.status(201).json(surveys);
    }

    async show(req: Request, res: Response){
        const surveysRespository = getCustomRepository(SurveysRespository);
        const all = await surveysRespository.find();

        return res.json(all);

    }
}

export {SurveysController}
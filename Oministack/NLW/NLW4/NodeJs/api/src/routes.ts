import {Router} from 'express';
import { AnswerController } from './controllers/AnswerController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { NpsController } from './controllers/NpsController';

const router = Router();

// instanciando a classe userController
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

// routes para users
router.post("/users", userController.create);

// routes para surveys
router.post("/surveys", surveysController.create);
router.get('/surveys', surveysController.show);

// routes para o sendMail
router.post('/sendMail', sendMailController.execute);

// routes para o answer
router.get('/answers/:value', answerController.execute);

// routes para o nps
router.get('/nps/:survey_id', npsController.execute);

export {router};
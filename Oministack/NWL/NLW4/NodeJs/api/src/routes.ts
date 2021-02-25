import {Router} from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

// instanciando a classe userController
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post("/users", userController.create)

// routes para surveys
router.post("/surveys", surveysController.create)
router.get('/surveys', surveysController.show)

router.post('/sendMail', sendMailController.execute)

export {router};
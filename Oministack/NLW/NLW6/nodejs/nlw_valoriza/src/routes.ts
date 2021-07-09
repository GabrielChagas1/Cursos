import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticaUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

// criando uma instância para os controller
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();


// rotas que utilizam o middleware ensureAdmin
router.post("/tags", ensureAdmin, createTagController.handle);

// rotas da aplicação
router.post("/users", createUserController.handle);
router.post("/compliments", createComplimentController.handle);
router.post("/login", authenticateUserController.handle);

export {router};
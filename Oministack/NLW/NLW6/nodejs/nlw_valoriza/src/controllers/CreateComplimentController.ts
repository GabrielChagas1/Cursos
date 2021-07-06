import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController{
  async handle(request: Request, response: Response) {

    // recuperando dados da requisição
    const {tag_id, user_sender, user_receiver, message} = request.body;


    const createComplimentService = new CreateComplimentService();

    // persistindo os dados no banco de dados
    const compliment = await createComplimentService.execute({
      tag_id, 
      user_sender, 
      user_receiver, 
      message
    });


    // retornado as inforamções gravadas
    return response.json(compliment);

  }
}

export {CreateComplimentController}
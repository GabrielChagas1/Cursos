import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}


class CreateComplimentService{
  async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){

    // recuperando os repositórios de compliments e users
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    // verificando se os usuários não são iguais
    if(user_sender === user_receiver){
      throw new Error("Incorrect User Receiver");
    }

    // senão for, o user que irá receber o elogia é encontrado no banco
    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    // senão for encontrado é retornado um erro
    if(!userReceiverExists){
      throw new Error("User Receiver does not exists");
    }

    // senão é criado um objeto com as informações
    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    // o objeto criado foi persistido no banco de dados
    await complimentsRepositories.save(compliment);
    
    return compliment;
  }
}

export { CreateComplimentService }
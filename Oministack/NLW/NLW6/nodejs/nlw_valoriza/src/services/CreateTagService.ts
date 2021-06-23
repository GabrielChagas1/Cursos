import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagService{
  async execute(name: string){

    // criando uma instância do repositório de tags
    const tagsRepository = getCustomRepository(TagsRepositories);

    // se o nome vier vazio é devolvido um erro
    if(!name){
      throw new Error("Incorrect name!");
    }

    // recuperando os registros que são iguais ao name passado
    const tagAlreadyExists = await tagsRepository.findOne({name});

    // se já existir o nome, é retornado uma mensagem com erro
    if(tagAlreadyExists){
      throw new Error("Tag already exists!");
    }

    // se não existir ela é salva no banco de dados
    const tag = tagsRepository.create({name});

    // é persistido no banco dados as informações
    await tagsRepository.save(tag);

    // retornando os dados que foram persistido no banco de dados
    return tag;
  }
}

export { CreateTagService }
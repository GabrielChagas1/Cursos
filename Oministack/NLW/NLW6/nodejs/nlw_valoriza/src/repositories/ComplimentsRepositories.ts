import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliement";

// criando classe para o repositório de compliments
@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{

}

export { ComplimentsRepositories }
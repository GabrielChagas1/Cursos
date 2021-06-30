import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliement";


@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{

}

export { ComplimentsRepositories }
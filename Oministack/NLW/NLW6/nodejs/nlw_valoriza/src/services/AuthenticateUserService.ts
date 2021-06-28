import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories";
import { User } from "../entities/User";


interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){

    const usersRepositories = getCustomRepository(UsersRepositories);

    // recuperando o usuário no banco de dados
    const user = await usersRepositories.findOne({ email });

    // se o usuário tiver vazio, é retornado um erro
    if(!user){
      throw new Error("Email/Passoword incorrect");
    }

    // se o user existir é feito uma comparação para saber se a senha é a correta
    const passwordMatch = await compare(password, user.password);

    // senão for, é retornado um erro
    if(!passwordMatch){
      throw new Error("Email/Passoword incorrect");
    }

    // criando o token para o usuário
    const token = sign({
      email: user.email
    }, "32f81690a20a67d8f2328a46ba6f1d79",{
      subject: user.id,
      expiresIn: "1d"
    });

    // retornando o token
    return token;

  }
}

export {AuthenticateUserService}
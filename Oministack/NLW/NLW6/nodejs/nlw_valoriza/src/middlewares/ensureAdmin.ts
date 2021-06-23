import { NextFunction, Request, Response } from "express";




export function ensureAdmin(request: Request, response: Response, next: NextFunction){
  // verificar se o usuário é um admin
  const admin = true;

  // se o usuário for admin, ele pode acessar a página
  if(admin){
    return next();
  }

  // senão é devolvido um erro
  return response.status(401).json({
    error: "Unauthorized",
  });


}
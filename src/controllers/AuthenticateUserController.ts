import { Request, Response } from "express";
import { AuthenticateUserServise } from "../services/AuthenticateUserService";


class AuthenticateUserController{
    async handle(request: Request, response: Response) {
      const {email, password} = request.body
      const authenticateUserServise = new AuthenticateUserServise()
      const token = await authenticateUserServise.execute({
        email,
        password
      })
      return response.json(token)
    }

}

export {AuthenticateUserController}
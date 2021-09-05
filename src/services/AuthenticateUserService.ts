import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface iAuthenticateRequest{
  email: string
  password: string
}

class AuthenticateUserServise{
  async execute({email, password}: iAuthenticateRequest){
    const usersRepositores = getCustomRepository(UsersRepositories)
    const user = await usersRepositores.findOne({
      email
    })

    if(!user){
      throw new Error("Email/Passowrd Incorrect")
    }

    const passwordMatch  = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Email/Passowrd Incorrect")
    }
    
    const token = sign({
      email: user.email
    }, "786a5012dcc1bfa239ce29f82e58330a",{
      subject: user.id,
      expiresIn: "1d"
    })
    return token
  }
}
export {AuthenticateUserServise} 
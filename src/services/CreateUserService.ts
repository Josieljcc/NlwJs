import {getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest{
  name: string
  email: string
  admin?: boolean
}

class CreateUserService{
  async execute({name, email, admin}: IUserRequest){
    const usersRepositores = getCustomRepository(UsersRepositories)
    if(!email){
      throw new Error("Email incorrect")
    }
    const userAlreadyExists = await usersRepositores.findOne({
      email
    })
    if(userAlreadyExists){
      throw new Error("User already exist")
    }

    const user = usersRepositores.create({
      name,
      email,
      admin
    })
    await usersRepositores.save(user)
    return user

  }
}
export {CreateUserService}
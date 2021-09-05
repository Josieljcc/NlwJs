import {getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {hash} from "bcryptjs"

interface IUserRequest{
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService{
  async execute({name, email, admin, password}: IUserRequest){
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

    const passwordHash = await hash(password, 8)

    const user = usersRepositores.create({
      name,
      email,
      admin,
      password: passwordHash
    })
    await usersRepositores.save(user)
    return user

  }
}
export {CreateUserService}
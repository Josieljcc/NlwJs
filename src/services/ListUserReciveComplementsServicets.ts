import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"


class ListUserReciveComplimentsService{
  async execute(user_id: string){
    const complimentsRepositores = getCustomRepository(ComplimentRepositories)
    const compliments = await complimentsRepositores.find({
      where:{
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver","tag"]
    })
    return compliments
  }
}

export {ListUserReciveComplimentsService}
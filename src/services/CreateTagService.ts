import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagService{
  async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepositories)
    if(!name){
      throw new Error("Incorrect Name!")
    }
    const tagAreadyExists = await tagsRepositories.findOne({
      name
    })
    if(tagAreadyExists){
      throw new Error("Tag Aready exists!")
    }
    const tag = tagsRepositories.create({
      name
    })
    await tagsRepositories.save(tag)
    return tag;
  }
}
export {CreateTagService}
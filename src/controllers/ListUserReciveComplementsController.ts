import { Request, Response } from "express";
import {ListUserReciveComplimentsService} from "../services/ListUserReciveComplementsServicets"


class ListUserReciveComplimentsController{
  async handle(request: Request, response: Response){
    const { user_id} = request
    const listUserReciveComplimentsService = new ListUserReciveComplimentsService
    const compliment = await listUserReciveComplimentsService.execute(user_id)
    return response.json(compliment)
  }
}

export {ListUserReciveComplimentsController}
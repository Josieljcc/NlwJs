import {Router} from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserCotroller } from './controllers/CreateUserController'


const router = Router()
const createUserCotroller = new CreateUserCotroller()
const createTagController = new CreateTagController()
router.post("/users", createUserCotroller.handle)
router.post("/tags", createTagController.handle)
router.get("/test", (req,res) => console.log("funcionou"))


export {router}
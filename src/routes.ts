import {Router} from 'express'
import { CreateUserCotroller } from './controllers/CreateUserController'

const router = Router()
const createUserCotroller = new CreateUserCotroller()

router.post("/users", createUserCotroller.handle)
router.get("/test", (req,res) => console.log("funcionou"))


export {router}
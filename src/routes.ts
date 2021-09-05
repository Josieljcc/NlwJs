import {Router} from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserCotroller } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'


const router = Router()

const createUserCotroller = new CreateUserCotroller()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()

router.post("/users", createUserCotroller.handle)
router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.get("/test", (req,res) => console.log("funcionou"))


export {router}
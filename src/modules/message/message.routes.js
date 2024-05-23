import express from "express"

import { addMsg, allMsg } from "./message.controller.js"
import { auth } from "../../middleware/auth.js"

const msgRouter = express.Router()


msgRouter.post('/addmsg' ,addMsg)
msgRouter.get('/allMsg' ,auth,allMsg)





export default msgRouter


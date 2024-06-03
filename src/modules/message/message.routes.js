import express from "express"

import { addMsg, allMsg, shareProfile } from "./message.controller.js"
import { auth } from "../../middleware/auth.js"
import { validation } from "../../middleware/validation.js"
import { messageSchemaValidation } from "./message.validation.js"

const msgRouter = express.Router()


msgRouter.post('/addmsg', validation(messageSchemaValidation) ,addMsg)
msgRouter.get('/allMsg' ,auth,allMsg)
msgRouter.get('/shareProfile' ,shareProfile)






export default msgRouter


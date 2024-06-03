import express from "express"
import { signin, signup, verfiyEmail } from "./user.controller.js"
import { checkEmailExists } from "../../middleware/checkEmailExists.js"
import { hashPassword } from "../../middleware/hashPassword.js"
import { signinSchemaValidation, signupSchemaValidation } from "./user.validation.js"
import { validation } from "../../middleware/validation.js"

const userRouter = express.Router()


userRouter.post('/signup' ,validation(signupSchemaValidation) ,checkEmailExists ,hashPassword,signup)
userRouter.post('/signin' , validation(signinSchemaValidation),signin)
userRouter.get('/verifyemail/:token' ,verfiyEmail)


export default userRouter
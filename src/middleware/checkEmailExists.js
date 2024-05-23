import { userModel } from "../../databases/models/user.model.js"
import bcrypt from "bcrypt"
import { AppError } from "../utils/AppError.js"


export const checkEmailExists = async (req, res, next)=>{
    let {email} = req.body
    let user =await  userModel.findOne({email : email})
    if(user){
        return  next(new AppError("user already exists." , 409))
    }
     req.body.password = bcrypt.hashSync(req.body.password , 8)
    next()
}
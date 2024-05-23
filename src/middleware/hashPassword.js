import bcrypt, { hashSync } from "bcrypt"

export const hashPassword = async(req, res, next)=>{
    req.body.password = hashSync(req.body.password , 8)

    next()
}



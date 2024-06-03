import { compareSync } from "bcrypt"
import { userModel } from "../../../databases/models/user.model.js"
import jsonwebtoken from "jsonwebtoken"
import {sendEmail} from "../../emails/sendMail.js"
import jwt from "jsonwebtoken"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/AppError.js"


const signup =catchError(async (req, res)=>{
   
        await userModel.insertMany(req.body)
        sendEmail(req.body.email) 
        res.json({message : "success"})
   
    
})

const verfiyEmail = catchError( async (req, res , next)=>{
    jwt.verify(req.params.token , process.env.JWT_KEY ,async(err, decoded)=>{
       
       if(err) return next(new AppError(err, 401))
       await userModel.findOneAndUpdate({email : decoded.email}, { emailVerify : true } , { new: true } )
       return res.json({message :'success'})
    } )

})

const signin = catchError(async (req, res , next)=>{
    let user =await  userModel.findOne({email : req.body.email})
    let token = jsonwebtoken.sign({userId: user._id , role : user.role} , process.env.JWT_KEY) 
    if(user && compareSync(req.body.password , user.password ))
        {   
            return res.json({message : "success" , token})

        }
    next(new AppError("incorrect email or password" , 401))  
    // return res.json({message : "incorrect email or password"})
    
}
)

export {
    signup,
    signin,
    verfiyEmail
}
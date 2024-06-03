import { AppError } from "../utils/AppError.js"



export const validation =(schema)=>{
    return (req,res,next)=>{
        const {error } =schema.validate({...req.body , ...req.params , ...req.query} , {abortEarly: false})
        console.log(error , " erorrrr")
        if(!error){
            next()
        }
        else{
            let errMsg = []
            error.details.forEach(val => {
                errMsg.push(val.message)
            });
            // res.json({error : error.details})
            next(new AppError(errMsg , 401))
        }
    }
    
}
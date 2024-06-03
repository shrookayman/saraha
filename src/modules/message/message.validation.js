
import Joi from "joi"

const messageSchemaValidation = Joi.object({
    messgaeText: Joi.string().max(200).min(2).required(),
    recievedId : Joi.string().hex().length(24)

})


export{
    messageSchemaValidation
}
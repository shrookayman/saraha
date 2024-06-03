
import Joi from "joi"

const signupSchemaValidation = Joi.object({
    name: Joi.string().max(20).min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/).required(),
    rePassword :Joi.string().valid(Joi.ref('password')).required(),
    age : Joi.number().integer().max(80).min(10).required()

})

const signinSchemaValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/).required()


})



export{
    signupSchemaValidation,
    signinSchemaValidation
}
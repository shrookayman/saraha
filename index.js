process.on('uncaughtException',(err)=>{ // express error
    console.log('error exception', err)
})

import express from 'express';
import { dbConnection } from './databases/dbConnection.js';
import { userModel } from './databases/models/user.model.js';
import userRouter from './src/modules/user/user.routes.js';
import msgRouter from './src/modules/message/message.routes.js';
import { AppError } from './src/utils/AppError.js';
import { globalErr } from './src/middleware/globalErrMiddleware.js';
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json())
app.use(userRouter)
app.use(msgRouter)



dbConnection()

app.use('*', (req,res,next)=>{
    next(new AppError(`not found  : ${req.originalUrl}` , 404))
})

app.use(globalErr)

process.on('unhandledRejection' , (err)=>{
    console.log('error unhandeled',err)
})

app.listen(3000, () => console.log(`Running.......`));

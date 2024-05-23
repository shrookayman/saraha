import express from 'express';
import { dbConnection } from './databases/dbConnection.js';
import { userModel } from './databases/models/user.model.js';
import userRouter from './src/modules/user/user.routes.js';
import msgRouter from './src/modules/message/message.routes.js';
import { AppError } from './src/utils/AppError.js';
const app = express();
app.use(express.json())
app.use(userRouter)
app.use(msgRouter)



dbConnection()

app.use('*', (req,res,next)=>{
    next(new AppError(`not found  : ${req.originalUrl}` , 404))
})

app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500 ;
    res.status(err.statusCode).json({error :err.message})
})

app.listen(3000, () => console.log(`Running.......`));

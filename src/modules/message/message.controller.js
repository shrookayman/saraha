import { compareSync } from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
import {sendEmail} from "../../emails/sendMail.js"
import jwt from "jsonwebtoken"
import { messageModel } from "../../../databases/models/message.model.js"
import { catchError } from "../../middleware/catchError.js"
import QRcode from "qrcode"

const addMsg = catchError( async (req, res)=>{
    await messageModel.insertMany(req.body)
    res.json({message : 'success' })
    

})

const allMsg =  catchError(async (req, res)=>{
    let messages =  await messageModel.find({recievedId: req.user.userId})
     res.json({message : 'success' , messages}) 
     
 
 })
 const shareProfile =  catchError(async (req, res)=>{
    QRcode.toDataURL("http://localhost:3000/allMsg", (err,qr)=>{
        res.send(`<img src="${qr}" />`) 

    })
     
 
 })


export {
   addMsg,
   allMsg,
   shareProfile
}
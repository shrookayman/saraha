import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    messgaeText:String,
    recievedId : mongoose.Types.ObjectId
},{timestamps : true} )

export const messageModel = mongoose.model('message', messageSchema)
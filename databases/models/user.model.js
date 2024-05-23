import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age : {
        type:Number,
        min :[10,'too young'],

    },
    role:{
        type:String,
        enum:['admin' ,'user'],
        default :'user'
    },
    emailVerify :{
        type : Boolean ,
        default : false
    },
    isActive:{
        type: Boolean,
        default: true
    }
},{timestamps : true} )

export const userModel = mongoose.model('user', userSchema)
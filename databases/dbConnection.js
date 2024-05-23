import mongoose from "mongoose";



export function dbConnection(){
   mongoose.connect('mongodb://127.0.01:27017/sarahaDB').then(()=>{
    console.log("conecteedddd")
   })
}


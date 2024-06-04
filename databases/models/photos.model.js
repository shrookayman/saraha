import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : String,
    img : String,
    images :[{type : String}]
} , {timestamps : true})


schema.post('init' ,function(doc){
    doc.img = process.env.BASE_URL + doc.img
        
 
})
export const photosModel = mongoose.model('photo' , schema)
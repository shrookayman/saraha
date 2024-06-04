import { photosModel } from "../../../databases/models/photos.model.js"
import {  singleFileUpload, uploadArrOfFiles } from "../../fileuploads/uploads.js"
import express from "express"
import {v2 as cloudinary} from 'cloudinary';


const phototRouter = express.Router()

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret:  process.env.API_SECRET
});


phototRouter.post('/addphotos' , singleFileUpload('img'), async(req,res)=>{
    await cloudinary.uploader.upload(req.file.path, {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
    
    await photosModel.insertMany({title:req.body.title , img:req.file.filename})
    res.json({message: "success"})
})

phototRouter.get('/photos' , async (req,res)=>{
    let photos = await photosModel.find()
   
    res.json({message: 'success' , photos})
} )


export default phototRouter
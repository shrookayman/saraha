import multer from "multer";
import {v4 as uuidv4} from "uuid"
import { AppError } from "../utils/AppError.js";




const uploadFile=()=>{
    function fileFilter (req, file, cb) {

        console.log(file) // mimetype = image -> true
        if(file.mimetype.startsWith('image')){
            cb(null, true)
        }
        else{
            cb(new AppError('image only' , 401), false)
        }
    
    }
    
     
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
          cb(null, uuidv4() +"-"+ file.originalname)
        }
      })
      const upload = multer({  storage  , fileFilter})
      return upload

}

export const singleFileUpload = (filedName)=>{
      return uploadFile().single(filedName)
}
export const uploadArrOfFiles = (filedName)=>{
    return uploadFile().array(filedName)
}



  

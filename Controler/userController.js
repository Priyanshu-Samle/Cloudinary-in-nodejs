import User from "../Model/userModel.js"
import { uploadResult } from "../index.js"
import path from "path";

export const fileUpload = async(req,res)=>{

    try{
        const path  = req.upload;
        console.log(path);
        const upload = await uploadResult(path);
        
        const data = new User(upload);
        const fileUrl = await data.save();

        return res.status(200).json(fileUrl);
    }
    catch(error){
          console.log(error);

    }
}
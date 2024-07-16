import exp from "constants";
import mongoose from "mongoose";
import { type } from "os";

 const userSchema = mongoose.Schema({
    file:{
        type:String,
        required:true
    }
})

export default mongoose.model("cloudinary",userSchema);
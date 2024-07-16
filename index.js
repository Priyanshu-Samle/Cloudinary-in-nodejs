import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import nodemon from 'nodemon';
import express from 'express'
import exp from 'constants';
import { error } from 'console';

import route from './Route/userRoute.js';
// Configuration
dotenv.config();


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
});
 route.use(express.static('./uploads/img/'))
export const uploadResult = async(filename)=>{
    try {

        const result = await cloudinary.uploader.upload(filename);
        console.log(result);
        return result;
    } catch (error) {
        console.log("error is coming")
        console.log(error)
    }
   
}


const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

const app  = express();
app.use(bodyParser.json());


mongoose.connect(URL).then((req,res)=>{
    app.listen(PORT,()=>{
        console.log("db connection is successfully");
    })
}).catch((error)=>{
    console.log(error);
})

app.use("/api", route)
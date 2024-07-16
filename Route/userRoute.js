import { fileUpload} from "../Controler/userController.js";
import express from "express"
import multer from "multer";
import {v2 as cloudinary} from "cloudinary"
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require('dotenv');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: '../uploads', // Optional folder for storing files
      allowed_formats: ['jpg', 'jpeg', 'png'], // Restrict to certain formats
      transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optional: resize image
    }
  });
  
  const upload = multer({ storage: storage });


import express from "express";
 


route.post("/upload-file",upload.single('file'), fileUpload);

export default route;
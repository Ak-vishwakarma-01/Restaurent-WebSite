import express from 'express'

import { addfood } from '../controlers/foodController.js'

import multer from 'multer'

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cc)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addfood)



export default foodRouter;
import foodModel from "../models/foodModel.js";

import fs from 'fs'

// add food item

const addfood = async (req,res)=>{
    let image_filename = `${req.file.filename}` ;
 
    const food = new foodModel({
        
    })
}

export {addfood}
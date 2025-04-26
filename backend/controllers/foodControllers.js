import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`; // get image name from request
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })

    try{
        await food.save(); // save food item to database
        res.status(200).json({success:true, message: "Food item added successfully"}); // send success response
    }catch(err){
        console.log(err);
        res.status(500).json({success:false, message: "Failed to add food item"}); // send error response
    }
}


export { addFood };
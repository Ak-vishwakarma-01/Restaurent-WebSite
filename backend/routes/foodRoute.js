import express from "express";
import { addFood } from "../controllers/foodControllers.js";
import multer from "multer"; // image storage system

const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: 'uploads',  // stored in uploads folder
    filename: function (req, file, cb) { // cb is call back
        return cb(null, `${Date.now()}${file.originalname}` );  // file name will be current time + original name of the file
    },
});

const upload = multer({ storage: storage }); // multer instance

foodRouter.post("/add",upload.single("image"),addFood ,(req, res))

export default foodRouter;

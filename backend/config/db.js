import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://akv7115:80099@cluster0.dmuua.mongodb.net/food-del').then(()=>{
        console.log("dBconnectd")
    })
}


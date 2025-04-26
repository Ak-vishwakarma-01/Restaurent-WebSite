import mangoose from "mongoose";

export const connectDB = async () => { 
    mangoose.connect("mongodb+srv://akv71:TSxaf1Qy04np3X7E@cluster0.gsjhs7m.mongodb.net/restaurant")
        .then(() => console.log("MongoDB connected successfully"))
        .catch((err) => console.error("MongoDB connection failed:", err));
};
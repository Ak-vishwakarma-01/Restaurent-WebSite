import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
    console.log("api working");
    res.send("api working");
});

app.listen(port,()=>{
    console.log("server is running ");
})

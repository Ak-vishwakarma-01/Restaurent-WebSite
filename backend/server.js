import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express()
const port = 4000;

// middleware
app.use(express.json())
app.use(cors()) // escess backend from any frontend

//Db connection

connectDB();
//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("APi working");
})
  

app.listen(port,()=>{
    console.log(`Server started on https://localhost:${port}`)
})

//mongodb+srv://akv7115:80099@cluster0.dmuua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
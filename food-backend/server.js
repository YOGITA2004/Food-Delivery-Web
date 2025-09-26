import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const port = 4000

// middleware   can access backend from any frontend
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
// we can access all the files from this uploads folder
app.use("/images",express.static('uploads'))
// http method using that we can request the data from server
app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://yogita singh02102004_db_user:Yogimilky@cluster0.di2834k.mongodb.net/?
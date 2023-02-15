import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";


dotenv.config();

const app = express()
app.use(cors())
app.use(express.json({"limit":"50mb"}))

//Creating route to post
app.use("/api/v1/post",postRoutes)

//Creating route to open ai's dalle api
app.use("/api/v1/dalle",dalleRoutes)

app.get('/',async (req,res) => {
    res.send("Hello from imaginary")
})

const startServer = async () =>{
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log("Server is running on port http://localhost:8080"))
    } catch (error) {
        console.log(error)
    }
}
startServer()



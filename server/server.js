import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import {clerkMiddleware} from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebHooks.js"


connectDB();
const app = express()

app.use(cors());

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

// api to listen to clerk webhook

app.use("/api/clerk", clerkWebhooks);


app.get('/',(req,res)=> res.send("api is working"));

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))
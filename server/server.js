import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import {clerkMiddleware} from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebHooks.js"
import userRouter from "./routes/userRoute.js"
import hotelRouter from "./routes/HotelRoutes.js"
import connectCloudinary from "./configs/cloudinary.js"
import roomRouter from "./routes/roomRouter.js"


connectDB();
connectCloudinary();
const app = express()

app.use(cors());

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

// api to listen to clerk webhook

app.use("/api/clerk", clerkWebHooks);


app.get('/',(req,res)=> res.send("api is working"));

app.use('/api/user',userRouter)
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))
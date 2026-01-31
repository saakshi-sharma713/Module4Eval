import express from "express"
import userRouter from "./Routes/user.route.js";
import vehicleRouter from "./Routes/vehicle.route.js";
import tripRouter from "./Routes/trip.route.js";
import { log } from "./middlewares/Logger.middleware.js";
const app=express();
const PORT=8080;
app.use(log)
app.use(express.json())
app.use("/user",userRouter)
app.use("/vehicles",vehicleRouter)
app.use("/trips",tripRouter)
app.listen(PORT,()=>{
    console.log("Server Started On PORT 8080")
})
import express from "express"
import userRouter from "./Routes/user.route.js";
const app=express();
const PORT=8080;

app.use(express.json())
app.use("/user",userRouter)
app.listen(PORT,()=>{
    console.log("Server Started On PORT 8080")
})
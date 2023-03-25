const express = require('express')
const cors = require('cors')
const dotenv=require('dotenv')
const app= express()
dotenv.config()
const mongoose = require('mongoose')
const userRoute=require("./routes/users")


app.use(cors({
    origin:"*"
}))
app.use(express.json())
mongoose.set('strictQuery', false)
mongoose
    .connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("db connected")})
    .catch((err)=>console.log(err))
app.use("/users",userRoute)

app.listen(8800,()=>{

    console.log("server running")
})
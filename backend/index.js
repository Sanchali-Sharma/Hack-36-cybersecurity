const express = require('express')
const cors = require('cors')
const dotenv=require('dotenv')
const app= express()
dotenv.config()
const mongoose = require('mongoose')
const userRoute=require("./routes/users")
const http=require('http')
const Server=require('Socket.io').Server

const server=http.createServer(app)
const io=new Server(server,{
  cors:{
    Origin:"*"
  }
});

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


io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("send-message", (message, username)=>{
      console.log(message)
      console.log(username)
      console.log(socket.id)
      io.emit("recieve-message",message,username)
    })
  });

app.listen(8800,()=>{

    console.log("server running")
})
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
// import './db/mongoConnection.js';

const uri = "mongodb+srv://admin:admin123@cluster0.qf6ajbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error) => console.log(error.message));



import authRouter from './routes/authRoutes.js';
import requestRouter from './routes/requestRoutes.js';

const app=express()
const PORT=8000

app.use(cors())
app.use(bodyParser.json());


app.use('/auth',authRouter)
app.use('/request',requestRouter)


app.get("/",(req,res)=>{
    res.send("your server is up and running") ;
})

app.listen(PORT,()=>console.log("server listening on port :",PORT))
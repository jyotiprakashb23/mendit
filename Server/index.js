const express=require('express')
const cors=require('cors')

const app=express()
const PORT=8000

app.use(cors())

app.get("/",(req,res)=>{
    res.send("your server is up and running") ;
})

app.listen(PORT,()=>console.log("server listening on port :",PORT))
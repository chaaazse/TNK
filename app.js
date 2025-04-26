const express=require("express");
const app=express();
const mongoose = require("mongoose");

const mongourl="mongodb+srv://admin:admin@cluster0.psvnkm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl).then(()=>{
  console.log("Database Connected");
})


app.get("/",(req,res)=>{
    res.send({status:"Started"})
});

app.listen(5001,()=>{
    console.log("Node server started");
});

 
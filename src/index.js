const express = require("express")
const app= express()
const mongoose = require("mongoose")
const route = require("./route/route")
require("dotenv").config()

const {MONGODB_URL , PORT} =process.env

app.use(express.json())

app.use(express.urlencoded({extended:true}))

mongoose.connect(MONGODB_URL,{useNewUrlParser:true}).then(()=>console.log("Mongoose is connected")).catch((error)=>{
    console.log("error in connection")
})
app.use("/",route)

app.listen(PORT,()=>{
    console.log("Port is running at 3000")
})
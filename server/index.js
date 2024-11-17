const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');
const ImageRoute =require('./routers/ImageRoutes')
const app=express();
require('dotenv').config();

app.use(bodyparser.json());
app.use(cors());

async function connectdb(){
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connnection success")
 }
 catch(err){
    console.log("db not connected: "+err);
}
}
connectdb();
app.use("/",ImageRoute)
const x= 5000||process.env.PORT;
app.listen(x,()=>{
    console.log(`Server started`);
})
module.exports=app;
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.json());
app.use(cors());

async function connectdb(){
    try{
    await mongoose.connect("mongodb+srv://user:user@cluster0.nkcokgg.mongodb.net/MemoryBank?retryWrites=true&w=majority&appName=Cluster0")
    console.log("db connnection success")
 }
 catch(err){
    console.log("db not connected: "+err);
}
}
connectdb();
const x=process.env.PORT || 5000;
app.listen(x,()=>{
    console.log(`Port Starting at ${x}`);
})
module.exports=app;
//same as require but we are bale to write it with react syntax because we changed type to modularity in jsonfile
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js"

const app= express();
dotenv.config();

//we did it with routing which is same as mentioning app.get("/post",...)
app.use(cors());
app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use("/posts",postRoutes);

//limit for files less than 30MB

app.get("/",(req,res)=>{
    res.send("Hello To episodes");
});

// we will use their cloud atlas version which means they are going to host our databse on their cloud
// karan pw= qwertyuiopazlm

//const CONNECTION_URL = "mongodb+srv://karan:qwertyuiopazlm@cluster0.hclrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//process.env.port is for to set it up later with heroku
const PORT =process.env.PORT || 5000;

//to connect to our databse 
//this returns a promise
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
.catch((err)=>console.log(err.message))

//so that it does not give warn in console
mongoose.set("useFindAndModify",false);



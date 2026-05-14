import express from "express";
import morgan from "morgan";
import fs from "fs";

const WORKING_DIR='/workspace';
const app=express()

app.use(morgan("dev"));
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(201).json({
        message:"Hello From Agent",
        status:'ok'
    })
})

app.get("/list-files",async(req,res)=>{
    const elements=await fs.promises.readdir(WORKING_DIR);

    res.status(201).json({
        message:'Elements in working directory.',
        elements
    })
})

export default app
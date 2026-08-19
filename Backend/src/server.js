import express from "express";
import {ENV} from "./lib/env.js";
import {connectDB} from "./lib/db.js";

const app = express();


app.get("/", (req,res) =>{
    res.status(200).json("Done")
});

const startServer = async ()=>{
    try {
    await connectDB();    
    app.listen(ENV.PORT, ()=> console.log("Server is running:", ENV.PORT));
    } catch (error) {
        console.error("Error strating server", error);
    }
};

startServer();
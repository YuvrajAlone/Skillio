import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(ENV.DB_URL);
        console.log("Connected To MongoDB");
    } catch (error) {
        console.error("Error Connecting", error);
        throw error;
    }
}
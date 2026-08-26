import express from "express";
import {ENV} from "./lib/env.js";
import {connectDB} from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import {inngest , functions} from "./lib/inngest.js";
import {clerkMiddleware} from '@clerk/express';
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({origin: ENV.CLIENT_URL, credentials:true}));
app.use(clerkMiddleware());
app.use("/api/inngest", serve({client: inngest, functions}));
app.use("/api/chat", chatRoutes);

app.get("/", (req,res) =>{
    res.status(200).json("Done")
});

connectDB()

export default app;
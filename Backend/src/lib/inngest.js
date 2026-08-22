import {Inngest} from "inngest";
import {connectDB} from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest ({id: "skillio"});

const createUser = inngest.createFunction(
    {
     id: "create-user",
     triggers:[
        {event: "clerk/user.created"}
     ]
    },
    async({event}) => {
        await connectDB()
        const {id,email_addresses,first_name,last_name}=event.data;
        const newUser = {
            clerkId: id,
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`
        };
     await User.create(newUser)
    }
);

const updateUser = inngest.createFunction(
    {
     id: "update-user",
     triggers:[
        {event: "clerk/user.updated"}
     ]
    },
    async({event}) => {
        await connectDB();
        const {id,email_addresses,first_name,last_name}=event.data;
        await User.findOneAndUpdate(
         {clerkId: id},
         {
           name: `${first_name || ""} ${last_name || ""}`,
           email: email_addresses[0]?.email_address
         }
        );
    }
);

const deleteUser = inngest.createFunction(
    {
     id: "delete-user",
     triggers:[
        {event: "clerk/user.deleted"}
     ]
    },
    async ({event}) => {
        await connectDB();
        const {id} = event.data;
        await User.deleteOne({clerkId:id});
    }
);

export const functions = [createUser,updateUser,deleteUser];
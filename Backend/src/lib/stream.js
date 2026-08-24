import {StreamChat} from "stream-chat";
import {ENV} from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

export const chatClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async(userData) =>{
    try {
        await chatClient.upsertUser(userData);
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
};

export const deleteStreamUser = async(userId) => {
    try {
        await chatClient.delete(userId);
    } catch (error) {
         console.error("Error deleting Stream user:", error);
    }
};
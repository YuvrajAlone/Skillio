import dotenv from "dotenv";

dotenv.config({quiet:true});

export const ENV = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI
};

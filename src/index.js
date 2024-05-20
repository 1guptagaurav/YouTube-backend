import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app=express();
dotenv.config({
    path: './env'
});
( () => {
    try {
        //await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // app.on("error",(error) => {
        //     console.log("error occured:-",error)
        //     throw error
        // })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error from database,",error)
        throw error
    }
})()
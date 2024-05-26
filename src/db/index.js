import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'
import express from "express";
dotenv.config({
    path: './env'
});
const app=express();

const db_connect=(  () => {
    try {
        // mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    } catch (error) {
        console.error("Error from database,",error)
        throw error
    }
})

export default db_connect;
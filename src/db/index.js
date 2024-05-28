import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'
import express from "express";
dotenv.config({
    path: './env'
});


const db_connect=( async () => {
    try {
        //mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('hello world')
    } catch (error) {
        console.error("Error from database,",error)
        throw error
    }
})

export default db_connect;
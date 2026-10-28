const express = require("express");
require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const start = ()=>{
    connectDB();

    app.listen(8000,()=>{
        console.log("App is running on port 8000");
    })
}

start();


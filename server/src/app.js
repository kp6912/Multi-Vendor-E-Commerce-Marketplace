const express = require("express");

const authRoutes= require("./routes/authRouters")


const app = express();
app.use(express.json());

app.use("/api/auth" , authRoutes)

app.get("/",(req,res)=>{
    res.json({
        message:"marketplace API Running"
    })
});

module.exports = app;

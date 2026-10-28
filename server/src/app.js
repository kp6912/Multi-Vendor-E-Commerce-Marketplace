const express = require("express");
const router = require("./routes/authRouters")


const app = express();
app.use(express.json());

app.use("/api/auth" , router)

app.get("/",(req,res)=>{
    res.json({
        message:"marketplace API Running"
    })
});

module.exports = app;

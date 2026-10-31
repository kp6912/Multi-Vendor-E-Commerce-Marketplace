const express = require("express");

const authRoutes= require("./routes/authRouters")
const vendorRoutes = require("./routes/vendorRoutes")
const productRoutes = require("./routes/productRoutes")


const app = express();
app.use(express.json());

app.use("/api/auth" , authRoutes)
app.use("/api/vendor", vendorRoutes)
app.use("/api/product" , productRoutes)

app.get("/",(req,res)=>{
    res.json({
        message:"marketplace API Running"
    })
});

module.exports = app;

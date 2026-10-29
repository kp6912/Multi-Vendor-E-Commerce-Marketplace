require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticate = (req, res , next)=>{


    try {
        const header = req.headers.authorization;

        if(!header || !header.startsWith("Bearer ")){
            return res.status(401).json({
                message:"User is not authenticated"
            })
        }

        const token = header.split(" ")[1];


        const decoded = jwt.verify(
        token
        ,process.env.SECRET_KEY);

        req.user = decoded;

        next();
        
    } catch (error) {

        return res.status(401).json({
            message:"Invalid and expired token"
        })


        
    }

}

module.exports = authenticate;
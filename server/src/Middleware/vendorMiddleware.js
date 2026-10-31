const Vendor = require("../models/Vendor")

const requireApprovedVendor = async (req,res,next)=>{

    try {
        const vendor = await Vendor.findOne({
        userId:req.user.userId,
        status:"approved"

    })

    if(!vendor){
        return res.status(403).json({
            message:"approved vendor required"
        })
    }
    req.vendor = vendor;

    next();
        
    } catch (error) {
        console.log("server side error",error)

        return res.status(501).json({
            message:"server Error"
        })
        
    }

}

module.exports = requireApprovedVendor;
const authorize = (...allowwedRoles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.status(401).json({
                message:"Authentication required"
            })
        }

        if(!allowwedRoles.includes(user.req.role)){
            return res.status(403).json({
                message:"Denied"
            })
        }
    }
}

module.exports = authorize;
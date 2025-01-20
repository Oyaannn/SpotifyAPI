const SECRET_KEY = 'dskjdlzjdsjk279usand09wwqmd'
const jwt = require('jsonwebtoken')

const userAuth = (req,res,next) => {
    const token = req.header("Authorization")
    if(!token){
        res.status(400).json({message:"Access Denied"})
    }
    else{
        jwt.verify(token,SECRET_KEY,(err)=>{
            if(err){
                res.status(401).json(
                    {message:"Invalid Token"}
                )
            }
            next()
        })
    }
}
module.exports = userAuth
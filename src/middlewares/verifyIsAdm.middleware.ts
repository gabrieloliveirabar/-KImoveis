import{ Request, Response, NextFunction} from "express";

export const verifyIsAdmMiddleware = (req:Request, res:Response, next:NextFunction)=>{
 
    if(req.route.methods === true){
        if(!req.user.isAdm){       
            return res.status(403).json({
                message: "User is not admin"
            })
        }
    }
    if(!req.user.isAdm){       
        return res.status(403).json({
            message: "User is not admin"
        })
    }
    
    return next()
}
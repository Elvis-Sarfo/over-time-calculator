'use strict;'
const isAuth=(req,res,next)=>{
    try {
        if(req.session.isAuth){
            next()
        }else{
            res.redirect('login')
        }
    } catch (error) {
        
    }
}

const isAuthorized=(req,res,next)=>{
    return req.session.isAuthorized
}
module.exports={
    isAuth,
    isAuthorized
}
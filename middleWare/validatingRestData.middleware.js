/**
 * 
 * This file containg the Request validation
 */

const restValidation = (req,res,next)=>{
    /**
     * The request body should contain all required Restaurant data
     */
    if(!req.body.name || !req.body.description || !req.body.category || !req.body.imageURL || !req.body.location || !req.body.phone){
       return res.status(403).send({
            message : "Content cannot be empty"
        });
    }
    next();
}

module.exports = {
    restValidation : restValidation
}
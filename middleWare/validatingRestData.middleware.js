/**
 * 
 * This file containg the Request validation
 */

const restValidation = (req,res,next)=>{
    /**
     * The request body should contain all required Restaurant data
     */
    if(!req.body.name || !req.body.description || !req.body.category || !req.body.imageURL || !req.body.location || !req.body.phone || !req.body.rating){
       return res.status(400).send({
            message : "Content cannot be empty"
        });
    }
    next();
}

const updateValid = (req,res,next)=>{
    if(!req.body.name || !req.body.description || !req.body.category || !req.body.imageURL || !req.body.location || !req.body.phone || !req.body.rating){
        return res.status(400).send({
             message : "Restaurant Data is required."
         });
     }
     next();
}

module.exports = {
    restValidation : restValidation,
    updateValid : updateValid
}
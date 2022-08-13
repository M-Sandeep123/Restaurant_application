/**
 * this file contains the Restarant data logic
 */

const Restaurant = require("../model/restaurant.model");

exports.restData = async (req,res)=>{
    try{
        /**
         * 1 : we use the middleWare for the validating the users 
         * Request body
         */
        // check out middleware "validatingRestData"
        const restObj = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            imageURL: req.body.imageURL,
            location: req.body.location,
            phone: req.body.phone,
            rating: req.body.rating
        };
         /**
          * 2 : create the schema and store the data
          */
        const restSeaver = await Restaurant.create(restObj);

         /**
          * 3 :  send the Response back to the user for an acknowledgement
          */
         res.status(200).send(restSeaver); 

    }catch (err){
        console.log("Error while inserted data in to the database",err.message);
        res.status(500).send({
            message :  "Some error occurred while creating the Restaurant"
        })
    }
}
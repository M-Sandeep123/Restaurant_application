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

exports.restFetchData = async (req, res) => {
    /**
     * Fetching Restaurants data from the data base
     */
    try {
        const obj = await Restaurant.find();
        res.status(200).send({
            "restaurants": obj,
            "message": "Restaurant fetched successfully"
        });
    } catch (err) {
        console.log("Error while fetching the restaurant data", err.message);
        res.status(500).send({
            message: "Some error occured while fetching the Restaurants"
        });
    }
}

exports.getCategory = async (req, res) => {
    /**
     * this controller will return the all kinds category of restaurant in database
     */
    try {
        const set = new Set();

        const obj = await Restaurant.find();

        obj.forEach(val => {
            set.add(val.category);
        });
        console.log(set);
        const arr = [];
        set.forEach(ele=>{
            arr.push(ele);
        })
        res.status(200).send(arr);
    } catch (err) {
        console.log("Error while fetching the categor", err.message);
        res.status(500).send({
            message: "Some error occurred while fetching Categories"
        });
    }

}

exports.getDataOnCategory = async (req,res)=>{
    try{
        const parameter = req.params.categoryName;
        const dataObj = await Restaurant.find({category : parameter});
        res.status(200).send(dataObj);

    }catch(err){
        console.log("Error while fetching the restaurant data", err.message);
        res.status(500).send({
            message: "Some error occured while fetching the Restaurants"
        });
    }
}

exports.getDataOnId = async (req,res)=>{
    try{
        const id = req.params.id;
        const pId = new Object(id);
        const dataObj = await Restaurant.find({_id : pId});
        res.status(200).send(dataObj);

    }catch(err){
        console.log("Error while fetching the restaurant data", err.message);
        res.status(500).send({
            message: "Some error occured while fetching the Restaurants"
        });
    }
}

exports.getDataOnRating = async (req,res)=>{
    try{
        const rating = req.params.rating;
        const dataObj = await Restaurant.find({rating : rating});
        res.status(200).send(dataObj);

    }catch(err){
        console.log("Error while fetching the restaurant data", err.message);
        res.status(500).send({
            message: "Some error occured while fetching the Restaurants"
        });
    }
}

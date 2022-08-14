/**
 * This file contain the Updation and Deletion on the request
 */

const Restaurant = require("../model/restaurant.model");

exports.upDateRestaurant = async (req, res) => {
    try {
        const reqParam = req.params.id;
        const objId = new Object(reqParam);
        const restId = await Restaurant.findOne({_id : objId});
        if (!restId) {
            return res.status(200).send({
                message: "No Restaurant found for given ID"
            });
        }
        /**
         * validate the Request body in middle ware
         */
        restId.name = req.body.name;
        restId.description = req.body.description;
        restId.category = req.body.category;
        restId.imageURL = req.body.imageURL;
        restId.location = req.body.location;
        restId.phone = req.body.phone;
        restId.rating = req.body.rating;
        /**
         * Save the updated data in to the database
         */
        const upDatedRest = await restId.save();

        res.status(200).send({
            message: "Restaurant updated successfully."
        });

    } catch (err) {
        console.log("Error while updating the Restaurant data",err.message);
        res.status(500).send({
            message: "Some error occured while updating the data"
        })
    }
}

exports.deleteOnId = async (req, res) => {
    try {
        const reqParam = req.params.id;
        const reqObj = new Object(reqParam);
        const data = await Restaurant.findOne({ _id: reqObj });
        if (!data) {
            return res.status(200).send({
                restaurant: null,
                message: "Restaurant deleted successfully"

            })
        }
        
        await Restaurant.deleteOne({ _id: reqObj });
        res.status(200).send({
            restaurant: { data },
            message: "Restaurant deleted successfully"

        })


    } catch (err) {
        console.log("Error While Deleting the data : ", err.message);
        res.status(500).send({
            message: "Internal server error while deleting."
        });
    }
}

exports.deleteAll = async (req,res)=>{
     try{
        const count = await Restaurant.count();
        await Restaurant.remove();
        res.status(200).send({
            restaurant : {
                acknowledged : true,
                deletedCount : count
            },
            message : "Restaurants deleted successfully"
        })
     }catch(err){
        console.log("Error while deleting the data", err.message);
        res.status(500).send({
            message : "Internal server error while deleting the data"
        });
     }
}
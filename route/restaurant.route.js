/**
 * This file contains the end points of a user requests
 */

const restController = require("../controller/restData.controller");
const midValid = require("../middleWare/validatingRestData.middleware");

module.exports = (app)=>{
    /**
     * For a post call the api should store the data in the dataBase
     * 
     * POST /api/restaurant/add 
     */
    app.post("/api/restaurant/add",[midValid.restValidation],restController.restData);

    /**
     * To get all the Restaurant data from the database
     * GET /api/restaurant/ --> end point
     */

    app.get("/api/restaurant/",restController.restFetchData);

    /**
     * Getting the Types Restaurant Category
     * GET /api/restaurant/categories
     */
    app.get("/api/restaurant/categories",restController.getCategory);

    /**
     * Getting data based on CategoryName
     * GET /api/restaurant/categories/categoryName
     */
    app.get("/api/restaurant/categories/:categoryName",restController.getDataOnCategory);

    /**
     * Getting data based on the _ID
     * GET /api/restaurant/id
     */
    app.get("/api/restaurant/:id",restController.getDataOnId);

    /**
     * Getting data based on the Rating
     * GET /api/restaurant/rating/ratingValue
     */
     app.get("/api/restaurant/rating/:rating",restController.getDataOnRating);
}
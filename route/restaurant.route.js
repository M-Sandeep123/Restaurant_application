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

}
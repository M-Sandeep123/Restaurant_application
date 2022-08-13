/**
 * This file contains the server
 */

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const Restaurant = require("./model/restaurant.model");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

/**
 * Connected to the database
 */
mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;
db.on("error",()=>{
    console.log("Error while connecting to the database")
});

db.once("open",()=>{
    console.log("Connected successfully to DB");
    /**
     * When server I should clear the DB data and initilize the db
     */
    init();
});

async function init(){
    /**
     * deleting the collection if it is already existed
     */
    try{
        
        await Restaurant.collection.drop();
    }catch(err){
        console.log(err.message);
    }
    console.log("Data is clear");
}

require("./route/restaurant.route")(app);

app.listen(serverConfig.PORT,()=>{
    console.log(`Server is started on the port : ${serverConfig.PORT}`);
});
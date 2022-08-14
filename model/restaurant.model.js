/**
 * This file contains the Schema of Restaurant
 */

const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required :true
    },
    imageURL : {
        type : String,
        required : true,
    },
    location : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        unique : true
    },
    rating : {
        type : Number
    },
    createdAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        },
        immutable : true
    },
    updateAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    }
    
});

module.exports = mongoose.model("Restaurant",restSchema);
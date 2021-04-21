//dependencies
const mongoose = require('mongoose');


//Truck Schema
const truckSchema = new mongoose.Schema({
    truckMake:String,
    truckModel:String,
    truckRegNo:{
        type:String
    },
    truckCode:{
        type:String,
        unique:true
    },
    servType:{
        type:String
    }
});


//Associating the Truck schema to the actual collection name
module.exports = mongoose.model('Truck',truckSchema);
//dependencies
const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

//Truck Schema
const truckSchema = new mongoose.Schema({
    truckMake:String,
    truckModel:String,
    truckRegNo:{
        type:String
        // required:true,
        // unique:true
    },
    truckCode:{
        type:String
        // required:true
    }
});

//Setup plugin for passport usage
// truckSchema.plugin(passportLocalMongoose);

//Associating the Truck schema to the actual collection name
module.exports = mongoose.model('Truck',truckSchema);
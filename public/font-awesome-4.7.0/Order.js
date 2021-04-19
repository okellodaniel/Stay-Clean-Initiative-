//Dependencies
const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

//Database schema for the Orders
const orderSchema = new mongoose.Schema({
    truckLocation:String,
    date:String,
    nxtDest:String,
    truckCodeNo:String,
    workerName:String
});

//setting up plugin for Orders
// orderSchema.plugin(passportLocalMongoose);

//Associating the Order schema with the actual collection name

module.exports = mongoose.model('Order',orderSchema);
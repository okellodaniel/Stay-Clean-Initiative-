//Dependencies
const mongoose = require('mongoose');

//Database Schema for the Customer 

const customerSchema = new mongoose.Schema({
    customerName:{
        type:String,
      },
    
    location:String,
    national_Id:{
        type:String,
        unique:true
    },
    phone_Number:{
        type:String,
        unique:true
    },
    serviceType:String,
    truckNumber:String,
    paymentType:String
});


//Associating the Customer Schema to the collection name.
module.exports = mongoose.model('Customer', customerSchema);
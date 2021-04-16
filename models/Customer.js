//Dependencies
const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

//Database Schema for the Customer 

const customerSchema = new mongoose.Schema({
    customerName:{
        type:String,
        // required:true,
        // min:2,
        // max:50
      },
    
    location:String,
    national_Id:{
        type:String,
        // required:true,
        // unique:true,
        // min:14,
        // trim:true
    },
    phone_number:{
        type:String,
        // required:true,
        // min:13
    },
    serviceType:String,
    truckNumber:String,
    paymentType:String
});

// plugin setup to use passport
// customerSchema.plugin(passportLocalMongoose);

//Associating the Customer Schema to the collection name.
module.exports = mongoose.model('Customer', customerSchema);
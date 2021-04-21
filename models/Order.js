// Dependencies
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    customerName:String,
    date:{
        type:String,
        default:Date.now()
    },
    truckCod:{
        type:String,
        unique:true
    },
    driverName:String,
    condNumber:String,
    truckLocation:String,
    nxtDest:String,

});


// Associating the Order Schema with the actual collection name
module.exports = mongoose.model('Order',orderSchema);
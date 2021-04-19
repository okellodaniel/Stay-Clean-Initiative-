const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    driverName:String,
    condNumber:String,
    truckLocation:String,
    date:{
        type:String,
        default:Date.now()
    },
    nxtDest:String,
    truckCod:String

});


// Export Order Schema
module.exports = mongoose.model('Order',orderSchema);
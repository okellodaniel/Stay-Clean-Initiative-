//dependencies
const mongoose = require('mongoose');

//Registration Schema
const driverConductorSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    secondName:{
        type:String
    },
    natId:{
        type:String

    },
    dateOfBirth:{
        type:Date
    },
    drivLic:{
        type:String

    },
    gender:String,
    position:String,
    avatar:{
        type:String
    },
    pastincident:[{
        type:String
    }]
})

//Associating the driverConductor schema with the actual collection name
module.exports = mongoose.model('Worker',driverConductorSchema);

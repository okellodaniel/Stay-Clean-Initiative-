//dependencies
const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

//Registration Schema
const driverConductorSchema = new mongoose.Schema({
    firstName:{
        type:String
        // required:true,
        // trim:true,
        // min:2,
        // max:50
    },
    secondName:{
        type:String
    },
    natId:{
        type:String

    },
    dateOfBirth:{
        type:Date,
        default:Date.now
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

//setup the plugin to use passport
// driverConductorSchema.plugin(passportLocalMongoose);
//Associating the driverConductor schema with the actual collection name
module.exports = mongoose.model('Worker',driverConductorSchema);

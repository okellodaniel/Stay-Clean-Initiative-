//dependencies
const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

//Database schema for User
const userSchema = new mongoose.Schema({

    firstName:{
        type:String
    },
    
    secondName:{
        type:String  
    },

    username:{
        type:String
    },
    passCode:{
        type:String
    },
    confpassCode:{
        type:String
    }
})

//Plusgin setup to use passport
// userSchema.plugin(passportLocalMongoose);

//Exporting the user SCHEMA
module.exports = mongoose.model('User',userSchema);
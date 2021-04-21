//dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//Database schema for User
const userSchema = new mongoose.Schema({

    firstName:String,
    lastName:String, 
    username:String
});

//Plugin setup to use passport
userSchema.plugin(passportLocalMongoose);

// Associating the Schema with the actual collection name
module.exports = mongoose.model('User',userSchema);
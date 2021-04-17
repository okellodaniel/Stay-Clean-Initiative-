//dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
//Import User model
const User = require('../models/User');


//new user signup page display
router.get('/',(req,res)=>{
    res.render('userRegistration',{title:'New User Registration'})
});

//New user signup
router.post('/', async(req,res) => {

    try{
        const newUser = new User(req.body);
         await User.register(newUser, req.body.passCode, (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(req.body);
                res.redirect('/login');
            }

        });
    }
        
    catch(err){
        res.status(500).send('Error!!');
        console.log(err);
    }
    
});

//Export module
module.exports = router;
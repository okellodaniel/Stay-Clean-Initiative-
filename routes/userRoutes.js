//dependencies
const express = require('express');
const router = express.Router();
// const passport = require('passport');

//Import User model
const User = require('../models/User');

//login route
router.get('/login',(req,res)=>{
    res.render('login',{title:'Login Page'});
});

//Process login information on submission
// router.post('/login',passport.authenticate('local',{failureRedirect:'/user/login'}),(req,res)=>{
//     req.session.user = req.user;
//     res.redirect('/home/');
// })


//new user signup page display
router.get('/register',(req,res)=>{
    res.render('userRegistration',{title:'New User Registration'})
});

//New user signup
router.post('/register', async(req,res) => {

    try{
        const newUser = new User(req.body);
        await User.register(newUser,req.body.password,(err)=>{
            if(err){
                throw err
            }
            console.log(req.body);
            res.status(201).redirect('/user/login/')
        })
    }

    catch (err) {
        res.status(500).send('Error!!');
        console.log(err);
    }
    
});

//Export module
module.exports = router;
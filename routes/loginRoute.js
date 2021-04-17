// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Render the Login Page

router.get('/', (req,res)=>{
    res.render('login', {title:'Login Page'});
});

// Check Username and Password on submission

router.post('/', passport.authenticate('local', {failuerRedirect:'/login'}), (req,res)=>{
    req.session.user = req.user;
    res.redirect('/home');
});

// Export Login module
module.exports = router;
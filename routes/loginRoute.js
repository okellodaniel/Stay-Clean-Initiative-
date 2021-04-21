// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Render Login page
router.get('/', (req,res)=>{
    res.render('login', {title:'Login Page'});
});

//Redirect to Hpme Page if authenticated
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
        req.session.user = req.user 
        res.redirect('/home');  
});

// Export Login module
module.exports = router;
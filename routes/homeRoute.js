const express = require('express');
const router = express.Router();

// Render the Home page when path / is hit
router.get('/',(req,res)=>{

    res.render('home', {title:'Stay Clean Home'})

});

router.post('/', (req,res)=>{
    res.render('home',{title:'Stay Clean Home'});
});


// Export Module
module.exports = router;
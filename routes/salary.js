const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');

router.get('/', async(req,res)=>{
   const workers = await  Worker.find();
    if(worker.position.value === Driver){
        let salary = 500000;
    }else{
        let salary = 150000;
    }
    res.render('salary', {salaries:salary, employee:worker, title:Salaries})
});

module.exports = router;
const express = require('express');
const multer = require('multer');
const router = express.Router();
const Worker = require('../models/Worker');


// get Conductor and Driver registration route
router.get('/',(req,res)=>{
    res.render('driverConductorRegistration',{title:'Worker Registration'})
});

// Image upload
var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/images');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage:storage
});

// Save Worker particulars into the database

router.post('/', upload.single('avatar'), async (req,res) => {

    try{
        const worker = new Worker(req.body);
        worker.imageupload = req.file.path;
        await worker.save();
        res.redirect('/worker/');
    }
    
    catch (err) {
            console.log(err);
            res.status(400).send('Oops!, Something went wrong.');
    };
    
});

// Retrieve worker details from the dataBase
router.get('/list', async (req, res) => {

    try {
        let workerDetails = await Worker.find();
        if (req.query.position) {
            workerDetails = await Worker.find({ position: req.query.position })
        }
        res.render('workerList', {workers: workerDetails, title: 'Workers' })
    } 
    
    catch (err) {
        console.log(err)
        res.status(500).send('Error!,Cannot retrieve the data');
    };
});

// Update Driver or Conductor details

router.get('/update/:id',async (req,res)=>{
    try{
    const updateWorker = await Worker.findOne({ _id:req.params.id});    
    res.render('updateWorker',{worker: updateWorker});

    }
    catch(err){
        res.send('Error!, Cannot find Worker')
    }     
});


// Save updated worker data

    router.post('/update',async (req,res) => {     
    
        try{
        await Worker.findOneAndUpdate({ _id: req.query.id },req.body);
        res.redirect('/worker');
    }
    catch (err) {
        res.status(400).send('Error!, Failed to update Worker');
    };

});

// Delete Driver or Conductor from the database

router.get('/delete/:id', async (req,res) => {

    try{
        await Worker.findByIdAndDelete({ _id:req.params.id });
        res.redirect('back')
    }
    catch (err){
        res.status(500).send("Can't delete Worker")
    };

});

// Export Worker module

module.exports = router;

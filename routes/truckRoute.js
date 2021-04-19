// Dependencies
const express = require('express');
const router = express.Router();
//Import Truck model
const Truck = require('../models/Truck');
const Worker = require('../models/Worker');


// Truck Registration Routes
// Get truck registration form

router.get('/', async(req,res)=>{
    const drivers = await Worker.find(); 
    console.log(drivers)
    res.render('truckReg',{driver:drivers});
});

// Save data to the database

router.post('/',async(req,res)=>{
    try{
        const truck = new Truck(req.body);
        await truck.save();
        res.redirect('/truck');
     }

    catch(err){
        console.log(err);
        res.send('Oops!, Something went wrong.');
    }
});

//Retrieve Truck data from the database

router.get('/list',async(req,res)=>{
    try{
        let truck = await Truck.find();
        if (req.query.truckCode){
            truck = await Truck.find({truckCode:req.query.truckCode});
        }
        res.status(200).render('truckList',{trucks: truck, title:'Trucks List'});
    }
    
    catch (err) {
        console.log(err);
        res.status(400).send('Unable to find the Page you asked for');
    }
});

//Update Truck details

router.post('/update/:id', async (req,res) => {
    try{
        const updateTruck = await Truck.findOne({ _id: req.params.id});
        res.status(201).render('updateTruck', {truck: updateTruck});
    }
    catch (err) {

        res.status(400).send('Error, Unable to update Truck');
    };
});


// Save the updated Truck details
router.post('/update',async (req,res) => {

    try{
        await Truck.findOneAndUpdate({ _id:req.query.id} , req.body);
        res.status(201).redirect('truckList');
    }

    catch (err) {

        res.status(400).send('Unable to update the item in the database');
    }
});


// Delete a Truck and its details from the database    
router.post('/delete/:id', async (req,res) =>{

    try{

        await Truck.findByIdAndDelete({ _id: req.params.id});
        res.redirect('back');
    }

    catch (err) {

        res.status(500).send('Error, Unable to delete Truck from the DataBase');
    }

});

// Export Truck module

module.exports = router;
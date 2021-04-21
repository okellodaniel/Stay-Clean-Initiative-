//dependencies
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Truck = require('../models/Truck'); 
const Worker = require('../models/Worker');
const Customer = require('../models/Customer');

// Respond to request when user hits end point '/'

router.get('/', async(req,res) => 
{   
    const customers = await Customer.find();
    const drivers = await Worker.find();
    const trucks = await Truck.find();
    console.log(trucks);
    res.render('newOrder',{driver:drivers, truck:trucks, customer:customers, title:'New Order'});
});

// Save a new order request to the database

router.post('/', async(req,res) => {
    
    try{
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.redirect('/order');
    }
    catch (err) {
        console.log(err);
        res.status(400).send('Error, Something went wrong');
    };

});

// Retrieve order data from the dataBase

router.get('/list', async (req,res) =>{

    try{
        const orderDetails = await Order.find();
        res.render('orderRecords', {order: orderDetails, title:'Orders Data'});

    }

    catch (err){
        res.status(500).send('Error, Cannot retrieve the Order information')
    };

});

// Request and Update Order details

router.get('/update/:id', async(req,res) => {
    try{
        const updateOrder = await Order.findOne({ _id: req.params.id});
        res.render('updateOrder',{order: updateOrder});
    }

    catch (err){
        res.status(400).send('Error, Cannot find the Order in the database');

    };
});


// Save updated order

router.post('/update', async (req,res) => {
    try{
        await Order.findOneAndUpdate({ _id: req.query.id}, req.body);
        res.redirect('/order/list');
    }
    catch (err){
        res.status(500).send('Error, Something went wrong, Cannot update the order ');
    };
});

// Delete An Order from the database

router.get('/delete/:id', async (req,res) => {
   
    try{
        await Order.findByIdAndDelete({ _id: req.params.id});
        res.redirect('back');
    }

    catch (err){
        res.status(500).send('Error deleting Order');
    };

});


//Export module
module.exports = router;
//dependencies
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
// const passport = require('passport');


// Respond to request when user hits end point '/'

router.get('/', (req,res) => {
    res.render('newOrder',{title:'New Order'})
});

// Save a new order request to the database

router.post('/', async(req,res) => {
    
    try{
        const newOrder = new Order(req.body);
        await newOrder.save();
    }

    catch (err) {
        console.log(err);
        res.status(400).send('Error, Something went wrong');
    };

});

// Retrieve order data from the dataBase

router.get('/list', async (req,res) =>{

    try{
        let orderDetails = await Order.find();
        res.render('orderList', {users: orderDetails, title:'Orders Data'});

    }

    catch (err){
        res.status(500).send('Error, Cannot retrieve the Order information')
    };

});

// Request and Update Order details

router.get('/update:id', async(req,res) => {
    try{
        let updateOrder = await Order.findOne({ _id: req.params.id});
        res.status(201).render('updateOrder',{user: updateOrder});
    }

    catch (err){
        res.status(400).send('Error, Cannot find the Order in the database');

    };
});



// Save updated order

router.post('/update', async (req,res) => {
    try{
        await Order.findOneAndUpdate({ _id: req.query.id}, req.body);
        res.redirect('/newOrder/list');
    }
    catch (err){
        res.status(400).send('Error, Something went wrong, Cannot update the order ');
    };
});

// Delete An Order from the database

router.post('/delete', async (req,res) => {
    try{
        await Order.deleteOne({ _id: req.body.id});
        res.redirect('back');
    }

    catch (err){
        res.status(400).send('Error deleting Order');
    };
});

//Export module
module.exports = router;
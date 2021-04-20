//dependencies
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');


//customer registration Routes

//Display customer registration page when endpoint '/' is hit
router.get('/',(req,res)=>{
    res.render('customerRegistration',{title:'Customer registration form'});
});


// Register Customer inforation to the database

router.post('/',async (req,res) => {
    try{             
      const customerReg = new Customer(req.body);
      await customerReg.save();
      res.redirect('/customer/');  
  }
  
  catch(err){
    console.log(err);
    res.status(400).send('Error!!');
  }
});

// Fetch customer information from the database

router.get('/list', async(req,res) => {
  try{

    let customerDetails = await Customer.find();
    res.render('customerList',{customers:customerDetails, title:'Customers List'})
  }
  catch(err){
    console.log(err)
    res.status(500).send('Cannot retrieve Customer information')
  };
});

// update customer Information
router.get('/update/:id', async (req,res) => {
  try{
    const updateCustomer = await Customer.findOne({ _id:req.params.id });
    res.status(201).render('updateCustomer',{customer:updateCustomer});
  }
  catch(err){
    res.status(400).send('Cannot find Customer');
  }
});

// save updated Customer information

router.post ( '/update', async (req,res) => {
    try{
      await Customer.findOneAndUpdate({ _id:req.query.id}, req.body);
      res.redirect ('/customer/list');
    }
    catch (err) {
      res.status(400).send('Error Updating the Customer');
    };
});


// delete customer from the database

router.get('/delete/:id', async(req,res) => {
  try{
    await Customer.findByIdAndDelete({_id: req.params.id});
    res.redirect('back');
  }
  catch (err) {
    res.status(400).send('Error deleting Customer from the DataBase');
  }
});


//Export module
module.exports = router;
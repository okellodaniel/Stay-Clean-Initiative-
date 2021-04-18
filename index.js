//dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Express-Session middleware, save session cookie
const expressSession = require('express-session')({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}); 

//Instanciating
const app = express();

// import routes
const orderRoute = require('./routes/orderRoutes');
const truckRoute = require('./routes/truckRoute');
const workerRoute = require('./routes/workerRoutes');
const customerRoute = require('./routes/customerRoutes');
const signupRoute= require('./routes/userRoutes');
const homeRoute = require('./routes/homeRoute');
const loginRoute = require('./routes/loginRoute');

// Import user model
const User = require('./models/User');

// Configure environment variable
require('dotenv').config();



//Database configuration
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
});

mongoose.connection
.on('open',()=>{
    console.log('Mongoose connection open')
})
.on('error',(err)=>{
    console.log(`connection error:${err.message}`)
});

//Configuration for templating Engine
app.set('view engine','pug');
app.set('views','./views');


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/Public/images',express.static(__dirname + '/Public/images'));
app.use(expressSession);

// Initializing  passport module and connecting it to our session
app.use(passport.initialize());
app.use(passport.session());


// Passport configurations
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes middleware
app.use('/customer',customerRoute);
app.use('/truck',truckRoute);
app.use('/order',orderRoute);
app.use('/worker',workerRoute);
app.use('/signup',signupRoute);
app.use('/home',homeRoute);
app.use('/login',loginRoute)


//Request time logger
app.use((req,res,next)=>{
    console.log('New request received at' + Date.now());
    next();
});

//Index page route
app.get('/',(req,res)=>{
    res.render('landing')
});

// Sign out route
app.post('/logout',(req,res)=>{
    if(req.session){
        req.session.destroy((err)=>{
            if(err){
                console.log('Sign out error');
            }
            else{
                return res.redirect('/login');
            }
        });
    }
});

//Undefined route
app.get('*',(req,res)=>{
    res.status(404).send('Page not found')
});

//Server configuration
port = process.env.PORT || 8945;

app.listen(port, ()=> console.log(`listening on port ${port}`));

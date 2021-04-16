// Access the input fields in the Customer Registration document
const cName = document.customerReg.customerName;
const nin = document.customerReg.national_Id;
const telePhone = document.customerReg.phone_Number;
const loc = document.customerReg.location;
const serviceType = document.customerReg.serviceType;
const truckNo = document.customerReg.truckNumber;
const payment_Type = document.customerReg.paymentType;

// Error Display

// Customer Names error message
var cNameError = (message)=>{
     let cname_Err = document.getElementById('custom_Name');
    cname_Err.innerText = message;
}

// National Id error message
const nationalIdError = (message)=>{
    let nin_Err = document.getElementById('cNIN');
    nin_Err.innerText = message;
}

// Phone number error message
const phoneNumError = (message)=>{
    const tele_Err = document.getElementById('cTel');
    tele_Err.innerText = message;
}

// Location Error message
const locationError = (message)=>{
    let loc_Err = document.getElementById('cusLoc');
    loc_Err.innerText = message;
}

// Service type error message
const servicetypeError = (message)=>{
    let service_Err = document.getElementById('cusServ');
    service_Err.innerText = message;
}

// Truck number error message
const truckNumberError = (message)=>{
    let truck_Err = document.getElementById('trucks_E');
    truck_Err.innerText = message;
}

// Payment type error message
const paymentError = (message)=>{
    let payment_Err = document.getElementById('pay_Err');
    payment_Err.innerText = message;
}

// Event Listeners for the constants

cName.addEventListener('blur',cName_verify,true);
nin.addEventListener('blur',nin_verify,true);
telePhone.addEventListener('blur',telephone_verify,true);
loc.addEventListener('blur',location_verify,true);
serviceType.addEventListener('blur',serviceType_verify,true);
truckNo.addEventListener('blur',truckNo_verify,true);
payment_Type.addEventListener('blur',payment_Type_verify,true);

// Validations

function validate(){

    // Customer input field validation
    if(cName.value == ''){
        cName.style.border = '2px solid red';
        cNameError('Please insert a Customer Name !');
        cName.focus();
        return false;
    }

      // Location input field validation
      if(loc.value == ''){
        loc.style.border = '2px solid red';
        locationError('Please insert customer Location !');
        loc.focus();
        return false;
    }

    // NIN input field validation
    if(nin.value == ''){
        nin.style.border = '2px solid red';
        nationalIdError('Please insert a National Identity Number !');
        nin.focus();
        return false;
    }

    // Phone number input field validation
    if(telephone.value == ''){
        telePhone.style.border = '2px solid red';
        phoneNumError('Please insert a phone number !');
        telePhone.focus();
        return false;
    }


    // Service Type input field validation
    if(serviceType.value == ''){
        serviceType.style.border = '2px solid red';
        servicetypeError('Please Select a service type!');
        serviceType.focus();
        return false;
    }

    // Numer of trucks input field validation
    if(truckNo.value == ''){
        truckNo.style.border = '2px solid red';
        truckNumberError('Please select number of Trucks needed !');
        truckNo.focus();
        return false;
    }

    // Payment style input field validation
    if(payment_Type.value == ''){
        payment_Type.style.border = '2px solid red';
        paymentError('Please select a Payment type !');
        payment_Type.focus();
        return false;
    }


};


// Regular expressions 
const nameregExp = /^.{2,50}[a-zA-Z].*[\s\.]*$/;
const ninExp = /([C-M0-9A-Z0-9A-Z]{14})/;// regular Expression for National Id
const phoneExp = /^[\+\0-9a-zA-Z]+$/; // Regular expression for the phone number field


// Event Handlers
// Customer Names event Handler
function cName_verify(){
    if(cName.value != '' && cName.value.match(nameregExp)){
        cName.style.border = '1px solid green';
        cNameError('')
        return true;
    }
    else{
        cName.style.border = '2px solid red';
        cNameError('Customer Names should be letters only between 2 and 50 characters !')
        cName.focus();
        return false;
    }
}

// Customer National Id Event Hnadler
function nin_verify(){
    if(nin.value != '' && nin.value.match(ninExp)){
        nin.style.border = '1px solid green';
        nationalIdError('')
        return true;
    }
    else{
        nin.style.border = '2px solid red';
        nationalIdError('Please insert a valid National Identity number!')
        nin.focus();
        return false;
    }
}

// Customer Location Event Handler
function location_verify (){
    if(loc.value != ''){
        loc.style.border = '1px solid green';
        locationError('');
        return true;
    }
    else{
        loc.style.border = '2px solid red';
        locationError('Please insert customer Location');
        loc.focus();
        return false;
    }
}

// Customer Phone number Event Hnadler
function telephone_verify(){
    if(telePhone.value != '' && telePhone.value.match(phoneExp) && telePhone.value.length == 13){
        telePhone.style.border = '1px solid green';
        phoneNumError('');
        return true;
    }
    else{
        telePhone.style.border = '2px solid red';
        phoneNumError('Phone number should start with +256 and have atleast 13  characters');
        telePhone.focus();
        return false;
    }
}

// Truck numbers required event handler
function truckNo_verify(){
    if(truckNo.value != ''){
        truckNo.style.border = '1px solid green';
        truckNumberError('');
        return true;
    }
    else{
        return false;
    }
}

// Service type event Handler
function serviceType_verify (){
    if(serviceType.value != ''){
        serviceType.style.border = '1px solid green'
        servicetypeError('');
        return true;
    }
    else{
        return false;
    }
}

// Customer Payments event Handler

function payment_Type_verify(){
    if(payment_Type.value != ''){
        payment_Type.style.border = '1px solid green'
        paymentError('');
        return true;
    }
    else{
        return false;
    }
}





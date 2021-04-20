// Access fields of the Document
const cusTomer = document.orderForm.customerName;
const driver = document.orderForm.driverName;
const condN = document.orderForm.condNumber;
const truckL = document.orderForm.truckLocation;
const dt = document.orderForm.date;
const nxtD = document.orderForm.nxtDest;
const truckCode = document.orderForm.truckCod;

// Error Messages

// Customer Filed Error message

const customer_Error = (message)=>{
    let cusErr = document.getElementById('custoMer');
    cusErr.innerText = message;
}
// Driver field Error

const drError = (message)=>{
    let driErr = document.getElementById('driv');
    driErr.innerText = message;
};

// Conductor Number field Error
const cond_Err = (message)=>{
    let condErr = document.getElementById('cond');
    condErr.innerText = message;
};

// Truck number field error
const truck_Err = (message)=>{
    let truckErr = document.getElementById('truck');
    truckErr.innerText = message;
};

// Date field error
const dt_Err = (message)=>{
    let dtErr = document.getElementById('dAt');
    dtErr.textContent = message;
};

// Next Destination field error
const nxtD_Err = (message)=>{
    let nxDErr = document.getElementById('dest');
    nxDErr.innerText = message;
};

// Truck Code number field Error
const tCode_Err = (message)=>{
    let tCErr = document.getElementById('tcode');
    tCErr.innerText = message;
};

// Add Event Listeners to the constants representing the fields 
cusTomer.addEventListener('blur',cus_verify,true);
driver.addEventListener('blur',driver_verify,true);
condN.addEventListener('blur',cond_verify,true);
truckL.addEventListener('blur',truckL_verify,true);
dt.addEventListener('blur',dt_verify,true);
nxtD.addEventListener('blur',nxtD_verify,true);
truckCode.addEventListener('blur',truckC_verify,true);


// Validations
function validate(){

    // Customer Name field validaiton
    if(cusTomer.value == 'Select the Customer *'){
        customer_Error('Please select a Customer Name from the List ');
        cusTomer.focus();
        return false;
    }
    
    // Date Field validaiton
    if(dt.value == ''){
        dt_Err('Please select Date!');
        dt.focus();
        return false;
    }

    // truck Code field validation
    if(truckCode.value == 'Select Truck Code Number *'){
        tCode_Err('Please select a Truck Code number !');
        truckCode.focus();
        return false;

    }
    
    // Driver Name field validation
    if(driver.value == 'Choose a Driver *'){
        drError('Please select a Driver from the List !');
        driver.focus();
        return false;
    }

    // Conductor number field validation
    if(condN.value == 'Number of Conductors *'){
        cond_Err('please select the number of Conductors !')
        condN.focus();
        return false;
    }

    // truck Location field validation
    if(truckL.value == ''){
        truckL.style.border = '2px solid red';
        truck_Err('Field Cannot be left Empty!');
        truckL.focus();
        return false;

    }   
    
    // Next destination field validation
    if(nxtD.value == ''){
        nxtD.style.border = '2px solid red';
        nxtD_Err('Field Cannot be left Empty!');
        nxtD.focus();
        return false;

    }    
};

// Event Handlers for the fields

// Customer Name Event Handler
function cus_verify(){
    if( cusTomer.value != 'Select the Customer *'){
        cusTomer.style.border = '1px solid green';
        customer_Error('');
        return true;
    }
    else{
        cusTomer.focus();
        return false;
    }
};

// date field Event handler
function dt_verify(){
    if( dt.value != ''){
        dt.style.border = '1px solid green';
        dt_Err('');
        return true;

    }
    else{
        dt_Err('Please insert a date!');
        dt.focus();
        return false;
    }
};


// TRUCK code number field Event handler
function truckC_verify(){
    if( truckCode.value != 'Select Truck Code Number *'){        
        truckCode.style.border = '1px solid green';
        tCode_Err('');
        return true;
    }
    else{
        truckCode.focus();
        return false;
    }
};

// Driver field Event handler
function driver_verify(){

    if( driver.value != 'Choose a Driver *'){
        driver.style.border = '1px solid green';
        drError('');
        return true;
    }
    else{
        driver.focus();
        return false;
    }
};

// Conductor number field Event handler
function cond_verify(){
    if( condN != 'Number of Conductors *'){
        condN.style.border = '1px solid green';
        cond_Err('');
        return true;

    }
    else{
        condN.focus();
        return false;
    }
};


// truck number field Event handler
function truckL_verify(){
    if( truckL.value != ''){
        truckL.style.border = '1px solid green';
        truck_Err('');
        return true;

    }
    else{
        truckL.style.border = '2px solid red';
        truck_Err('Please insert the Location of the truck !');
        truckL.focus();
        return false;
    }
};

// next destination field Event handler
function nxtD_verify(){
    if( nxtD.value != ''){
        nxtD.style.border = '1px solid green';
        nxtD_Err('');
        return true;

    }
    else{
        nxtD.style.border = '2px solid red';
        nxtD_Err('Please insert the next truck destination!');
        nxtD.focus();
        return false;
    }
};

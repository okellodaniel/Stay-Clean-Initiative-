// Access fields of the Document
const driver = document.orderForm.driverName;
const condN = document.orderForm.condNumber;
const truckL = document.orderForm.truckLocation;
const dt = document.orderForm.date;
const nxtD = document.orderForm.nxtDest;
const truckCode = document.orderForm.truckCod;

// Error Messages
// Driver field Error
const driver_Err = (message)=>{
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
// driver.addEventListener('blur',driver_verify,true);
condN.addEventListener('blur',cond_verify,true);
truckL.addEventListener('blur',truckL_verify,true);
dt.addEventListener('blur',dt_verify,true);
nxtD.addEventListener('blur',nxtD_verify,true);
truckCode.addEventListener('blur',truckC_verify,true);


// Validations
function validate(){

    // Driver field validation
    if(driver.value == ''){
        driver.style.border = '2px solid red';
        driver_Err('Field Cannot be left Empty!');
        driver.focus();
        return false;
    }

    // Conductor number field validation
    if(condN.value == ''){
        condN.style.border = '2px solid red';
        cond_Err('Field Cannot be left Empty!')
        condN.focus();
        return false;
    }

    // truck Number field validation
    if(truckL.value == ''){
        truckL.style.border = '2px solid red';
        truck_Err('Field Cannot be left Empty!');
        truckL.focus();
        return false;

    }

    // Date Field validaiton
    if(dt.value == ''){
        dt.style.border = '2px solid red';
        dt_Err('Field Cannot be left Empty!');
        dt.focus();
        return false;

    }
    
    // Next destination field validation
    if(nxtD.value == ''){
        nxtD.style.border = '2px solid red';
        nxtD_Err('Field Cannot be left Empty!');
        nxtD.focus();
        return false;

    }

    // truck Code field validation
    if(truckCode.value == ''){
        truckCode.style.border = '2px solid red';
        tCode_Err('Field Cannot be left Empty!');
        truckCode.focus();
        return false;

    }
};

// Event Handlers for the fields

// Driver field Event handler
function driver_verify(){

    if( driver.value != ''){
        driver.style.border = '1px solid green';
        return true;
    }
    else{
        driver.style.border = '2px solid red';
        driver_Err('Insert a value');
        return false;
    }
};

// Conductor number field Event handler
function cond_verify(){
    if( condN!= ''){
        condN.style.border = '1px solid green';
        return true;

    }
    else{
        condN.style.border = '2px solid red';
        cond_Err('Please select the number of conductors');
        return false;
    }
};

// truck number field Event handler
function truckL_verify(){
    if( truckL.value != ''){
        truckL.style.border = '1px solid green';
        return true;

    }
    else{
        truckL.style.border = '2px solid red';
        truck_Err('Please select the number of trucks');
        return false;
    }
};

// date field Event handler
function dt_verify(){
    if( dt.value != ''){
        dt.style.border = '1px solid green';
        return true;

    }
    else{
        dt.style.border = '2px solid red';
        dt_Err('Please insert a date!')
        return false;
    }
};

// next destination field Event handler
function nxtD_verify(){
    if( nxtD.value != ''){
        nxtD.style.border = '1px solid green';
        return true;

    }
    else{
        nxtD.style.border = '2px solid red';
        nxtD_Err('Please insert a next destination');
        return false;
    }
};

// TRUCK code number field Event handler
function truckC_verify(){
    if( truckCode.value != ''){
        truckCode.value.style.border = '1px solid green';
        return true;

    }
    else{
        truckCode.value.style.border = '2px solid red';
        tCode_Err('Please Select a truck code!');
        return false;
    }
};
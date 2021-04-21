// Error messages 
// Truck model Error messages
const truckMakeError = (message)=>{
    const truckMErr = document.getElementById('t_make');
    truckMErr.innerText = message;
}

// Truck model Error message
const truckModelError = (message)=>{
    const truckModelErr = document.getElementById('t_model');
    truckModelErr.innerText = message;
}

// Truck registration Error message
const truckRegistrationError = (message)=>{
    const truckRegErr = document.getElementById('t_reg');
    truckRegErr.innerText = message;
}

// Truck Code Error message
const truckCodeError = (message)=>{
    const truckCErr = document.getElementById('tCode');
    truckCErr.innerText = message;
}

// Truck Driver Error Message
const truckDrErr = (message)=>{
    const trDErr = document.getElementById('tdriv');
    trDErr.innerText = message;
}

// Accessing fields of the html document
const truckMake = document.truckReg.truckMake;
const truckModel = document.truckReg.truckModel;
const truckRegNum = document.truckReg.truckRegNo;
const truckCode = document.truckReg.truckCode;
const truckDriv = document.truckReg.servType;

// Add Event listeners
truckMake.addEventListener('blur',truckMake_verify,true);
truckModel.addEventListener('blur',truckModel_verify,true);
truckRegNum.addEventListener('blur',truckReg_verify,true);
truckCode.addEventListener('blur',truckCode_verify,true);
truckDriv.addEventListener('blur',truckDriv_verify,true);

// Validations
function validate(){

    // Truck Make validation
    if(truckMake.value == ''){
        truckMake.style.border = '2px solid red';
        truckMakeError('Please fill in the field');
        truckMake.focus();
        return false;
    }

    // Truck model validation
    if(truckModel.value == ''){
        truckModel.style.border = '2px solid red';
        truckModelError('Please fill in the field');
        truckModel.focus();
        return false;
    }

    // Truck registration number validation
    if(truckRegNum.value == ''){
        truckRegNum.style.border = '2px solid red';
        truckRegistrationError('Please fill in the field');
        truckRegNum.focus();
        return false;
    }

    // truck code number validation
    if(truckCode.value == ''){
        truckCode.style.border = '2px solid red';
        truckCodeError('Please fill in the field');
        truckCode.focus();
        return false;
    }

    // truck code number validation
    if(truckDriv.value == 'Truck service *'){
        truckDrErr ('Please Select service Type');
        truckDriv.focus();
        return false;
    }
}


// Regex Equations
const truckCodeRegex = /([A-Z]{3}[0-9]{3})/;

// Event Handlers
// Truck make Event Handler
function truckMake_verify(){
    if(truckMake.value != ''){
        truckMake.style.border = '1px solid green';
        truckMakeError('');
        return true;
    }
    else{

        truckMake.style.border = '2px solid red';
        truckMakeError('Please fill in the field');
        truckMake.focus();
        return false;
    }
}

// Truck Model Event Handler
function truckModel_verify(){
    if(truckModel.value != ''){
        truckModel.style.border = '1px solid green';
        truckModelError('');
        return true;
    }
    else{
        truckModel.style.border = '2px solid red';
        truckModelError('Please fill in the field');
        truckModel.focus();
        return false;
    }
}

// Truck Registration Number Event Handler
function truckReg_verify(){
    if(truckRegNum.value != ''){
        truckRegNum.style.border = '1px solid green';
        truckRegistrationError('');
        return true;
    }
    else{
        truckRegNum.style.border = '2px solid red';
        truckRegistrationError('Please fill in the field');
        truckRegNum.focus();
        return false;
    }
}

// Truck Code verification Handler
function truckCode_verify(){
    if(truckCode.value != '' && truckCode.value.match(truckCodeRegex)){
        truckCode.style.border = '1px solid green';
        truckCodeError('');
        return true;
    }
    else{
        truckCode.style.border = '2px solid red';
        truckCodeError('Please fill in the field');
        truckCode.focus();
        return false;
    }
}

// Truck Driver field verification Handler
function truckDriv_verify(){
    if(truckDriv.value != 'Truck service *'){
        truckDriv.style.border = '1px solid green';
        truckDrErr('');
        return true;
    }
    else{
        truckDriv.focus();
        return false;
    }
}
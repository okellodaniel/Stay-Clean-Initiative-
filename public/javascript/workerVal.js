
// Worker Minimum Age 
const worker_Age = 18;

// Declaring the Date

const date = Date.now();

// Accessing the input fields within the worker Html document
const firstName = document.workerReg.firstName;
const lastName = document.workerReg.secondName;
const nin = document.workerReg.natId;
const d_lic = document.workerReg.drivLic;
const dofBirth = document.workerReg.dateOfBirth;
const sex = document.workerReg.gender;
const role = document.workerReg.position;


// Error message display
// First name field error message
const firstNameError = (message)=>{
    let fname_Err = document.getElementById('fName');
    fname_Err.innerText = message
}

// Last Name field error message
const lastNameError = (message)=>{
    let lname_Err = document.getElementById('lName');
    lname_Err.innerText = message
}

// National Identity number Error Message
const ninError = (message)=>{
    let nin_Err = document.getElementById('valNIN');
    nin_Err.innerText = message
}

// Driver d_lic Error Message
const dLicenError = (message)=>{
    let dlError = document.getElementById('drleRR');
    dlError.innerText = message
}

// Date of Birth Error Message
const dateOfBirthError = (message)=>{
    let dateOfBirth_Err = document.getElementById('dOB');
    dateOfBirth_Err.innerText = message
}

// Gender field Error message
const genderError = (message)=>{
    let gender_Err = document.getElementById('wGend');
    gender_Err.innerText = message
}

// Role field Error message
const roleError = (message)=>{
    let role_Err = document.getElementById('role');
    role_Err.innerText = message
}



// Event Listeners for the constants

firstName.addEventListener('blur',firstName_verify,true);
lastName.addEventListener('blur',lastName_verify,true);
nin.addEventListener('blur',niN_verify,true);
d_lic.addEventListener('blur',dLicense_verify,true);
dofBirth.addEventListener('blur',dOb_verify,true);

// Validations

function validate(){
    // First Name field validation
    if(firstName.value == ''){
        firstName.style.border = '2px solid red';
        firstNameError('Please insert a First Name');
        firstName.focus();
        return false;
    }

    // Last field validation
    if(lastName.value == ''){
        lastName.style.border = '2px solid red';
        lastNameError('Please insert a Last Name');
        lastName.focus();
        return false;
    }

    // National Identity Number field validation
    if(nin.value == ''){
        nin.style.border = '2px solid red';
        ninError('Please insert a National Identity Number');
        nin.focus();
        return false;
    }

    // Drivers License field validation
    if(d_lic.value == ''){
        d_lic.style.border = '2px solid red';
        dLicenError('Please insert a Driver\`s License');
        d_lic.focus();
        return false;
    }

    // Date of birth field validation
    if(dofBirth.value == ''){
        dofBirth.style.border = '2px solid red';
        dateOfBirthError('Please select Date of Birth');
        dofBirth.focus();
        return false;
    }

    // Gender field validation
    if(sex.value === 'false'){
        sex.style.border = '2px solid red';
        genderError('Please select a Gender !');
        sex.focus();
        return false;
    }

    // Role field validation

    if(role.value === 'false'){
        role.style.border = '2px solid red';
        roleError('Please select a role');
        role.focus();
        return false;
    }

    // // Driver Age specification
    //
    // if(sex.value === Driver && (dofBirth.value <= 1990)){
    //     dofBirth.style.border = '1px solid red';
    //     dateOfBirthError('Driver should atleast be 30 years of Age');
    //     dofBirth.focus();
    //     sex.focus();
    //
    // }

}

// Regular Expressions
const nameRegExp = /[A-Z][a-z]{2,50}/; // Regular expression for names
const ninRegExp = /([C-M][0-9A-Z0-9A-Z]{14})/;//regular Expression for National Id


// Event Handlers

// First Event Handler
function firstName_verify(){
    if(firstName.value != '' && firstName.value.match(nameRegExp)){
        firstName.style.border = '1px solid green';
        firstNameError('');
        return true;
    }
    else{
        firstName.style.border = '2px solid red';
        firstNameError('Name should have letters only, and have atleast 2 characters, atmost 50 characters');
        firstName.focus();
        return false;
    }
}


// Last name Event Handler
function lastName_verify(){
    if(lastName.value != '' && lastName.value.match(nameRegExp)){
        lastName.style.border = '1px solid green';
        lastNameError('');
        return true;
    }
    else{
        lastName.style.border = '2px solid red';
        lastNameError('Name should have letters only, and have at least 2 characters, at most 50 characters');
        lastName.focus();
        return false;
    }
}


// National Identity number Event Handler
function niN_verify(){
    if(nin.value != '' && nin.value.match(ninRegExp)){
        nin.style.border = '1px solid green';
        ninError('');
        return true;
    }
    else{
        nin.style.border = '2px solid red';
        ninError('Please insert a valid NIN');
        nin.focus();
        return false;
    }
}


// Drivers License Event Handler
function dLicense_verify(){
    if(d_lic.value != ''){
        d_lic.style.border = '1px solid green';
        dLicenError('');
        return true;
    }
    else{
        d_lic.style.border = '2px solid red';
        dLicenError('Please insert a valid Drivers License');
        d_lic.focus();
        return false;
    }
}


// Date of Birth Event Handler
function dOb_verify(){

    if(dofBirth.value != ''){
        dofBirth.style.border = '1px solid green';
        dateOfBirthError('');
        return true;
    }

    else{
        dofBirth.style.border = '2px solid red';
        dateOfBirthError('Please insert a valid date of birth');
        dofBirth.focus();
        return false;
    }

}


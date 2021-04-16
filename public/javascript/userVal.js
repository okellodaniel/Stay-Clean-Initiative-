// Access the Input fields of the Html document
const fname = document.regForm.firstName;
const lname = document.regForm.lastName;
const user = document.regForm.username;
const pass = document.regForm.passCode;
const passConf = document.regForm.confpassCode;

// Error messages to be displayed
//First name field error
const firstNameError = (message)=>{
    let fnErr = document.getElementById('first_Name');
    fnErr.innerText = message;
}     

//function for last Name field error 
const lastNameError = (message)=>{
    let lnErr = document.getElementById('last_Name');
    lnErr.innerText = message;
} 

//Function for username field error
const usernameError = (message)=>{
    let usErr = document.getElementById('user_Name');
    usErr.innerText = message;
    
}    

//function for password field error
const passwordError = (message)=>{
    let pdErr = document.getElementById('password');
    pdErr.innerText = message;
}

// function for Confirm password field error
const confirmPasswordError = (message)=>{
    let cpwdErr = document.getElementById('password_confirm');
    cpwdErr.innerText = message;
}


// Event Listeners of the constants representing the fields
fname.addEventListener('blur',fname_verify,true);
lname.addEventListener('blur',lname_verify,true);
user.addEventListener('blur',userId_verify,true);
pass.addEventListener('blur',userPass_verify,true);
passConf.addEventListener('blur',userPassconf_verify,true);


// Validations

function validate(){    

    //First name Field validation
    if(fname.value == ''){
        fname.style.border = '2px solid red';
        firstNameError('Please insert a Name');
        fname.focus();
        return false;
    }

    // Last Name field validation
    if(lname.value == ''){
        lname.style.border = '2px solid red';
        lastNameError('Please insert a Name')
        lname.focus();
        return false;
    }


    // Username Field validation
    if(user.value == ''){
        user.style.border = '2px solid red';
        usernameError('Please insert a username');
        user.focus();
        return false;
    }


    // Password Field validation
    if(pass.value == ''){
        pass.style.border = '2px solid red';
        passwordError('Please insert a password')
        pass.focus();
        return false;
    }

    // Password Confirmation Field validation
    if(passConf.value == ''){
        passConf.style.border = '2px solid red';
        confirmPasswordError('Please insert a password')
        passConf.focus();
        return false;
    }

    // match passwords
    if(pass.value != passConf.value){
        passConf.style.border = '2px solid red';
        confirmPasswordError('Password doesnot match')
        passConf.focus();
        return false;
    }
    
}

    

//  Regular Expressions
const nameRegex = /^.{2,50}[A-Za-z]+$/; // Name regular expression, allows Letters only, capital or small
const usernameExp = /([STC0-9]{5})\w+/; // Regular expression for username. Starts with STC followed by numbers
const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{5,}$/;//  regular expression for password field,ensures a minimum of 5 characters, at least one letter, one number and one special character. 


// Event Handlers

// First Name Event Handler

function fname_verify(){
    if(fname.value != '' && fname.value.match(nameRegex)){
        fname.style.border = '1px solid green';
        firstNameError('');
        return true;
    }
    else{
        fname.style.border = '2px solid red';
        firstNameError('Name should be letters only,atleast 2 \n characters and atmost 50 characters')
    }
}

// Last name Event handler
function lname_verify(){
    if(lname.value != '' && lname.value.match(nameRegex)){
        lname.style.border = '1px solid green';
        lastNameError('');
        return true;
    }
    else{
        lname.style.border = '2px solid red';
        lastNameError('Name should be letters only,atleast 2 \n characters and atmost 50 characters')
    }
}

// Username Event handler
function userId_verify(){
    
    if(user.value != '' && user.value.match(usernameExp)){
        user.style.border = '1px solid green';
        usernameError('')
        return true;
    }
    else{
        user.style.border = '2px solid red';
        usernameError('Username should be atleast 5 \n characters starting with STC');
        user.focus();
        return false;
    }

}

// Password Event handler

function userPass_verify(){
    if(pass.value != '' && pass.value.match(passReg)){
        pass.style.border = '1px solid green';
        passwordError('');
        return true;
    }

    else{
        pass.style.border = '2px solid red';
        passwordError('Password should contain atlease a \n number, letter and special character');
        pass.focus();
        return false;
    }
}

// Password confirmation field

function userPassconf_verify (){
    if(passConf.value != ''){
        passConf.style.border = '1px solid green';
        confirmPasswordError('');
        return true;
    }
    else{
        passConf.style.border = '2px solid red';
        confirmPasswordError('Please insert a valid password')
        return false;
    }
}
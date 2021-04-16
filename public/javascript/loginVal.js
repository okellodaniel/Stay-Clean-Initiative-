
// Access the Input fields of the Html document

const loginUserId = document.signInForm.logId;
const loginPasscode = document.signInForm.logPass;


// Error messages to be displayed

//Function for username field error
const usernameError = (message)=>{
    let userErr = document.getElementById('userErr');
    userErr.innerText = message;
    
}    
//function for password field error
const passwordError = (message)=>{
    let paRR = document.getElementById('log_PassW');
    paRR.innerText = message;
}


// Event Listeners of the constants representing the fields

loginUserId.addEventListener('blur',userId_verify,true);
loginPasscode.addEventListener('blur',userPass_verify,true);


// Validations

function validate(){    

    // Username Field validation
    if(loginUserId.value == ''){
        loginUserId.style.border = '2px solid red';
        usernameError('Please insert a Username')
        loginUserId.focus();
        return false;
    }


    // Password Field validation
    if(loginPasscode.value == ''){
        loginPasscode.style.border = '2px solid red';
        passwordError('Please insert a Password');
        loginPasscode.focus();
        return false;
    }
    
}
    

// Regular Expressions

const nameExp = /([STC0-9]{5})\w+/; // Regular expression for username. Starts with STC followed by numbers
const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{5,}$/;//  regular expression for password field,ensures a minimum of 5 characters, at least one letter, one number and one special character. 


// Event Handlers

// Username event Handler
function userId_verify(){
    
    if(loginUserId.value != '' && loginUserId.value.match(nameExp)){
        loginUserId.style.border = '2px solid green';
        usernameError('');
        return true;
    }
    else{
        loginUserId.style.border = '2px solid red';
        usernameError('Username should be atleast 5 characters \n starting with STC');
        loginUserId.focus();
        return false;
    }

}

// Password Event listener

function userPass_verify(){
    if(loginPasscode.value != '' && loginPasscode.value.match(passReg)){
        loginPasscode.style.border = '2px solid green';
        passwordError('');
        return true;
    }

    else{
        loginPasscode.style.border = '2px solid red';
        passwordError('Password should contain atlease a number,\n letter and special character');
        loginPasscode.focus();
        return false;
    }
}
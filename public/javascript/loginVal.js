// Regular Expressions

const nameExp = /([STC0-9]{5})\w+/; // Regular expression for username. Starts with STC followed by numbers
const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{5,}$/;//  regular expression for password field,ensures a minimum of 5 characters, at least one letter, one number and one special character. 


// Access the Input fields of the Html document

const user_name = document.login_form.user_Id;
const user_pass = document.login_form.user_Code;


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

user_name.addEventListener('blur',userId_verify,true);
user_pass.addEventListener('blur',userPass_verify,true);


// Validations

function validate(){    

    // Username Field validation
    if(user_name.value == ''){
        user_name.style.border = '1px solid red';
        usernameError('Please insert a Username')
        user_name.focus();
        return false;
    }


    // Password Field validation
    if(user_pass.value == ''){
        user_pass.style.border = '1px solid red';
        passwordError('Please insert a Password');
        user_pass.focus();
        return false;
    }
    
}
    
// Event Handlers

// Username event Handler
function userId_verify(){
    
    if(user_name.value != '' && user_name.value.match(nameExp)){
        user_name.style.border = '1px solid green';
        usernameError('');
        return true;
    }
    else{
        user_name.style.border = '1px solid red';
        usernameError('Username should be atleast 5 characters \n starting with STC');
        user_name.focus();
        return false;
    }

}

// Password Event listener

function userPass_verify(){
    if(user_pass.value != '' && user_pass.value.match(passReg)){
        user_pass.style.border = '1px solid green';
        passwordError('');
        return true;
    }

    else{
        user_pass.style.border = '1px solid red';
        passwordError('Password should contain atlease a number,\n letter and special character');
        user_pass.focus();
        return false;
    }
}
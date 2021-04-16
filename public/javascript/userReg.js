//Functions for Error messages
//First name field error
const firstNameError = (message)=>{
    //access small query  
    const firstname = document.getElementById('first_Name');
    //Defining error text to be shown as message
    firstname.innerText = message;
    
}     
//function for last Name field error 
const lastNameError = (message)=>{
    //access small query  
    const lastname = document.getElementById('last_Name');
    //Defining error text to be shown as message
    lastname.innerText = message;
}  
//Function for username field error
const usernameError = (message)=>{
    //access small query  
    const username = document.getElementById('user_Name');
    //Defining error text to be shown as message
    username.innerText = message;
    
}     
//function for password field error
var passwordError = (message)=>{
    //Access span query
    const password = document.getElementById('password');
    //Error message
    password.innerText = message;
}
// function for Confirm password field error
var confirmPasswordError = (message)=>{
    //Access span query
    const confpassword = document.getElementById('password_confirm');
    //Error message
    confpassword.innerText = message;
}

//Regular Expressions

//Regular expression for the firstname,lastname and username fields specifying letters only, allowing a minimum if 2 characters and a maximum of 20.
var nameregExp = /^[A-Za-z]lnamelname+$/;

//regular expression for password field,ensures a minimum of Five characters, at least one Capital letter and one number, a special chracter and small letter.
var passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{5,}$/;

//Regular expression for username field, should start with STC followed by numbers, and has a maximum of 5 characters

var usernameReg = /([STC0-9]{5})\w+/;

//Input fields
//first name field

var firstName = ()=>{
    // declaring firstName variable 
    var firstName = document.regForm.firstName;

    //condition for empty firstname  field
    if(firstName.value ===''){
        firstName.style.border = '2px solid red';//red border returned
        firstNameError('Please insert First Name!');//calling error, with text color
        firstName.focus();
        return false;
    }
    else{
        firstName.style.border = '2px solid green'
    }

    //match the regular expression
    if(firstName.value.match(nameregExp)){
        firstName.style.border = '2px solid green'; //return green border
        firstName.focus();
        return true;
    }
    else {
        firstName.style.border = '2px solid red';//red border returned
        firstName.style.color = 'red';//red text returned
        firstNameError('Use alphabet letters only!');//calling error, with text color
        firstName.focus();
        return false;
    }
}

//last name field validation 
var lastName = ()=>{
    // declaring firstName variable 
    var lastName = document.regForm.lastName;

    //condition for empty last name  field
    if(lastName.value ===''){
        lastName.style.border = '2px solid red';//red border returned
        lastNameError('Please insert Last Name!');//calling error, with text color
        lastName.focus();
        return false;
    }
    else{
        lastName.style.border = '2px solid green'
    }
    //match the regular expression
    if(lastName.value.match(nameregExp)){
        lastName.style.border = '2px solid green'
        lastName.focus();
        return true;
    }
    else {
        lastName.style.border = '2px solid red';//red border returned
        lastName.style.color = 'red';//red text returned
        lastNameError('Use alphabet letters only!');//calling error, with text color
        lastName.focus();
        return false;
    }

}

//Username field
var userName=()=>{
    // declaring userName variable 
    var userName = document.regForm.username;

    //minimum number of characters for username field
    const usermin = 5;

     //condition for empty username  field
    if(userName.value ===''){
        userName.style.border = '2px solid red';//red border returned
        usernameError('Please insert a Username!');//calling error, with text color
        userName.focus();
        return false;
    }
    else{
        userName.style.border = '2px solid green'
    }

    //Condition for the minimum number of characters in the username field.
    if(userName.value.length < usermin){

        userName.style.border = '2px solid red';//red border returned
        userName.style.color = 'red';//red text returned
        usernameError('Username should have atleast 5 characters!');//calling error, with text color
        userName.focus();
        return false;
    }  

    //Condition for characters matching the characters in the Regex expression.
    if(userName.value.match(usernameReg)){
        userName.style.border = '2px solid green';
        userName.focus();
        return true;
    }
    else {
        userName.style.border = '2px solid red';//red border returned
        userName.style.color = 'red';//red text returned
        usernameError('Use a valid username');//calling error, with text color
        userName.focus();
        return false;
    }

}

//Password Field
var passWord = ()=>{
    //variable to access password field by name in input element in the html document.
    var passWord = document.regForm.passCode;

    //condition for empty password field.
    if(passWord.value === ''){
        passWord.style.border = '2px solid red';//red border returned
        passwordError('Password cannot be left empty!');//calling error, with text color
        passWord.focus();
        return false;
    }
    else{
        passWord.style.border = '2px solid green';//green border
    }

    //condition for matching of characters with the specification in the regular fucntion
    if(passWord.value.match(passRegExp)){
        passWord.focus();
        return true;
    }
    else{
        passWord.style.border = '2px solid red';//red border returned
        passwordError('Password should have atleast 5 characters with \n a number,and a Capita letter, small letter \n and a special character !');//calling error, with text color
        passWord.focus();
        return false;
    }

}

//Confirm password field
var passConfirm = ()=>{
    //variable to access confirm password field, by name.
    var passConfirm = document.regForm.confpassCode;

    // for empty confirm password field
    if(passConfirm.value ===''){
        passConfirm.style.border = '2px solid red';//red border returned
        confirmPasswordError('Password cannot be left empty!');//calling error, with text color
        passConfirm.focus();
        return false;
    }

}
//Password match validation
var password = document.getElementById('userpassword');
var confirmPassword = document.getElementById('confirmuserpassword');

var validatePassword = ()=>{
    if(password.value !== confirmPassword.value){
        confirmPassword.style.border = '2px solid red';//red border returned
        confirmPasswordError('Password mismatch!');//calling error, with text color
        confirmPassword.focus();
        return false;
    }
    else{
        confirmPassword.style.border = '2px solid green';
    };

};

//Validation function nesting username,lastname,firstname, password and confirm password functions
var validation = ()=>{
    if(userName()){}
    if(lastName()){}
    if(firstName()){}
    if(passWord()){}
    if(passConfirm()){}
    if(validatePassword()){}
}
//event listener that invokes the validation function on submitting
document.addEventListener('submit',validation);
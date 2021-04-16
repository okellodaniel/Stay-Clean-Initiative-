//functions for error messages in the username and password fields
//function for username field error 
var userNameError = (message)=>{
    //access small query  
    const small = document.querySelector('small');
    //Defining error text to be shown as message
    small.innerText = message;
    
}     

//fuction for password field error
var passwordError = (message)=>{
    //Access span query
    const span = document.querySelector('span');
    //Error messgae
    span.innerText = message;
}


//Username field
var userName = ()=>{

    //variable accessing input element by name
    var userName = document.login.username;
    //variable stating minimum number of characters in the username field.
    var min = 5;
    
    //Regular expression for username. Starts with STC followed by numbers
    const nameExp = /([STC0-9]{5})\w+/;

    //Condition for empty username field
    if(userName.value ===''){
        userName.style.border = '2px solid red';//red border returned
        userNameError('Username cannot be left empty');//calling error, with text color
        userName.focus();
        return false;
    }else{
        userName.style.border = '2px solid green';

    }
      //Condition for the minimum number of characters in the username field. 
      if(userName.value.length < min){
        userName.style.border = '2px solid red';//red border returned
        userNameError('Username should be atleast 5 characters!');//calling error, with text color
        userName.focus();
        return false;
    }
    else{
        userName.style.border = '2px solid green'
    }
    
    //Condition for characters matching the characters in the Regex expression.
    if(userName.value.match(nameExp)){
        userName.style.border = '2px solid green'
        userName.focus();
        return true;
    }
    else{
        userName.style.border = '2px solid red';//red border returned
        userName.style.color = 'red';//red text returned
        userNameError('Use alphabet letters only!');//calling error, with text color
        userName.focus();
        return false;
    }

  
}

//Password field
var passWord = ()=>{
    //variable to access password field by name in input element in the html document. 
    var passWord = document.login.passCode;

    //regular expression for password field,ensures a minimum of eight characters, at least one letter, one number and one special character. 
    var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{5,}$/;
   
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

    //condition for matching of characters with the specification in the regular function
    if(passWord.value.match(passReg)){
        passWord.focus();
        return true;
    }
    else{
        passWord.style.border = '2px solid red';//red border returned
        passwordError('password should be atleast 8 characters with \n a number, special character and a Letter');//calling error, with text color
        passWord.focus();
        return false;
    }
    
}


//Function validation nesting userName and passWord fucntions
var validation = ()=>{
    if(userName()){}
    if (passWord()){}

}
document.addEventListener('submit',validation)//event listener added to invoke validation fucntion on submitting.

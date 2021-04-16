
// regular expression for the name fields. Allows letter characters only and spaces.
const regExp = /^[a-zA-Z].*[\s\.]*$/;

//regular Expression for National Id

const ninExp = /([C-M0-9A-Z0-9A-Z]{14})/;

//Regular expression for the phone number field

const phoneExp = /^[\+\0-9a-zA-Z]+$/;

//mobile number field Length

const teleMin = 13;


// Error messages

// first name error  
var cNameError = (message)=>{
   
    cname.innerText = message;
}


//National id error message
var ninError = (message)=>{
    
    ninE.innerText = message;
}

//Phone number field error
var telePhoneError = (message)=>{
   
    tele.innerText = message;
}


// Access first name field
var cName = ()=>{
   

    if(cName.value ===''){
        
        cNameError(' ');
        cName.focus();
        return false;
    }
    else{
        cName.style.border = '2px solid green';
    };

    if(cName.value.match(regExp)){
        return true;
    }
    else{
        cName.style.border = '2px solid red';
        cNameError('Name field should have letters only');
        cName.focus();
        return false;
    };

};


// Access national Identity card field
var nin = ()=>{
    

    // empty National Identity card field
    if(nin.value === ''){
        nin.style.border = '2px solid red';
        ninError('Please insert a NIN!');
        nin.focus();
        return false;
    }
    else{
        nin.style.border = '2px solid green';
    };
    
    // match the regular expression in nin field
    if(nin.value.match(ninExp)){
        return true;
    }
    else{
        nin.style.border = '2px solid red';
        ninError('Please insert a valid NIN');
        nin.focus();
        return false;
    }
    
};

//Phone number field validation
var telePhone = ()=>{
    
    // for an empty phone number field
    if(telePhone.value === ''){
       
    }
    else{
        telePhone.style.border = '2px solid green';
    };

    // Length of phone number
    if(telePhone.value.length == teleMin){
        telePhone.style.border = '2px solid green';
    }
    else{
        telePhone.style.border = '2px solid red';
        telePhone.focus();
        telePhoneError('Phone number should be atleast 13 characters !');
        return false;
    }

    //Match the regular expression
    if(telePhone.value.match(phoneExp)){
        return true;
    }
    else{
        telePhone.style.border = '2px solid red';
        telePhone.focus();
        telePhoneError('Phone number should start with +256!');
        return false;
    };

};


var validate = ()=>{
    if(cName());
    if(nin());
    if(telePhone());
    
}
//event Listener,invoked on submitting.
document.addEventListener('submit',validate);
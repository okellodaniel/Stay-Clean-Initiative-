// regular expression for the name fields. Allows letter characters only.
const regExp = /^[A-Za-z]+$/;

//regular Expression for National Id

const ninExp = /([C-M0-9A-Z0-9A-Z]{14})/;


//Length of characters in the driving permit

const permitNo = 12;

// Error messages
// first name error  
var firstNameError = (message)=>{
    const fname = document.getElementById('fName');
    fname.innerText = message;
}

// second name error
var secondNameError = (message)=>{
    const sname = document.getElementById('lName');
    sname.innerText = message;
}

//National id error message

var ninError = (message)=>{
    const ninE = document.getElementById('valNIN');
    ninE.innerText = message;
}

// driver license error
var licenseError = (message)=>{
    const licenseE = document.getElementById('valDrL');
    licenseE.innerText = message;
}

// Access first name field
var firstName = ()=>{
    let firstName = document.workerReg.firstName;
    if(firstName.value ===''){
        firstName.style.border = '2px solid red';
        firstNameError(' First name cannot be left empty')
        firstName.focus();
        return false;
    }
    else{
        firstName.style.border = '2px solid green';
    };

    if(firstName.value.match(regExp)){
        return true;
    }
    else{
        firstName.style.border = '2px solid red';
        firstNameError('First name should have letters only!');
        firstName.focus();
    };

};

// Access second name field
var secondName = ()=>{
    let lastName = document.workerReg.secondName;
    // for empty firstname field
    if(lastName.value ===''){
        lastName.style.border = '2px solid red';
        secondNameError('Last Name cannot be left empty')
        lastName.focus();
        return false;
    }
    else{
        lastName.style.border = '2px solid green';
    };

    //match the regular expression
    if(lastName.value.match(regExp)){
        return true;
    }

    else{
        lastName.style.border = '2px solid red';
        secondNameError('Last name should have letters only!');
        lastName.focus();
        return false;
    };

};

// Access national Identity card field
var nin = ()=>{
    let nin = document.workerReg.nationalId;

    // empty National Identity card field
    if(nin.value === ''){
        nin.style.border = '2px solid red';
        ninError('Please insert a NIN!')
        nin.focus()
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
        ninError('Please insert a valid NIN!')
        nin.focus()
        return false;
    }
    
};


// Access drivers license field
var driversLicense = ()=>{
    let license = document.workerReg.drivingLicense;
    if(license.value === ''){
        license.style.border = '2px solid red';
        licenseError('Please insert a drivers License Number')
        license.focus()
        return false;
    }
    else{
        license.style.border = '2px solid green';
    };

    // length of values in permit field 
    if(license.value.length == permitNo){
        return true;
    }
    else{
        license.style.border = '2px solid red';
        licenseError('License number should have 12 characters!')
        license.focus()
        return false;
    }
};


var validate = ()=>{
    if(firstName());
    if(secondName());
    if(nin());
    if(driversLicense());
}
//event Listener,invoked on submitting.
document.addEventListener('submit',validate);
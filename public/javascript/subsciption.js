const serviceType = document.getElementById('serviceType');

serviceType.addEventListener('submit',subcribe)

function subscibe (e){
    const field = document.getElementByClass('subsciption').value;
    console.log(field);
    
    e.preventDefault();
}
const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validate_func();
    Radio_check();

});


function validate_func() {

    let f_name = document.getElementById("f-name").value;
    let character = /^[a-zA-Z]*$/;
    let l_name = document.getElementById("l-name").value;
    let email = document.getElementById("email").value;   
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phone = document.getElementById("phone").value;
    let number = /^\?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if(f_name == ""){
        document.getElementById('f-name-span').innerHTML = "*Required fields"
        return false;
    }
    else if(!f_name.match(character)){
        document.getElementById('f-name-span').innerHTML = "*Only characters allowed!.."
        return false;
    }  
    else if(l_name == ""){
        document.getElementById('l-name-span').innerHTML = "*Required fields"
        return false;
    }
    else if(!l_name.match(character)){
        document.getElementById('l-name-span').innerHTML = "*Only characters allowed!.."
        return false;
    } 

    else if(email == ""){
        document.getElementById('email-span').innerHTML = "*Required fields"
        return false;
    }
    else if(!email.match(pattern)){
        document.getElementById('email-span').innerHTML = "*Enter valid email-id!.."
        return false;
    }
    else if(phone == ""){
        document.getElementById('phone-span').innerHTML = "*Required fields"
        return false;
    }
    else if(isNaN(phone)){
        document.getElementById('phone-span').innerHTML = "*Enter only numbers";
        return false;
    }
    else if(!phone.match(number) == ""){
        document.getElementById('phone-span').innerHTML = "*Invalid number"
        return false;
    }
    else if(phone.length<10){
        document.getElementById('phone-span').innerHTML = "Mobile number must have 10 digits"
        return false;
    }
    else if(phone.length>10){
        document.getElementById('phone-span').innerHTML = "Mobile number must have 10 digits"
        return false;
    }
    else{
        alert("Form Submitted Successfully")
        location.reload();
    }

}

function Radio_check(){

    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    
    if(yes.checked == true){
        document.getElementById('website-url').removeAttribute('disabled')
    }
    else if(no.checked == true){
        document.getElementById('website-url').setAttribute('disabled', 'disabled')
    }
    else if(yes.checked == false){
        document.getElementById('chkyes-span').innerHTML = "*Required fields"
        return false;
    }
    else if(no.checked == false){
        document.getElementById('chkyes-span').innerHTML = "*Required fields"
        return false;
    }
}


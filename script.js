//usernmae validation

var userField = document.getElementById("user-field");
var userLabel = document.getElementById("user-label");
var usererror = document.getElementById("user-text");


//user function
function validateUserName(){

if(!userField.value.match(/^[A-Za-z\]*[A-Za-z]/)){

    userLabel.style.bottom = "45px";

//display errror if the input is invalid
    usererror.innerHTML="Enter valid input"
    usererror.style.color = "red" 
    userField.style.border ="2px solid red"
    usererror.style.top = "10%"
    usererror.style.top= "32%"
    return false;

}

//display valid if the input is valid
usererror.innerHTML="Uername Valid"; 
usererror.style.color = "green" 
userField.style.border ="2px solid green"
usererror.style.top = "32%"
return true;

}





//Email validation

var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var errormsg = document.getElementById("error-text");



// Email function

function validateEmail(){

//condition for the email validation
if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){

    emailLabel.style.bottom = "45px";

//display errror if the input is invalid
    errormsg.innerHTML="Enter valid input"
    errormsg.style.color = "red" 
    emailField.style.border ="2px solid red"
    errormsg.style.top = "10%"
    errormsg.style.top= "48%"
    return false;

}
//display vaid if the input value is correct
errormsg.innerHTML="Email Valid"; 
errormsg.style.color = "green" 
emailField.style.border ="2px solid green"
errormsg.style.top = "48%"
return true;
}




// function for the password inputs


const pswrd_1 = document.querySelector("#password_1");
const pswrd_2 = document.querySelector("#password_2");
const passwordText = document.querySelector("#pass-text");
const passwordText_2 = document.querySelector("#passs_text");
const showBtn = document.querySelector(".show")
var  fieldo = document.getElementsByClassName(".field")



function active(){

    if(pswrd_1.value.length >= 9){

        pswrd_2.removeAttribute("disabled", "")
        passwordText.innerHTML="Password Valid"
        passwordText.style.color = "green" 
        pswrd_1.style.border ="2px solid green"
        passwordText.style.top = "10%"
        passwordText.style.top= "64%"
    return true;
    }else{
        pswrd_2.setAttribute("disabled", "")
        passwordText.innerHTML="Enter valid input"
        passwordText.style.color = "red" 
        pswrd_1.style.border ="2px solid red"
        passwordText.style.top = "10%"
        passwordText.style.top= "64%"
    return false;
    }
}




 function active_2(){
    if(pswrd_1.value  != pswrd_2.value){
        


        showBtn.style.display = "block";
        showBtn.onclick = function(){
            if((pswrd_1.type == "password") && (pswrd_2.type == "password")){
                pswrd_1.type = "text";
                pswrd_2.type = "text";
                this.textContent = "Hide"
                this.classList.add("active")
            }else{
                pswrd_1.type = "password";
                pswrd_2.type = "password";
                this.textContent = "Show"
                this.classList.remove("active")

                showBtn.style.display = "none" 
            }
        }
    



        passwordText_2.innerHTML="Password not match"
        passwordText_2.style.color = "red" 
        pswrd_2.style.border ="2px solid red"
        passwordText_2.style.top = "10%"
        passwordText_2.style.top= "79%"
        return false;

}else{
    passwordText_2.innerHTML="Password match"
        passwordText_2.style.color = "green" 
        pswrd_2.style.border ="2px solid green"
        passwordText_2.style.top = "10%"
        passwordText_2.style.top= "79%"

        
    return true;


    
}

 }


//submit button function
// added eventlistener method so each input can display
//error message if the inputs has no value
var btn = document.getElementById("btn")
function btn(){
    alert("regis")
}



function submit(){
btn.addEventListener('click', validateEmail);
btn.addEventListener('click' , validateUserName);
btn.addEventListener('click', active);  
}







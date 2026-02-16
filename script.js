const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const loginbutton=document.getElementById('loginbutton')
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
const loginForm=document.getElementById('login');
const PLMAR=document.getElementById('PLMAR');
const DONE=document.getElementById('DONE');

const firstname=document.getElementById('fname')
const lastname=document.getElementById('lname')
const email=document.getElementById('email')
const password=document.getElementById('pass')
const contactnumber=document.getElementById('number')
const date=document.getElementById('birthday')
const values=document.getElementById('values')
const values1=document.getElementById('values1')
const values2=document.getElementById('values2')
const values3=document.getElementById('values3')
const values4=document.getElementById('values4')
const values5=document.getElementById('values5')

const email2=document.getElementById('email2')
const password2=document.getElementById('pass2')

signUpButton.addEventListener('click',function() {
    if(firstname.value == "" || lastname.value == "" || email.value == ""  || contactnumber.value =="" || password.value =="" 
        ||date.value==""  
    )
        {
            alert("No blank values allowed")
            return false;
        }
        else
        {
             true;
        }
            signInForm.style.display="none";
            signUpForm.style.display="block";
            loginForm.style.display="none";
            PLMAR.style.display="none";
            DONE.style.display="none";

})
signInButton.addEventListener('click', function(){
    signInForm.style.display="none";
    signUpForm.style.display="none";
    loginForm.style.display="block";
    PLMAR.style.display="none";
    DONE.style.display="none";

})

signUpButton.addEventListener('click', fun);
loginbutton.addEventListener('click', function(){
    if(email2.value == ""  ||  password2.value =="" 
       
    )
        {
            alert("Invalid Email or Password")
            return false;
        }
        else
        {
             true;
        }

    signInForm.style.display="none";
    signUpForm.style.display="none";
    loginForm.style.display="none";
    PLMAR.style.display="none";
    DONE.style.display="block";

})

function fun(){
    values.innerHTML="Firstname: " + firstname.value;
    values1.innerHTML="Lastname: " + lastname.value;
    values2.innerHTML="Email: " + email.value;
    values3.innerHTML="Password: " + password.value;
    values4.innerHTML="Contact num: " + contactnumber.value;
    values5.innerHTML="Birthdate: " + date.value;
}
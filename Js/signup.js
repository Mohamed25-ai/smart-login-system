var nameInputSignUp=document.querySelector("#formGroupExampleInput3");
var emailInputSignUp=document.querySelector("#formGroupExampleInput4");
var passwordlInputSignUp=document.querySelector("#formGroupExampleInput5");
var signUpButton=document.querySelector("#sign-up-button");

//all users.
var listOfUsers=[];

if(localStorage.getItem('users')!=null){
listOfUsers=JSON.parse(localStorage.getItem('users'));
}
else{
    listOfUsers=[];
}
//inpts validation
var nameRegex=/^[a-zA-Z][a-zA-Z0-9]{2,14}$/;
var emailRegex=/^[a-zA-Z0-9]{1,15}@[a-zA-Z0-9]{1,15}\.(com)$/;

//error-message
var emptyFileds=document.querySelector('.error-empty-message');
var nameErrorMessage=document.querySelector('.error-name-message');
var emailErrorMessage=document.querySelector('.error-email-message');
function addNewUser(){
    emptyFileds.innerHTML="";
    nameErrorMessage.innerHTML="";
    emailErrorMessage.innerHTML="";
    if(nameInputSignUp.value==""||emailInputSignUp.value==""||passwordlInputSignUp.value==""){
        emptyFileds.innerHTML=`<p class="text-danger">All inputs is required</p>`;
        return;
    }
    if(userIsExist()){
        emptyFileds.innerHTML=`<p class="text-danger">email already exists</p>`;
    }
    else{
        var userDetails={
            name:nameInputSignUp.value,
            email:emailInputSignUp.value,
            password:passwordlInputSignUp.value,
        };
        if(validateAllInputs(nameRegex,userDetails.name)&&validateAllInputs(emailRegex,userDetails.email)){
        listOfUsers.push(userDetails);
        localStorage.setItem('users',JSON.stringify(listOfUsers));
        emptyFileds.innerHTML=`<p class="text-success">Success</p>`;
        }
        else{
            if(!validateAllInputs(nameRegex,userDetails.name)){
                nameErrorMessage.innerHTML=`<p class="text-danger">Enter a valid name</p>`;
            }
            if(!validateAllInputs(emailRegex,userDetails.email)){
                emailErrorMessage.innerHTML=`<p class="text-danger">Email must be as <b>name@example.com</b></p>`;
            }
        }
    }
    }
signUpButton.addEventListener('click',addNewUser);

function userIsExist(){
var dataInLocalStorage=JSON.parse(localStorage.getItem('users'));
for(var i=0;i<listOfUsers.length;i++){
    if( dataInLocalStorage[i].email==emailInputSignUp.value){
        return true;
    }
}
return false;
}
function validateAllInputs(regex,element){
    return regex.test(element);
}



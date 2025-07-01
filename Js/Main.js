var emailInputLogIn = document.querySelector("#formGroupExampleInput1");
var passwordInputLogIn = document.querySelector("#formGroupExampleInput2");
var LogInButton = document.querySelector('.login-button');
var logInLink = document.querySelector('.login-link');
var loginError = document.querySelector('.login-empty-message');
var signedUpUsers = [];

function logIn() {
    var validSignedUp=[];
    var isValidUser = false;
    loginError.innerHTML = "";
    if (emailInputLogIn.value == "" || passwordInputLogIn.value == "") {
        loginError.innerHTML = `<p class="text-danger">All inputs is required</p>`;
        return;
    }
    var dataFromStorge =[];
    if(localStorage.getItem('users')!=null) 
    {
        dataFromStorge=JSON.parse(localStorage.getItem('users'));
    } 
    else{
        dataFromStorge=[];
    }
    for (var i = 0; i < dataFromStorge.length; i++) {
        if (dataFromStorge[i].email == emailInputLogIn.value &&
            dataFromStorge[i].password == passwordInputLogIn.value) {
                var validDetails = {
                    email: emailInputLogIn.value,
                    passwordInputLogIn: passwordInputLogIn.value,
                };
                validSignedUp.push(validDetails);
                localStorage.setItem('validUsers', JSON.stringify(validSignedUp));
                isValidUser = true;
            break;
        }
    }
    
    if (isValidUser) {
        window.location.href = './Home.html';
    }
    else {
        loginError.innerHTML = `<p class="text-danger">incorrect Email or Password</p>`;
    }
    
}
LogInButton.addEventListener('click', logIn);
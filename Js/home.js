var validSignedUpEmail=JSON.parse(localStorage.getItem('validUsers'));
var allOldUsers=JSON.parse(localStorage.getItem('users'));
var currentName="";
for(var i=0; i<validSignedUpEmail.length;i++){
    for(var j=0; j<allOldUsers.length; j++){
        if(validSignedUpEmail[i].email==allOldUsers[j].email){
            currentName=allOldUsers[j].name;
            break;
        }
    }
}
var weclcomeMesage=document.querySelector('.welcome-container');
weclcomeMesage.innerHTML=`<p class="text-center">Welcome ${currentName}</p>`;
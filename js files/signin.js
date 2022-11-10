let email=document.querySelector("#email");
let password=document.querySelector("#pass");
let btn=document.querySelector("#submit");
let user=JSON.parse(localStorage.getItem("user"));


btn.addEventListener("click",function(){
    let found=false;
    for(let i=0;i<user.length;i++){
    if(email.value==user[i].email && password.value==user[i].pass)
    {alert ("Succedssfully logged in");
    window.open("../html/index.html","_self");
    found=true;
    break;
    }
}
    if(found==false){
        alert("Wrong Credentials");
    }

})
let logo=document.querySelector("#logo");
logo.addEventListener("click",function(){
    window.open("../html/index.html","_self");
})
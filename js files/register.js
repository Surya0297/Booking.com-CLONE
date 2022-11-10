let user=JSON.parse(localStorage.getItem("user"))||[];
let userobj={};

let btn=document.querySelector("#submit");

btn.addEventListener("click",function(){ 
let email=document.querySelector("#email").value;
let pass=document.querySelector("#pass").value;

userobj={email,pass};
user.push(userobj);
localStorage.setItem("user",JSON.stringify(user));
alert("created an account");
window.open("../html/signin.html","_self")

})
let logo=document.querySelector("#logo");
logo.addEventListener("click",function(){
    window.open("../html/index.html","_self");
})
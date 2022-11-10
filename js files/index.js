let registerBtn=document.querySelector("#registerbtn");
registerBtn.addEventListener("click",function(){
    window.open("../html/signin.html","_self")
})
let signinBtn=document.querySelector("#signinbtn") ;
signinBtn.addEventListener("click",function(){
    window.open("../html/signin.html","_self")
})

let logo=document.querySelector("#logo");
logo.addEventListener("click",function(){
    window.open("../html/index.html","_self");
})

let searchbtn=document.querySelector(".searchbtn");
searchbtn.addEventListener("click",getData);
    async function getData(){
        try{
        let res=await fetch("../json/hotel.json")
        let out=await res.json();
               
            let q=document.querySelector("#searchinput").value;
            console.log(q);
            let newData=out.filter(function(elem){
                return elem.city.includes(q.toLowerCase());
            })
            console.log(newData);
       
            localStorage.setItem("hotel",JSON.stringify(newData));
        
        window.open("../html/search.html","_self");
        
        }
    catch(err){
        alert(err);
            }
    }
    
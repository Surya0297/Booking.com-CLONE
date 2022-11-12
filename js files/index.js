

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
let curruser=localStorage.getItem("curruser");

if(curruser){
    
    document.getElementById("signinbtn").innerText=curruser;
    let btn=document.getElementById("signinbtn");
    btn.addEventListener("click",function(){
        alert("Lgging Out")
        localStorage.removeItem("curruser");
        
        window.open("../html/index.html","_self")
       
    })
    let book=document.getElementById("registerbtn");
    book.innerText="My Bookings";
    book.addEventListener("click",function(){
    window.open("../html/myBookings.html","_self");

    })


}
let searchbtn=document.querySelector(".searchbtn");

searchbtn.addEventListener("click",checkuser);

function checkuser(){
    if(curruser){
        getData();
    }else{
        alert("Please signin");
    }
}
   
  
    async function getData(){
        

        try{
        let res=await fetch("../json/hotel.json")
        let out=await res.json();
               
            let q=document.querySelector("#searchinput").value;
            if(q==""){
                alert("Please enter Destination")
            }
          else{
            let newData=out.filter(function(elem){
                return elem.city.includes(q.toLowerCase());
            })
            let d1=document.getElementById("d1").value;
        let d2=document.getElementById("d2").value;
        if(d1==""||d2==""){
            alert("Enter dates")
        }
        else{
        let dateOne=new Date(d1);
        let dateTwo=new Date(d2);
        let time=Math.abs(dateTwo-dateOne);
        let days=Math.ceil(time/(1000*60*60*24));
        if(days==0){days=1}
        console.log(days);
        
        let room=document.getElementById("num").value;
        if(room<=0||room==""){room=1};
           
       
            localStorage.setItem("hotel",JSON.stringify(newData));
            localStorage.setItem("days",days);
            localStorage.setItem("rooms",room);
            localStorage.setItem("des",document.getElementById("searchinput").value);
            localStorage.setItem("d1",d1);
            localStorage.setItem("d2",d2);
            
        window.open("../html/search.html","_self");
          }
        }
    }
    catch(err){
        alert(err);
            }
    }

let hotelarr=JSON.parse(localStorage.getItem("hotel"))||[];
let arr=[...hotelarr];
let selectedproperty=[];

document.getElementById("rooms").value=localStorage.getItem("rooms");
document.getElementById("d1").value=localStorage.getItem("d1");
document.getElementById("d2").value=localStorage.getItem("d2");
document.getElementById("des").value=localStorage.getItem("des");
let days=localStorage.getItem("days");
let rooms=localStorage.getItem("rooms");
let user=JSON.parse(localStorage.getItem("user"));

if(user){
    document.getElementById("signinbtn").innerText=user[0].name;
    document.getElementById("registerbtn").innerText="My Bookings";
}

function display(hotelarr){
    let cont=document.querySelector("#searchedProperty");
   
    var h2=document.querySelector("h2");
    h2.innerText="Total properties found:"+hotelarr.length;
hotelarr.forEach(element => {
    
    let divrate=document.createElement("div");
    divrate.style.display="flex";
    divrate.style.flexDirection="row";
    divrate.style.marginLeft="0px";
    divrate.style.padding="0px";
    let div=document.createElement("div");
    let divinner=document.createElement("div");

    let img=document.createElement("img");
    img.setAttribute("src",element.img);

    let name=document.createElement("h3");
    name.innerText=element.name;

    let location=document.createElement("p");
    location.innerText=element.location;

    let rating=document.createElement("p");
    rating.innerText="Rating: "+element.star+" Star";

    let price=document.createElement("h3");
    price.innerText="Rs. "+element.price+"/night";

    let subtotal=document.createElement("h3");
    subtotal.innerText="Rs. "+(element.price*days*rooms)+" for "+days+" nights";

    let btn=document.createElement("button");
    btn.innerText="Book Now";
    btn.addEventListener("click",function(){
        selectedproperty.push(element);
        localStorage.setItem("selectedproperty",JSON.stringify(selectedproperty));
        
        window.open("../html/selectedproperty.html","_self");
    })
  
    
    
    divinner.append(name,location);

    for(let i=0;i<element.star;i++){
        let i1=document.createElement("i");
        i1.setAttribute("class","fa-sharp fa-solid fa-star")
        divrate.append(i1);
    }
    
    divinner.append(divrate,rating,price,subtotal,btn);
    div.append(img,divinner);
    
    cont.append(div);

});
}
display(hotelarr);

let searchbtn=document.querySelector("#btn");
searchbtn.addEventListener("click",getData);
    async function getData(){

    localStorage.setItem("des",document.getElementById("des").value);
    localStorage.setItem("d1",document.getElementById("d1").value);
    localStorage.setItem("d2",document.getElementById("d2").value);
    localStorage.setItem("rooms",document.getElementById("rooms").value);
    let d1=document.getElementById("d1").value;
    let d2=document.getElementById("d2").value;
    let dateOne=new Date(d1);
    let dateTwo=new Date(d2);
    let time=Math.abs(dateTwo-dateOne);
    let days=Math.ceil(time/(1000*60*60*24));
    if(days==0){days=1}
    localStorage.setItem("days",days);

        try{
        let res=await fetch("../json/hotel.json")
        let out=await res.json();
               
            let q=document.querySelector("#des").value;
            
            let newData=out.filter(function(elem){
                return elem.city.includes(q.toLowerCase());
            })
            console.log(newData);
       
            localStorage.setItem("hotel",JSON.stringify(newData));
        document.querySelector("#searchedProperty").innerHTML="";
        window.open("../html/search.html","_self");
        
        }
    catch(err){
        alert(err);
            }
    }
    

    let applybtn=document.querySelector("#apply");
    applybtn.addEventListener("click",function(){

        let selected=document.querySelector("select").value;
        if(selected=="HTL"){
            hotelarr.sort((a,b)=>b.price-a.price)
            
      
        }if(selected=="LTH"){
            hotelarr.sort((a,b)=>a.price-b.price)
        
        }
        
       
        document.querySelector("#searchedProperty").innerText="";
        let h2=document.createElement("h2");
        document.querySelector("#searchedProperty").append(h2);
       
       
        let selectedstar=document.querySelector("#filterstar").value;
        if(selectedstar==""){
            display(hotelarr);
        }else{
           let newData=hotelarr.filter(function(elem){
                return elem.star==selectedstar;
            });
           
        document.querySelector("#searchedProperty").innerText="";
        let h2=document.createElement("h2");
        document.querySelector("#searchedProperty").append(h2);
        display(newData,h2);
        }




    })

    let resetbtn=document.querySelector("#reset");
    resetbtn.addEventListener("click",function(){
        document.querySelector("#searchedProperty").innerText="";
        let h2=document.createElement("h2");
        document.querySelector("#searchedProperty").append(h2);
        display(arr);
    })
    let logo=document.querySelector("#logo");
    logo.addEventListener("click",function(){
        window.open("../html/index.html","_self");
    })
    
        
     
     
        
        
    
     
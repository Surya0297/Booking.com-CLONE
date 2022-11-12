let hotelarr=JSON.parse(localStorage.getItem("booking"))||[];

function display(hotelarr){
    let cont=document.querySelector("#bookedProperty");
    cont.innerHTML=null;

    if(hotelarr.length==0){
            cont.innerText="No Bookings!!"
            cont.style.height="500px";
            cont.style.fontSize="40px";
            cont.style.textAlign="center";
            
            
       }
   
hotelarr.forEach(function(element,i) {
    
    
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
    subtotal.innerText="Rs. "+element.price*element.days+" for "+element.days+" nights";

    let indate=document.createElement("p");
    indate.innerText="Check in: "+element.checkin

    let outdate=document.createElement("p");
    outdate.innerText="Check out: "+element.checkout


    let p=document.createElement("p");
    p.innerText="Located in Candolim, a 5-minute walk from Candolim Beach, Sonikas Leisure provides accommodations with a restaurant, free private parking, an outdoor swimming pool and a bar. Each room at the 3-star hotel has pool views, and guests can enjoy access to a garden and to a terrace. The property has a 24-hour front desk, room service and organizing tours for guests.Guest rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, bathrobes and free toiletries. At Sonikas Leisure each room includes bed linen and towels.A à la carte breakfast is available daily at the accommodation.Calangute Beach is 2.3 km from Sonikas Leisure, while Sinquerium Beach is 2.3 km away. The nearest airport is Dabolim, 38.6 km from the hotel, and the property offers a paid airport shuttle service."


    let btn=document.createElement("button");
    btn.innerText="Cancel Booking";
    btn.addEventListener("click",function(){
        let x=prompt("Do you wish to Cancel Booking Please Enter OTP:");
        {
            if(x==123){
                deleteBooking(element,i);
            }else{
                alert("Wrong OTP Try Again")
                window.open("../html/index.html","_self")
            }
        }
        
        
        
    })
   
    

    divinner.append(name,location);

    for(let i=0;i<element.star;i++){
        let i1=document.createElement("i");
        i1.setAttribute("class","fa-sharp fa-solid fa-star")
        divrate.append(i1);
    }
    
    divinner.append(divrate,rating,indate,outdate,price,subtotal,p,btn);
    
    div.append(img,divinner);
    
    

    cont.append(div);
})

}

display(hotelarr);


let logo=document.querySelector("#logo");
logo.addEventListener("click",function(){
    window.open("../html/index.html","_self");
})

function deleteBooking(element,i){
    hotelarr.splice(i,1);
    localStorage.setItem("booking",JSON.stringify(hotelarr));
    display(hotelarr);

}

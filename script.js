let div=document.createElement("div");
div.setAttribute("class", "main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "Open Brewery API");
input.style.width="520px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click", foo);

let breweryname=document.createElement("div");
breweryname.setAttribute("id","active");
let brewerytype=document.createElement("div");
brewerytype.setAttribute("id","active");
let breweryaddress=document.createElement("div");
breweryaddress.setAttribute("id","active");
let phnumber=document.createElement("div");
phnumber.setAttribute("id","active");
let brewerywebsite=document.createElement("div");
brewerywebsite.setAttribute("id","active");


formgroup.append(input,button,breweryname,brewerytype,breweryaddress,phnumber,brewerywebsite);
div.append(formgroup);
document.body.append(div);

async function foo(){
    try {
    let countryname=document.getElementById("main").value;
    console.log(countryname);
    let res=await fetch(`https://api.openbrewerydb.org/breweries${countryname}`);
    let res1= await res.json();
    console.log(res1);
    
    var index=res1.length-1;
    
    console.log(res1[index].name);
    console.log(res1[index].brewery_type);
    console.log(res1[index].address_2);
    console.log(res1[index].website_url);
    console.log(res1[index].phone);

    breweryname.innerHTML=`Breweryname:${res1[index].name}`;
    brewerytype.innerHTML=`Brewerytype:${res1[index].brewery_type}`;
    breweryaddress.innerHTML=`Breweryaddress:${res1[index].address_2}`;
    phnumber.innerHTML=`BreweryPhonenumber:${res1[index].website_url}`;
    brewerywebsite.innerHTML=`Brewerywebsites:${res1[index].phone}`;

} catch (error) {
      console.log(error);
    }
    
    }
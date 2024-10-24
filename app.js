// let button1=document.querySelector(".btn1")
let full=document.querySelector(".full")
// let header=document.querySelector(".header")
let temperature=document.querySelector(".temperature h1");
let temp2=document.querySelector(".temperature p")
let wind=document.querySelector("#www");

// button1.addEventListener('click',()=>{
//     full.style.display="block";
//     header.style.display="none";

// })

let input1=document.querySelector(".input-box1")
let button2=document.querySelector(".btn2");

const fetchData=async (query)=>{
    let url="9734ba1eb172bf818478029e9ae2e8de";
    let fetchLocation=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${url}`);
    let response=await fetchLocation.json();
    console.log(response);
    temperature.innerHTML=response.main.temp;
    temp2.innerHTML=response.weather[0].description;
    wind.innerHTML=`${response.wind.speed}km/hr`;
    const iconCode = response.weather[0].icon; // Get the icon code
    const imgUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the image URL
    document.querySelector(".img1").src = imgUrl;
    const humidity = response.main.humidity; // Get humidity value
    document.querySelector("#hhh").innerHTML = `${humidity}%`;

        


}
button2.addEventListener('click',()=>{
    let inpValue=input1.value;
    fetchData(inpValue)

})

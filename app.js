let imgdata=document.getElementById('img');
let humidity=document.getElementById('humidity')
let windspeed=document.getElementById('windspeed');
let temp=document.getElementById('temp');
let mintemp=document.getElementById('mintemp');
let maxtemp=document.getElementById('maxtemp');
let btn=document.getElementById('button');
let search=document.getElementById('search');
const API_KEY=`128d1efa55bc3b10ce54d8d182f8f2ce`
let cloud=document.getElementById('cloud');

async function getData(city){
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response=await fetch(url)
    let data=await response.json();
    return showData(data,city)
}

const showData=(data,city)=>{
    console.log(data)
    temp.innerHTML="temperature:-"+" " +data.main.temp
    humidity.innerHTML="Humidity:-"+data.main.humidity
    windspeed.innerHTML="windspeed:-"+data.wind.speed
    imgdata.innerHTML=`${city}`
    mintemp.innerHTML="mintemp:-"+data.main.temp_min
    maxtemp.innerHTML="mintemp:-"+data.main.temp_max
    cloud.innerHTML=data.weather[0].main
}



















btn.addEventListener('click',(e)=>{
    getData(search.value)
    e.preventDefault();

})




















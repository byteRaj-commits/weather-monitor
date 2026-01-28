

document.addEventListener("DOMContentLoaded", function(){

    const apiKey = "459b7d1e8e26f19ed88e2b15edb91c91";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchButton = document.querySelector(".search button");
    const searchInput = document.querySelector("#search-box");
    const cityName = document.querySelector(".city");
    const temperature = document.querySelector(".temp");
    const humidityDetail = document.querySelector(".humidity");
    const winDSpeed = document.querySelector(".wind");



    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
       
        const data = await response.json();
        displayCityData(data);
    }

    function displayCityData(data){
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        humidityDetail.innerHTML = data.main.humidity + " %";
        winDSpeed.innerHTML = data.wind.speed + " km/h";
        }

    searchButton.addEventListener("click", ()=>{
        checkWeather(searchInput.value);
    })

})
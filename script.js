

document.addEventListener("DOMContentLoaded", function(){

    const apiKey = "";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchButton = document.querySelector(".search button");
    const searchInput = document.querySelector("#search-box");
    const cityName = document.querySelector(".city");
    const temperature = document.querySelector(".temp");
    const humidityDetail = document.querySelector(".humidity");
    const winDSpeed = document.querySelector(".wind");
    const weatherCard = document.querySelector(".weather")
    const weatherIcon = document.querySelector(".weather-icon");
    const errorMsg = document.querySelector(".error");



    async function checkWeather(city){
         try{

            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (!response.ok) {   
                throw new Error("City not found");
            }
            const data = await response.json();
            displayCityData(data);

            weatherCard.classList.remove("hidden");
            errorMsg.style.display = "none";
        }
        catch(error){
            console.error(error);
            errorMsg.style.display = "block";
            weatherCard.classList.add("hidden");
            errorMsg.classList.remove("hidden");
        }
       
    }

    function displayCityData(data){
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        humidityDetail.innerHTML = data.main.humidity + " %";
        winDSpeed.innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Assets/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Assets/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Assets/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Assets/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Assets/mist.png";
        }
    }

    searchButton.addEventListener("click", ()=>{
        checkWeather(searchInput.value);
    })

})

import { getWeatherData, getForecastData } from "./config.js";
// ------- data ---------

 

//---------- elements ---------

const themeToggle = document.getElementById("theme-toggle");
const favList = document.getElementById("fav-list");
const statusLine = document.getElementById("status");
const current = document.getElementById("today");
const city = document.getElementById("city-input");
const searchBtn = document.getElementById("search-button");

const forecast = document.getElementById("forecast");
const cityInput = document.getElementById("city-input");
const favInput = document.getElementById("fav-input");
const searchForm = document.getElementById("search-form");
const searchButton = document.getElementById("search-button");
const tempList = document.getElementById("temperature-list");
const tempNight = document.getElementById("temperature-night");
const forecastStatus = document.getElementById("forescast-status");


// ------- functions ---------

const showWeatherDay = (list) => {
    tempList.textContent = "";
 

 list.forEach((weather) => {
    const card = document.createElement("article");
 card.classList.add("card");

    
 const day = document.createElement("li");
 day.textContent = "Day";

 const name = document.createElement("li");
 name.textContent = weather.city.name;

 const country = document.createElement("li");
 
 country.textContent = weather.city.country;

 const currentDate = document.createElement("li");

 currentDate.textContent = weather.currentDate;

 const currentTemp = document.createElement("li");

 currentTemp.textContent = weather.currentTemp;

 const condition = document.createElement("li");

 condition.textContent = weather.condition;

 const high = document.createElement("li");

 high.textContent = weather.high;

  const low = document.createElement("li");

  low.textContent = weather.low;

   const feelsLike = document.createElement("li");

   feelsLike.textContent = weather.feelsLike

    const humidity = document.createElement("li");

    humidity.textContent = weather.humidity

     const wind = document.createElement("li");

     wind.textContent = weather.wind;

     appendChild(day);
     appendChild(name);
     appendChild(country);
     appendChild(currentDate);
     appendChild(currentTemp);
     appendChild(condition);
     appendChild(high);
     appendChild(low);
     appendChild(feelsLike);
     appendChild(humidity);
     appendChild(wind);

    tempList.appendChild(card);
 });
}

const showWeatherNight = (stats) => {
    tempList.textContent = "";
 

 stats.forEach((weather) => {
    const card = document.createElement("article");
 card.classList.add("card");

    
 const night = document.createElement("li");
 day.textContent = "Night";

 const name = document.createElement("li");
 name.textContent = weather.name;

 const country = document.createElement("li");
 
 country.textContent = weather.country;

 const currentDate = document.createElement("li");

 currentDate.textContent = weather.currentDate;

 const currentTemp = document.createElement("li");

 currentTemp.textContent = weather.currentTemp;

 const condition = document.createElement("li");

 condition.textContent = weather.condition;

 const high = document.createElement("li");

 high.textContent = weather.high;

  const low = document.createElement("li");

  low.textContent = weather.low;

   const feelsLike = document.createElement("li");

   feelsLike.textContent = weather.feelsLike

    const humidity = document.createElement("li");

    humidity.textContent = weather.humidity

     const wind = document.createElement("li");

     wind.textContent = weather.wind;

     appendChild(night);
     appendChild(name);
     appendChild(country);
     appendChild(currentDate);
     appendChild(currentTemp);
     appendChild(condition);
     appendChild(high);
     appendChild(low);
     appendChild(feelsLike);
     appendChild(humidity);
     appendChild(wind);

    tempList.appendChild(card);
 });
}


//---------- listeners ---------

favInput.addEventListener("keydown", function(event) {
    const favCity = favInput.value.trim();
    if (event.key === "Enter") {
        event.preventDefault();

        const newFav = document.createElement("li");

        newFav.textContent = favCity;

        favList.appendChild(newFav);

        favInput.value = "";
    }
});

searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        statusLine.textContent = "Getting weather data....";

        const cityWeather = cityInput.value.trim();
        console.log(cityWeather);

        const weather = await getWeatherData(cityWeather);
        console.log(weather);

        showWeatherDay(weather);

        statusLine.textContent = `here is the current weather info ${weather.name}`;

        showWeatherNight(weather);

        statusLine.textContent = `here is the weather for later ${weather.city.name}`;
})

    
// if(localStorage.getItem("SkyCast-theme") === "light"){
//   document.body.classList.add("light");
// }
// themeToggle.addEventListener("click", function () {
//     document.body.classList.toggle("light");

//     if(document.body.classList.contains("light")) {
//       localStorage.setItem("skycast-theme","light");
//     }else {
//       localStorage.setItem("SkyCast-theme", "dark");
//     }
// });



// --------- run on load -------

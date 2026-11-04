//import { getWeatherData, getForecastData } from "./config.js";
// ------- data ---------

 
async function getWeatherJson(city) {
    const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c000c84816aec73364c225d5e4077806`);
    const data = await response.json();
    console.log(data);
    return data;
  

}

getWeatherJson("Stockton");


async function getForecastJson(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c000c84816aec73364c225d5e4077806`);
    const info = await res.json();
    console.log(info);
    return info;
}

getForecastJson("Stockton");
//---------- elements ---------

const lightBtn = document.getElementById("light-button");
const darkBtn = document.getElementById("dark-button");
const favList = document.getElementById("fav-list");
const statusLine = document.getElementById("status");
const current = document.getElementById("today");
const forecast = document.getElementById("forecast");
const city = document.getElementById("city-input");
const favInput = document.getElementById("fav-input");



// ------- functions ---------



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

    




// --------- run on load -------

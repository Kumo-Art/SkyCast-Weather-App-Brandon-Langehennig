//import { getWeatherData } from "./config";
// ------- data ---------






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

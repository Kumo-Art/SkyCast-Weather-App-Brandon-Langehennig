const baseUrlWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
const baseUrlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "c000c84816aec73364c225d5e4077806";



async function getWeatherData(route = "") {
    const response = await fetch(`${baseUrlWeather}${route}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

 
async function getForecastData(route = "") {
    const res = await fetch(`${baseUrlForecast}${route}&appid=${apiKey}`);
    const info = await res.json();
    return info;
}

export { getWeatherData, getForecastData};



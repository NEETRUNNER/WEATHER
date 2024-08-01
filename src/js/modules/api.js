const apiKey = `403a46430b72cd84dcf1d87acffaeeed`;

// Функция для получения информации о городе
async function getCity(name) {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${apiKey}`;
    const response = await fetch(geoUrl);
    return await response.json();
}

// Функция для получения информации о погоде
async function getWeather(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(weatherUrl);
    return await response.json();
}

export { getCity, getWeather };
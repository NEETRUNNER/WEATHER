import { getCity, getWeather } from './api';
import updateWeatherInfo from './weather';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const blockWeather = document.querySelector('.app-block__weather');

async function submitHandler(event) {
    event.preventDefault();

    const cityInfo = await getCity(input.value.trim());
    if (cityInfo.length === 0) {
        console.log('Город не найден');
        input.value = '';
        return;
    }

    const weatherInfo = await getWeather(cityInfo[0]['lat'], cityInfo[0]['lon']);
    const tempCity = weatherInfo.main.temp;
    const nameCity = weatherInfo.name;
    const weatherCity = weatherInfo.weather[0].main;

    updateWeatherInfo(tempCity, nameCity, weatherCity);
    inputValid(input.value.trim());
    input.value = '';
}

// Функция проверяет правильность введёного значения
function inputValid(city) {
    if (input.value.trim() === city) {
        blockWeather.style.display = 'block';
    } else if (!input.value) {
        blockWeather.style.display = 'none';
    }
}

export { submitHandler, inputValid };
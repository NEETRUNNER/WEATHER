import { submitHandler, inputValid } from './modules/form';
import { getCity, getWeather } from './modules/api';
import updateWeatherInfo from './modules/weather';

// Переменные
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const blockWeather = document.querySelector('.app-block__weather');
const wrapperApp = document.querySelector('.app-wrapper__img');

// Обработчик события отправки формы
form.onsubmit = submitHandler;

// Экспортируем переменные для использования в других модулях, если это необходимо
export { form, input, blockWeather, wrapperApp, getCity, getWeather, updateWeatherInfo, inputValid };
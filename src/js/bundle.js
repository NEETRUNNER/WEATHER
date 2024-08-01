/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/api.js":
/*!*******************************!*\
  !*** ./src/js/modules/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCity: () => (/* binding */ getCity),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
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



/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputValid: () => (/* binding */ inputValid),
/* harmony export */   submitHandler: () => (/* binding */ submitHandler)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/js/modules/api.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/js/modules/weather.js");



const form = document.querySelector('#form');
const input = document.querySelector('#input');
const blockWeather = document.querySelector('.app-block__weather');

async function submitHandler(event) {
    event.preventDefault();

    const cityInfo = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getCity)(input.value.trim());
    if (cityInfo.length === 0) {
        console.log('Город не найден');
        input.value = '';
        return;
    }

    const weatherInfo = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getWeather)(cityInfo[0]['lat'], cityInfo[0]['lon']);
    const tempCity = weatherInfo.main.temp;
    const nameCity = weatherInfo.name;
    const weatherCity = weatherInfo.weather[0].main;

    (0,_weather__WEBPACK_IMPORTED_MODULE_1__["default"])(tempCity, nameCity, weatherCity);
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



/***/ }),

/***/ "./src/js/modules/weather.js":
/*!***********************************!*\
  !*** ./src/js/modules/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateWeatherInfo(tempCity, nameCity, weatherCity) {
    const temperature = document.querySelector('#temperature');
    const city = document.querySelector('#city');
    const wrapperApp = document.querySelector('.app-wrapper__img');

    const weathersImg = {
        storm: 'img/storm.png',
        cloudy: 'img/cloudy.png',
        rain: 'img/rain.png',
        sunny: 'img/sunny.png'
    };

    const roundedTemp = Math.round(tempCity);
    temperature.textContent = `${roundedTemp}℃`;
    temperature.style.cssText = 'font-size: 80px; font-weight: 400; font-family: inherit; color: #fff';

    city.textContent = nameCity;

    switch (weatherCity) {
        case 'Clouds':
        case 'Clear':
            wrapperApp.src = weathersImg.cloudy;
            console.log('Погода ясная');
            break;
        case 'Rain':
            wrapperApp.src = weathersImg.rain;
            console.log('Идёт дождь');
            break;
        default:
            console.log('Погода не определена');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateWeatherInfo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockWeather: () => (/* binding */ blockWeather),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   getCity: () => (/* reexport safe */ _modules_api__WEBPACK_IMPORTED_MODULE_1__.getCity),
/* harmony export */   getWeather: () => (/* reexport safe */ _modules_api__WEBPACK_IMPORTED_MODULE_1__.getWeather),
/* harmony export */   input: () => (/* binding */ input),
/* harmony export */   inputValid: () => (/* reexport safe */ _modules_form__WEBPACK_IMPORTED_MODULE_0__.inputValid),
/* harmony export */   updateWeatherInfo: () => (/* reexport safe */ _modules_weather__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   wrapperApp: () => (/* binding */ wrapperApp)
/* harmony export */ });
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api */ "./src/js/modules/api.js");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/weather */ "./src/js/modules/weather.js");




// Переменные
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const blockWeather = document.querySelector('.app-block__weather');
const wrapperApp = document.querySelector('.app-wrapper__img');

// Обработчик события отправки формы
form.onsubmit = _modules_form__WEBPACK_IMPORTED_MODULE_0__.submitHandler;

// Экспортируем переменные для использования в других модулях, если это необходимо

/******/ })()
;
//# sourceMappingURL=bundle.js.map
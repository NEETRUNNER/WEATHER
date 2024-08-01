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

export default updateWeatherInfo;

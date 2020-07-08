import * as data from './data.js';

const getBtn = document.getElementById('submit');
const locationName = document.getElementById('location');
const forecastDiv = document.getElementById('forecast');
const currentWeatherDiv = document.getElementById('current');
const upcomingDiv = document.getElementById('upcoming');

const symbols = {

    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
    'Degrees': '&#176;'
}

getBtn.addEventListener('click', async function (e) {

    let locationCode = '';

    try {

        locationCode = await data.getLocationCode(locationName.value);
    }
    catch (error) {

        locationName.value = 'ERROR';
        return;
    }

    const currentWeatherData = await data.getCurrentWeather(locationCode);
    const threeDaysData = await data.getThreeDaysForecast(locationCode);

    currentWeatherDiv.innerHTML = '';

    const currentDiv = document.createElement('div');
    currentDiv.classList.add('forecasts');

    const symbolSpan = document.createElement('span');
    symbolSpan.classList.add('condition');
    symbolSpan.classList.add('symbol');

    symbolSpan.innerHTML = symbols[currentWeatherData.forecast.condition];
    currentDiv.appendChild(symbolSpan);

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition');

    const firstSpan = document.createElement('span');
    firstSpan.classList.add('forecast-data');
    const secondSpan = document.createElement('span');
    secondSpan.classList.add('forecast-data');
    const thirdSpan = document.createElement('span');
    thirdSpan.classList.add('forecast-data');

    firstSpan.textContent = currentWeatherData.name;
    secondSpan.innerHTML = `${currentWeatherData.forecast.low}${symbols.Degrees}/${currentWeatherData.forecast.high}${symbols.Degrees}`;
    thirdSpan.textContent = currentWeatherData.forecast.condition;

    conditionSpan.appendChild(firstSpan);
    conditionSpan.appendChild(secondSpan);
    conditionSpan.appendChild(thirdSpan);

    currentDiv.appendChild(conditionSpan);

    currentWeatherDiv.appendChild(currentDiv);

    forecastDiv.style.display = 'block';

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('forecast-info');

    threeDaysData.forecast.forEach(day => {

        upcomingDiv.innerHTML = '';

        const upcomingSpan = document.createElement('span');
        upcomingSpan.classList.add('upcoming');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('symbol');
        const secondSpan = document.createElement('span');
        secondSpan.classList.add('forecast-data');
        const thirdSpan = document.createElement('span');
        thirdSpan.classList.add('forecast-data');

        symbolSpan.innerHTML = symbols[day.condition];
        secondSpan.innerHTML = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;
        thirdSpan.textContent = day.condition;

        upcomingSpan.appendChild(symbolSpan);
        upcomingSpan.appendChild(secondSpan);
        upcomingSpan.appendChild(thirdSpan);

        infoDiv.appendChild(upcomingSpan);

        upcomingDiv.appendChild(infoDiv);

    });

    locationName.value = '';
});
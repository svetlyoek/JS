export async function getLocationCode(locationName) {

    const allLocationsUrl = `https://judgetests.firebaseio.com/locations.json`;
    const data = await (await fetch(allLocationsUrl)).json();

    const currentCity = data.find(c => c.name.toLowerCase() == locationName.toLowerCase());

    const locationCode = currentCity.code;

    return locationCode;
}

export async function getCurrentWeather(locationCode) {

    const currentWeatherUrl = `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`;

    const data = await (await fetch(currentWeatherUrl)).json();

    return data;
}

export async function getThreeDaysForecast(locationCode) {

    const threeDayForecastUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`;

    const data = await (await fetch(threeDayForecastUrl)).json();

    return data;
}
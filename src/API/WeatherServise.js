export default async function getData() {

    function getGeoLocation() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }

    async function getDataHeandler(callback) {
        return await getGeoLocation()
            .then(cor => callback(cor.coords.latitude, cor.coords.longitude));

    }

    async function getWeatherData(lat, lon) {
        return await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current&appid=9a2c8551578e90176188a22bb6b351a0`)
            .then((response) => response.json())
            .then((data) => [data.list[0], data.list[8], data.list[16], data.list[24], data.list[34], data.list[40]])
            .catch((error) => console.log(error))
    }

    async function getCityName(lat, lon) {
        return await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&exclude=current&appid=9a2c8551578e90176188a22bb6b351a0`)
            .then((response) => response.json())
            .then((data) => data[0].name)
            .catch((error) => console.log(error))
    }

    const weatherData = await getDataHeandler(getWeatherData)
    const currentWeatherData = weatherData.shift()
    const atherDayWeatherData = weatherData.filter(day => day !== undefined)
    const cityName = await getDataHeandler(getCityName)
    return [cityName, currentWeatherData, atherDayWeatherData]

}










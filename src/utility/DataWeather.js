export default class DataWeather {
    constructor(data) {
        this.id = data.dt
        this.date = data.dt_txt.split(' ')[0];
        this.temp = Math.floor(data.main.temp - 272.15);
        this.tempFeels = Math.floor(data.main.feels_like - 272.15);
        this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.humidity = data.main.humidity + '%'
        this.wind = data.wind
        this.main = data.weather[0].main
        this.description = data.weather[0].description;
    }
}
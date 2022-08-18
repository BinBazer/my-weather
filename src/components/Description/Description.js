import React from "react";
import './Description.css';


const Description = ({ weather, cityName }) => {
    return (
        <div className="Description" >

            <div className="city-name">{cityName}</div>            
            <div className="date">{weather.date}</div>

            <div className="details">
                <div className="wind">
                    wind:
                    <div>speed: {weather.wind.speed}</div>
                    <div>deg: {weather.wind.deg}</div>
                    <div>gust: {weather.wind.gust}</div>
                </div>
                <div className="weather-details">
                    weather-details:
                    <div>weather: {weather.description}</div>
                    <div>temp feels like: {weather.tempFeels}</div>
                    <div>humidity: {weather.humidity}</div>
                </div>
            </div>

        </div>
    )
}

export default Description;
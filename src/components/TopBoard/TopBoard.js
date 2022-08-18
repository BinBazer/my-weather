import React from "react";
import DataWeather from "../../utility/DataWeather";
import Main from "../Main/Main"
import Description from "../Description/Description"
import './TopBoard.css';

const TopBoard = ({ dataTopBoard, cityName, isLoaded }) => {
    if (isLoaded) {
        const weather = new DataWeather(dataTopBoard)
        return (
            <div className="TopBoard">
                <Main temp={weather.temp} icon={weather.icon} />
                <Description weather={weather} cityName={cityName} />
            </div>
        )
    }
}

export default TopBoard;
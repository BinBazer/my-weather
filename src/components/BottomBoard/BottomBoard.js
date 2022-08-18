import React from "react";
import './BottomBoard.css';  
import Board from './../Board/Board';
import DataWeather from "../../utility/DataWeather";

const BottomBoard = ({ dataBoottomBoards,isLoaded} ) => {

    if (isLoaded) {
        let weather = [];
        dataBoottomBoards.map(data => weather.push(new DataWeather(data)))
        console.log(weather)
        return (
            <div className="BottomBoard" >
                {weather.map(data =>
                    <Board icon={data.icon} temp={data.temp} date={data.date} key={data.dt} />
                )}
            </div>
        )
    }
}

export default BottomBoard;
import React, { useState, useEffect } from 'react';
import './App.css';
import getData from './API/WeatherServise';
import TopBoard from './components/TopBoard/TopBoard';
import BottomBoard from './components//BottomBoard/BottomBoard';

function App() {
    const [isLoaded, setIsLoaded]= useState(false)
    const [cityName, setCityName] = useState('')
    const [dataTopBoard, setTopBoard] = useState([])
    const [dataBoottomBoards, setBoottomBoards] = useState([])


 

    useEffect(() => {
        async function featchData() {
            const [cityName, currentWeatherData, weatherData] = await getData()
            setCityName(cityName)
            setTopBoard(currentWeatherData)
            setBoottomBoards(weatherData)
            setIsLoaded(true)
        }
        featchData();
    },[]);




          
    return (
        <div className="App">
            <TopBoard dataTopBoard={dataTopBoard} cityName={cityName} isLoaded={isLoaded} />
            <BottomBoard dataBoottomBoards={dataBoottomBoards} isLoaded={isLoaded} />
        </div>
    )
}

export default App;

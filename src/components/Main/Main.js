import React from "react";
import './Main.css';

const Main = ({ temp,icon } ) => {
    console.log(icon)
    return (
        <div className="Main" >
            <img className="icon" src={icon} />
            <div className="temp">{temp}</div>
        </div>
    )
}

export default Main;
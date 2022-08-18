import React from "react";
import './Board.css';

const Board = (props) => {
        console.log(props)
    return (
        <div className="Board" >
            <div className="small-weather">
                <div><img className="small-icon" src={props.icon} /></div>
                <div className="small-temp">{props.temp}</div>
            </div>            
            <div className="small-date">{props.date} </div>
        </div>
        )
    
}

export default Board;
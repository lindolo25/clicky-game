import React from "react";
import "./score.css";

var Score = (props) => 
{
    return (
        <header className="row">
            <div className="col-12 col-sm-4 text-center">Clicky-Game</div>
            <div className="col-12 col-sm-4 text-center">{props.message}</div>
            <div className="col-12 col-sm-4 text-center">Example {props.currentScore} / {props.topScore}</div>
        </header>
    );
}

export default Score;
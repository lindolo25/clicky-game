import React from "react";

var Score = (props) => 
{
    return (
        <header className="row">
            <div className="col-12 col-sm-4 text-center">Example Title</div>
            <div className="col-12 col-sm-4 text-center">{props.message}</div>
            <div className="col-12 col-sm-4 text-center">Example {props.currentScore} / {props.topScore}</div>
        </header>
    );
}

export default Score;
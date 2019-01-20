import React from "react";
import "./card.css";

var Card = (props) => (
    <div className="col-6 col-sm-4 col-lg-3 text-center">
        <div className="card-box" onClick={ e => props.onClick(props.card.id)}>
            <img alt={props.card.alt} src={props.card.value} />
        </div>
    </div>
);

export default Card;
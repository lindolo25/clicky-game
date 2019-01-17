import React from "react";

var Card = (props) => (
    <div className="col-12 col-sm-6 col-md-3 text-center" onClick={ e => props.onClick(props.card.id)}>Example {props.card.value}, {props.card.selected.toString()}</div>
);

// class Card extends React.Component 
// {
//     onClickEvent = null;
    
//     constructor(props)
//     {
//         super(props);
//         this.state = props.card;
//         this.onClickEvent = props.onClick;
//         this.cardOnClickEvent = this.cardOnClickEvent.bind(this);
//     }

//     render() {
//         return <div className="col-12 col-sm-6 col-md-3 text-center" onClick={ e => this.props.onClick(this.props.card.id)}>Example {this.props.card.value}, {this.props.card.selected.toString()}</div>;
//     }  

// 	cardOnClickEvent(e)
// 	{        
//         e.selected = this.state.selected;
// 		this.setState({ selected: true });        
//         if(this.onClickEvent) this.onClickEvent(e);
// 	}
// }

export default Card;
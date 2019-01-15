import React from "react";

// var Card = (props) => (
//     <div className="col-3 text-center" onClick={props.onClick.bind(this)}>Example {props.children}</div>
// );

class Card extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = props.card;
    }

    render() {
        return <div className="col-12 col-sm-6 col-md-3 text-center" onClick={this.cardOnClickEvent.bind(this)}>Example {this.state.value}, {this.state.selected.toString()}</div>;
    }  

	cardOnClickEvent(e)
	{
		this.setState({ selected: true });
        this.props.onClick();
	}
}

export default Card;
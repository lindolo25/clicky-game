import React, { Component } from 'react';
import Score from './components/score';
import Card from './components/card';

class App extends Component 
{
	state = {
		currentScore: 0,
		topScore: 12,
		message: "",
		cards: [{
				id: 0,
				selected: false,
				value: "0"
			},
			{
				id: 1,
				selected: false,
				value: "1"
			},
			{
				id: 2,
				selected: false,
				value: "2"
			}]
	}

  	render()
	{
		return (
			<div className="container-fluid">
				<Score currentScore={this.state.currentScore} topScore={this.state.topScore} message={this.state.message} />
				<div className="row">
					<div className="col-12 col-sm-10 offset-sm-1">
						<div className="row">
							{this.state.cards.map((card, i) => {
								return (<Card key={card.id} card={card} onClick={this.cardOnClick.bind(this)} />);
							})}
						</div>						
					</div>
				</div>
			</div>
		);
	}

	cardOnClick(e) 
	{
		//alert("will be called ?");
		this.setState({ cards: this.shuffle(this.state.cards) });
	}

	shuffle(cards)
	{
		let shuffledCards = [];

		while(cards.length > 0)
		{
			const index = Math.floor((Math.random() * cards.length));
			shuffledCards.push(cards[index]);
			cards = cards.filter((e, i) => i !== index);
		}

		return shuffledCards;
	}
}

export default App;
import React, { Component } from 'react';
import Score from './components/score';
import Card from './components/card';
import Cards from './Cards.json';

class App extends Component 
{
	state = {
		currentScore: 0,
		topScore: 4,
		message: "",
		cards: this.shuffle(Cards)
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

	cardOnClick(id) 
	{
		let card = this.state.cards.find((item) => item.id === id);
		if(card.selected) return this.resetGame();
		
		card.selected = true;
		let currentScore = this.state.currentScore + 1;
		let topScore = this.state.topScore < currentScore ? currentScore : this.state.topScore;

		this.setState({ 
			cards: this.shuffle(this.state.cards), 
			currentScore: currentScore,
			topScore: topScore 
		});
	}

	resetGame()
	{
		console.log("resetGame");
		this.setState({
			currentScore: 0,
			message: "",
			cards: this.resetCards(this.state.cards)
		});
		
		console.log();
	}

	resetCards(cards)
	{
		console.log("resetCards");
		cards.forEach(card  => {
			card.selected = false;
		});
		return this.shuffle(cards);
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